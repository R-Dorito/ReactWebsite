import React from 'react';

import { TextBox } from '../input'
import { StyledNavList, StyledListItem, MathDisplay, Exit, Close } from './mathTableStyling'

export class MathTable extends React.Component {

    constructor(props){
      super(props);
      console.log("consturctor")
      this.state = {
        inputNumber: '',
        unsavedInputVal: '',
        display: false,
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({
        unsavedInputVal: event.target.value
      })
      console.log("changed: " + this.state.unsavedInputVal);
    }
  
    handleSubmit(event) {
      console.log("submitted");

      const re = /^[0-9\b]+$/;
      if (re.test(this.state.unsavedInputVal)) {
        this.setState({
          inputNumber: this.state.unsavedInputVal
        })
      }
      //event.preventDefault();
    }
  
    multiplication () {
      // No input, no answers...
      const inputValue = (this.state.inputNumber || 0);
  
      var itterate = 1;
      let displayArray;
      
      const answers = [];
      //return all the answers
      for(let i = 1; i <= 12; i++){
        answers.push(inputValue * i);
      }
  
      displayArray = answers.map(function(arrayAnswers){
        return <StyledListItem>{inputValue} X {itterate++} = {arrayAnswers}</StyledListItem>
      })
      
      return displayArray
    }
  
    render(){

      let results = this.multiplication();
      
      return(
        <MathDisplay>
          <TextBox value={ this.state.unsavedInputVal } onChange={this.handleChange} onSubmit={this.handleSubmit}/>
          <StyledNavList>
            <Exit>
              <Close>X</Close>
            </Exit>
            {results}
          </StyledNavList>
        </MathDisplay>
      )
    }
  }