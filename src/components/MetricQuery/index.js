import React from "react";
import { useReadCypher } from 'use-neo4j'

// Basiert auf https://github.com/adam-cowley/use-neo4j
export default function MetricQuery({ Visualization }) {
    const query = `
      MATCH
        (:Artifact:Main)-[:CONTAINS]->(package:Package)-[:CONTAINS]->(type:Type)
//      WHERE
//        package.fqn = $package
      RETURN
        package.fqn as Package, count(type) as Types`

    const params = {
//       package: 'app.coronawarn.server.common.persistence.domain.config'
    }

    const { loading, error, records } = useReadCypher(query, params);

    if ( loading ) return (<div>Loading...</div>)
    if ( error ) return (<div>{ error.message }</div>)

    const metricResult = records?.map(row => {
      const category = row.get('Package')
      const value = row.get('Types').toNumber()
      return {
        category: category,
        value: value
      }
    });

   if (!metricResult) return (
     <div>
       No result yet.
     </div>
   )

   return (
     <div>
       <Visualization metricResult={metricResult} />
     </div>
    )
}