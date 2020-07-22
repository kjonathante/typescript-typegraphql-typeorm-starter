import 'reflect-metadata'
import { createConnection } from 'typeorm'
import { ApolloServer } from 'apollo-server'
import { buildSchema } from 'type-graphql'
import { RegisterResolver } from './features/user/Register'

const main = async () => {
  await createConnection()
  const schema = await buildSchema({
    resolvers: [RegisterResolver],
  })

  const apolloServer = new ApolloServer({ schema })

  const { url } = await apolloServer.listen()

  console.log(url)
}

main()
