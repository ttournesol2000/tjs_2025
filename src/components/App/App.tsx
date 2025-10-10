import "./App.css";
import FlexHGrow3 from "../layout/FlexHGrow3/FlexHGrow3";
import Header from "../ui/Header/Header";
import NavBar from "../ui/NavBar/NavBar";
import FlexVGrow1 from "../layout/FlexVGrow1/FlexVGrow1";
import {emptyMeme, type ImageInterface, type MemeInterface} from "orsys-tjs-meme";
import Footer from "../ui/Footer/Footer";
import MemeForm from "../functional/MemeForm/MemeForm.stored";
import { useEffect, useState } from "react";
import store from "../../store/store";
import {memes as rest_memes,images as rest_imgs} from '../../../db/db.json'
import MemeSVGViewer from "../ui/MemeSVGViewer/MemeSVGViewer";
import { Route, Routes } from "react-router";
import Editor from "../../pages/Editor";
import Home from "../../pages/Home";
import Thumbnail from "../../pages/Thumbnail";

const App = () => {
  return (
    <FlexHGrow3>
    <Header/>
    <NavBar/>
    <FlexVGrow1>
      <Routes>
      <Route path="/" Component={Home} />
      <Route path="/editor" element={<Editor />} />
      <Route path="/thumbnails" element={<Thumbnail />} />
      </Routes>
    </FlexVGrow1>
    <Footer/>
  </FlexHGrow3>
  );
};

export default App;
