import { Injectable } from '@nestjs/common';
import {PrismaClient} from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class AppService {
  async getData(){
    const allRecipes = await prisma.recipe.findMany();
    return allRecipes;
  }
}
