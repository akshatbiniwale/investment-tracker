import logo from './assets/investment-calculator-logo.png';

import InvestmentForm from './components/InvestmentForm';
import InvestmentTable from './components/InvestmentTable';

const App = ()=> {
  let fallBackContent = <header className='header'><h1>Enter value to calculate returns.</h1></header>;
  const yearlyData = [];

  const calculateHandler = (userInput) => {
    let currentSavings = userInput.cSavings;
    const yearlyContribution = userInput.yrSavings;
    const expectedReturn = userInput.expectedRet / 100;
    const duration = userInput.investmentDur;

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution
      });
    }

    if(yearlyData.length !== 0){
      fallBackContent = '';
    }
  };

  return (
    <div>
      <header className="header">
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
