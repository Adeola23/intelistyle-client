import React  from 'react'
import Card from "../Card/card.component"
import './cardlist.style.css'
import ScaleLoader from "react-spinners/ScaleLoader"

const CardList = ({garments, isLoading}) =>{


    return (
        <div className="CardList">
            {
                isLoading ?
                    (<ScaleLoader color={'4A90E2'}  size={60} />)
                    :

                    (
                        garments.map(item => (
                        <Card key={item.id} item={item}/>
                    ))
                    )


            }


        </div>
    )
}

export default CardList