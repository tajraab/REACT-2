import logo from "./logo.svg";
import "./App.css";
import Card from "./components/Card";
import { useState } from "react";
function App() {
  // const odeljenje = [
  //   { ime: "Tajra", datum: "31.01", godiste: 2006, skola: "Gimnazija" },
  //   { ime: "Tajra", datum: "31.01", godiste: "2006", skola: "Gimnazija" },
  //   { ime: "Tajra", datum: "31.01", godiste: "2006", skola: "Gimnazija" },
  //   { ime: "Tajra", datum: "31.01", godiste: "2006", skola: "Gimnazija" },
  //   { ime: "Tajra", datum: "31.01", godiste: "2006", skola: "Gimnazija" },
  // ];

  // return (
  //   <div className="container">
  {
    /* <Card
        ime={"Tajra"}
        datum={"31.01"}
        godiste={"2006"}
        skola={"Gimnazija"} */
  }

  {
    /* /> */
  }
  // {odeljenje.map((el) => {
  //   if (el.godine > 18) {
  //     return (
  //       <Card
  //         ime={el.ime}
  //         datum={el.datum}
  //         godiste={el.godiste}
  //         skola={el.skola}
  //       />
  //     );
  //   }
  //       })}
  //     </div>
  //   );

  //////////////////////////

  // const [myNumber, setMojBroj] = useState(3);
  // return (
  //   <div className="container">
  //     {myNumber}
  //     <button
  //       onClick={() => {
  //         setMojBroj((prev) => prev - 5);
  //         // console.log(myNumber);
  //       }}
  //     ></button>
  //   </div>
  // );

  /////////////////////////input/////////////////////////////////////////////////////////

  // const [inputValue, setInputValue] = useState("");
  // const [djak, setDjak] = useState("Cao,Mehmed");
  // return (
  //   <div className="container">
  //     <input
  //       //type="text"
  //       onChange={(e) => setDjak(e.target.value)}
  //       value={djak}
  //     />
  //     <button onClick={() => alert(`Cao ${djak}`)}>Hello</button>
  //   </div>
  // );

  const [brojevi, setBroj] = useState([12, 6, 35, 15, 21, 56, 82, 10]);
  const [noviBroj, setNoviBroj] = useState(undefined);
  console.log(brojevi);
  return (
    <div className="container">
      <input
        placeholder="Dodaj broj"
        value={noviBroj}
        onChange={(e) => setNoviBroj(e.target.value)}
      />
      <button onClick={() => setBroj((prev) => [...prev, noviBroj])}>
        Dodaj broj
      </button>
    </div>
  );
}
export default App;
