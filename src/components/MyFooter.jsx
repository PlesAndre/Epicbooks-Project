import React from "react";

export default function MyFooter() {
  return (
    <footer className="bg-dark d-flex mt-5 fixed-bottom" data-bs-theme="dark">
      <span className="text-body-secondary m-auto p-2">
        <a href="index.html" style={{ textDecoration: "none" }}>
          <strong>EpicBooks S.R.L</strong>
        </a>
      </span>
    </footer>
  );
}
