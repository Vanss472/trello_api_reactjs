import React, { Component } from 'react';
import axios from 'axios';
import * as Constants from '../constants';

class Cards extends Component {
  state = {
    cards: []
  }

  componentDidMount() {
    const url = `${Constants.API_URL}/1/lists/${Constants.LISTS_ID}/cards/?fields=name,labels&key=${Constants.API_KEY}&token=${Constants.API_TOKEN}`;
    axios.get(url).then(response => response.data)
    .then((data) => {
      this.setState({ cards: data })
      console.log(this.state.cards);
    })
  }

  render() {
    return (
      <div className="card">
        {this.state.cards.map((card) => (
          <div className="callout card-section" key={card.id}>
            {card.name}
            <span>{card.labels.name}</span>
            <button type="button" className="success button">Complete</button>
          </div>
        ))}
      </div>
    )
  }
}

export default Cards;
