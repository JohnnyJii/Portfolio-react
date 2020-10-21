import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl'
import photo3 from '../img/photo3.jpeg'
import Education from './education'
import Experience from './experience'
import Skills from './skills'

class Resume extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{textAlign: 'center'}}>
                            <img 
                                src={photo3}
                                alt="avatar"
                                style={{height: '200px'}}
                            />    
                        </div>
                        <h2 style={{paddingTop: '2em'}}>Jukka Juntunen</h2>
                        <h4 style={{color: 'grey'}}>Web developer</h4>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}} />
                            <p>Currently working on my thesis and looking for new opportunities.
                            </p>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}} /> 
                        <h5>Address</h5>
                        <p>Krouvikalliontie 3 p 30, 02700 Kauniainen</p>   
                        <p>Uusimaa, Finland</p>
                        <h5>Phone</h5>
                        <p>+358 (0) 40 164 0060</p>
                        <h5>eMail</h5>
                        <p>jukka.juntunen@metropolia.fi</p>
                        <h5>Website</h5>
                        <p>Coming soon</p>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}} />
                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                        <h2>Education</h2>
                        <Education 
                            startYear={2017}
                            endYear={2021}
                            schoolName="Metropolia"
                            schoolDescription="University Of Applied Physics"
                            studyArea="ICT-engineering"
                        />
                        <Education 
                            startYear={2014}
                            endYear={2017}
                            schoolName="Omnia"
                            schoolDescription="Espoon aikuislukio"
                        />
                        <hr style={{borderTop: '3px solid #e22947'}} />
                        <Experience 
                            startYear={2019}
                            endYear={2019}
                            jobName="Web developer"
                            jobDescription="Summerjob"
                            jobArea="Front end developement for 7 veljesta website"
                        />
                        <Experience 
                            startYear={2010}
                            endYear="still going"
                            jobName="Technical maintenencer"
                            jobDescription="Technical maintenance of sporting facilities"
                            jobArea="Ciy on Kauniainen"
                        />
                        <Experience 
                            startYear={1995}
                            endYear="Still going"
                            jobName="DJ"
                            jobDescription="Spinning records and hosting events"
                            jobArea="Travelling accross the country to different nightclubs"
                        />
                        <hr style={{borderTop: '3px solid #e22947'}} />
                        <h2>Skills</h2>
                            <Skills 
                                skill="HTML/CSS"
                                progress={80}/>
                            <Skills 
                                skill="React"
                                progress={60}/>
                            <Skills 
                                skill="Javascript"
                                progress={60}/>
                            <Skills 
                                skill="ThreeJS"
                                progress={60}/>
                            <Skills 
                                skill="Java"
                                progress={40}/>
                            <Skills 
                                skill="Python"
                                progress={40}/>
                            <Skills 
                                skill="JSON"
                                progress={30}/>
                            <Skills 
                                skill="PHP"
                                progress={30}/>
                            
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;