import React from "react"
import {Label, ImgLogo, Fieldset, Span, Button} from './style'
import FormLogo from './assets/form-logo.png'
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object({
  name: yup.string().required("O nome é obrigatório"),
  email: yup.string().email("Digite um email válido").required("O email é obrigatório"),
  password: yup.string().min(6, "Digite no mínimo 6 caracteres").required("A senha é obrigatório"),
  confirmPassword: yup.string().required("Confirmar senha é obrigatório").oneOf([yup.ref("password")], "As senhas devem ser iguais"),
}).required();

function App() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  function onSubmit(userData){
    console.log(userData)
  }
  console.log(errors)
  return (
    <Fieldset>
      <legend><ImgLogo src={FormLogo} alt="" /></legend>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Label>Nome
          <input type="text" {...register("name",{ required: true })} />
          <Span>{errors.name?.message}</Span>
        </Label>
        <Label>Email
          <input type="text" {...register("email")} />
          <Span>{errors.email?.message}</Span>
        </Label>
        <Label>Senha
          <input type="password" {...register("password")} />
          <Span>{errors.password?.message}</Span>
        </Label>
        <Label>Confirmar senha
          <input type="password" {...register("confirmPassword")} />
          <Span>{errors.confirmPassword?.message}</Span>
        </Label>
        <Button type="submit">Cadastrar-se</Button>
      </form>
    </Fieldset>
   
  )
}

export default App
