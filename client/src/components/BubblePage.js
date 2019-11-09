import React, { useState, useEffect } from "react";
import axios from "axios";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import { axiosWithAuth as api } from "../utils/api";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);

  useEffect(() => {
    api().get("/api/colors")
      .then(res => {
        console.log(res)
        setColorList(res.data)
      })
      .catch(err => {
        console.log(err.response)
      })
  }, [])
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
