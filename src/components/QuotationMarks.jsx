import React from 'react';
import icon from './svg/left-quote.png'
// 

const QuotationMarks = ({indexColors}) => {
    const colors = ['#845EC2', '#D65DB1' , '#FF6F91' , '#FF9671' , '#FFC75F', '#F9F871']
    return (
        <div className='marks' style={{background: colors[indexColors]}}>
           <img className='quoteM' src={icon} alt="QuotationMarkIcon"  /> 
        </div>
    );
};

export default QuotationMarks;



