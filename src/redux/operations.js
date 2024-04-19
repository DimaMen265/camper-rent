import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://6620046a3bf790e070aebadd.mockapi.io";

export const getAdverts = createAsyncThunk("adverts/getAll", async (_, thunkAPI) => {
    try {
        const response = await axios.get("/adverts");
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    };
});

export const getAdvert = createAsyncThunk("adverts/getOne", async ({ _id }, thunkAPI) => {
    try {
        const response = await axios.get(`/adverts/${_id}`);
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    };
});
