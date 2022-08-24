
const MetricTable = ({ metricResult }) => (
  <table>
    <tbody>
  {
    metricResult.map((row, index) => {
    return (
      <tr key={`row-${index}`}>
        <td>
          {row.category}
        </td>
        <td>
          {row.value}
        </td>
      </tr>
    )})
  }
    </tbody>
  </table>
)

export default MetricTable