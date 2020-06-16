# class-validator-formik

[![Actions Status](https://github.com/robertwestbury/class-validator-formik/workflows/CI/badge.svg)](https://github.com/robertwestbury/class-validator-formik/actions)
![npm](https://img.shields.io/npm/dw/class-validator-formik)

An easy and small library that allows you to validate [Formik](https://github.com/jaredpalmer/formik) forms with [class-validator](https://github.com/typestack/class-validator).

## Example

First, define your validation schema:

```ts
import { IsEmail } from 'class-validator';

class Schema {
  @IsEmail()
  email: string;
}
```

Then, provide the schema wrapped in the `createValidator` function from the library to the `validate` prop in Formik. For example, with hooks it looks like this:

```ts
import { useFormik } from 'formik';
import { createValidator } from 'class-validator-formik';

...
const { ... } = useFormik({ ..., validate: createValidator(Schema) });
```

Or, without hooks:

```tsx
import { createValidator } from 'class-validator-formik';

<Formik ... validate={createValidator(Schema)}>
  ...
</Formik>

```

Note: you might want to memoize this the `createValidator` function.

## Motivation

I built this because I was looking to share validation schemas between my frontend and `type-graphql` backend. `type-graphql` works very well with [class-validator](https://github.com/typestack/class-validator), and because I like to manage my forms with Formik I decided I should make this, so I do not have to duplicate validation code (by default, [Formik](https://github.com/jaredpalmer/formik) has very good support for [yup](https://github.com/jquense/yup))

## Contributing

The library is pretty much done, but if you want to contribute please note that we use [tsdx](https://github.com/jaredpalmer/tsdx).
