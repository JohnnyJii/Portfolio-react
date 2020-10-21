import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl'
import Merirosvo from '../img/merirosvo.jpg'

class LandingPage extends Component {
    render() {
        return (
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img 
                            src={Merirosvo}
                            className="avatar-img"
                            alt="Tas mää ny olen"/>
                        <div className="avatar-img-text">
                            <h1>Web developer</h1>    
                        <hr/>
                        <p> Javascript | Bootstrap | jQuery | React | Java | Json | ThreeJS</p>
                        </div>  
                        <div className="social-links">
                            {/* Linkedin, Facebook, Github, Instagram links */}
                            <a href="https://www.linkedin.com/in/jukka-juntunen" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-linkedin" aria-hidden="true" />
                            </a>
                            <a href="http://facebook.com/johwilde" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-facebook" aria-hidden="true" />
                            </a>
                            <a href="https://www.instagram.com/johnnyjii" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-instagram" aria-hidden="true" />
                            </a>
                            <a href="http://wwww.github.com/Jukka-Jii" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-github" aria-hidden="true" />
                            </a>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default LandingPage;