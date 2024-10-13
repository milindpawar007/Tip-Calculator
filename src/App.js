import "./styles.css";
import { useState } from "react";

export default function App() {
  const [billamt, SetBillamt] = useState();
  const [percent1, Setpercent1] = useState(0);
  const [percent2, Setpercent2] = useState(0);
  const tip = (billamt * (percent1 + percent2)) / 2 / 100;

  const reset = () => {
    SetBillamt(0);
    Setpercent1(0);
    Setpercent2(0);
  };

  return (
    <div className="App">
      <InputBill billamt={billamt} onSetBillamt={SetBillamt} />
      <TipInput percent={percent1} onsetPerct={Setpercent1}>
        <span>you</span>
      </TipInput>
      <TipInput percent={percent2} onsetPerct={Setpercent2}>
        <span>your friend</span>
      </TipInput>
      <TotalBill billamt={billamt} tip={tip} />
      <Reset onBillrest={reset} />
    </div>
  );
}

const InputBill = ({ billamt, onSetBillamt }) => {
  return (
    <>
      <p>
        How much was the bill ?
        <input
          type="number"
          value={billamt}
          onChange={(e) => {
            onSetBillamt(Number(e.target.value));
          }}
          placeholder="enter the amount"
        ></input>
      </p>
    </>
  );
};

const TipInput = ({ children, onsetPerct, percent }) => {
  return (
    <>
      <p>
        How did {children} like the service ?
        <select
          value={percent}
          onChange={(e) => {
            onsetPerct(Number(e.target.value));
          }}
        >
          <option value={0}>Bad 0% </option>
          <option value={5}>It was okay 5% </option>
          <option value={10}>It was good 10% </option>
          <option value={20}>Amazing 20% </option>
        </select>
      </p>
    </>
  );
};

const TotalBill = ({ billamt, tip }) => {
  return billamt > 0 ? (
    <h4>
      Your pay ${billamt + tip} (${billamt}+${tip})
    </h4>
  ) : (
    ""
  );
};

const Reset = ({ onBillrest }) => {
  return <button onClick={onBillrest}>Reset</button>;
};
