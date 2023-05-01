import React from 'react';
import Navbar from "../Navbar/Navbar";
import Slider from "../Slider/Slider";
import NavigateButtns from "../NavigateButtons/NavigateButtns";

const Main = () => {
    return (
        <div>
            <Navbar/>
            <Slider/>
            <NavigateButtns/>
        </div>
    );
};

export default Main;