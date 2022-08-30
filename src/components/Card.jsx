import React from 'react';


const Card = ({text1, text2, indexColors}) => {

    const colors = ['#845EC2', '#D65DB1' , '#FF6F91' , '#FF9671' , '#FFC75F', '#F9F871']
    console.log(indexColors)

    return (
        <div className='text' style={{color: colors[indexColors]}}>
            <p className='phrase'>{text1}</p>
            <p className='author'>{text2}</p>
        </div>
    );
};

export default Card;