import {IsString, IsNotEmpty, IsPhoneNumber} from 'class-validator';
import {validateCPF,validateCNPJ,validateCEP,validateDateBR} from '../utils/validationToClassValidators';

export class RegisterDTO{

  @IsString()
  @IsNotEmpty({message:'Informe seu cpf'})
  @validateCPF()
  cpf:string;

  @IsString()
  @IsNotEmpty({message:'Informe seu nome cnpj'})
  @validateCNPJ()
  cnpj:string;

  @IsString()
  @IsNotEmpty({message:'Informe o número do seu celular'})
  @IsPhoneNumber('BR',{message:'telefone inválido'})
  phone:string;
  
  @IsString()
  @IsNotEmpty({message:'Informe sua data de nascimento'})
  @validateDateBR()
  date:string;

  @IsString()
  @IsNotEmpty({message:'Informe seu cep'})
  @validateCEP()
  cep:string;
}