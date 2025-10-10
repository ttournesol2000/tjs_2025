import React from 'react';
import style from './MemeSvgViewer.module.css'
import { MemeSVGViewer as OrsysSVGViewer } from 'orsys-tjs-meme';
import { useSelector } from 'react-redux';
//import { RootState } from "../../../store/store";


/*interface IMemeSVGViewerProps {
  basePath?: "/" | "";
}*/

const MemeSvgViewer = (props) => {
  const current=useSelector((storeState)=>{return storeState.current.meme})
  const images=useSelector((storeState)=>{return storeState.resources.images})

  return (
    <OrsysSVGViewer { ...props} meme={current} image={images.find(i=>i.id===current.imageId)} />
  )
};

export default MemeSvgViewer;
