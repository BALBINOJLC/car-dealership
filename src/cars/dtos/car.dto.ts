
import { IsOptional, IsString, IsUUID } from "class-validator";
import { PartialType } from '@nestjs/swagger';

export class CreateCarDto {

    @IsString()
    readonly brand: string;

    @IsString()
    readonly model: string;

}



export class UpdateCarDto extends  PartialType(CreateCarDto) {

    @IsString()
    @IsUUID()
    @IsOptional()
    readonly id?:    string;
}