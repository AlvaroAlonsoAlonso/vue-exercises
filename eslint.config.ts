import pluginVue from 'eslint-plugin-vue'
import {
  defineConfigWithVueTs,
  vueTsConfigs,
} from '@vue/eslint-config-typescript'
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'
import tsParser from '@typescript-eslint/parser'

export default defineConfigWithVueTs(
  {
    name: 'app/files-to-lint',
    files: ['**/*.{ts,mts,tsx,vue}'],
    ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**'],

    plugins: {
      vue: pluginVue,
    },

    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parser: tsParser,
      globals: {
        browser: true,
        es6: true,
      },
    },

    rules: {
      'no-console': 'warn',
      'no-debugger': 'error',
      'no-undef': 'error',
      'vue/script-setup-uses-vars': 'error',
      'vue/multi-word-component-names': 'off',
      'vue/no-duplicate-attributes': 'error',
      'vue/no-parsing-error': 'error',
      'vue/no-reserved-keys': 'error',
      'vue/no-unused-components': 'warn',
      'vue/no-unused-vars': 'warn',
    },
  },

  pluginVue.configs['flat/recommended'],
  vueTsConfigs.recommended,
  skipFormatting,
)
