module.exports = {
  extends: ['airbnb', 'plugin:prettier/recommended', 'prettier/react'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2020,
    ecmaFeatures: {
      impliedStrict: true,
      classes: true,
    },
  },
  env: {
    browser: true,
    commonjs: true,
    node: true,
    jest: true,
    es6: true,
  },
  plugins: ['html', 'prettier', 'react-hooks', 'jsx-a11y'],
  settings: {
    'import/resolver': {
      node: {
        paths: ['/'],
      },
    },
    react: {
      version: 'detect',
    },
  },
  rules: {
    'no-debugger': 1, // warn when debugger's left in
    'no-return-assign': ['error', 'except-parens'], // disallow assignment during return
    'import/no-unresolved': [2, { ignore: ['^~'] }], // no unresolve imports except with preceding alias '~'
    'no-unused-vars': [
      // no unused variables, expect those matching pattern
      2,
      {
        ignoreRestSiblings: true,
        argsIgnorePattern: 'res|next|^err|^_',
      },
    ],
    'prefer-const': [
      2,
      {
        destructuring: 'any',
      },
    ],
    'arrow-body-style': [2, 'as-needed'], // prefer short hand arrow functions when possible
    'no-unused-expressions': [
      2,
      {
        allowTaggedTemplates: true,
      },
    ],
    'no-console': 1,
    'func-names': [2, 'as-needed'],
    'comma-dangle': 2,
    'max-len': 1,
    'import/extensions': 0,
    'no-underscore-dangle': 0, // allow _underscore_ dangle
    'react/display-name': 1, // ensure component has displayName property
    'react/prefer-stateless-function': [1, { ignorePureComponents: true }], // prefer stateless over class components
    'react/forbid-prop-types': [2, { forbid: ['any'] }], // disallow propType 'any'
    'react/no-unescaped-entities': 0, // help prevent mistaken closing tags i.e. '>'
    'react/require-default-props': 2, // require defaultProps for component
    'react/static-property-placement': [0], // `static public field` enabled
    'react/jsx-filename-extension': [
      // allow both .js and .jsx filetypes
      1,
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    'no-shadow': [
      // declare warning for using duplicate names in related scopes
      2,
      {
        hoist: 'all',
        allow: ['resolve', 'reject', 'done', 'next', 'err', 'error'],
      },
    ],
    quotes: [
      // prefer single quotes
      2,
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true,
      },
    ],
    'prettier/prettier': [
      // prettier options
      'error',
      {
        printWidth: 80,
        semi: true, // enforce semicolons to end statements
        singleQuote: true,
        tabWidth: 2,
        useTabs: false, // use spaces, not tabs
        trailingComma: 'all',
        insertPragma: false, // pragma = 'use strict';
        requirePragma: false,
        jsxBracketSameLine: false,
        jsxSingleQuote: false,
        quoteProps: 'as-needed',
        bracketSpacing: true, // 1 space around inline object literals
        arrowParens: 'avoid',
        htmlWhitespaceSensitivity: 'css',
        proseWrap: 'always',
        endOfLine: 'auto', // enforce LF over CRLF
      },
    ],
    'jsx-a11y/label-has-for': [
      // ensure label has matching element
      2,
      {
        components: ['Label'],
        required: {
          some: ['nesting', 'id'],
        },
        allowChildren: false,
      },
    ],
    'react/jsx-curly-brace-presence': 0, // allow no curly braces for prop values
    'react/jsx-no-bind': [
      // disallow using .bind, allow arrow functions as prop value
      2,
      { allowArrowFunctions: true },
    ],
    'react-hooks/rules-of-hooks': 'error', // default setting for react-hooks
    'react-hooks/exhaustive-deps': 'warn', // default setting for react-hooks
    'react/no-array-index-key': 0, // prevent errors from using plain index as key
    'class-methods-use-this': 0, // allow disuse of 'this' in classes
    'no-tabs': 0, // allow tabs
    'react/prop-types': 2, // ensure props have a proptype
    'no-plusplus': 0, // allow operator '++'
    'import/no-extraneous-dependencies': 2, // disallow import of files not in package.json
    'import/no-named-as-default': 0, // allow any name for default import
    'react/react-in-jsx-scope': 0, // allow no importing of React
    'react/jsx-props-no-spreading': [
      // allow prop spreading on custom components
      'warn',
      {
        custom: 'ignore',
      },
    ],
    'react/state-in-constructor': ['error', 'never'], // keep state initialization without constructor
  },
};
