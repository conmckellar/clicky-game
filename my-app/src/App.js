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
      score: 0,
      topscore: 0
    }


  //.indexOf(variable)

  shuffle = () => {
    let friends = this.state.friends.slice();
    //shuffle by Math.floor/Math.random. for loop randomize(!)
    let randomIndex = null;

    let friendShuffle = [];
    let randomIndexes = [];

    while (randomIndexes.length < friends.length - 1) {
      console.log(randomIndexes);
      randomIndex = Math.floor(Math.random()*(friends.length - 1));

        if (!randomIndexes.includes(randomIndex)) {
          randomIndexes.push(randomIndex);
        }

    }

    console.log(randomIndexes);

    for (let i = 0; i < friends.length - 1; i++) {
      friendShuffle.push(friends[randomIndexes[i]])
    }

    //if we have an array with a fixed element,
    //we want to write a function that will assemble a new array.
    //need the length of that array, math.random on it (-1 so we can have a corresponding index)
    //math.random, then math.floor
  }

  handleClick = id => {

    this.shuffle();

  	let added = this.state.clickedIds;

    if (added.indexOf(id) == -1) {
        //image was never previously clicked
    	added.push(id);
        //add the image id to the array
    	console.log(added);
   
    	this.setState({
    		clickedIds: added,
        score: 1+this.state.score
    	});

      console.log(this.state.score);
    	
  	} else {
      this.setState({
        clickedIds: [],
        score: 0,
        topscore: (this.state.score > this.state.topscore) //ternary operator sweetness. Alternative "if" statement.
         ? this.state.score
         : this.state.topscore
      })
    }
  }


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
        	The pictures jumble after every click, so it's harder than it appears! Try for all 12!
        </p>
        <Counter 
          score={this.state.score}
          topscore={this.state.topscore}
        />
        <Wrapper>
        {this.state.friends.map(friend => (
          <FriendCard
            handleClick={this.handleClick}
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
