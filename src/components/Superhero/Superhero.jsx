import { Card } from "@mui/material";
import { useSelector } from "react-redux";
import { getAllSuperheroes } from "../../redux/selectors";

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

const Superhero = ({ item }) => {
  const { nickname, realName, originDescription, superpowers } = item;

  return (
    <Card sx={style}>
      <img className="mainPicture" src={item.images} alt="img" />
      <p>Nickname: {nickname}</p>
      <p>Realname: {realName}</p>
      <p>Origin Description: {originDescription}</p>
      <p>Superpowers: {superpowers}</p>
      {/* <ul>
        images:
        {item.images.map((image) => (
          <li key={image}>
            <img src={image} alt="img" />
          </li>
        ))}
      </ul> */}
    </Card>
  );
};

export default Superhero;
