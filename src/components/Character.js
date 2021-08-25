import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

class Character extends React.Component {


    render() {
        return (
            <>
              
                    <button
                        onClick={this.props.handleClick}>FAV
                    </button>
                
                <img src={this.props.image} />

                <p>{this.props.name}</p>
                <p>{this.props.title}</p>

            </>

        )
    }
}

export default Character