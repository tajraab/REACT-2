import logo from "./logo.svg";
import "./App.css";
import Card from "./components/Card";
import { useState } from "react";
//function App() {
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

// const [brojevi, setBroj] = useState([12, 6, 35, 15, 21, 56, 82, 10]);
// const [noviBroj, setNoviBroj] = useState(undefined);
// console.log(brojevi);
// return (
//   <div className="container">
//     <input
//       placeholder="Dodaj broj"
//       value={noviBroj}
//       onChange={(e) => setNoviBroj(e.target.value)}
//     />
//     <button
//       onClick={() => {
//         setBroj((prev) => [...prev, noviBroj]);
//         setNoviBroj("");
//       }}
//     >
//       Dodaj broj
//     </button>
//   </div>
// );

//////////////domaci,forma,input///////////////////////////////////////////////////

//?
//////////////////////////////////////////////////////////////////////////////////
//////////////
//const handleInput=(event)=>{setUser({})
// e=>
//}
//}

////////////////////////////domaci//////////////////////////////

function Forma() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({
    imePrezime: "",
    zanimanje: "",
    godine: "",
    mesto: "",
    stepen: "",
    hobi: "",
    status: "",
  });
  const handleInputSecond = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <div className="main">
      <input
        className="input"
        placeholder="Ime i prezime"
        name="imePrezime"
        value={user.imePrezime}
        onChange={handleInputSecond}
      />
      <input
        className="input"
        placeholder="Godine"
        name="godine"
        value={user.godine}
        onChange={handleInputSecond}
      />
      <input
        className="input"
        placeholder="Zanimanje"
        name="zanimanje"
        value={user.zanimanje}
        onChange={handleInputSecond}
      />
      <input
        className="input"
        placeholder="Mesto"
        name="mesto"
        value={user.mesto}
        onChange={handleInputSecond}
      />
      <input
        className="input"
        placeholder="Stepen"
        name="stepen"
        value={user.stepen}
        onChange={handleInputSecond}
      />
      <input
        className="input"
        placeholder="Hobi"
        name="hobi"
        value={user.hobi}
        onChange={handleInputSecond}
      />
      <input
        className="input"
        placeholder="Status"
        name="status"
        value={user.status}
        onChange={handleInputSecond}
      />

      {users.map((user) => {
        return (
          <div style={{ textAlign: "center", color: "white" }}>
            <p>{user.imePrezime}</p>
            <p>{user.godine}</p>
            <p>{user.zanimanje}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Forma;
