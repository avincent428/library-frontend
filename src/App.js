import Book from "./components/Book";
import Filter from "./components/Filter";
import SearchBar from "./components/SearchBar";
import Title from "./components/Title";

function App() {
  return (
    <div>
      <header>
        <Title />
        <SearchBar />
      </header>

      <main>
        <section>
          <Filter />
          <Book />
        </section>
      </main>
    </div>
  );
}

export default App;
