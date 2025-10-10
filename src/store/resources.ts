import { createSlice } from '@reduxjs/toolkit'
import type { MemeInterface, ImageInterface } from 'orsys-tjs-meme';
import {memes,images} from '../../db/db.json'
import { loadRessources } from './asyncCaller';

interface IResourcesState {
    memes: Array<MemeInterface>
    images: Array<ImageInterface>
}

const initialState:IResourcesState = {
    memes: [],
    images: []
  };

const resources = createSlice({
  name: 'resources',
  initialState,
  reducers: {
  },
  extraReducers:(builder)=>{
    builder.addCase(loadRessources.fulfilled, (s,a) => {
        s.images = a.payload.images;
        s.memes = a.payload.memes;
    })
  }
}
);

const resourcesReducers = resources.reducer;
export default resourcesReducers