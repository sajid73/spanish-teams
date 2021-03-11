import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { useEffect, useState } from 'react';
import Home from './components/Home/Home';
import TeamDetails from './components/TeamDetails/TeamDetails';
import NoMatch from './components/NoMatch/NoMatch';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [teams, setTeams] = useState([]);
  useEffect(() => {
    fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?s=Soccer&c=Spain')
      .then(res => res.json())
      .then(data => { setTeams(data.teams) })
  }, [])

  return (
    <Router>
      <Switch>
        <Route path="/home">
          <Home teams={teams}></Home>
        </Route>
        <Route path="/team/:idTeam">
          <TeamDetails></TeamDetails>
        </Route>
        <Route exact path="/">
          <Home teams={teams}></Home>
        </Route>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;