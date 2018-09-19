# stylelint-config-guidelines

## Installation

```console
$ npm install --save stylelint-config-guidelines
```

## Usage

Set your stylelint config to:

```json
{
  "extends": "stylelint-config-guidelines"
}
```

### Extending the config

Simply add a `"rules"` key to your config and add your overrides there.

For example, to change the `indentation` to tabs and turn off the `number-leading-zero` rule:


```json
{
  "extends": "stylelint-config-guidelines",
  "rules": {
    "indentation": "tab",
    "number-leading-zero": null
  }
}
```

## License

[MIT](LICENSE)

## Authors

- [Touch4IT, s.r.o. contributors](https://github.com/touch4it/stylelint-config-guidelines/graphs/contributors)
