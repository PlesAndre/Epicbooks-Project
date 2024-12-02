// Importo il componente specifico per il test
import SingleBook from "../SingleBook";

// Importo i metodi per aiutarmi nei test
import { render, screen } from "@testing-library/react";

test("Renderizza il titolo del libro", () => {
  const title = "Titolo";
  render(<SingleBook />);
  const titleElement = screen.getByText(title);
  expect(titleElement).toBeInTheDocument();
});
