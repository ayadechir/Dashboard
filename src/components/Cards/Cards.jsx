import React from 'react';
import './Cards.css';
import { CardsData } from '../../Data/Data';

const Cards = () => {
  return (
    <div className="Cards">
    {CardsData.map((card, id)=>{
        return(
            <div className="parentContainer">
                <Cards
                title = {card.title}
                color ={card.color}
                barValue={card.barValue}
                value={card.value}
                png={card.png}
                series={card.series}


                />
            </div>
        )
    })}
    </div>
  )
}

export default Cards