import { ValidationError } from 'class-validator';

export type Ret = { [key: string]: string | Ret };

export function convertError(errors: ValidationError[]) {
  const result: Ret = {};

  for (const error of Array.from(errors)) {
    if (error.children.length > 0) {
      result[error.property] = convertError(error.children);
    }
    else {
      result[error.property] = Object.values(error.constraints!)[0];
    }
  }

  return result;
}
