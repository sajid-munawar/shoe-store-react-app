import React from "react";
import {useParams} from "react-router-dom";
import shoes from "../Shoes.json"


function ProductItem() {
  const { id } = useParams();
  const shoe=shoes[id]

  return (
    <div className="link" >
        <h2>{shoe.name}</h2>
        <img src={shoe.img} alt="shoes" height={500}/>
      
    </div>
  );
}

export default ProductItem;