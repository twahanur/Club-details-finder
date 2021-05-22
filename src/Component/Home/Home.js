import React, { useEffect, useState } from 'react';
import Preloader from '../preloader/preloader';
import TeamList from '../TeamList/TeamList';
import './home.css'

const Home = () => {
    const [team, setTeam] = useState([])
    useEffect(() =>{
    
        const url = 'https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League'
        fetch(url)
        .then(res => res.json())
        // .then(data => console.log(data.teams))
        .then(data => {
            setTeam(data.teams)
            
        })
    },[])
    console.log(team)
    return (
       <div className="homePage">
           
            <div className="container">
                    <div className="row d-flex">
                    {
                        team.length === 0 && (<Preloader></Preloader>)
                    }
                    {

                    team.map(tm =><TeamList key = {tm.idTeam} tm = {tm}></TeamList>)
                    }

           
                    </div>
            </div>
       </div>
    );
};

export default Home;