// Importo il componente specifico per il test
import Welcome from "../Welcome";

// Importo i metodi per aiutarmi nei test
import { render, screen } from "@testing-library/react";

test("Renderizza la categoria attuale dei libri", () => {
  const categoryName = "Horror";
  render(<Welcome categoryName={categoryName} />);
  const categoryElement = screen.getByText(categoryName);
  expect(categoryElement).toBeInTheDocument();
});
