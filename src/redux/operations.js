import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../shared/api/superheroes";

export const fetchAllSuperheroes = createAsyncThunk(
  "superheroes/fetchAllSuperheroes",
  async (_, thunkAPI) => {
    try {
      const superheroes = await api.getAllSuperheroes();
      return superheroes;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchSuperheroById = createAsyncThunk(
  "superheroes/fetchSuperheroById",
  async (id, thunkAPI) => {
    try {
      const superhero = await api.getSuperheroById(id);
      return superhero;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addNewSuperhero = createAsyncThunk(
  "superheroes/addNewSuperhero",
  async (body, thunkAPI) => {
    try {
      const newSuperhero = await api.addSuperhero(body);
      return newSuperhero;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteSuperhero = createAsyncThunk(
  "superheroes/deleteSuperhero",
  async (id, thunkAPI) => {
    try {
      const deletedSuperhero = await api.removeSuperhero(id);
      return deletedSuperhero;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const editSuperheroData = createAsyncThunk(
  "superheroes/editSuperheroData",
  async (id, body, thunkAPI) => {
    try {
      const editedSuperhero = await api.editSuperhero(id, body);
      return editedSuperhero;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
