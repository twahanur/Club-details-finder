import React from 'react';
import { Link } from 'react-router-dom';
import TeamDetails from '../TeamDetails/TeamDetails';
import './TeamList.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const TeamList = (props) => {
    console.log(props);
    const {idTeam ,strAlternate,strSport,strTeamBadge} = props?.tm;


    //style css properties
     const cardStyle = {
        "min-height":'550px',
        "max-width":'400px',
    }
    return (
        <div className="col-md-3 col-xl-3 col-sm-6 mb-3 " >
                 <div className="card text-center h-100">
                    <img className="card-img-top img-fluid img-thumbnail" src={strTeamBadge} alt={strAlternate} />
                    <div className="card-body">
                    <h3 className="card-text">{strAlternate}</h3>
                    <h6 className="card-title">team id:{idTeam}</h6>
                    <p className="card-text" >Sports type:{strSport}</p>
                    {<Link to={"/teamDetails/" + idTeam}><button className="btn btn-warning"key={idTeam} onClick ={()=>
                    <TeamDetails id = {idTeam} ></TeamDetails>
                    } >Explore <FontAwesomeIcon icon={faArrowRight} /></button></Link>}
                 </div>
            </div>
        </div>
    );
};

export default TeamList;