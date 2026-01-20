import {
  IsArray,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  ValidateNested,
} from "class-validator";
import { Type } from "class-transformer";

export enum QuestionType {
  BOOLEAN = "BOOLEAN",
  TEXT = "TEXT",
  CHECKBOX = "CHECKBOX",
}

class CreateQuestionDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsEnum(QuestionType)
  type: QuestionType;

  @IsOptional()
  @IsArray()
  options?: string[];

  @IsNotEmpty()
  correctAnswer: any;
}

export class CreateQuizDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateQuestionDto)
  questions: CreateQuestionDto[];
}
