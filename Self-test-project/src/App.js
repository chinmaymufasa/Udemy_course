import React, {useState} from 'react';

import Form from './components/Form/Form.js';
import Table from './components/Table/Table.js';
import Header from './components/Header/Header.js';

const calculateHandler = (userInput) => {
  // Should be triggered when form is submitted
  // You might not directly want to bind it to the submit event on the form though...

  const yearlyData = []; // per-year results

  let currentSavings = +userInput['current-savings']; // feel free to change the shape of this input object!
  const yearlyContribution = +userInput['yearly-contribution']; // as mentioned: feel free to change the shape...
  const expectedReturn = +userInput['expected-return'] / 100;
  const duration = +userInput['duration'];

  // The below code calculates yearly results (total savings, interest etc)
  for (let i = 0; i < duration; i++) {
    const yearlyInterest = currentSavings * expectedReturn;
    currentSavings += yearlyInterest + yearlyContribution;
    yearlyData.push({
      // feel free to change the shape of the data pushed to the array!
      year: i + 1,
      yearlyInterest: yearlyInterest,
      savingsEndOfYear: currentSavings,
      yearlyContribution: yearlyContribution,
    });
  }

  return(
    yearlyData
  );
};

function App() {

  const data = [];

    const [newData, calculatedData] = useState();

  return (
    <div>
      <Header/>
      <Form></Form>
      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}
      {data.length === 0 ? <div className='header'>Provide Apporpriate Data</div> : <Table ></Table>}
      
    </div>
  );
}

export default App;
