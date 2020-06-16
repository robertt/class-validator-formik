import { ValidationError } from 'class-validator';

export type Ret = { [key: string]: string | Ret };

export function convertError(errors: ValidationError[]) {
  const result: Ret = {};

  for (const error of Array.from(errors)) {
    result[error.property] = Object.values(error.constraints!)[0];

    if (error.children.length > 0) {
      result[error.property] = convertError(error.children);
    }
  }

  return result;
}
