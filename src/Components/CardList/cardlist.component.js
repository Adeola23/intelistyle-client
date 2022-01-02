import React  from 'react'
import Card from "../Card/card.component"
import './cardlist.style.css'

const CardList = ({garments}) =>{


    return (
        <div className="CardList">
            {
                garments.map(item => (
                    <Card key={item.id} item={item}/>
                ))
            }


        </div>
    )
}

export default CardList