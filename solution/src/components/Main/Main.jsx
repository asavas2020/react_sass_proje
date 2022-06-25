import "./Main.scss";
import {data} from "../../helpers/data";
import Card from "./Card"
import React from 'react'

const Main = () => {
  return (
    <div className='card-container'>
        {data.map((item,index) => <Card{...item} key={index} />)}

       {/* {data.map((item) =>{
        const {id, image, title, desc} = item
        return(
            <div className="cards">
                <h1>{title}</h1>
                <img src={image} alt="" />
                <p>{desc}</p>
            </div>
        )
       })} */}
       </div>
  )
}

export default Main