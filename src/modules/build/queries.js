import gql from "graphql-tag"

export const BENCHMARK_VENDORS_QUERY = gql`
  query benchmarkVendors($pagination: Pagination) {
    benchmarkVendors(pagination: $pagination) {
      id
      contentSource
      siteType
      topStats {
        coldStartTime
        warmStartTime
        platform
      }
    }
  }
`
