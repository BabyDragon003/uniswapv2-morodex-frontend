import { GraphQLClient } from 'graphql-request'

const requestWithTimeout = <T>(
  graphQLClient: GraphQLClient,
  request: string,
  variables?: any,
  timeout = 30000,
): Promise<T> => {
  return Promise.race([
    variables ? graphQLClient.request<T>(request, variables) : graphQLClient.request<T>(request),
