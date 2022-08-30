import React, { useState } from 'react';
import iconNext from './svg/arrow-right.png'


const Button = ({ cardChange, indexColors }) => {
    const colors = ['#845EC2', '#D65DB1' , '#FF6F91' , '#FF9671' , '#FFC75F', '#F9F871']
    return (
        <button onClick={cardChange} style={{background: colors[indexColors]}}>
            <img className='next' src={iconNext} alt="nextIcon" />
        </button>
    );
};

export default Button;



