import React from "react";
import { Link } from "react-router-dom";
import { Card, DialogContent } from "@mui/material";
import styles from "./Superhero.module.css";

const Superhero = React.forwardRef((props, ref) => {
  const { nickname, realName, originDescription, superpowers, images, id } =
    props.item;

  return (
    <Card className={styles.card} ref={ref} tabIndex={0}>
      <img className="mainPicture" src={images} alt={nickname} />
      <p>Nickname: {nickname}</p>
      <p>Realname: {realName}</p>
      <p>Origin Description: {originDescription}</p>
      <p>Superpowers: {superpowers}</p>
      <Link to={`/hero/edit/${id}`}>Edit</Link>
    </Card>
  );
});

export default Superhero;

{
  /* <ul>
     images:
     {item.images.map((image) => (
       <li key={image}>
         <img src={image} alt="img" />
       </li>
     ))}
   </ul> */
}
