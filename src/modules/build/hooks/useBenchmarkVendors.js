import { useQuery } from "react-apollo"

import { BENCHMARK_VENDORS_QUERY } from "@modules/build/queries"

export const useBenchmarkVendors = () => {
  const { loading, error, data } = useQuery(BENCHMARK_VENDORS_QUERY)

  const benchmarkVendors = (data && data.benchmarkVendors) || []

  return [
    benchmarkVendors,
    {
      loading,
      error,
    },
  ]
}
