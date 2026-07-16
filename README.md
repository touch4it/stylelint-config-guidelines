# stylelint-config-guidelines

Stylelint configuration inspired by SMACSS

## Installation

```console
npm install --save @touch4it/stylelint-config-guidelines
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

## Migration from Version 5 to 6

Version 6 requires `stylelint@17+` and Node.js `>= 22.12`. Upgrade both before installing this version.

## Migration from Version 4 to 5

Important: When migrating from version 4 to version 5, please note that Stylelint v15+ no longer includes formatting rules. If you need code formatting, you'll need to use Prettier alongside Stylelint.

## Compatibility table

| @touch4it/stylelint-config-guidelines | Stylelint | Prettier | Node.js  |
| ------------------------------------- | --------- | -------- | -------- |
| v6.x                                  | 17.x      | 3.x      | >= 22.12 |
| v5.x                                  | 16.x      | 3.x      | >= 20.19 |
| v4.x                                  | 16.x      | -        | >= 20.19 |
| v3.x                                  | 14.x      | -        | -        |

## License

[MIT](LICENSE)

## Authors

- [Touch4IT, s.r.o. contributors](https://github.com/touch4it/stylelint-config-guidelines/graphs/contributors)
