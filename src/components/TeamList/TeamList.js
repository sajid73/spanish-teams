import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from '@material-ui/core';
import React from 'react';
import { Card } from 'react-bootstrap';
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'

const TeamList = (props) => {
    const { strTeam, strTeamBadge, strSport } = props.team
    // console.log(props.team);
    return (
        <div>
                <Card style={{ width: '25rem', backgroundColor: 'whitesmoke', float: 'left', margin: '1%', padding: '1%'}}>
                    <Card.Img variant='top' src = {strTeamBadge} style={{width: '15rem'}} />
                    <Card.Body>
                        <Card.Title>{strTeam}</Card.Title>
                        <Card.Text>Sports Type: {strSport}</Card.Text>
                        <Button variant="contained" color="primary">Explore  <FontAwesomeIcon style={{padding: '4px'}} icon={faArrowAltCircleRight} /> </Button>
                    </Card.Body>
                </Card>
        </div>
    );
};

export default TeamList;