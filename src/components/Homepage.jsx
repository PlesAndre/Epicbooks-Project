import React from "react";

// Importo i componenti utilizzati
import Welcome from "./Welcome";
import AllTheBooks from "./AllTheBooks";

export default function Homepage({ filteredResults, categoryName }) {
  return (
    <>
      <Welcome categoryName={categoryName} />
      <AllTheBooks filteredResults={filteredResults} />
    </>
  );
}
