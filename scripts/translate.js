#!/usr/bin/env node
/* eslint-disable @typescript-eslint/no-require-imports */
/**
 * Translation Script using DeepL API
 * Translates French base content to English and Korean
 *
 * Usage:
 *   node scripts/translate.js
 *
 * Environment:
 *   DEEPL_API_KEY - DeepL API authentication key
 */

const fs = require("fs");
const path = require("path");
const deepl = require("deepl-node");

// Configuration
const LOCALES_DIR = path.join(__dirname, "..", "public", "locales");
const SOURCE_LANG = "fr";
const TARGET_LANGS = ["en", "kr"];
const SOURCE_FILE = "common.json";

// Technical terms that should not be translated
const PRESERVE_TERMS = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "PostgreSQL",
  "Docker",
  "AWS",
  "Python",
  "MongoDB",
  "Prisma",
  "GraphQL",
  "RESTful",
  "API",
  "SAAS",
  "SaaS",
  "GitHub",
  "LinkedIn",
  "Upwork",
  "Stripe",
  "PayPal",
  "Vercel",
  "CI/CD",
  "DevOps",
  "LLM",
  "Machine Learning",
  "pont-facturx.com",
  "Tailwind CSS",
  "Lighthouse",
];

// Language code mapping (DeepL uses different codes)
const DEEPL_LANG_MAP = {
  en: "EN-US",
  kr: "KO",
};

/**
 * Initialize DeepL translator
 */
function initTranslator() {
  const apiKey = process.env.DEEPL_API_KEY;

  if (!apiKey) {
    console.error("❌ Error: DEEPL_API_KEY environment variable not set");
    console.log("\n💡 Get your API key from: https://www.deepl.com/pro-api");
    console.log('💡 Then set it: export DEEPL_API_KEY="your-key-here"\n');
    process.exit(1);
  }

  return new deepl.Translator(apiKey);
}

/**
 * Load JSON file
 */
function loadJSON(filePath) {
  try {
    const content = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(content);
  } catch (error) {
    console.error(`❌ Error loading ${filePath}:`, error.message);
    process.exit(1);
  }
}

/**
 * Save JSON file with proper formatting
 */
function saveJSON(filePath, data) {
  try {
    const dir = path.dirname(filePath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + "\n", "utf-8");
  } catch (error) {
    console.error(`❌ Error saving ${filePath}:`, error.message);
    throw error;
  }
}

/**
 * Protect technical terms before translation
 */
function protectTerms(text) {
  if (typeof text !== "string") return text;

  let protected = text;
  const placeholders = {};

  PRESERVE_TERMS.forEach((term, index) => {
    const placeholder = `__TERM_${index}__`;
    const regex = new RegExp(term, "gi");
    if (protected.match(regex)) {
      placeholders[placeholder] = term;
      protected = protected.replace(regex, placeholder);
    }
  });

  return { text: protected, placeholders };
}

/**
 * Restore technical terms after translation
 */
function restoreTerms(text, placeholders) {
  if (typeof text !== "string") return text;

  let restored = text;
  Object.entries(placeholders).forEach(([placeholder, term]) => {
    restored = restored.replace(new RegExp(placeholder, "g"), term);
  });

  return restored;
}

/**
 * Translate a single text string with retry logic
 */
async function translateText(translator, text, targetLang, retries = 3) {
  if (typeof text !== "string" || !text.trim()) {
    return text;
  }

  // Protect technical terms
  const { text: protectedText, placeholders } = protectTerms(text);

  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      const result = await translator.translateText(
        protectedText,
        SOURCE_LANG,
        DEEPL_LANG_MAP[targetLang] || targetLang.toUpperCase()
      );

      // Restore technical terms
      const translatedText = restoreTerms(result.text, placeholders);

      return translatedText;
    } catch (error) {
      if (attempt === retries) {
        console.error(`❌ Failed after ${retries} attempts:`, error.message);
        throw error;
      }

      console.warn(`⚠️  Attempt ${attempt} failed, retrying...`);
      await new Promise((resolve) => setTimeout(resolve, 1000 * attempt));
    }
  }
}

/**
 * Recursively translate nested object structure
 */
async function translateObject(translator, obj, targetLang, path = "") {
  const translated = {};

  for (const [key, value] of Object.entries(obj)) {
    const currentPath = path ? `${path}.${key}` : key;

    if (typeof value === "string") {
      process.stdout.write(`  Translating ${currentPath}... `);
      translated[key] = await translateText(translator, value, targetLang);
      process.stdout.write(`✓\n`);
    } else if (typeof value === "object" && value !== null) {
      translated[key] = await translateObject(translator, value, targetLang, currentPath);
    } else {
      translated[key] = value;
    }
  }

  return translated;
}

/**
 * Main translation process
 */
async function main() {
  console.log("🌍 DeepL Translation Script\n");
  console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n");

  // Initialize translator
  const translator = initTranslator();
  console.log("✓ DeepL translator initialized\n");

  // Load source translations
  const sourcePath = path.join(LOCALES_DIR, SOURCE_LANG, SOURCE_FILE);
  console.log(`📖 Loading source: ${sourcePath}`);
  const sourceData = loadJSON(sourcePath);
  console.log(`✓ Loaded ${Object.keys(sourceData).length} top-level keys\n`);

  // Translate to each target language
  for (const targetLang of TARGET_LANGS) {
    console.log(`\n🔄 Translating to ${targetLang.toUpperCase()}...`);
    console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n");

    try {
      const translated = await translateObject(translator, sourceData, targetLang);

      const targetPath = path.join(LOCALES_DIR, targetLang, SOURCE_FILE);
      saveJSON(targetPath, translated);

      console.log(`\n✅ Successfully saved: ${targetPath}\n`);
    } catch (error) {
      console.error(`\n❌ Failed to translate to ${targetLang}:`, error.message);
      process.exit(1);
    }
  }

  // Success summary
  console.log("\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
  console.log("✨ Translation Complete!\n");
  console.log(`📁 Generated translations:`);
  TARGET_LANGS.forEach((lang) => {
    console.log(`   → public/locales/${lang}/common.json`);
  });
  console.log("\n💡 Review translations for technical terms and context");
  console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n");
}

// Run the script
main().catch((error) => {
  console.error("\n❌ Translation failed:", error);
  process.exit(1);
});
