import { createSlice } from '@reduxjs/toolkit';
const pagesSearch = ['Settings', 'Info'];

const initialState: any = {
  fullName: 'Dzmitry Dubovik', 
};

export const cvSlice = createSlice({
  name: 'cv',
  initialState,
  reducers: {},
});

export default cvSlice.reducer;
