// Importo lo stile dal progetto
import "./App.css";

// Importo react-bootstrap
import { Container } from "react-bootstrap";

// Importo gli hooks da React
import { useState } from "react";

// Importo i componenti necessari per l'utilizzo
import AllTheBooks from "./components/AllTheBooks.jsx";
import MyNav from "./components/MyNav";
import Welcome from "./components/Welcome.jsx";
import MyFooter from "./components/MyFooter";

// Importo i file JSON
import StartCategory from "./dataBooks/scifi.json";
import fantasy from "./dataBooks/fantasy.json";
import history from "./dataBooks/history.json";
import romance from "./dataBooks/romance.json";
import horror from "./dataBooks/horror.json";

// Importo il Context per il tema chiaro/scuro
import { themeContext } from "./contexts/context.jsx";

function App() {
  // hook che contiente lo stato iniziale del dataBooks e che gli passa ogni JSON al click tramite setCategory()
  const [category, setCategory] = useState(StartCategory);

  function toggleCategory(eventKey) {
    const categories = {
      fantasy,
      history,
      romance,
      horror,
      StartCategory,
    };

    setCategory(categories[eventKey] || categories.StartCategory);
  }

  // theme contiene il valore iniziale "light" poi cambiato in base al true/false dato da setTheme
  const [theme, setTheme] = useState("dark");

  function toggleTheme() {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  return (
    <themeContext.Provider value={theme}>
      <div className={theme} data-bs-theme={theme}>
        <MyNav
          setCategory={setCategory}
          bookData={category}
          toggleTheme={toggleTheme}
          toggleCategory={toggleCategory}
        />
        <Container>
          <Welcome />
          <AllTheBooks category={category} />
        </Container>
        <MyFooter />
      </div>
    </themeContext.Provider>
  );
}

export default App;

// Creare funzionalità per le categorie
// - ogni volta che clicco una categoria mi renderizza quella selezionata
// - gli devo passare su app.jsx tutti gli import dei json e tramite funzione passargli un parametro che prende l'evento e mi sostituisce sul filtered la categoria
// - usare useEffect, per poterlo aggiornare ogni volta che cambio categoria?

// Aggiungere BookDetails
// - Basandomi sul disegno che ho fatto
// - E' importante passargli la props:asin sul button del singolo libro, usare  useParams() su BookDetails

// ULTIME COSE
// - Semplificare i vari punti del codice
// - Gestire meglio i file, se possibile
// - Sistemare UI
