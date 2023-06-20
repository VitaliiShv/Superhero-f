import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllSuperheroes } from "../../redux/selectors";
import { fetchAllSuperheroes } from "../../redux/operations";
import SHlist from "../../components/SHlist/SHlist";
// import AddSuperhero from "../../components/AddSuperhero/AddSuperhero";
import Superhero from "../../components/Superhero/Superhero";

const HeroesPage = () => {
  const superheroes = useSelector(getAllSuperheroes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllSuperheroes());
  }, [dispatch]);
  return (
    <>
      {/* <button>Add superhero</button>
      {isAddingTable && <AddSuperhero />} */}
      <SHlist items={superheroes} />
    </>
  );
};

export default HeroesPage;
