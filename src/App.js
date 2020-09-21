import React,{useState} from 'react';
import './App.css';


function App() {
  const [form, setForm] = useState({})

  const onChangeHandler = (e, inputField)=>{
    setForm({
      ...form,
      [inputField]:e.target.value
    })
  }

  const calculate = (operator) =>{
    const result = document.querySelector('#result')
    let calculate;
    if (operator === "add") {
      calculate = +form.firstNumber + +form.secondNumber 
      result.textContent = calculate
    }else if (operator === 'subtract') {
      calculate = Number(form.firstNumber) - Number(form.secondNumber)
      result.textContent = calculate
    } 
    else if (operator === 'multiply') {
      calculate = form.firstNumber * form.secondNumber
      result.textContent = calculate
    }else if (operator === 'divide') {
      if (form.secondNumber != 0) {
        calculate = form.firstNumber / form.secondNumber
        result.textContent = calculate
      } else {
        alert("invalid operation")
        result.textContent = "invalid operation"
      }
    }
  }

    return(
    <div className="App">
      <h1 className="App-header">A simple calculator built with React</h1>
      <label>First Number</label><input onChange={(event)=> onChangeHandler(event, "firstNumber")} type="number" /><br /><br />
      <label>Second Number</label><input onChange={(event)=> onChangeHandler(event, 'secondNumber')} type="number" /><br /><br />
      <div className="button">
        <button onClick={()=>calculate("add")}>Add</button><button onClick={()=>calculate('subtract')}>Subtract</button><button onClick={()=>calculate("multiply")}>Multiply</button><button onClick={()=>calculate("divide")}>Divide</button>
      </div>
      <h1 className="result">Result : <span id="result" style={{color: "red"}}></span></h1>
    </div>
    
    )
};
export default App;
