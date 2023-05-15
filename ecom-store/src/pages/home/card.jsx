import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Image } from "./style";

export default function Cards() {

  const [data, setData] = useState([]);
  const endpoint = "https://api.noroff.dev/api/v1/online-shop";

  async function getData() {
    const response = await fetch(endpoint);
    setData(await response.json());
  }
  useEffect(() => {
    getData();
  }, []);

return (<div className="card-container">
  {data.map((data) => {
    console.log(data)
    return(
    <Link key={data.id}>
        <h2>{data.title}</h2>
        <Image src={data.imageUrl}></Image>
    </Link>
    )
  })}
</div>)
}