'use strict';

module.exports = {
  extends: [
    'stylelint-config-standard'
  ],
  plugins: [
    'stylelint-order'
  ],
  rules: {
    'at-rule-empty-line-before': null,
    'at-rule-name-case': 'lower',
    'at-rule-name-newline-after': 'always-multi-line',
    'at-rule-name-space-after': 'always',
    'at-rule-no-unknown': true,
    'at-rule-no-vendor-prefix': true,
    'at-rule-semicolon-newline-after': 'always',
    'at-rule-semicolon-space-before': 'never',
    'block-closing-brace-empty-line-before': null,
    'block-closing-brace-newline-after': 'always',
    'block-closing-brace-newline-before': 'always',
    'block-closing-brace-space-after': null,
    'block-closing-brace-space-before': null,
    'block-no-empty': true,
    'block-opening-brace-newline-after': 'always',
    'block-opening-brace-newline-before': null,
    'block-opening-brace-space-after': null,
    'block-opening-brace-space-before': 'always',
    'color-no-invalid-hex': true,
    'color-function-notation': null,
    'color-hex-case': 'lower',
    'color-hex-length': 'short',
    'color-named': 'never',
    'color-no-hex': null,
    'comment-empty-line-before': 'always',
    'comment-no-empty': true,
    'comment-whitespace-inside': 'always',
    'custom-property-empty-line-before': 'never',
    'declaration-bang-space-after': 'never',
    'declaration-bang-space-before': 'always',
    'declaration-block-no-duplicate-properties': true,
    'declaration-block-no-redundant-longhand-properties': null,
    'declaration-block-no-shorthand-property-overrides': null,
    'declaration-block-semicolon-newline-after': 'always',
    'declaration-block-semicolon-newline-before': 'never-multi-line',
    'declaration-block-semicolon-space-after': 'always-single-line',
    'declaration-block-semicolon-space-before': 'never',
    'declaration-block-single-line-max-declarations': 1,
    'declaration-block-trailing-semicolon': 'always',
    'declaration-colon-newline-after': null,
    'declaration-colon-space-after': 'always',
    'declaration-colon-space-before': 'never',
    'declaration-empty-line-before': 'never',
    'declaration-no-important': null,
    'font-family-name-quotes': 'always-where-recommended',
    'font-family-no-duplicate-names': true,
    'font-family-no-missing-generic-family-keyword': true,
    'font-weight-notation': ['numeric', {ignore: ['relative']}],
    'function-calc-no-invalid': true,
    'function-calc-no-unspaced-operator': true,
    'function-comma-newline-after': 'never-multi-line',
    'function-comma-newline-before': 'never-multi-line',
    'function-comma-space-after': 'always',
    'function-comma-space-before': 'never',
    'function-linear-gradient-no-nonstandard-direction': true,
    'function-max-empty-lines': 0,
    'function-name-case': 'lower',
    'function-parentheses-newline-inside': 'never-multi-line',
    'function-parentheses-space-inside': 'never',
    'function-url-no-scheme-relative': null,
    'function-url-quotes': 'never',
    'function-whitespace-after': 'always',
    'keyframe-declaration-no-important': null,
    'indentation': 2,
    'length-zero-no-unit': true,
    'linebreaks': null,
    'max-empty-lines': 1,
    'max-line-length': null,
    'max-nesting-depth': null,
    'media-feature-colon-space-after': 'always',
    'media-feature-colon-space-before': 'never',
    'media-feature-name-case': 'lower',
    'media-feature-name-no-unknown': true,
    'media-feature-name-no-vendor-prefix': null,
    'media-feature-parentheses-space-inside': 'never',
    'media-feature-range-operator-space-after': 'never',
    'media-feature-range-operator-space-before': 'never',
    'media-query-list-comma-newline-after': 'always-multi-line',
    'media-query-list-comma-newline-before': 'never-multi-line',
    'media-query-list-comma-space-after': 'always',
    'media-query-list-comma-space-before': 'never',
    'no-descending-specificity': null,
    'no-duplicate-at-import-rules': true,
    'no-duplicate-selectors': true,
    'no-empty-first-line': true,
    'no-empty-source': true,
    'no-eol-whitespace': true,
    'no-extra-semicolons': true,
    'no-invalid-double-slash-comments': true,
    'no-missing-end-of-source-newline': true,
    'no-unknown-animations': true,
    'number-leading-zero': null,
    'number-max-precision': null,
    'number-no-trailing-zeros': true,
    'order/properties-order': [
      'list-style',
      'list-style-position',
      'list-style-type',
      'list-style-image',
      'font',
      'font-size',
      'font-family',
      'font-weight',
      'font-style',
      'font-variant',
      'font-size-adjust',
      'font-stretch',
      'font-effect',
      'font-emphasize',
      'font-emphasize-position',
      'font-emphasize-style',
      'font-smooth',
      'line-height',
      'letter-spacing',
      'color',
      'white-space',
      '-ms-word-break',
      'word-break',
      'word-spacing',
      '-ms-word-wrap',
      'word-wrap',
      'vertical-align',
      'text-align',
      'text-align-last',
      'text-emphasis',
      'text-emphasis-color',
      'text-emphasis-style',
      'text-emphasis-position',
      'text-decoration',
      'text-transform',
      'text-indent',
      'text-justify',
      'text-outline',
      'text-overflow',
      '-ms-text-overflow',
      'text-overflow-ellipsis',
      'text-overflow-mode',
      'text-shadow',
      'text-wrap',
      '-webkit-text-size-adjust',
      '-ms-text-size-adjust',
      'background',
      'background-color',
      'background-image',
      'filter',
      'background-repeat',
      'background-attachment',
      'background-position',
      'background-position-x',
      'background-position-y',
      'background-clip',
      'background-origin',
      'background-size',
      'box-sizing',
      'width',
      'min-width',
      'max-width',
      'height',
      'min-height',
      'max-height',
      'padding',
      'padding-top',
      'padding-right',
      'padding-bottom',
      'padding-left',
      'border',
      'border-width',
      'border-style',
      'border-color',
      'border-top',
      'border-top-width',
      'border-top-style',
      'border-top-color',
      'border-right',
      'border-right-width',
      'border-right-style',
      'border-right-color',
      'border-bottom',
      'border-bottom-width',
      'border-bottom-style',
      'border-bottom-color',
      'border-left',
      'border-left-width',
      'border-left-style',
      'border-left-color',
      'border-radius',
      'border-top-left-radius',
      'border-top-right-radius',
      'border-bottom-right-radius',
      'border-bottom-left-radius',
      'border-image',
      'border-image-source',
      'border-image-slice',
      'border-image-width',
      'border-image-outset',
      'border-image-repeat',
      'border-spacing',
      'border-collapse',
      'margin',
      'margin-top',
      'margin-right',
      'margin-bottom',
      'margin-left',
      'display',
      'float',
      'clear',
      'position',
      'top',
      'right',
      'bottom',
      'left',
      'z-index',
      'overflow-x',
      'overflow-y',
      'overflow',
      '-webkit-overflow-scrolling',
      '-ms-overflow-x',
      '-ms-overflow-y',
      '-ms-overflow-style',
      'outline',
      'outline-width',
      'outline-style',
      'outline-color',
      'outline-offset',
      'box-shadow',
      'opacity',
      'visibility',
      'resize',
      'cursor',
      'flex',
      'flex-align',
      'flex-basis',
      'flex-direction',
      'flex-wrap',
      'flex-flow',
      'flex-shrink',
      'flex-grow',
      'flex-order',
      'flex-pack',
      'align-content',
      'align-items',
      'align-self',
      'justify-content',
      'order',
      'columns',
      'column-count',
      'column-fill',
      'column-gap',
      'column-rule',
      'column-rule-width',
      'column-rule-style',
      'column-rule-color',
      'column-span',
      'column-width',
      'orphans',
      'widows',
      'clip',
      'src',
      'hyphens',
      'overflow-wrap',
      'tab-size',
      'direction',
      'unicode-bidi',
      'pointer-events',
      '-ms-touch-action',
      'touch-action',
      'zoom',
      'table-layout',
      'empty-cells',
      'caption-side',
      'content',
      'quotes',
      'counter-reset',
      'counter-increment',
      'user-select',
      'nav-index',
      'nav-up',
      'nav-right',
      'nav-down',
      'nav-left',
      '-ms-interpolation-mode',
      'page-break-after',
      'page-break-before',
      'page-break-inside',
      'transition',
      'transition-delay',
      'transition-timing-function',
      'transition-duration',
      'transition-property',
      'transform-origin',
      'transform',
      '-webkit-transform',
      'perspective',
      'appearance',
      'animation',
      'animation-name',
      'animation-duration',
      'animation-play-state',
      'animation-timing-function',
      'animation-delay',
      'animation-iteration-count',
      'animation-direction',
      'animation-fill-mode',
      'fill',
      'stroke'
    ],
    'property-case': 'lower',
    'property-no-unknown': true,
    'property-no-vendor-prefix': null,
    'rule-empty-line-before': null,
    'selector-attribute-brackets-space-inside': 'never',
    'selector-attribute-operator-space-after': 'never',
    'selector-attribute-operator-space-before': 'never',
    'selector-attribute-quotes': 'never',
    'selector-class-pattern': '^[a-z][a-z\\d-]*[a-z\\d]$',
    'selector-combinator-space-after': 'always',
    'selector-combinator-space-before': 'always',
    'selector-descendant-combinator-no-non-space': true,
    'selector-list-comma-newline-after': 'never-multi-line',
    'selector-list-comma-newline-before': 'never-multi-line',
    'selector-list-comma-space-after': 'always-single-line',
    'selector-list-comma-space-before': 'never-single-line',
    'selector-max-attribute': 2,
    'selector-max-class': 4,
    'selector-max-combinators': 4,
    'selector-max-compound-selectors': 4,
    'selector-max-empty-lines': 0,
    'selector-max-id': 0,
    'selector-max-specificity': null,
    'selector-max-type': 2,
    'selector-max-universal': 1,
    'selector-no-qualifying-type': null,
    'selector-no-vendor-prefix': null,
    'selector-pseudo-class-case': 'lower',
    'selector-pseudo-class-no-unknown': true,
    'selector-pseudo-class-parentheses-space-inside': 'never',
    'selector-pseudo-element-case': 'lower',
    'selector-pseudo-element-colon-notation': 'double',
    'selector-pseudo-element-no-unknown': true,
    'selector-type-case': 'lower',
    'selector-type-no-unknown': null,
    'shorthand-property-no-redundant-values': true,
    'string-no-newline': true,
    'string-quotes': 'double',
    'time-min-milliseconds': null,
    'unicode-bom': 'never',
    'unit-case': 'lower',
    'unit-no-unknown': true,
    'value-keyword-case': 'lower',
    'value-list-comma-newline-after': 'never-multi-line',
    'value-list-comma-newline-before': 'never-multi-line',
    'value-list-comma-space-after': 'always',
    'value-list-comma-space-before': 'never',
    'value-list-max-empty-lines': 0,
    'value-no-vendor-prefix': null
  }
};
