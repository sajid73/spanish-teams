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
import '../Home/Home.css'

const TeamDetails = () => {
    const { idTeam } = useParams();
    const [team, setTeam] = useState({})
    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`)
            .then(res => res.json())
            .then(data => setTeam(data.teams[0]))
    })
    let { strGender, strTeam, strStadiumThumb, intFormedYear, strSport, strCountry, strDescriptionEN, strStadiumDescription, strTwitter, strFacebook, strYoutube, strTeamBadge } = team
    strTwitter = 'https://' + strTwitter;
    strFacebook = 'https://' + strFacebook;
    strYoutube = 'https://' + strYoutube;

    let teamImg
    if (strGender === 'Male') {
        teamImg = male
    }
    else {
        teamImg = female
    }
    const containerStyle = {
        backgroundColor: 'darkkhaki',
        margin: '10px auto',
        padding: '15px',
        borderRadius: '15px'
    }
    const socialIcon = {
        width: '50px',
        margin: '15px'
    }
    return (
        <div className="justify-content-md-center" style={{ backgroundColor: 'greenyellow' }}>

            <Header banner={strStadiumThumb} />

            <img src={strTeamBadge} width='200px' alt='team badge' className='dynamic' />

            <Container style={containerStyle} >
                <Row>
                    <Col sm={7} style={{ color: 'white', paddingLeft: '10px' }}>
                        <div style={{ paddingLeft: '40px' }}>
                            <h1>{strTeam}</h1>
                            <p><FontAwesomeIcon icon={faMapMarkerAlt} /> Founded: {intFormedYear}</p>
                            <p><FontAwesomeIcon icon={faFlag} /> Country: {strCountry}</p>
                            <p><FontAwesomeIcon icon={faFutbol} /> Sports type: {strSport}</p>
                            <p><FontAwesomeIcon icon={faMars} /> Gender: {strGender}</p>
                        </div>
                    </Col>
                    <Col sm={5}>
                        <img src={teamImg} alt='team image' width="100%" />
                    </Col>
                </Row>
            </Container>

            <Container>
                <p>{strDescriptionEN}</p>
                <p>{strStadiumDescription}</p>
            </Container>

            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <a target="_blank" rel="noreferrer" href={strTwitter}><img style={socialIcon} alt='social media icon' src={twitter}></img></a>
                <a target="_blank" rel="noreferrer" href={strFacebook}><img style={socialIcon} alt='social media icon' src={facebook}></img></a>
                <a target="_blank" rel="noreferrer" href={strYoutube}><img style={socialIcon} alt='social media icon' src={youtube}></img></a>
            </div>
        </div>
    );
};

export default TeamDetails;