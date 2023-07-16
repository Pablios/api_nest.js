import { IsNotEmpty, IsEmail, MinLength } from "class-validator";

export class CriaUsuarioDTO {
  @IsNotEmpty({ message: "O nome não pode estar vazio" })
  nome: string;

  @IsEmail({}, { message: "O e-mail deve ser válido" })
  email: string;

  @MinLength(6, { message: "A senha deve ter no mínimo 6 caracteres" })
  senha: string;
}
