import React from 'react'
import Character from "./components/Character"
import 'bootstrap/dist/css/bootstrap.min.css'
import "./styles/Design.css"

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      characters: [],
      favorites : []
    }
  }

  handleFavoriteClick = (e) => {
    console.log(e.target.innerText);
    this.setState({characters: e.target.innerText})
  }


  componentDidMount = () => {
    fetch("https://thronesapi.com/api/v2/Characters")
      .then(result => result.json())
      .then((result) => {
        console.log("Resulatat",result)
        this.setState({characters: result })
      })
  }


  render() {
    console.log(this.state);
    return (
      <>
      <h1>Game of thrones</h1>

     <div>
          {this.state.characters.map((result)  => {

            return (
              <Character 
              isSelected={this.state.favorites === "add"}
              handleClick={this.handleFavoriteClick}
              name={result.fullName} 
              title={result.title} 
              image={result.imageUrl} />
            )
          })}
      </div>
      </>
    )
  }
}

export default App