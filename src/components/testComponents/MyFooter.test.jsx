// Importo il componente specifico per il test
import MyFooter from "../MyFooter";

// Importo i metodi per aiutarmi nei test
import { render, screen } from "@testing-library/react";

test("Renderizza la scritta Epicbooks S.R.L", () => {
  render(<MyFooter />);
  const footerElement = screen.getByText(/EpicBooks S.R.L/i);
  expect(footerElement).toBeInTheDocument();
});
