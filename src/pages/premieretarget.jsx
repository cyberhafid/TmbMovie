import React from 'react';
import axios from 'axios';
import Cardmovie from '../components/content/Card';



export default class Premiere extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
        isHover: false,
        persons: []
    };

    this.onMouseEnterHandler = this.onMouseEnterHandler.bind(this);
    this.onMouseLeaveHandler = this.onMouseLeaveHandler.bind(this);

    this.handleClick = this.handleClick.bind(this);
}



  handleClick(event) {
    const id = event.target.id;
    console.log(id);
  }


  onMouseEnterHandler(event) {
    if (event.target.name === this.isHover) {
      this.setState({
        
        isHover: true
      });
    }
  }

  
cconMouseEnterHandler() {
  
  this.setState({
      isHover: true
  });
}

onMouseLeaveHandler() {
  this.setState({
      isHover: false
  });
}

  componentDidMount() {
    axios.get(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${process.env.REACT_APP_API_KEY}`)
      .then(res => {
        const persons = res.data.results;
        this.setState({ persons });
      })
  }





  

  render() {
    return (
      <div>
        { this.state.persons.map((person,idx) => 
          <div className="icon"  id={idx} onMouseEnter={this.onMouseEnterHandler} onMouseLeave={this.onMouseLeaveHandler}>
          {
              this.state.isHover
                  ? <div>{person.id}</div>
                  : <div>some text</div>
          } 
           
       </div>
            
        )}
      </div>
    )
  }
}





/*
  <div className="icon" onMouseEnter={this.onMouseEnterHandler} onMouseLeave={this.onMouseLeaveHandler}>
           {
               this.state.isHover
                   ? <div>{person.id}</div>
                   : <div>some text</div>
           } */

/*
  <button id={idx} onClick={this.handleClick}>Button</button>
                    <div  id={idx} onClick={this.handleClick}>{person.id}</div>*/