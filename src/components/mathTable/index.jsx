import React from "react";

import { TextBox } from "../input";
import {
  StyledNavList,
  StyledListItem,
  MathBody,
  Exit,
  Close,
  Variable,
  BoxWrapper,
  SmallText,
  MathHeader,
} from "./mathTableStyling";

//const re = /^[0-9\b]+$/;

export class MathTable extends React.Component {
  constructor(props) {
    super(props);
    console.log("consturctor");
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
      unsavedInputNumber: parseInt(event.target.value) || undefined,
    });
    //If this state is undefined -> turn the box red
  }

  handleSubmit(event) {
    console.log("submitted");
    const { unsavedInputNumber, inputNumbers } = this.state;
    const isInputDuplicated = this.checkDuplicates(unsavedInputNumber);

    if (unsavedInputNumber && !isInputDuplicated) {
      // && re.test(unsavedInputNumber)) {
      this.setState({
        inputNumbers: [...inputNumbers, unsavedInputNumber],
        unsavedInputNumber: "",
        display: true,
      });
    } else if (unsavedInputNumber && isInputDuplicated) {
      this.bringToAttention(unsavedInputNumber);
      this.setState({
        unsavedInputNumber: "",
      });
    }
    console.log(inputNumbers);
    //this.reshuffle();
  }

  checkDuplicates(value) {
    if (this.state.inputNumbers.includes(value)) {
      return true;
    }
    return false;
  }

  bringToAttention(value) {
    const array = this.state.inputNumbers;
    let newArr;
    for (var i = 0; i < array.length; i++) {
      if (array[i] === value) {
        newArr = array.splice(i, 1);
        array.unshift(newArr[0]);
        this.setState({
          inputNumbers: array,
        });
        break;
      }
    }
  }

  createTextBox() {
    return (
      <TextBox
        value={this.state.unsavedInputNumber}
        onChange={this.handleChange}
        onSubmit={this.handleSubmit}
      />
    );
  }

  createMultiplicationCard(number) {
    const { display } = this.state;
    // No input, no answers...
    var itterate = 1;
    let displayArray;

    const answers = [];
    //return all the answers
    for (let i = 1; i <= 12; i++) {
      answers.push(number * i);
    }

    if (display) {
      displayArray = answers.map(function (arrayAnswers) {
        return (
          <StyledListItem>
            {" "}
            {number} X {itterate++} = {arrayAnswers}
          </StyledListItem>
        );
      });
    }
    return displayArray;
  }

  removeMultiplicationCard(n) {
    const sliced = this.state.inputNumbers.slice();
    sliced.splice(n, 1);
    this.setState({
      inputNumbers: sliced,
    });
  }

  render() {
    const { inputNumbers } = this.state;
    return (
      <>
        <MathHeader>Multiplication Table</MathHeader>
        <MathBody>
          {this.createTextBox()}
          {inputNumbers && inputNumbers.length > 0 ? (
            <BoxWrapper>
              {inputNumbers.map((num, i) => {
                const n = i;
                return (
                  <StyledNavList draggable="true">
                    <Exit>
                      <Variable>{num}</Variable>
                      <Close onClick={() => this.removeMultiplicationCard(n)}>
                        X
                      </Close>
                    </Exit>

                    {this.createMultiplicationCard(num)}
                  </StyledNavList>
                );
              })}
            </BoxWrapper>
          ) : (
            <SmallText>Enter a number to see the times tables!</SmallText>
          )}
        </MathBody>
      </>
    );
  }
}
