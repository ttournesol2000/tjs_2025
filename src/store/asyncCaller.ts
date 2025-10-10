import { createAsyncThunk } from "@reduxjs/toolkit";
import { REST_ADR, REST_RESSOURCES } from "../config/constants";
import type { MemeInterface } from "orsys-tjs-meme";

export const loadRessources = createAsyncThunk(
  "ressources/loadRessources",
  async () => {
    const pri = fetch(`${REST_ADR}${REST_RESSOURCES.images}`);
    const prm = fetch(`${REST_ADR}${REST_RESSOURCES.memes}`);
    const prall = await Promise.all([pri, prm]);
    return { images: await prall[0].json(), memes: await prall[1].json() };
  }
);

export const saveRessources = createAsyncThunk(
    "ressources/saveRessources",
    async (meme:MemeInterface) => {
      console.log("Call API");
      const pr = await fetch(`${REST_ADR}${REST_RESSOURCES.memes}${undefined!=meme.id?meme.id:""}`,{
            method: undefined!=meme.id?'PUT':'POST',
            headers:{"Content-Type":"application/json"},
            body: JSON.stringify(meme)
            }
        )
        console.log("pr.json():" + pr.json());

        return await pr.json();
    }
);