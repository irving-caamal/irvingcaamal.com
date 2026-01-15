const {
    defineConfig,
    globalIgnores,
} = require("eslint/config");

const tsParser = require("@typescript-eslint/parser");
const typescriptEslint = require("@typescript-eslint/eslint-plugin");
const astro = require("eslint-plugin-astro");
const js = require("@eslint/js");

const {
    FlatCompat,
} = require("@eslint/eslintrc");

const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

module.exports = defineConfig([
    ...compat.extends(
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:astro/recommended",
        "plugin:jsx-a11y/recommended",
    ),
    {
        files: ["**/*.astro"],
        languageOptions: {
            parser: require("astro-eslint-parser"),
            parserOptions: {
                parser: "@typescript-eslint/parser",
                extraFileExtensions: [".astro"],
            },
        },
    },
    {
        files: ["**/*.ts", "**/*.tsx"],

        languageOptions: {
            parser: tsParser,
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
            },
        },

        plugins: {
            "@typescript-eslint": typescriptEslint,
        },

        rules: {},
    }, globalIgnores(["dist/**/*", "node_modules/**/*"])
]);