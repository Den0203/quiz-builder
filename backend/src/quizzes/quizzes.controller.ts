import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { QuizzesService } from "./quizzes.service";
import { CreateQuizDto } from "./dto/create-quiz.dto";

@Controller("quizzes")
export class QuizzesController {
  constructor(private readonly quizzesService: QuizzesService) {}

  @Post()
  create(@Body() dto: CreateQuizDto) {
    return this.quizzesService.create(dto);
  }

  @Get()
  findAll() {
    return this.quizzesService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.quizzesService.findOne(Number(id));
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.quizzesService.remove(Number(id));
  }
}
