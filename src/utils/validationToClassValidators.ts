// tive que criar esse arquivo contendo este método para fazer um decorator
// para validar o cpf e cnpj. Ele pega o valor do atributo cpf e verifica se é valido usando
// isCPF,isCNPJ da lib npm install validation-br
//
import { isCPF, isCNPJ } from 'validation-br';
import { registerDecorator, ValidationOptions, ValidationArguments } from 'class-validator';
import cep from 'cep-promise';
import validateDate from 'validate-date';

export function validateCPF(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: 'cpf',
      target: object.constructor,
      propertyName: propertyName,
      constraints: [],
      options: validationOptions,
      validator: {
        validate(value: any, args: ValidationArguments) {
          return isCPF(value);
        },
        defaultMessage(){
          return 'CPF inválido';
        }
      },
    });
  };
}

export function validateCNPJ(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: 'cnpj',
      target: object.constructor,
      propertyName: propertyName,
      constraints: [],
      options: validationOptions,
      validator: {
        validate(value: any, args: ValidationArguments) {
          return isCNPJ(value);
        },
        defaultMessage(){
          return 'CNPJ inválido';
        }
      },
    });
  };
}

async function searchCEP(value: string){
  let isValidCep = false;
  try {
    isValidCep = !!await cep(value);
  } catch (error) {
    isValidCep = false;
  }
  return isValidCep;
}
export function validateCEP(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: 'cep',
      target: object.constructor,
      propertyName: propertyName,
      constraints: [],
      options: validationOptions,
      validator: {
        validate(value: any, args: ValidationArguments) {
          return searchCEP(value);
        },
        defaultMessage(){
          return 'CEP inválido';
        }
      },
    });
  };
}

export function validateDateBR(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: 'date',
      target: object.constructor,
      propertyName: propertyName,
      constraints: [],
      options: validationOptions,
      validator: {
        validate(value: any, args: ValidationArguments) {
          return validateDate(value) === "Valid Date";
        },
        defaultMessage(){
          return 'Data inválido';
        }
      },
    });
  };
}