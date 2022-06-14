import { projects } from './data/projects'
import { users } from './data/users'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

async function main(){
/*   for (let project of projects){
    await prisma.project.create({
      data: project
    })
  } */
  for (let user of users){
    await prisma.user.create({
      data: user
    })
  }
}

main().catch(e=>{
  console.log(e);
  process.exit(1);
}).finally(()=>{
  prisma.$disconnect();
})