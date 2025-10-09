import "./App.css";
import Button from "../ui/Button/Button";
import { useEffect, useState } from "react";
import FlexHGrow3 from "../layout/FlexHGrow3/FlexHGrow3";
import Header from "../ui/Header/Header";
import NavBar from "../ui/NavBar/NavBar";
import FlexVGrow1 from "../layout/FlexVGrow1/FlexVGrow1";
import {emptyMeme, MemeSVGViewer, type ImageInterface, type MemeInterface} from "orsys-tjs-meme";
import Footer from "../ui/Footer/Footer";
import MemeForm from "../functional/MemeForm/MemeForm";
import  {REST_ADR, REST_RESSOURCES} from '../../config/constants.js'


const App = () => {

  const [currentMeme, setCurrentMeme] = useState<MemeInterface>(emptyMeme);
  const [images, setImages] = useState<Array<ImageInterface>>([]);

  useEffect(() => {
    fetch(`${REST_ADR}${REST_RESSOURCES.images}`).then(r=>r.json()).then(imgs=>setImages(imgs));
  }, []);

  return (
    <FlexHGrow3>
    <Header/>
    <NavBar/>
    <FlexVGrow1>
      <MemeSVGViewer basePath="" image={images.find((img)=>img.id==currentMeme.imageId)}  meme={currentMeme}/>
      <MemeForm
          images={images}
          meme={currentMeme}
          onMemeChange={(newMeme: MemeInterface) => {
            setCurrentMeme(newMeme);
          }}
        />
    </FlexVGrow1>
    <Footer/>
  </FlexHGrow3>
  );
};

export default App;
