import React from 'react'

const merchArr = [
  {
    title: "T-Shirt",
    price: 200,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Shirt.png",
    quantity: 1,
  },
  {
    title: "Coffee Cup",
    price: 10,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Cofee.png",
    quantity: 1,
  },
];

const ProductItems = () => {
  return (
    <>
    {merchArr.map((items)=>{
      return(
        
        <ul>
        <h3>{items.title}</h3>
        <li><img src={items.imageUrl} alt='products' /></li>
        <li>{items.price}</li>
      </ul>

      )
      
    })}
    </>
  );
};


export default ProductItems
