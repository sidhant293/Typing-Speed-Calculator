import React from 'react';

const Speed=(props)=>{
    if(props.symbols!==0 && props.sec!==0){
        const wpm=(props.symbols/5)/(props.sec/60);
    return(
    <div className='ma4'>Words Per Min:{Math.round(wpm)}</div>
    );
    }
    return (
        <div className='ma4'>Words Per Min:0</div>
    );
}
export default Speed;