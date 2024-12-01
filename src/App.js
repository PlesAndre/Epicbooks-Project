// Importo lo stile dal progetto
import "./App.css";

// Importo react-bootstrap
import { Container } from "react-bootstrap";

// Importo gli hooks da React
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Importo i componenti necessari per l'utilizzo
import MyNav from "./components/MyNav";
import Homepage from "./components/Homepage.jsx";
import MyFooter from "./components/MyFooter";

// Importo i file JSON
import StartCategory from "./dataBooks/scifi.json";
import fantasy from "./dataBooks/fantasy.json";
import history from "./dataBooks/history.json";
import romance from "./dataBooks/romance.json";
import horror from "./dataBooks/horror.json";

// Importo il Context per il tema chiaro/scuro
import { themeContext, booksContext } from "./contexts/context.jsx";

function App() {
  // Hook che contiente lo stato iniziale del dataBooks e che gli passa ogni JSON al click tramite setCategory()
  const [category, setCategory] = useState(StartCategory);

  // Hook che passa i libri filtrati ai componenti MyNav e AllTheBooks
  const [filteredResults, setFilteredResults] = useState(category);

  // Hook che passa il nome delle categorie attuali
  const [categoryKey, setCategoryKey] = useState("StartCategory");

  // theme contiene il valore iniziale "light" poi cambiato in base al true/false dato da setTheme
  const [theme, setTheme] = useState("dark");

  function toggleTheme() {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  // Funzione che cambia la lista dei libri
  function toggleCategory(eventKey) {
    const categories = {
      fantasy,
      history,
      romance,
      horror,
      StartCategory,
    };

    // Gli passo l'oggetto(categories) nel parametro ma chiamando gli elementi dinamicamente
    setCategory(categories[eventKey]);
    setCategoryKey(eventKey);
  }

  // Oggetto con i nomi in stringa delle categorie da passare a Welcome
  const categoryName = {
    StartCategory: "Science Fiction",
    fantasy: "Fantasy",
    horror: "Horror",
    romance: "Romance",
    history: "History",
  };

  return (
    <Router>
      <themeContext.Provider value={theme}>
        <div className={theme} data-bs-theme={theme}>
          <MyNav
            category={category}
            setCategory={setCategory}
            toggleTheme={toggleTheme}
            toggleCategory={toggleCategory}
            setFilteredResults={setFilteredResults}
          />
          <Container>
            <Routes>
              <Route
                path="/"
                element={
                  <Homepage
                    filteredResults={filteredResults}
                    categoryName={categoryName[categoryKey]}
                  />
                }
              />
              {/* <Route path="/" element={<BookDetails />} /> */}
            </Routes>
          </Container>
          <MyFooter />
        </div>
      </themeContext.Provider>
    </Router>
  );
}

export default App;

// Creare funzionalità per le categorie
// - ogni volta che clicco una categoria mi renderizza quella selezionata✅
// - gli devo passare su app.jsx tutti gli import dei json e tramite funzione passargli un parametro che prende l'evento e mi sostituisce sul filtered la categoria✅
// BUG
// - la barra di ricerca funziona per metà, quando cerco un libro me lo da, ma quando cancello le parole non ritorna la lista di libri iniziale ✅
// SOLUTION
// - usare useEffect per potergli aggiornare la category, cosi ogni volta che cambia il target.value ritorna lo stato iniziale?

// Aggiungere BookDetails
// - Basandomi sul disegno che ho fatto
// - E' importante passargli la props:asin sul button del singolo libro, usare  useParams() su BookDetails

// ULTIME COSE
// - Semplificare i vari punti del codice
// - Gestire meglio i file, se possibile
// - Sistemare UI
