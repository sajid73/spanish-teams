import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import TeamList from './components/TeamList/TeamList';
import { useEffect, useState } from 'react';
import { CardDeck } from 'react-bootstrap';
import Header from './components/Header/Header';

function App() {
  const [teams, setTeams] = useState([]);
  useEffect(() => {
    fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?s=Soccer&c=Spain')
    .then(res => res.json())
    .then(data => {setTeams(data.teams)})
  },[])
  // useEffect(()=>{
  //   fetch('https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=133604')
  //   .then(res=> res.json())
  //   .then(data => console.log(data))
  // },[])
    
  return (
    <div className="App">
      <img src='images/stad.jpg' ></img>
      <CardDeck style={{margin: 'auto'}}>
      {
        teams.map(team => <TeamList team={team}></TeamList>)
      }
      </CardDeck>
      <Router>
      <div>
        <Switch>
          
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
