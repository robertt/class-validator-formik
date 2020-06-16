import { Class } from './types';
import { formikValidate } from './formikValidate';

export const createValidator = (c: Class) => {
  return (data: any) => formikValidate(c, data);
};
