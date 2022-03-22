import JSXElements from "./JSXElements";

function Exercise() {
  return (
    <>
      <header className="App-header">
        <span>
          <input type="text" placeholder="search someone" />
          <button>Search</button>
        </span>
      </header>
      <main>
        <img
          src="https://media.giphy.com/media/Vh8pbGX3SGRwFDh3V0/source.gif"
          alt="Generasi GIGIH 2.0"
        />
        <h3>JSX Element</h3>
        <JSXElements />
      </main>
    </>
  );
}

export default Exercise;
