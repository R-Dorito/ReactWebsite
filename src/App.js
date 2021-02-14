import React from 'react';
import styled from 'styled-components'

import { Game } from './Game';
import { ToDo } from './Game/ToDo'
import { NavBar } from './components/navBar'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const StyledNavList = styled.ul`
  list-style-type: none;
`;

const StyledListItem = styled.li`

` 

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/game">
            <Game />
          </Route>
          <Route path="/todo">
            <ToDo />
          </Route>
          <Route path="/users">
            <MathTable />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

class MathTable extends React.Component {

  constructor(props){
    super(props);
    console.log("consturctor")
    this.state = {
      inputVal: '',
      unsavedInputVal: '',
      display: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(input) {
    const re = /^[0-9\b]+$/;
    if (re.test(input.target.value)) {
      this.setState({
        unsavedInputVal: input.target.value
      })
    }
    
    if (input.target.value === '' ) {
      // this.setState({
      // display: !this.state.display,
      // })
    }
  }

  handleSubmit(ev) {
    this.setState({
      display: true,
      inputVal: this.state.unsavedInputVal,
    })
    ev.preventDefault();
  }

  multiplication () {
    // No input, no answers...
    const inputValue = (this.state.inputVal || 0);

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
      results= this.multiplication();
    } 
    
    return(
      <div>
        {this.createTextBox()}
        <StyledNavList>
          {results}
        </StyledNavList>
      </div>
    )
  }
}

export default App;
