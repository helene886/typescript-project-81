### Hexlet tests and linter status:
[![Actions Status](https://github.com/helene886/typescript-project-81/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/helene886/typescript-project-81/actions)
[![Actions Status](https://github.com/helene886/typescript-project-81/actions/workflows/ci-check.yml/badge.svg)](https://github.com/helene886/typescript-project-81/actions)
[![Test Coverage](https://api.codeclimate.com/v1/badges/c3b7cfc01abc2cb47a19/test_coverage)](https://codeclimate.com/github/helene886/typescript-project-81/test_coverage)

### Example of usage:
```
import HexletCode from '@hexlet/code';

const template = { name: 'rob', job: 'hexlet', gender: 'm' };
const form = HexletCode.formFor(template, { method: 'post' }, (f) => {
  f.input('name');
  f.input('job', { as: 'textarea' });
});
```
