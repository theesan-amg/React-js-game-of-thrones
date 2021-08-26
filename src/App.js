import React from 'react'
import Character from './components/Character'
import "./styles/Design.css"

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      characters: [],
      continents: [],
      favorites: [],
      activeTab: "personnages"
    }
  }

  componentDidMount() {
    fetch("https://thronesapi.com/api/v2/Characters")
      .then(result => result.json())
      .then(result => this.setState({ characters: result }))

    fetch("https://thronesapi.com/api/v2/Continents")
      .then(result => result.json())
      .then(result => this.setState({ continents: result }))
  }

  toggleFavorite = (name) => {
    // je regarde si mon personnage est dans les favoris
    const favorite = this.state.favorites.find((element) => {
      return (
        element.fullName === name
      )
    })

    const clonedFavorites = [...this.state.favorites]    
    
    if (favorite) {// si mon perso est dans les favoris, je le retire des favoris
      const index = this.state.favorites.findIndex((element => {
        return (
          element.fullName === favorite.fullName
        )
      }))

      clonedFavorites.splice(index, 1)
      this.setState({ favorites: clonedFavorites })
    } else {// si mon perso est pas dans les favoris, je l'ajoute dans les favoris
      const character = this.state.characters.find((element) => {
        return (
          element.fullName === name
        )
      })

      this.setState({ favorites: [...clonedFavorites, character ] })
    }

  }

	render() {
		return(
      <>
        <button onClick={() => { this.setState({ activeTab: "personnages" }) }}>
          Personnages
        </button>
        <button onClick={() => { this.setState({ activeTab: "continents" }) }}>
          Continents
        </button>

        <h1>Game of thrones</h1>

        <div className="grid">
          {this.state.activeTab === 'personnages' ? (
            <>
              {this.state.characters.map((character) => {
                return (
                  <Character
                    name={character.fullName}
                    title={character.title}
                    image={character.imageUrl}
                    toggleFavorite={this.toggleFavorite}
                    favorites={this.state.favorites}
                  />
                )
              })}
            </>
          ) : (
            <>
              {this.state.continents.map((continent) => {
                return (
                  <p>{continent.name}</p>
                )
              })}
            </>
          )}
        </div>
      </>
		)
	}
}

export default App