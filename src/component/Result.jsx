import React from "react";
import { calculateInvestmentResults, formatter } from "../util/investment.js";
const Result = ({ input }) => {
  const resultData = calculateInvestmentResults(input);
  const initialInvestment =
    resultData[0].valueEndOfYear -
    resultData[0].interest -
    resultData[0].annualInvestment;
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year </th>
          <th>Investment Value</th>
          <th>Interset (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capatial</th>
        </tr>
      </thead>
      <tbody>
        {resultData.map((yeardata) => {
          const totalInterest =
            yeardata.valueEndOfYear -
            yeardata.annualInvestment * yeardata.year -
            initialInvestment;
          const totalAmountInvested = yeardata.valueEndOfYear - totalInterest;
          return (
            <tr key={yeardata.year}>
              <td>{yeardata.year}</td>
              <td>{formatter.format(yeardata.valueEndOfYear)}</td>
              <td>{formatter.format(yeardata.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalAmountInvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Result;
