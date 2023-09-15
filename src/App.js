import logo from "./logo.svg";
import "./App.css";
import Card from "./components/Card";
function App() {
  const odeljenje = [
    { ime: "Tajra", datum: "31.01", godiste: 2006, skola: "Gimnazija" },
    { ime: "Tajra", datum: "31.01", godiste: "2006", skola: "Gimnazija" },
    { ime: "Tajra", datum: "31.01", godiste: "2006", skola: "Gimnazija" },
    { ime: "Tajra", datum: "31.01", godiste: "2006", skola: "Gimnazija" },
    { ime: "Tajra", datum: "31.01", godiste: "2006", skola: "Gimnazija" },
  ];

  return (
    <div className="container">
      {/* <Card
        ime={"Tajra"}
        datum={"31.01"}
        godiste={"2006"}
        skola={"Gimnazija"} */}

      {/* /> */}
      {odeljenje.map((el) => {
        if (el.godine > 18) {
          return (
            <Card
              ime={el.ime}
              datum={el.datum}
              godiste={el.godiste}
              skola={el.skola}
            />
          );
        }
      })}
    </div>
  );
}
export default App;
