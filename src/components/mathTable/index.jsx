import React from 'react';

import { TextBox } from '../input'
import { StyledNavList, StyledListItem, MathBody, Exit, Close, Variable } from './mathTableStyling'

export class MathTable extends React.Component 
{
  constructor(props){
    super(props);
    console.log("consturctor")
    this.state = {
      //inputNumber: '',
      inputNumbers: [],
      unsavedInputNumber: '',
      display: false,
      textBoxError: false, 
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      unsavedInputNumber: event.target.value
    })
    if(event.target.value <= 999 && event.target.value >= 0){
      this.setState({
        textBoxError: !this.state.textBoxError
      })
    }
  }

  handleSubmit(event) {
    console.log("submitted");

    const re = /^[0-9\b]+$/;
    if (re.test(this.state.unsavedInputNumber)) {
      this.setState({
        inputNumber: this.state.unsavedInputNumber,
        display: true
      })
    }
    //event.preventDefault();
  }
  
  drawTextBox() {
    return (
      <TextBox value={ this.state.unsavedInputNumber } onChange={this.handleChange} onSubmit={this.handleSubmit}/>
    )
  }
  multiplication() {
    // No input, no answers...
    const recievedNumber = (this.state.inputNumber || 0);
    var itterate = 1;
    let displayArray;

    const answers = [];
    //return all the answers
    for(let i = 1; i <= 12; i++){
      answers.push(recievedNumber * i);
    }
    
    if(this.state.display){
      displayArray = answers.map(function(arrayAnswers){
        return <StyledListItem> {recievedNumber} X {itterate++} = {arrayAnswers}</StyledListItem>
      })
    }
    return displayArray
  }

  render() {
    let results = this.multiplication();
    return(
      <MathBody>
        {this.drawTextBox()}
        {
          this.state.inputNumber && (
            <StyledNavList>
              <Exit>
                <Close>X</Close>
              </Exit>
              <Variable>{this.state.inputNumber}</Variable>
              {results}
            </StyledNavList>
          )
        }
      </MathBody>
    )
  }
}
