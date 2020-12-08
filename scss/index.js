'use strict';

module.exports = {
  extends: [
    'stylelint-config-recommended-scss',
    '../css'
  ],
  plugins: [
    'stylelint-scss'
  ],
  rules: {
    'at-rule-no-unknown': null, // This Stylelint standard rule MUST be disabled before scss/at-rule-no-unknown.
    'scss/at-each-key-value-single-line': null,
    'scss/at-else-closing-brace-newline-after': 'always',
    'scss/at-else-closing-brace-space-after': null,
    'scss/at-else-empty-line-before': 'never',
    'scss/at-else-if-parentheses-space-before': 'always',
    'scss/at-extend-no-missing-placeholder': true,
    'scss/at-function-named-arguments': 'never',
    'scss/at-function-parentheses-space-before': 'never',
    'scss/at-function-pattern': '^[a-z][a-z-]*$',
    'scss/at-if-closing-brace-newline-after': null,
    'scss/at-if-closing-brace-space-after': null,
    'scss/at-if-no-null': true,
    'scss/at-import-no-partial-leading-underscore': true,
    'scss/at-import-partial-extension': 'never',
    'scss/at-mixin-argumentless-call-parentheses': 'always',
    'scss/at-mixin-named-arguments': 'never',
    'scss/at-mixin-parentheses-space-before': 'never',
    'scss/at-mixin-pattern': '^[_a-z][a-z-]*$',
    'scss/at-rule-conditional-no-parentheses': true,
    'scss/at-rule-no-unknown': true,
    'scss/dollar-variable-colon-newline-after': 'always-multi-line',
    'scss/dollar-variable-colon-space-after': 'always',
    'scss/dollar-variable-colon-space-before': 'never',
    'scss/dollar-variable-default': null,
    'scss/dollar-variable-empty-line-after': null,
    'scss/dollar-variable-empty-line-before': null,
    'scss/dollar-variable-first-in-block': null,
    'scss/dollar-variable-no-missing-interpolation': true,
    'scss/dollar-variable-pattern': '^[a-z][a-z-\\d]*$',
    'scss/percent-placeholder-pattern': '^[a-z][a-z-\\d]*$',
    'scss/double-slash-comment-empty-line-before': null,
    'scss/double-slash-comment-inline': null,
    'scss/double-slash-comment-whitespace-inside': 'always',
    'scss/comment-no-empty': null,
    'scss/comment-no-loud': null,
    'scss/declaration-nested-properties': 'never',
    'scss/declaration-nested-properties-no-divided-groups': null,
    'scss/dimension-no-non-numeric-values': true,
    'scss/function-color-relative': null,
    'scss/function-quote-no-quoted-strings-inside': null,
    'scss/function-unquote-no-unquoted-strings-inside': null,
    'scss/map-keys-quotes': null,
    'scss/media-feature-value-dollar-variable': null,
    'scss/operator-no-newline-after': true,
    'scss/operator-no-newline-before': true,
    'scss/operator-no-unspaced': null,
    'scss/partial-no-import': null,
    'scss/selector-nest-combinators': null,
    'scss/selector-no-redundant-nesting-selector': true,
    'scss/selector-no-union-class-name': null,
    'scss/no-dollar-variables': null,
    'scss/no-duplicate-dollar-variables': [null, {ignoreInside: ['at-rule']}],
    'scss/no-duplicate-mixins': true,
    'scss/no-global-function-names': null
  }
};
