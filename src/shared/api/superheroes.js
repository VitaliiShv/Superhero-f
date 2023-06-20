import axios from "axios";

const instance = axios.create({
  baseURL: "https://647ca4c5c0bae2880ad1036e.mockapi.io/api",
});

export const getAllSuperheroes = async () => {
  const { data } = await instance.get("/superheroes");
  return data;
};

export const getSuperheroById = async (id) => {
  const { data } = await instance.get(`/superheroes/${id}`);
  return data;
};

export const addSuperhero = async (superhero) => {
  const { data } = await instance.post("/superheroes", superhero);
};

export const removeSuperhero = async (id) => {
  const { data } = await instance.delete(`/superheroes/${id}`);
  return data;
};

export const editSuperhero = async (id, editedFields) => {
  const { data } = await instance.delete(`/superheroes/${id}`, editedFields);
  return data;
};
