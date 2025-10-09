import "./App.css";
import Button from "../ui/Button/Button";
import { useEffect, useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(-100);

  useEffect(() => {
    return () => {
      console.log('all refresh mount and un mount')
    };
  });

  useEffect(() => {
    return () => {
      setCounter(0);
      console.log('fromEffect on Counter:', counter)
    };
  }, [counter]);

  useEffect(() => {
    return () => {
      console.log('mount:')
    };
  }, []);

  return (
    <div>
      <div>
        <div style={{ textAlign: "center" }}>valeur du count:{counter}</div>
      </div>
      <hr />
      <Button
        bgColor="red"
        clickAction={() => {
          setCounter(counter - 1);
          console.log(counter);
        }}
      >
        -1
      </Button>
      <Button
        bgColor="blue"
        clickAction={() => {
          setCounter(counter + 1);
          //console.log(counter);
        }}
      >
        +1
      </Button>
    </div>
  );
};

export default App;
