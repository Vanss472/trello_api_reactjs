import React, { Component } from 'react';
import axios from 'axios';
import * as Constants from '../constants';

class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
      completed: false
    }
  }

  componentDidMount() {
    const url = `${Constants.API_URL}/1/lists/${Constants.LISTS_ID}/cards/?fields=name,labels&key=${Constants.API_KEY}&token=${Constants.API_TOKEN}`;
    axios.get(url).then(response => response.data)
    .then((data) => {
      this.setState({ cards: data })
      // this.setState({ cards: data.map(card => {
      //   const completed = card.completed = false
      //   const updatedCard = {...card, completed}
      //     return updatedCard
      //   })
      // })
      console.log(data);
    })
  }

  onClickHandler = (id) => {
    return () => {
      console.log(id);
      console.log('clicked');
      // console.log(this.state.cards);
      // this.state.cards.map(card => {
      //   if (card.id === id) {
      //     // console.log(card.id);
      //     // console.log(id);
      //     return this.setState(prevState => ({
      //       completed: true
      //     }))
      //   } else {
      //     return card
      //   }
      // })
    }
  }

  render() {
    return (
      <div className="card">
        {this.state.cards.map((card, index) => (
          <div className="callout card-section" data-index={index} key={card.id}>
            {card.name}
            <span>{card.labels.name}</span>
            <button
              id={card.id}
              onClick={this.onClickHandler(card.id)}
              type="button"
              className={`button ${this.state.completed ? `success` : null}`}>
                Complete
            </button>
          </div>
        ))}
      </div>
    )
  }
}

export default Cards;
