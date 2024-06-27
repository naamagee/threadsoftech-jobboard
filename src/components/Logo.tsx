import React from "react";
import { fetchLogo } from "../firebase";

const Logo = async (filename: string) => {
    const url = await fetchLogo(filename);

    return filename !== "" ? <img height={50} src={url} /> : <img />;
  
};

export default Logo;
