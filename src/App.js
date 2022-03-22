import "./App.css";
import data from "./data";

function App() {
  const myCard = {
    marginRight: "10px",
    border: "1px solid #000",
    padding: "10px",
    width: "200px",
    borderRadius: "20px",
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
  };

  const myButton = {
    paddingTop: "5px",
    paddingBottom: "5px",
    width: "70px",
    color: "white",
    backgroundColor: "green",
  };

  const clickSaya = () => {
    alert("Heloo si GIGIH.");
  };

  return (
    <>
      <div className="App">
        <h1>Homework GIGIH 2.0</h1>
        <h4>Module 2 Session 1</h4>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={myCard}>
            <img width="200" src={data.album.images[0].url} alt="Foto Card" />
            <h3>{data.name}</h3>
            <p>{data.artists[0].name}</p>
            <button onClick={clickSaya} style={myButton}>
              Select
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
