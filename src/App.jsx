import { useState } from 'react';
import './App.css'

export default function App() {

  const [cost, setCost] = useState(0);
  const [interest, setInterest] = useState(10);
  const [fee, setFee] = useState(1);
  const [downPayment, setDownPayment] = useState(0);
  const [tenure, setTenure] = useState(12);
  const [emi, setEmi] = useState(0);
  
  return (
    <main>
      React ⚛️ + Vite ⚡ + Replit 🌀
    </main>
  )
}
