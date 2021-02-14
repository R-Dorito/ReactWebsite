import React from 'react';

import { TextBox } from '../input'
import { StyledNavList, StyledListItem, MathBody, Exit, Close, Variable, BoxWrapper } from './mathTableStyling'

//const re = /^[0-9\b]+$/;

export class MathTable extends React.Component 
{
  constructor(props){
    super(props);
    console.log("consturctor")
    this.state = {
      //inputNumber: '',
      inputNumbers: [],
      unsavedInputNumber: undefined,
      display: false,
      textBoxError: false, 
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      unsavedInputNumber: parseInt(event.target.value) || undefined
    })
    if(event.target.value <= 999 && event.target.value >= 0){
      this.setState({
        textBoxError: !this.state.textBoxError
      })
    }
  }

  handleSubmit(event) {
    console.log("submitted");
    const { unsavedInputNumber, inputNumbers } = this.state;
    if (unsavedInputNumber) {// && re.test(unsavedInputNumber)) {
      this.setState({
        inputNumbers: [...inputNumbers, unsavedInputNumber],
        display: true
      })
    }
  }
  
  drawTextBox() {
    return (
      <TextBox value={ this.state.unsavedInputNumber } onChange={this.handleChange} onSubmit={this.handleSubmit}/>
    )
  }

  multiplication(number) {
    const {display} = this.state;
    // No input, no answers...
    var itterate = 1;
    let displayArray;

    const answers = [];
    //return all the answers
    for(let i = 1; i <= 12; i++){
      answers.push(number * i);
    }
    
    if (display){
      displayArray = answers.map(function(arrayAnswers){
        return <StyledListItem> {number} X {itterate++} = {arrayAnswers}</StyledListItem>
      })
    }
    return displayArray
  }

  removeArray(n){
    const removed = this.state.inputNumbers.splice(n, 1);
    return removed
  }

  render() {
    const { inputNumbers } = this.state;

    return(
      <MathBody>
        {this.drawTextBox()}
        {
          (inputNumbers && inputNumbers.length > 0) ? 
          (
            <BoxWrapper>
              {
                inputNumbers.map((num, i) => {
                  const n = i;
                  return (
                    <StyledNavList>
                      <Exit>
                        <Variable onClick = {this.removeArray(n)}>{num}</Variable>
                        <Close >X</Close>
                      </Exit>
                      
                      {this.multiplication(num)}
                    </StyledNavList>
                  )
                })  
              }
            </BoxWrapper>
          ) :
          <div>Enter a number to see the times tables!</div>
        }
      </MathBody>
    )
  }
}
