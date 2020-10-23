import React from 'react'
import CardItem from './CardItem';
import './Cards.css';
function Cards() {
    return (
        <div className="cards">
            <h1> check out the latest laptops!!</h1>
            <div className="cards__container">
                <div className="cards__Wrapper">
                    <ul className="cards__items">
                        <CardItem src="images/mohit.jpg"
                        text="dell insparon 7000 series"
                        label= "New Arravial"
                        path="/services"
                        />

                        <CardItem src="images/mohit.jpg"
                        text="dell insparon 7000 series"
                        label= "New Arravial"
                        path="/services"
                        />


                        <CardItem src="images/mohit.jpg"
                        text="ASUS"
                        label= "New Arravial"
                        path="/services"
                        />
                         <CardItem src="images/mohit.jpg"
                        text="dell insparon 7000 series"
                        label= "New Arravial"
                        path="/services"
                        />
                         <CardItem src="images/mohit.jpg"
                        text="dell insparon 7000 series"
                        label= "New Arravial"
                        path="/services"
                        />      
                        
                    </ul>    
                </div>
            </div> 
        </div>
    )
}

export default Cards
