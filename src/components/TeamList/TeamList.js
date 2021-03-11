import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from '@material-ui/core';
import React from 'react';
import { Card } from 'react-bootstrap';
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css';

const TeamList = (props) => {
    const { idTeam, strTeam, strTeamBadge, strSport } = props.team
    const history = useHistory();
    const teamDetails = (idTeam) => {
        history.push(`/team/${idTeam}`)
    }
    const cardStyle = {
        width: '25rem',
        backgroundColor: 'whitesmoke',
        float: 'left',
        margin: '5%',
        marginRight: '2%',
        padding: '1%'
    }
    return (
        <div>
            <Card style={cardStyle}>
                <Card.Img variant='top' src={strTeamBadge} style={{ width: '15rem' }} />
                <Card.Body>
                    <Card.Title>{strTeam}</Card.Title>
                    <Card.Text>Sports Type: {strSport}</Card.Text>
                    <Button onClick={() => teamDetails(idTeam)} variant="contained" color="primary">
                        Explore  <FontAwesomeIcon icon={faArrowAltCircleRight} />
                    </Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default TeamList;