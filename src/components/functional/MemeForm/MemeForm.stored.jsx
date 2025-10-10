import React from 'react'
import NoStoreMemeForm from './MemeForm'
import { useDispatch, useSelector } from "react-redux"; 
import { update , clear } from '../../../store/current'
import { saveRessources } from "../../../store/asyncCaller";


const MemeForm = (props) => {

    const images = useSelector(storeState=>storeState.resources.images)
    const meme = useSelector(storeState=>storeState.current.meme)

    const dispatch = useDispatch();

  return (
    <NoStoreMemeForm {...props} images={images} meme={meme} 
    onMemeChange={(newMeme)=>{
      dispatch(update(newMeme));
    }}
    onMemeSave={(newMeme)=>{
      dispatch(saveRessources(newMeme))
    }} />
  );
}

export default MemeForm