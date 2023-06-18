import { useState } from 'react';
import logo from './assets/investment-calculator-logo.png';

import InvestmentForm from './components/InvestmentForm';
import InvestmentTable from './components/InvestmentTable';
import styles from './index.module.css'

const App = ()=> {
  const [fallBackContent, setFallBackContent] = useState(<header className={styles.header}><h1>Enter value to calculate returns.</h1></header>);
  const [yearlyData, setYearlyData] = useState([]);

  const calculateHandler = (userInput) => {
    let currentSavings = userInput.cSavings;
    const yearlyContribution = userInput.yrSavings;
    const expectedReturn = userInput.expectedRet / 100;
    const duration = userInput.investmentDur;
    let totalInterestGained = 0;
    let totalInvestedCapital = currentSavings;

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      totalInterestGained += yearlyInterest;
      totalInvestedCapital += yearlyContribution;

      const yearData = {
        year: i + 1,
        totalSavingsEndOfYear: currentSavings.toFixed(2),
        interestGainedInYear: yearlyInterest.toFixed(2),
        totalInterestGained: totalInterestGained.toFixed(2),
        totalInvestedCapital: totalInvestedCapital.toFixed(2)
      };

      yearlyData.push(yearData);
    }

    setYearlyData(yearlyData);
    setFallBackContent('');
  };

  return (
    <div>
      <header className={styles.header}>
        <img src={logo} alt="logo" />
        <h1>Investment Calculator</h1>
      </header>
      <InvestmentForm onCalcForm={calculateHandler}/>
      {fallBackContent}
      <InvestmentTable dataTable={yearlyData} />
    </div>
  );
}

export default App;
