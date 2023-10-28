import axios from "axios";
import React, { useEffect, useState } from "react";
import { axiosClient } from "./util";

const Me = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    const getMe = async () => {
      const res = await axiosClient.get("/users/me");
      console.log(res);
    };

    getMe();
  }, []);
  return <>OK</>;
};

export default Me;
