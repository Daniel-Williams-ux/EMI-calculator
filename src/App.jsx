import { useState } from "react";
import './App.css'

export default function App() {

  const [cost, setCost] = useState(0);
  const [interest, setInterest] = useState(10);
  const [fee, setFee] = useState(1);
  const [downPayment, setDownPayment] = useState(0);
  const [tenure, setTenure] = useState(12);
  const [emi, setEmi] = useState(0);

  const updateEMI = () => {console.log("EMI")}
  const updateDownPayment = () => {console.log("downPayment")}
  
  return (
    <div className='App'>
      <span className="title" style={{ fontSize: 30, marginTop: 10 }}>
        EMI Calculator
      </span>

       <span className="title">
        Total cost of Asset
      </span>
      <input
        type="number"
        value={cost}
        onChange={(e) => setCost(e.target.value)}
        placeholder="Total cost of Asset"
      />

      <span className="title">
        Interest Rate (in %)
      </span>
      <input
        type="number"
        value={interest}
        onChange={(e) => setInterest(e.target.value)}
      />

      <span className="title">
        Processing Fee (in %)
      </span>
      <input
        type="number"
        value={fee}
        onChange={(e) => setFee(e.target.value)}
      />
      
        <span className="title">
        Down Payment
      </span>
      <input
        type="range"
        min={0}
        max={cost}
        value={downPayment}
        onChange={updateEMI}
        className="slider"
      />

      <span className="title">
        Loan per Month
      </span>
      <input
        type="range"
        min={0}
        max={cost}
        value={emi}
        onChange={updateDownPayment}
        className="slider"
      />
    </div>
  )
}
