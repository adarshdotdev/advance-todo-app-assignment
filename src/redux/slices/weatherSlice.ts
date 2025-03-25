import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_KEY = "YOUR_API_KEY"; // Replace with your OpenWeatherMap API key

export const fetchWeather = createAsyncThunk(
  "weather/fetchWeather",
  async (city: string) => {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
    );
    return response.data;
  }
);

interface WeatherState {
  weatherData: any;
  loading: boolean;
  error: string | null;
}

const initialState: WeatherState = {
  weatherData: null,
  loading: false,
  error: null,
};

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.loading = false;
        state.weatherData = action.payload;
      })
      .addCase(fetchWeather.rejected, (state, action) => {
        state.loading = false;
        state.error = "Failed to fetch weather data";
      });
  },
});

export default weatherSlice.reducer;
