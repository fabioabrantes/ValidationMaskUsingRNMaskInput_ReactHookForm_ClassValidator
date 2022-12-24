import { Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback } from 'react-native';
import {useForm} from 'react-hook-form';
import {Masks} from 'react-native-mask-input';

import { yupResolver } from '@hookform/resolvers/yup';
import { classValidatorResolver } from '@hookform/resolvers/class-validator';

import { Button } from '../../components/Button';
import { InputControlled } from '../../components/InputControlled';
import { Header } from '../../components/Header';

//import {schemaYup} from '../../util/validationSchemaYup';
import {RegisterDTO} from '../../dto/RegisterDTO';

import { Container,Form } from './styles';

type FormData = {
  cpf: string;
  cnpj: string;
  phone: string;
  cep: string;
  date:string;
}

export function Register() {
  const {control,handleSubmit,formState} = useForm<FormData>({
    resolver:classValidatorResolver(RegisterDTO)
  });
 
  function handleUserRegister(data:FormData) {
      console.log(data);  
  }

  return (
    <Container>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView behavior="position" enabled>
          <Header />

          <Form>
            <InputControlled
              placeholder="Digite o CPF"
              control={control}
              name="cpf"
              error={formState.errors.cpf}
              mask={Masks.BRL_CPF}
            />
            
            <InputControlled
              placeholder="digite o CNPJ"
              control={control}
              name="cnpj"
              error={formState.errors.cnpj}
              mask={Masks.BRL_CNPJ}
            />
            
            <InputControlled
              placeholder="Digite o número do celular"
              control={control}
              name="phone"
              error={formState.errors.phone}
              mask={Masks.BRL_PHONE}
            />
            <InputControlled
              placeholder="Digite o CEP"
              control={control}
              name="cep"
              error={formState.errors.cep}
              mask={Masks.ZIP_CODE}
            />
            <InputControlled
              placeholder="Digite a data de nascimento"
              control={control}
              name="date"
              date
              error={formState.errors.date}
              mask={Masks.DATE_DDMMYYYY}
              keyboardType="numeric"
            />

            <Button
              title="Cadastrar"
              onPress={handleSubmit(handleUserRegister)}
            />
          </Form>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </Container>
  );
}