import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Preloader from '../preloader/preloader';
import './TeamDetails.css'
import '../../img/male.png'
import '../../img/female.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook,faYoutube,faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faMars,faFutbol,faFlag } from '@fortawesome/free-solid-svg-icons';


const TeamDetails = () => {
    const {teamId} = useParams()
    const [details, setDetails] = useState([]);
    const [gender, setGender] = useState([]);
    
    useEffect(()=>{
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`;
    fetch(url)
    .then(res=>res.json())
    .then(data=> {setGender(data.teams[0].strGender)
        setDetails(data.teams)})
    },[teamId])
    

    return (
        <div>
            { details.length === 0 && (<Preloader/>)}
            
            { 
                details.map(team => <div key = {team.idTeam} className="detailsPage">
                        <div className="banner" style={{
                                    backgroundImage: `linear-gradient(
                                    180deg,
                                    rgba(0, 36, 51, 1) 0%,
                                    rgba(98, 218, 255, 0.164) 100%
                                    ),url(${(team.strStadiumThumb)})`,}}>
                            <img  src={team.strTeamBadge} alt="" />
                        </div>
                        <div style={{background:`linear-gradient(270deg, rgba(0,67,117,1) 0%, rgba(35,128,187,1) 30%, rgba(0,255,252,1) 100%)`}} className="container d-flex justify-content-between p-4 about">
                            <div className="information">
                                <h3>{team.strAlternate}</h3>
                                <h5><FontAwesomeIcon icon={faFlag} /> Country: {team.strCountry}</h5>
                                <h5><FontAwesomeIcon icon={faFutbol} /> Sport Type: {team.strSport}</h5>
                                <h5><FontAwesomeIcon icon={faMars} /> Gender: {team.strGender}</h5>
                            </div>
                            <div className="image">
                                {gender && gender == "Male" ?<img className="img-fluid align-items-start" src="https://punditfeed.com/wp-content/uploads/2020/06/Brazil-football-team-2016-Olympics.jpg" alt="" /> : <img src="https://media-eng.dhakatribune.com/uploads/2019/03/unnamed-1552566516218.jpg" alt="" />}
                                    
                            </div>
                        </div>
                        <div className="container m-auto pt-5 text" >
                            <p>{team.strDescriptionEN}</p>
                            <p>{team.strStadiumDescription}</p>
                        </div>
                        <div className="container">
                            <div>
                                <button>
                                    <a href={team.strTwitter}><FontAwesomeIcon className="icon" icon={faTwitter} target="_blank"/></a>
                                </button>
                                <button>
                                    <a href={team.strYoutube}><FontAwesomeIcon className="icon" icon={faYoutube} target="_blank"/></a>
                                </button>
                                <button>
                                    <a href={team.strFacebook} target="_blank"><FontAwesomeIcon className="icon" icon={faFacebook}/></a>
                                </button>
                            </div>
                        </div>
                        
                        
                </div>
                )
            }
        </div>
    );
};

export default TeamDetails;