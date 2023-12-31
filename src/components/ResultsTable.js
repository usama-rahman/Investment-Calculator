const ResultsTable = (props) => {
  return (
    <table className="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {props.data.map((data) => (
          <tr>
            <td>{data.year}</td>
            <td> {data.savingsEndOfYear} </td>
            <td>{data.yearlyInterest}</td>
            <td>{data.savingsEndOfYear}</td>
            <td>{data.yearlyInterest}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ResultsTable;
