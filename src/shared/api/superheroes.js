import axios from "axios";

const instance = axios.create({
  baseURL: "https://superheroes-backend-j5u6.onrender.com/api",
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
