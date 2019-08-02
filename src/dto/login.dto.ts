import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class CreateLoginDto {

    @IsNotEmpty()
    @IsUUID()
    readonly userId: number;

    @IsNotEmpty()
    @IsString()
    readonly username: string;
    
    @IsNotEmpty()
    @IsString()
    readonly password: string;

    @IsNotEmpty()
    @IsString()
    readonly passwordHash: string;
    
}
