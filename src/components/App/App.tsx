import "./App.css";
import Button from "../ui/Button/Button";
import { useEffect, useState } from "react";
import FlexHGrow3 from "../layout/FlexHGrow3/FlexHGrow3";
import Header from "../ui/Header/Header";
import NavBar from "../ui/NavBar/NavBar";
import FlexVGrow1 from "../layout/FlexVGrow1/FlexVGrow1";
import MemeSVGViewer from "../ui/MemeSVGViewer/MemeSVGViewer";
import Footer from "../ui/Footer/Footer";
import MemeForm from "../functional/MemeForm/MemeForm";


const App = () => {
  return (
    <FlexHGrow3>
    <Header/>
    <NavBar/>
    <FlexVGrow1>
      <MemeSVGViewer/>
      <MemeForm/>
    </FlexVGrow1>
    <Footer/>
  </FlexHGrow3>
  );
};

export default App;
