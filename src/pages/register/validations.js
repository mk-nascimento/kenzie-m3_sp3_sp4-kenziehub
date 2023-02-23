import * as yup from "yup";

export const schema = yup
  .object( {
    name: yup
      .string()
      .required( `Campo "Nome" obrigatório` ),
    email: yup
      .string()
      .required( `Campo "Email" obrigatório` )
      .email( "Insira um email válido" ),
    password: yup
      .string()
      .required( `Campo "Senha" obrigatório` )
      .matches( /.{8,}/, "Deve conter no mínimo 8 caracteres" )
      .matches( /[A-Za-z]+/, "Deve conter ao menos 1 letra" )
      .matches( /(\d)+/, "Deve conter ao menos 1 número" )
      .matches( /(\W|_)+/, "Deve conter no mínimo 1 caracter especial" ),
    "confirm-password": yup
      .string()
      .required( "Confirme sua Senha" )
      .oneOf( [yup.ref( "password" )], "Senhas não conferem" ),
    bio: yup
      .string()
      .required( `Campo "Bio" obrigatório` ),
    contact: yup
      .string()
      .required( `Campo "Contato" obrigatório` ),
    "course_module": yup
      .string()
      .required( `Campo "Selecionar módulo" obrigatório` ),
  } )
  .required();
