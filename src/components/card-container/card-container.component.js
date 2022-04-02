import { Component } from "react";
import './card-component.css'



class CardContainer extends Component {
      render() { 
           

            return (
                  <div className="card-container" key={this.props.id}>
                        <img src={`https://robohash.org/${this.props.id}?set=set2&size=100x100`} alt={this.props.name} />
                        <h2>{this.props.name}</h2>
                        <p>{this.props.email}</p>
                  </div>
            )
      }
}

export default CardContainer