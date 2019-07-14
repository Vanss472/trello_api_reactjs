import React, { Component } from 'react';
import axios from 'axios';
import * as Constants from './constants';

class App extends Component {
	state = {
		boardLists: []
	}

	componentDidMount() {
		const url = `${Constants.API_URL}/1/boards/${Constants.BOARD_ID}/lists/?fields=name,color,url&key=${Constants.API_KEY}&token=${Constants.API_TOKEN}`;
		axios.get(url).then(response => response.data)
		.then((data) => {
			this.setState({ boardLists: data })
			console.log(this.state.boardLists);
		})
	}

  render() {
		return (
			<div className="row small-up-1 medium-up-2 large-up-3">
				{this.state.boardLists.map((list) => (
					<div className="column">
						<div className="callout">
							<h2>{list.name}</h2>
						</div>
					</div>
				))}
			</div>
		);
	}
}

export default App;
