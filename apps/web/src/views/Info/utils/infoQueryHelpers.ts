import { GraphQLClient } from 'graphql-request'
import { getGQLHeaders } from 'utils/graphql'
import requestWithTimeout from 'utils/requestWithTimeout'

/**
 * Helper function to get large amount GraphQL subqueries
 * @param queryConstructor constructor function that combines subqueries
 * @param subqueries individual queries
 * @param endpoint GraphQL endpoint
 * @param skipCount how many subqueries to fire at a time
 * @returns
 */
export const multiQuery = async (
  queryConstructor: (subqueries: string[]) => string,
  subqueries: string[],
  endpoint: string,
  skipCount = 1000,
) => {
  let fetchedData = {}
  let allFound = false
  let skip = 0
  const client = new GraphQLClient(endpoint, { headers: getGQLHeaders(endpoint) })
  try {
    while (!allFound) {
      let end = subqueries.length
