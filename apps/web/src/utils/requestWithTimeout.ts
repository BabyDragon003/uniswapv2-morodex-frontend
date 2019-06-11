import { GraphQLClient } from 'graphql-request'

const requestWithTimeout = <T>(
  graphQLClient: GraphQLClient,
  request: string,
      setTimeout(() => {
        reject(new Error(`Request timed out after ${timeout} milliseconds`))
      }, timeout)
    }),
  ]) as Promise<T>
}

export default requestWithTimeout
