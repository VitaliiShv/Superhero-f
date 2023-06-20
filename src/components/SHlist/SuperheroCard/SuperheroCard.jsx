import React from "react";
import styles from "./SuperheroCard.module.css";
import { Card } from "@mui/material";

const SuperheroCard = ({ id, nickname, images, toggleModal }) => {
  return (
    <>
      <Card className={styles.card}>
        <img src={images} alt="" width={360} />
        <p>nickname: {nickname}</p>
        <button onClick={() => toggleModal(id)}>
          <p>Show more</p>
        </button>
      </Card>
    </>
  );
};

export default SuperheroCard;
