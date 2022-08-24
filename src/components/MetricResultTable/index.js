import React from "react";
import { useReadCypher } from 'use-neo4j'

export default function MetricResultTable() {
    const query = `
      MATCH
        (:Artifact:Main)-[:CONTAINS]->(package:Package)-[:CONTAINS]->(type:Type)
      // WHERE
      //  package.fqn = $package
      RETURN
        package.fqn as Package, count(type) as Types`

    const params = {
      // package: 'app.coronawarn.server'
    }

    const { loading, error, records } = useReadCypher(query, params);

    if ( loading ) return (<div>Loading...</div>)
    if ( error ) return (<div>{ error.message }</div>)

    const metrics = records?.map(row => {
      const category = row.get('Package')
      const value = row.get('Types').toNumber()
      return {
        category: category,
        value: value
      }
    });

    return (
      <div>
        { metrics?.map(m => {
            return (<div>{ m.category } {m.value}</div>)
          })
        }
      </div>
    )
}