import React from 'react';
import { Button } from './Button';
import   './MainSection.css';
import '../App.css';

function MainSection() {
    return (
        <div className="main-container">
            <video src="/video/star.mp4" autoPlay loop muted/>
            <h1>SSBC</h1>
            <p>shree SiddhaBaba Computers</p>
            <div className="main-btns">
                <Button className="btns" buttonSize="btn--large" buttonStyle="btn--outline">
                    GET STARTED
                </Button>


                <Button className="btns" buttonSize="btn--large" buttonStyle="btn--primary"  onClick={console.log('hey')}>
                    hello there!!!
                </Button>

                </div>           
        </div>
    );
}

export default MainSection;
