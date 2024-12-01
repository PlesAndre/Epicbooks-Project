// Importo react-bootstrap
import Alert from "react-bootstrap/Alert";

export default function Welcome({ categoryName }) {
  return (
    <Alert className="text-center mt-5 alert-dark w-50 m-auto">
      <h1>Welcome to EpicBooks</h1>
      <p>Current category:</p>
      <p>
        <strong>{categoryName}</strong>
      </p>
    </Alert>
  );
}
