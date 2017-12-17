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
  };

  //.indexOf(variable)


  handleClick = id => {

	// get clicked id
	// if not in array -> 
	// 	add to array and 
	//	shuffle by Math.floor/Math.random. for loop randomize
	//	increment score
	// if is in array -> 
	// 	check if top score is higher than previous
	//	set score to 0
	

  	let added = this.state.clickedIds;

    if (added.indexOf(id) == -1) {
        //image was never previously clicked
    	added.push(id);

    	console.log(added);
   
    	this.setState({
    		clickedIds: added,
        score: 1+this.state.score
    	});
      console.log(this.state.score);
    	//{this.handleIncrement()};

  	} else {
      this.setState({
        clickedIds: [],
        score: 0,
        topscore: (this.state.score > this.state.topscore) //ternary operator sweetness
         ? this.state.score
         : this.state.topscore
      })
    }
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
            //handleIncrement={this.handleIncrement}
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
