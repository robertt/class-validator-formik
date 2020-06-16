import { Class } from './types';
import { transformAndValidateSync } from 'class-transformer-validator';
import { convertError } from './convertError';

export function formikValidate(model: Class, data: any) {
  try {
    transformAndValidateSync(model, data);

    return {};
  } catch (e) {
    return convertError(e);
  }
}
