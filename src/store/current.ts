import { createSlice } from '@reduxjs/toolkit'
import { emptyMeme, type MemeInterface } from 'orsys-tjs-meme';
import { saveRessources } from './asyncCaller';

const initialState = {
    meme: emptyMeme
}

const current = createSlice({
  name: 'current',
  initialState,
  reducers: {
    update:(state,action:{type:string, payload:MemeInterface})=>{
        state.meme=action.payload;
    },
    clear:(state)=>{
        state.meme=emptyMeme;
    }
  },
  extraReducers:(builder)=>{
      builder.addCase(saveRessources.fulfilled, (s,a) => {
         console.log("save done");
      })
    }
});

export const {update,clear} = current.actions

const currentReducer = current.reducer
export default currentReducer