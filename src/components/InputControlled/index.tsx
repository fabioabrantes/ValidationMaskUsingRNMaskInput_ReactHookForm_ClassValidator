import {Control, Controller,FieldError} from 'react-hook-form'

import {Input, IProps} from '../Input'

import { Error } from './styles';

type Props = IProps & {
  control:Control<any>;
  name:string;
  error?:FieldError;
  date?:boolean;
}

export function InputControlled({control,name,error,date,...rest}:Props) {
  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({field})=>(
          <Input 
            onChangeText={(masked,unmasked)=>{
              date ? field.onChange(masked) : field.onChange(unmasked)
            }} 
            value={field.value} 
            {...rest}
          />
        )}
      />
      {error && <Error>{error.message}</Error>}
    </>
    );
}