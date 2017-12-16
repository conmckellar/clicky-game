import React, { Component } from 'react';
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Counter from "./components/Counter";
import friends from "./friends.json";
import './App.css';

class App extends Component {

  // Setting this.state.friends to the friends json array
  state = {
    friends: friends,
    clickedIds: [],
    //score: 0,
    topScore: 0
  };

  //.indexOf(variable)


  handleClick = id => {

	// get clicked id
	// if not in array -> 
	// 	add to array and 
	//	shuffle by Math.floor/Math.random. for loop randomize
	//	increment score
	// if is in array -> 
	// 	check if top score
	//	set score to 0
	
  	let added = this.state.clickedIds;
  	added.push(id);

  	console.log(added);

 
  	this.setState({
  		clickedIds: added
  	});

  	let points = this.state.score;

  	//{this.handleIncrement()};

  	//I just want to call a function... but nothing I've tried works.
  };


  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Clicky Game</h1>
        </header>
        <p className="App-intro">
			To gain points, click images you haven't clicked before in the same round!
        </p>
        <p className="App-intro">
        	The pictures jumble after every click, so it's harder than it appears! Try for all 16!
        </p>
        <Counter />
        <Wrapper>
        {this.state.friends.map(friend => (
          <FriendCard
            handleClick={this.handleClick}
            handleIncrement={this.handleIncrement}
            id={friend.id}
            key={friend.id}
            image={friend.image}
          />
        ))}
      </Wrapper>
      </div>
    );
  }
}

export default App;
