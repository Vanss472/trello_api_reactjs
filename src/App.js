import React, { Component, Fragment } from 'react';
import axios from 'axios';
import * as Constants from './constants';
import Cards from './cards';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boardLists: [],
      completed: false
    }
  }

	componentDidMount() {
		const url = `${Constants.API_URL}/1/lists/${Constants.LISTS_ID}/?fields=name&key=${Constants.API_KEY}&token=${Constants.API_TOKEN}`;
		axios.get(url).then(response => response.data)
		.then((data) => {
			this.setState({ boardLists: data })
			console.log(this.state.boardLists);
    })
  }

  completedTask = () => {
    console.log('clicked');
    this.setState({ completed: true })
  }

  render() {
		return (
      <Fragment>
			<div className="row small-up-1 medium-up-2 large-up-3">
        <div className="column">
          <h2>{this.state.boardLists.name}</h2>
          <Cards onClickHandler={this.completedTask} />
        </div>
        <div className="column">
          <h2>For Review</h2>

          {
            this.state.completed ?
            <Cards /> : null
          }
        </div>
			</div>
      </Fragment>
		);
	}
}

export default App;
