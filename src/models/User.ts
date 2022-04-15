import "reflect-metadata";
import { ObjectType, Field, ID } from "type-graphql";
import { IsEmail } from "class-validator";
import { Ticket } from "./Ticket";

@ObjectType()
export class User {
  @Field((type) => ID)
  id!: number;

  @Field({ nullable: false })
  @IsEmail()
  email!: string;

  @Field({ nullable: false })
  password!: string;

  @Field({ nullable: false })
  firstname!: string;

  @Field({ nullable: false })
  lastname!: string;

  @Field((type) => [Ticket], { nullable: true })
  tikets?: [Ticket] | null;
}
