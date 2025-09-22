# stylelint-config-guidelines

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
