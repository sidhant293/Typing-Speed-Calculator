import React from 'react';
import Preview from './Preview';
import Speed from './Speed';
import getText from './getText';

const initialState = {
  text: getText(),
  userInput: '',
  symbols:0,
  sec:0,
  started:false,
  finished:false
}

class App extends React.Component {

  constructor() {
    super();
    this.state = initialState;
  }

  onRestart = () => {
    this.setState({
      text: getText(),
      userInput: '',
      symbols:0,
      sec:0,
      started:false,
      finished:false
    });
  }

  onUserInputChange=(event)=>{
    const val=event.target.value;
    this.setTimer();
    this.onFinished(val);
    this.setState({
      userInput:val,
      symbols:this.countSymbols(val)
    });
  }

  onFinished(userInput){
    if(userInput===this.state.text){
      clearInterval(this.interval);
      this.setState({finished:true});
    }
  }

  setTimer(){
    if(!this.state.started){
      this.setState({started:true});
      this.interval=setInterval(()=>{
        this.setState(prevProps=>{
          return {sec:prevProps.sec+1}
        })
      },1000);
    }
  }

  countSymbols(userInput){
    const text=this.state.text.replace(' ','');
    return userInput.replace(' ','').split('').filter((s,i)=>{
     return s===text[i]
    }).length;
  }

  render() {
    return (
      <div className='tc'>
        <h1 className='f1 lh-solid'>Typing Speed Calculator</h1>
        <Preview text={this.state.text} userInput={this.state.userInput}/>
        <textarea className='border-box hover-black w-100 measure ba b--black-20 pa2 br2 mb2' placeholder='Start Typing' value={this.state.userInput} onChange={this.onUserInputChange} readOnly={this.state.finished}>
        </textarea>
        <Speed symbols={this.state.symbols} sec={this.state.sec}/>
        <a className="f6 grow no-underline br-pill ba ph3 pv2 mb2 dib black" href="#0" onClick={this.onRestart}>Reset</a>
      </div>
    );
  }
}

export default App;
