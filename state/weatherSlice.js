import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  data: {},
  loading: 'idle',
};

export const fetchWeatherByCity = createAsyncThunk(
  'weather/FetchWeatherByCity',
  async (url, thunkAPI) => {
    const response = await axios.get(url);
    return response.data;
  }
);

export const weatherSlice = createSlice({
  name: 'weatherSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchWeatherByCity.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

// Action creators are generated for each case reducer function
export const { fetchWeather, setDate } = weatherSlice.actions;

export default weatherSlice.reducer;
