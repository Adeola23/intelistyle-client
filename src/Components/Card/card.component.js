import React from 'react'
import './card.style.css'

const Card = ({item}) =>{

    return (
        <div className="Card">
            <div className={'card-container'}>
                <img src={item.image_urls[0]} alt="garments"/>
                <h1 className={'img-h1'}>{item.product_title}</h1>
                <h2 className={'img-h2'}>{item.price} usd</h2>
            </div>


        </div>
    )
}

export default Card