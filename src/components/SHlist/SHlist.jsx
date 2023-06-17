import React from "react";
import SuperheroCard from "./SuperheroCard/SuperheroCard";
import { useSelector } from "react-redux";
import { fetchAllSuperheroes } from "../../redux/operations";
import { getAllSuperheroes } from "../../redux/selectors";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const SHlist = () => {
  const superheroes = useSelector(getAllSuperheroes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllSuperheroes());
  }, [dispatch]);

  const els = superheroes.map(
    ({
      _id,
      nickname,
      real_name,
      images,
      origin_description,
      superpowers,
      catch_phrase,
    }) => (
      <SuperheroCard
        key={_id}
        id={_id}
        nickname={nickname}
        real_name={real_name}
        images={images}
        origin_description={origin_description}
        superpowers={superpowers}
        catch_phrase={catch_phrase}
      />
    )
  );

  return (
    <>
      <h1>Superheroes</h1>
      <ul>{els}</ul>
    </>
  );
};

export default SHlist;
