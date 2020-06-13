import React from 'react';

const Preview = (props) => {
    const text=props.text.split('');

    const displayText=text.map((s,i)=>{
        let color;
        if(i<props.userInput.length){
           color= s===props.userInput[i]?'#90EE90':'#F08080';
        }
        return <span className="f6 f5-ns lh-copy measure" key={i} style={{backgroundColor:color}}>{s}</span>
    });

    return (
        <article className="center mw5 mw6-ns br3 hidden ba b--black-10 mv4">
            <div className="pa3 b--black-10">{displayText}</div>
        </article>
    );
}
export default Preview;