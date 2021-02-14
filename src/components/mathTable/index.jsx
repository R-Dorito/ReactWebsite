import React from 'react';

import { TextBox } from '../input'
import { StyledNavList, StyledListItem, DivCard } from './mathTableStyling'

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
  
    handleChange(input) {
      this.setState({
        unsavedInputVal: input.target.value})
    }
  
    handleSubmit(ev) {
      // this.setState({
      //   display: true,
      //   inputNumber: this.state.unsavedInputVal,
      // })
      const re = /^[0-9\b]+$/;
      if (re.test(ev.target.value)) {
        this.setState({
          inputNumber: this.state.unsavedInputVal
        })
      }
      
      if (ev.target.value === '' ) {
        this.setState({
          unsavedInputVal: 'Enter number'
        })
      }
      ev.preventDefault();
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
      let results; 
      if(this.state.display){
        results = this.multiplication();
      } 
      
      return(
        <DivCard>
          <TextBox value={ this.state.unsavedInputVal || 0 } onChange={this.handleChange} onSubmit={this.handleSubmit}/>
          <StyledNavList>
            {results}
          </StyledNavList>
        </DivCard>
      )
    }
  }