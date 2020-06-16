import React from 'react';
import { createValidator } from '../../dist';
import { IsMACAddress } from 'class-validator';
import { useFormik } from 'formik';

class Validator {
  @IsMACAddress({ message: 'hi' })
  mac!: string;
}

function App() {
  const { values, handleChange, errors } = useFormik({
    initialValues: {
      mac: '',
    },
    validate: createValidator(Validator),
    async onSubmit() {},
  });

  console.log(errors);

  return (
    <div>
      <input
        type="text"
        value={values.mac}
        name="mac"
        onChange={handleChange}
      />
      {errors.mac}
    </div>
  );
}

export default App;
