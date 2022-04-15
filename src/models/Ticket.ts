import "reflect-metadata";
import { ObjectType, Field, ID } from "type-graphql";
import { IsEmail } from "class-validator";
import { User } from "./User";

@ObjectType()
export class Ticket {
  @Field((type) => ID)
  id!: number;

  @Field({ nullable: false })
  title!: string;

  @Field({ nullable: true })
  description!: string;

  @Field({ nullable: false })
  status!: string;

  @Field((type) => User, { nullable: true })
  user!: User;
}
