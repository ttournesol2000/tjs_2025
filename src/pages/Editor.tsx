import { useNavigate, useParams } from "react-router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { update } from "../store/current";
import type { RootState } from "../store/store";
import { emptyMeme } from "orsys-tjs-meme";
import MemeSVGViewer from "../components/ui/MemeSVGViewer/MemeSVGViewer";
import MemeForm from "../components/functional/MemeForm/MemeForm";

const Editor = () => {
    
  const params = useParams();
  const d = useDispatch();
  const memes = useSelector((s: RootState) => s.resources.memes);
  const navigate = useNavigate();

  useEffect(() => {
    const found = memes.find((m) => m.id === Number(params.id));
    if (found) d(update(found));
    else {
      d(update(emptyMeme));
      navigate("/editor");
    }
  }, [params, d, memes, navigate]);
  return (
    <>
      <MemeSVGViewer basePath="" />
      <MemeForm />
    </>
  );
};

export default Editor;
