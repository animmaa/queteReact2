import logo from './logo.svg';
import './App.css';
import DisplayEmployee from './components/DisplayEmployee';
import DisplaySimpson from './components/SimpsonChara';
import { useState } from 'react';
import axios from 'axios';

/* const sampleEmployee = {
  gender: 'male',
  name: {
    first: 'Charlie',
    last: 'Thompson',
  },
  location: {
    street: {
      number: 761,
      name: 'Tay Street',
    },
    city: 'Timaru',
    postcode: 76111,
  },
  email: 'charlie.thompson@example.com',
  picture: {
    medium: 'https://randomuser.me/api/portraits/med/men/40.jpg',
  },
}; */

const sampleSimpson = {
  quote: "I think women and seamen don't mix",
  character: "Waylon Smithers",
  image: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FWaylonSmithers.png?1497567511840",
  characterDirection: "left"
}

function App() {
  const [simpsons, setSimpson] = useState(sampleSimpson);

  const getSimpsons = () => {
    axios
    .get("https://simpsons-quotes-api.herokuapp.com/quotes")
    .then((response) => response.data)
    .then((data)=> setSimpson(data[0]))
    
    }

    return (
      <div className="App">
        <DisplaySimpson simpsons={simpsons} />
        <button type="button" onClick={getSimpsons}>change card</button>

      </div>
    )
  }



/* 
function App() {
  const [employee, setEmployee] = useState(sampleEmployee);
  
  const getEmployee = () => {
    axios
    .get('https://randomuser.me/api?nat=en')
    .then((response) => response.data)
    .then((data) => {
      setEmployee(data.results[0])
    })
  }

  return (
    <div className="App">
      <DisplayEmployee employee={employee} />
      <button type="button" onClick={getEmployee}>Get employee</button>
    </div>
  );
} 
 */




export default App;
