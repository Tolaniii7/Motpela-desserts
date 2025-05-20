import { useState } from "react";

const tips = [5, 10, 15, 25, 50];

export default function App() {
  const [bill, setBill] = useState("0");
  const [tips, setTip] = useState(null);
  const [custom, setCustom] = useState(null);
  const [people, setPeople] = useState("0");

  const [tipPerPerson, setTipPerson] = useState("0.00");
  const [total, setTotal] = useState("0.00");

  function handleBill(e) {
    e.preventDefault();

    const perPerson = (bill + tips / 100) / people;
    const total = perPerson * 2;

    setTipPerson(perPerson.toFixed("2"));
    setTotal(total.toFixed("2"));

    console.log(perPerson, total);
  }

  function reset() {
    setBill("0");
    setTipPerson("0.00");
    setTotal("0.00");
    setPeople("0");
    setTip(null);
    setCustom(null);
  }

  return (
    <div className="App">
      <Container
        bill={bill}
        onSetBill={setBill}
        tip={tips}
        onSetTip={setTip}
        custom={custom}
        setCustom={setCustom}
      />
      <PeopleInput
        people={people}
        setPeople={setPeople}
        handleBill={handleBill}
      />
      <Calculator tip={tipPerPerson} total={total} reset={reset} />
    </div>
  );
}

// function Header() {
//   return <img src="/src/logo.svg" className="logo" />;
// }

function Container({ bill, onSetBill, onSetTip, custom, setCustom }) {
  return (
    <div className="container article">
      <p className="headers">Bill</p>

      <input
        type="text"
        value={bill}
        className="input--bill input--bill__1"
        placeholder="0"
        onChange={(e) => onSetBill(Number(e.target.value))}
      />

      <p className="headers">Select Tip</p>
      <div className="tip__box">
        {tips.map((t, i) => (
          <Tip tip={t} key={i} onSetTip={onSetTip} />
        ))}

        <input
          type="text"
          value={custom}
          onChange={(e) => setCustom(Number(e.target.value))}
          placeholder="Custom"
          className="tip-custom"
        />
      </div>
    </div>
  );
}

function Tip({ tip, onSetTip }) {
  return (
    <button
      className="tip-percentages"
      value={tip}
      onClick={(e) => onSetTip(Number(e.target.value))}
    >
      {tip}%
    </button>
  );
}

function PeopleInput({ people, setPeople, handleBill }) {
  return (
    <div className="article">
      <p className="headers">Number of People</p>
      <form onSubmit={handleBill}>
        <input
          type="text"
          value={people}
          placeholder="0"
          class="input--bill input--bill__2"
          onChange={(e) => setPeople(Number(e.target.value))}
        />
      </form>
    </div>
  );
}

function Calculator({ tip, total, reset }) {
  return (
    <div className="main">
      <div className="section--1 ">
        <div className="tips ">
          <p className="tip-amount">Amount</p>
          <p className="tip-per-person ">/ person</p>
        </div>
        <p className="label-tip-amount">${tip}</p>
      </div>

      <div className="section--1 ">
        <div className="tips ">
          <p className="tip-amount">Total</p>
          <p className="tip-per-person "> / person</p>
        </div>
        <p className="label-tip-amount">${total}</p>
      </div>
      <button className="button-reset" onClick={reset}>
        RESET
      </button>
    </div>
  );
}
