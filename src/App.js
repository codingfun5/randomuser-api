
import { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    person: null
  }
  async componentDidMount() {
    const url = "https://api.randomuser.me/";
    const response = await fetch(url);
    const data = await response.json();
    
this.setState({person: data.results[0]})
    }
    render() {
  return (
    <div className="App">
     {!this.state.person ? <p>Loading...</p> :
     <div>

      <img className='picture' src={this.state.person.picture.large} width="150px" alt = "person"/>
      <p className='first'>Name: {this.state.person.name.first} {this.state.person.name.last}</p>
      <p>Age: {this.state.person.dob.age}</p>
      <p>Email: {this.state.person.email}</p>
      <p>Location: {this.state.person.location.country}</p>
      <p> Phone: {this.state.person.phone}</p>
      
      </div>
    }
       
        
     
    </div>
  );
}
}
export default App;
