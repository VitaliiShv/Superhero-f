import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getAllSuperheroes } from "../../redux/selectors";

const HeroEditPage = () => {
  const { heroid } = useParams();
  const superheroes = useSelector(getAllSuperheroes);
  const superhero = superheroes.filter(({ id }) => id === heroid);

  console.log(superhero);

  return <div>{superhero.nickname}</div>;
};

export default HeroEditPage;
