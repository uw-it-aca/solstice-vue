/** @type {import('stylelint').Config} */
export default {
  extends: [
    "stylelint-config-standard-scss",
    "stylelint-config-recommended-vue/scss",
  ],
  customSyntax: "postcss-html",
  overrides: [
    {
      files: ["*.vue", "**/*.vue"],
      rules: {
        "scss/no-global-function-names": null,
        "no-invalid-position-at-import-rule": null,
        "scss/load-partial-extension": "never",
        "custom-property-empty-line-before": "never",
      },
    },
  ],
};
