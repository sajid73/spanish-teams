import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import male from '../../images/male.png'
import female from '../../images/female.png';
import twitter from '../../images/Twitter.png';
import facebook from '../../images/Facebook.png';
import youtube from '../../images/YouTube.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlag, faFutbol, faMapMarkerAlt, faMars } from '@fortawesome/free-solid-svg-icons';
import Header from '../Header/Header';

const TeamDetails = () => {
    const { idTeam } = useParams();
    const [team, setTeam] = useState({})
    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`)
            .then(res => res.json())
            .then(data => setTeam(data.teams[0]))
    })
    let { strGender, strTeam, strStadiumThumb, intFormedYear, strSport, strCountry, strDescriptionEN, strStadiumDescription, strTwitter, strFacebook, strYoutube } = team
    strTwitter = 'https://' + strTwitter;
    strFacebook = 'https://' + strFacebook;
    strYoutube = 'https://' + strYoutube;

    let teamImg
    console.log(team);
    if (strGender == 'Male') {
        teamImg = male
    }
    else {
        teamImg = female
    }
    return (
        <div className="justify-content-md-center" style={{ backgroundColor: 'greenyellow' }}>

            <Header banner={strStadiumThumb} />

            <Container style={{ backgroundColor: 'darkkhaki', margin: 'auto', margin: '10px auto', padding: '15px', borderRadius: '15px' }} >
                <Row>
                    <Col sm={7} style={{ color: 'white',paddingLeft: '10px' }}>
                        <div style={{paddingLeft: '40px'}}>
                            <h1>{strTeam}</h1>
                            <p><FontAwesomeIcon icon={faMapMarkerAlt} /> Founded: {intFormedYear}</p>
                            <p><FontAwesomeIcon icon={faFlag} /> Country: {strCountry}</p>
                            <p><FontAwesomeIcon icon={faFutbol} /> Sports type: {strSport}</p>
                            <p><FontAwesomeIcon icon={faMars} /> Gender: {strGender}</p>
                        </div>
                    </Col>
                    <Col sm={5}>
                        <img src={teamImg} width="100%" />
                    </Col>
                </Row>
            </Container>

            <Container>
                <p>{strDescriptionEN}</p>
                <p>{strStadiumDescription}</p>
            </Container>

            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <a target="_blank" href={strTwitter}><img style={{ width: '50px', margin: '15px' }} src={twitter}></img></a>
                <a target="_blank" href={strFacebook}><img style={{ width: '50px', margin: '15px' }} src={facebook}></img></a>
                <a target="_blank" href={strYoutube}><img style={{ width: '50px', margin: '15px' }} src={youtube}></img></a>
            </div>
        </div>
    );
};

export default TeamDetails;