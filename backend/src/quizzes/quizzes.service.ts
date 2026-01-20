import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CreateQuizDto } from "./dto/create-quiz.dto";

@Injectable()
export class QuizzesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateQuizDto) {
    return this.prisma.quiz.create({
      data: {
        title: dto.title,
        questions: {
          create: dto.questions.map((q) => ({
            title: q.title,
            type: q.type,
            options: q.options ? JSON.stringify(q.options) : null,
            correctAnswer: JSON.stringify(q.correctAnswer),
          })),
        },
      },
    });
  }

  async findAll() {
    const quizzes = await this.prisma.quiz.findMany({
      include: { questions: true },
    });

    return quizzes.map((q) => ({
      id: q.id,
      title: q.title,
      questionsCount: q.questions.length,
    }));
  }

  async findOne(id: number) {
    return this.prisma.quiz.findUnique({
      where: { id },
      include: { questions: true },
    });
  }

  async remove(id: number) {
    return this.prisma.quiz.delete({
      where: { id },
    });
  }
}
