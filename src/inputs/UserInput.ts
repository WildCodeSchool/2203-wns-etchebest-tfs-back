import { IsEmail, isEmail, MaxLength, MinLength } from "class-validator";
import { Field, InputType } from "type-graphql";
import { Ticket } from "../models/Ticket";

@InputType()
export class UserInput {
  @Field()
  @MaxLength(30)
  firstname!: string;

  @Field()
  @MaxLength(30)
  lastname!: string;

  @Field()
  @IsEmail()
  email!: string;

  @Field()
  @MinLength(8)
  password!: string;
}
