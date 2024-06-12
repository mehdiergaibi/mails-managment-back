import { IsNotEmpty, IsString } from "class-validator";

export class authDTO {
    @IsNotEmpty()
    @IsString()
    username: string;

    @IsNotEmpty()
    @IsString()
    password: string;

}
