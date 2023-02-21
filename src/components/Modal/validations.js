import * as yup from "yup";

export const registerSchema = yup
  .object( {
    title: yup.string().required( `Campo "Título" obrigatório` ),
    status: yup.string().required( `Campo "Status" obrigatório` )
  } )
  .required();

export const updateSchema = yup
  .object( {
    status: yup.string().required( `Campo "Status" obrigatório` )
  } )
  .required();
