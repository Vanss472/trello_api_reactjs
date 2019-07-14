import React, { Component } from 'react';
import axios from 'axios';
import * as Constants from './constants';

class App extends Component {
	state = {
		boards: []
	}

	componentDidMount() {
		const url = `${Constants.API_URL}/1/boards/${Constants.BOARD_ID}/lists/?fields=name,color,url&key=${Constants.API_KEY}&token=${Constants.API_TOKEN}`;
		axios.get(url).then(response => response.data)
		.then((data) => {
			this.setState({ boards: data })
			console.log(this.state.boards);
		})
	}

  render() {
		return (
			<div className="row small-up-1 medium-up-2 large-up-3">
				{this.state.boards.map((label) => (
					<div className="column">
						<div className="callout">
							<p>{label.name}</p>
							<p>{label.color}</p>
						</div>
					</div>
				))}
			</div>
		);
	}
}

export default App;
