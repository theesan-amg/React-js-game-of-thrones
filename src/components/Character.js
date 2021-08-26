import React from 'react'

class Character extends React.Component {
	render() {
    const isFavorite = this.props.favorites.find((favorite) => {
      return (
        favorite.fullName === this.props.name
      )
    })

		return(
      <div className={`grid-item ${isFavorite ? 'favorite' : ''}`}>
        <div>
          <img src={this.props.image} alt={this.props.name} />
          <h3>{this.props.name}</h3>
        </div>
        <p>{this.props.title}</p>
        <button
          onClick={() => {
            this.props.toggleFavorite(this.props.name)
          }}
        >
          {isFavorite ? 'Enlever des favoris' : 'Ajouter aux favoris'}
        </button>
      </div>
		)
	}
}

export default Character