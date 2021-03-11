import React from 'react';
import { CardDeck } from 'react-bootstrap';
import TeamList from '../TeamList/TeamList';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../Header/Header';
import stadium from '../../images/stad.jpg';
import './Home.css';

const Home = (props) => {
  const { teams } = props
  return (
    <div style={{ backgroundColor: 'greenyellow' }}>
      <Header banner={stadium} />
      <CardDeck className="CardDeckStyle">
        {
          teams.map(team => <TeamList team={team}></TeamList>)
        }
      </CardDeck>
    </div>
  );
};

export default Home;