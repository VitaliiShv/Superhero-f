import React from "react";
import { Card, DialogContent } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: 3,
};

const Superhero = React.forwardRef((props, ref) => {
  const { nickname, realName, originDescription, superpowers, images } =
    props.item;

  return (
    <Card sx={style} ref={ref} tabIndex={0}>
      <img className="mainPicture" src={images} alt="img" />
      <p>Nickname: {nickname}</p>
      <p>Realname: {realName}</p>
      <p>Origin Description: {originDescription}</p>
      <p>Superpowers: {superpowers}</p>
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
