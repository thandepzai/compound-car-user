import { defineConfig, globalIgnores } from "eslint/config";
import globals from "globals";
import tsParser from "@typescript-eslint/parser";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

// Lấy đường dẫn thư mục hiện tại
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Adapter để dùng được cấu hình kiểu cũ (extends cũ)
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

// Bỏ qua các file không cần lint
const ignores = globalIgnores(["**/.next", "**/dist", "**/node_modules/", "**/*.draft.tsx", "**/*.draft/*"]);

// Cấu hình chung cho parser
const languageOptions = {
    globals: {
        ...globals.browser,
        ...globals.node
    },
    parser: tsParser,
    ecmaVersion: 2020,
    sourceType: "module",
    parserOptions: {
        project: "./tsconfig.eslint.json",
        ecmaFeatures: {
            jsx: true,
            impliedStrict: true,
            globalReturn: false
        }
    }
};

// Quy tắc lint tùy chỉnh
const rules = {
    "prettier/prettier": "warn",
    "no-unused-vars": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-empty-interface": "off",
    "@typescript-eslint/no-empty-object-type": "off",
    "@typescript-eslint/no-unused-expressions": "off",
    "@typescript-eslint/no-unused-vars": [
        "warn",
        {
            argsIgnorePattern: "^_",
            varsIgnorePattern: "^_"
        }
    ],
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "react/display-name": "off",
    "react-hooks/rules-of-hooks": "off",
    "@next/next/no-img-element": "off"
};

// Export cấu hình cuối cùng
export default defineConfig([
    ignores,
    {
        extends: compat.extends(
            "next/core-web-vitals",
            "plugin:@typescript-eslint/recommended",
            "plugin:prettier/recommended"
        ),
        languageOptions,
        rules
    }
]);
