import React from "react";
import shoes from "../Shoes.json"


function Product() {
  console.log(shoes)
  // console.log(Object.keys(shoes))
  return (
    <div >
     <h1> Welcome to product </h1>
     <div className="shoes">
       {Object.keys(shoes).map(keyName =>{
         const shoe=shoes[keyName]
         return (<div key={keyName}> 
           <h4>{shoe.name}</h4>
           <img src={shoe.img} alt="shoes" height={150}/>
         </div>)
       })}
     </div>
    
    </div>
  );
}

export default Product;