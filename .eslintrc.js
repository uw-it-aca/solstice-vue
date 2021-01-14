module.exports = {
    root: true,
    env: {
      node: true,
    },
    extends: [
      // use the recommended rule set for both plain javascript and vue
      'eslint:recommended',
      'plugin:vue/recommended',
      'prettier',
      'prettier/vue',
    ],
    parserOptions: {
      parser: 'babel-eslint',
    },
    rules: {
      // global rules
      'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      'no-unused-vars': 'off',
      'camelcase': [2, { properties: 'never' }],
      'max-len': [
        2,
        {
          code: 100,
          tabWidth: 2,
          ignoreUrls: true,
          ignoreStrings: true,
          ignoreTemplateLiterals: true,
        },
      ],
      // vue
      'vue/no-mutating-props': 'off',
      'vue/no-v-html': 'off',
      'vue/max-attributes-per-line': 'off',
    },
  };
  