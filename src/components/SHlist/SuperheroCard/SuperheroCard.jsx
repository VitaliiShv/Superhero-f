import React from "react";
import styles from "./SuperheroCard.module.css";

const SuperheroCard = ({
  id,
  nickname,
  real_name,
  images,
  origin_description,
  superpowers,
  catch_phrase,
}) => {
  return (
    <li className={styles.card}>
      <ul>
        images:
        {images.map((image) => (
          <li key={image}>
            <img src={image} alt="img" />
          </li>
        ))}
      </ul>
      <p>nickname: {nickname}</p>
      <p>real_name: {real_name}</p>
      <p>origin_description: {origin_description}</p>
      <p>superpowers: {superpowers}</p>
      <p>catch_phrase: {catch_phrase}</p>
    </li>
  );
};

export default SuperheroCard;
