import { Resolver, Query } from 'type-graphql'
import { User } from '../../entity/User'
@Resolver()
export class RegisterResolver {
  @Query(() => String)
  hello(): string {
    return 'Hello World'
  }
  @Query(() => [User])
  async users(): Promise<User[]> {
    return await User.find()
  }
}
