import "./App.css";
import { Container } from "react-bootstrap";
import AllTheBooks from "./components/AllTheBooks.jsx";
import MyNav from "./components/MyNav";
import Welcome from "./components/Welcome.jsx";
import MyFooter from "./components/MyFooter";
import { useState } from "react";
import bookData from "./dataBooks/scifi.json";
import { themeContext } from "./contexts/context.jsx";

function App() {
  const [bookList, setBookList] = useState(bookData);
  const [theme, setTheme] = useState("light"); 

  function toggleTheme() {
    setTheme(theme === "dark" ? "light" : "dark"); 
  }

  return (
    <themeContext.Provider value={theme}>
      <div className={`App ${theme}`} data-bs-theme={theme}>
        <MyNav
          setBookList={setBookList}
          bookData={bookData}
          toggleTheme={toggleTheme}
        />
        <Container>
          <Welcome />
          <AllTheBooks bookList={bookList} />
        </Container>
        <MyFooter />
      </div>
    </themeContext.Provider>
  );
}

export default App;
