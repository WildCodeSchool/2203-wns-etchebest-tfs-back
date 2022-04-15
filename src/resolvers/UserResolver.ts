import { Arg, Args, Ctx, Mutation, Query, Resolver } from "type-graphql";
import { Context } from "../context";
import { UserInput } from "../inputs/UserInput";
import { User } from "../models/User";

@Resolver(User)
export class UserResolver {
  @Query(() => [User])
  async users(@Ctx() ctx: Context) {
    return ctx.prisma.user.findMany();
  }

  @Mutation(() => User)
  addUser(@Arg("user") user: UserInput, @Ctx() ctx: Context) {
    return ctx.prisma.user.create({
      data: {
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
        password: user.password,
      },
    });
  }
}
