# stylelint-config-guidelines

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/touch4it/ical-timezones/blob/master/lib/LICENSE.md)
[![npm version](https://img.shields.io/npm/v/@touch4it/stylelint-config-guidelines)](https://www.npmjs.com/package/@touch4it/stylelint-config-guidelines)
[![node version](https://img.shields.io/node/v/@touch4it/stylelint-config-guidelines)](https://www.npmjs.com/package/@touch4it/stylelint-config-guidelines)
[![vulnerabilities](https://img.shields.io/snyk/vulnerabilities/npm/@touch4it/stylelint-config-guidelines)](https://www.npmjs.com/package/@touch4it/stylelint-config-guidelines)
[![last commit](https://img.shields.io/github/last-commit/touch4it/stylelint-config-guidelines)](https://github.com/touch4it/stylelint-config-guidelines)

Stylelint configuration inspired by SMACSS

## Installation

```console
npm install --save stylelint-config-guidelines
```

## Usage

Set your stylelint config to:

```json
{
  "extends": "@touch4it/stylelint-config-guidelines"
}
```

### Extending the config

Simply add a `"rules"` key to your config and add your overrides there.

For example, to change the `indentation` to tabs and turn off the `number-leading-zero` rule:

```json
{
  "extends": "@touch4it/stylelint-config-guidelines",
  "rules": {
    "indentation": "tab",
    "number-leading-zero": null
  }
}
```

## Migration from Version 3 to 4

Important: When migrating from version 3 to version 4, please note that Stylelint v15+ no longer includes formatting rules. If you need code formatting, you'll need to use Prettier alongside Stylelint.

## License

[MIT](LICENSE)

## Authors

- [Touch4IT, s.r.o. contributors](https://github.com/touch4it/stylelint-config-guidelines/graphs/contributors)
