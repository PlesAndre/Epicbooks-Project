// Importo i componenti di React
import React from "react";

// Importo gli hooks utilizzati
import { useState, useEffect } from "react";

// Importo i componenti utilizzati
import AddComment from "./AddComment";
import CommentList from "./CommentList";

// Importo il Token per l'API
import API_TOKEN from "../utils/ApiToken";

const GET_URL =
  "https://striveschool-api.herokuapp.com/api/books/:asin/comments/";

export default function CommentArea({ asin }) {
  const [commentList, setCommentList] = useState([]);

  function getComments() {
    const modifyURL = GET_URL.replace(":asin", asin);

    fetch(modifyURL, { headers: { Authorization: API_TOKEN } })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Errore nel caricamento dei commenti");
        }
        return response.json();
      })
      .then((data) => {
        setCommentList(data);
      })

      .catch((error) => {
        console.error(error.message);
      });
  }

  useEffect(() => {
    getComments();
  }, []);

  return (
    <div>
      <AddComment asin={asin} getComments={getComments} />
      {commentList.map((comment, index) => (
        <CommentList comment={comment} key={comment._id + index} />
      ))}
    </div>
  );
}
