import React  from 'react'
import Card from "../Card/card.component"
import './cardlist.style.css'

const CardList = ({garments, isLoading}) =>{


    return (
        <div className="CardList">
            {
                garments.map(item => (
                    <Card key={item.id} item={item} isLoading={isLoading}/>
                ))
            }


        </div>
    )
}

export default CardList