import './Products.css';
import React from "react";


let srcs=[
    {
        img:"https://m.media-amazon.com/images/S/stores-image-uploads-eu-prod/b/AmazonStores/A21TJRUUN4KGV/213cece81b3019ecd7daf3eb0eaea030.w3900.h2600._CR650%2C0%2C2600%2C2600_SX960_SY960_.jpg",
        name:"Meditation Chair"
    },
    {
        img:"https://m.media-amazon.com/images/S/stores-image-uploads-eu-prod/b/AmazonStores/A21TJRUUN4KGV/213cece81b3019ecd7daf3eb0eaea030.w3900.h2600._CR650%2C0%2C2600%2C2600_SX960_SY960_.jpg",
        name:"Meditation Chair"
    },
    {
        img:"https://m.media-amazon.com/images/S/stores-image-uploads-eu-prod/a/AmazonStores/A21TJRUUN4KGV/056c60cda419ecbd82194a91572e4909.w3467.h2311._CR969%2C0%2C2311%2C2311_SX960_SY960_.jpg",
        name:"Meditation Cushions"
    }, {
        img:"https://m.media-amazon.com/images/S/stores-image-uploads-eu-prod/a/AmazonStores/A21TJRUUN4KGV/f8814670b1eb38c3c605b138cb7cd349.w7360.h4912._SL5000_CR995%2C0%2C4004%2C3336_SX960_SY800_.jpg",
        name:"Sleep Mask"
    },
    {
        img:"https://m.media-amazon.com/images/S/stores-image-uploads-eu-prod/7/AmazonStores/A21TJRUUN4KGV/72f7f09b90ad778b9af5d09c15affaeb.w4891.h3284._CR935%2C0%2C3941%2C3284_SX960_SY800_.jpg",
        name:'Restorative Yoga Prop'
    },
    {
        img:"https://m.media-amazon.com/images/S/stores-image-uploads-eu-prod/d/AmazonStores/A21TJRUUN4KGV/99ff37366600a6a39a0134134ded7eb0.w2500.h1656._CR0%2C195%2C2500%2C1250_SX960_SY480_.jpg",
        name:'Yoga Brick and Belt'
    },
    {
        img:"https://m.media-amazon.com/images/S/stores-image-uploads-eu-prod/d/AmazonStores/A21TJRUUN4KGV/55d16cdae2c9e819b3c1d46040a53495.w600.h397._CR0%2C62%2C600%2C300_SX600_SY300_.jpg",
        name:'Yoga Accessories'
    },
]

const Products = ()=>{
    return(
        <>
        <div id = "products"> 
        {srcs.map(obj=>{
           return(
             <div>
             <img src={obj.img} alt="product" />
             <p>{obj.name}</p>
             </div> )
        })}
        </div>
        </>
    )
}

export default Products;