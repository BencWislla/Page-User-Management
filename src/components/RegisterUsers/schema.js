import * as z from "zod"


const FormSchema = z.object({
  nomeCompleto: z.string().min(3),
  email: z.email(),
  cargo: z.string().refine((cargo) => cargo !== ""),
  status: z.string().refine((status) => status !== ""),
  senha: z.string().min(8),
  confirmarSenha: z.string(),
})
  .refine((form) => form.senha === form.confirmarSenha, {
    message: "Senhas nao coincidem",
    path: ["confirmarSenha"]
  })



export default FormSchema;
