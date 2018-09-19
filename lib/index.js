module.exports = {
  extends: 'stylelint-config-sass-guidelines',
  plugins: [
    'stylelint-no-unsupported-browser-features',
    'stylelint-at-rule-no-children',
    'stylelint-declaration-block-no-ignored-properties',
    'stylelint-selector-tag-no-without-class'
  ],
  rules: {
    'at-rule-empty-line-before': [
      'always',
      {
        except: [
          'blockless-after-same-name-blockless',
          'first-nested'
        ],
        ignore: [
          'after-comment'
        ]
      }
    ],
    'block-closing-brace-empty-line-before': 'never',
    'block-opening-brace-newline-after': 'always',
    'color-hex-length': 'long',
    'comment-empty-line-before': 'always',
    'comment-no-empty': true,
    'font-family-name-quotes': 'always-unless-keyword',
    'font-family-no-missing-generic-family-keyword': true,
    'max-nesting-depth': 3,
    'max-empty-lines': 1,
    'media-feature-name-no-unknown': true,
    'no-duplicate-at-import-rules': true,
    'no-duplicate-selectors': true,
    'no-empty-source': true,
    'no-extra-semicolons': true,
    'no-invalid-double-slash-comments': true,
    'property-case': 'lower',
    'plugin/declaration-block-no-ignored-properties': true,
    'plugin/no-unsupported-browser-features': [
      true,
      {
        browsers: [
          '> 3%',
          'not dead',
          'not OperaMini all'
        ]
      }
    ],
    'plugin/selector-tag-no-without-class': ['div', 'span'],
    'unit-case': 'lower',
    'unit-no-unknown': true,
    'value-keyword-case': 'lower',
    'value-list-comma-space-after': 'always-single-line',
    'selector-max-id': 1,
    'selector-class-pattern': [
      '^[a-z0-9\\-_]+$',
      {
        message: 'Selector should be written in lowercase with hyphens (selector-class-pattern)'
      }
    ],
    'order/properties-alphabetical-order': null,
    'order/properties-order': [
      [
        {
          properties: [
            'display',
            'visibility'
          ]
        },
        {
          properties: [
            'position',
            'z-index',
            'top',
            'right',
            'bottom',
            'left'
          ]
        },
        {
          properties: [
            'box-sizing'
          ]
        },
        {
          properties: [
            'grid',
            'grid-after',
            'grid-area',
            'grid-auto-columns',
            'grid-auto-flow',
            'grid-auto-rows',
            'grid-before',
            'grid-column',
            'grid-column-end',
            'grid-column-gap',
            'grid-column-start',
            'grid-columns',
            'grid-end',
            'grid-gap',
            'grid-row',
            'grid-row-end',
            'grid-row-gap',
            'grid-row-start',
            'grid-rows',
            'grid-start',
            'grid-template',
            'grid-template-areas',
            'grid-template-columns',
            'grid-template-rows'
          ]
        },
        {
          properties: [
            'flex',
            'flex-basis',
            'flex-direction',
            'flex-flow',
            'flex-grow',
            'flex-shrink',
            'flex-wrap',
            'align-content',
            'align-items',
            'align-self',
            'justify-content',
            'order'
          ]
        },
        {
          properties: [
            'width',
            'min-width',
            'max-width'
          ]
        },
        {
          properties: [
            'height',
            'min-height',
            'max-height'
          ]
        },
        {
          properties: [
            'margin',
            'margin-top',
            'margin-right',
            'margin-bottom',
            'margin-left'
          ]
        },
        {
          properties: [
            'padding',
            'padding-top',
            'padding-right',
            'padding-bottom',
            'padding-left'
          ]
        },
        {
          properties: [
            'float',
            'clear'
          ]
        },
        {
          properties: [
            'overflow',
            'overflow-x',
            'overflow-y'
          ]
        },
        {
          properties: [
            'clip',
            'zoom'
          ]
        },
        {
          properties: [
            'columns',
            'column-gap',
            'column-fill',
            'column-rule',
            'column-span',
            'column-count',
            'column-width'
          ]
        },
        {
          properties: [
            'table-layout',
            'empty-cells',
            'caption-side',
            'border-spacing',
            'border-collapse',
            'list-style',
            'list-style-position',
            'list-style-type',
            'list-style-image'
          ]
        },
        {
          properties: [
            'transform',
            'transform-box',
            'transform-origin',
            'transform-style',
            'backface-visibility',
            'perspective',
            'perspective-origin'
          ]
        },
        {
          properties: [
            'transition',
            'transition-property',
            'transition-duration',
            'transition-timing-function',
            'transition-delay'
          ]
        },
        {
          properties: [
            'animation',
            'animation-name',
            'animation-duration',
            'animation-play-state',
            'animation-timing-function',
            'animation-delay',
            'animation-iteration-count',
            'animation-direction'
          ]
        },
        {
          properties: [
            'border',
            'border-top',
            'border-right',
            'border-bottom',
            'border-left',
            'border-width',
            'border-top-width',
            'border-right-width',
            'border-bottom-width',
            'border-left-width'
          ]
        },
        {
          properties: [
            'border-style',
            'border-top-style',
            'border-right-style',
            'border-bottom-style',
            'border-left-style'
          ]
        },
        {
          properties: [
            'border-radius',
            'border-top-left-radius',
            'border-top-right-radius',
            'border-bottom-right-radius',
            'border-bottom-left-radius'
          ]
        },
        {
          properties: [
            'border-color',
            'border-top-color',
            'border-right-color',
            'border-bottom-color',
            'border-left-color'
          ]
        },
        {
          properties: [
            'stroke-width',
            'stroke-linecap',
            'stroke-dasharray',
            'stroke-dashoffset',
            'stroke'
          ]
        },
        {
          properties: [
            'opacity'
          ]
        },
        {
          properties: [
            'background',
            'background-attachment',
            'background-clip',
            'background-color',
            'background-image',
            'background-repeat',
            'background-position',
            'background-size',
            'box-shadow',
            'fill'
          ]
        },
        {
          properties: [
            'color'
          ]
        },
        {
          properties: [
            'font',
            'font-family',
            'font-size',
            'font-size-adjust',
            'font-smoothing',
            'font-stretch',
            'font-style',
            'font-variant',
            'font-weight'
          ]
        },
        {
          properties: [
            'font-emphasize',
            'font-emphasize-position',
            'font-emphasize-style'
          ]
        },
        {
          properties: [
            'letter-spacing',
            'line-height',
            'list-style'
          ]
        },
        {
          properties: [
            'text-align',
            'text-align-last',
            'text-decoration',
            'text-decoration-color',
            'text-decoration-line',
            'text-decoration-style',
            'text-indent',
            'text-justify',
            'text-overflow',
            'text-overflow-ellipsis',
            'text-overflow-mode',
            'text-rendering',
            'text-outline',
            'text-shadow',
            'text-transform',
            'text-wrap',
            'word-wrap',
            'word-break'
          ]
        },
        {
          properties: [
            'text-emphasis',
            'text-emphasis-color',
            'text-emphasis-style',
            'text-emphasis-position'
          ]
        },
        {
          properties: [
            'vertical-align',
            'white-space',
            'word-spacing',
            'hyphens'
          ]
        },
        {
          properties: [
            'src'
          ]
        },
        {
          properties: [
            'tab-size',
            'counter-reset',
            'counter-increment',
            'resize',
            'cursor',
            'pointer-events',
            'speak',
            'user-select',
            'nav-index',
            'nav-up',
            'nav-right',
            'nav-down',
            'nav-left'
          ]
        }
      ],
      {
        unspecified: 'bottomAlphabetical'
      }
    ]
  }
};
