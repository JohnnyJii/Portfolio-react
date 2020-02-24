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
                        <p>HTML/CSS | Javascript | Bootstrap | jQuery | React | Java | Python </p>
                        </div>  
                        <div className="social-links">
                            {/* Linkedin, Facebook, Github, Instagram links */}
                            <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-linkedin" aria-hidden="true" />
                            </a>
                            <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-facebook" aria-hidden="true" />
                            </a>
                            <a href="http://google.com" rel="noopener noreferrer" target="_blank">
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