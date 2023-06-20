import SuperheroCard from "./SuperheroCard/SuperheroCard";
import { useState } from "react";
import Superhero from "../Superhero/Superhero";
import { Modal, Grid } from "@mui/material";

const SHlist = ({ items }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [superhero, setSuperhero] = useState({});

  console.log(items);

  const toggleModal = (id) => {
    setIsModalOpen(!isModalOpen);
    setSuperhero(items.find((item) => item.id === id));
  };

  const els = items.map(({ id, nickname, images }) => (
    <Grid item xs={2} sm={4} md={4} key={id}>
      <SuperheroCard
        id={id}
        nickname={nickname}
        images={images}
        toggleModal={toggleModal}
      />
    </Grid>
  ));

  return (
    <>
      <h1>Superheroes</h1>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {els}
      </Grid>
      <Modal open={isModalOpen} onClose={toggleModal}>
        <Superhero item={superhero} />
      </Modal>
    </>
  );
};

export default SHlist;
