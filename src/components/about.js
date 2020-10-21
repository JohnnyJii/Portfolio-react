import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl'
import Instagram from './instagram'
import Ei from '../img/ei.jpg'



class About extends Component {
    render() {
        return (
            <div className="about-back">
                <Grid>
                    <Cell className="about-left" col={6}>
                        <h1>About me</h1>
                            <h3>Great that you have found yourself to my Portfolio.</h3>
                                <p>
                                    What can i tell you about myself? Well... Here's a little bit of myself.
                                    I am originally from northern Finland. I grew in a town called Oulu, 150km south of arctic circle. 
                                    Music and sports have been 2 of the most important things in my life all the way from childhood. 
                                    Used to say "drugs, sex, rock 'n roll", just without the drugs. In my teens that changed to "Drugs, sex, Techno" but still no to drugs.
                                </p>
                            <hr/>
                                <p> 
                                    Sports have allways been my way of dealing with stress. I have done lot of
                                    different sports (Icehockey, Wrestling, Iceball, Kickboxing, Taek Won-do, Orientationing,
                                    MMA and most of all Gym and Crossfit). Lika i said earlier sports is my way dealing with stress
                                    and doing physical training in the gym etc. keeps my head bright and copes me to deal with
                                    the pressure during hectic hours on work and school. 
                                </p>    
                            <hr/>
                                <p>
                                    Music was my first love. I remember just how i loved to listen to music every where.
                                    Our familys trips to our summer cottage, i was allways in the backseat just sitting quietly, 
                                    looking out from the window and listening to music. Maybe that is the reason why i become a DJ
                                    in my teens. My DJ career lasted almost quarter of a hunred years. I stull do it, but not as a profession. 
                                    It just feels good to go to a gig, feel around and make people dance. 
                                </p>
                    </Cell>
                    <Cell className="about-right" col={6}>
                        <h1>Pics and memories</h1>
                        <hr />
                        <img 
                            src={Ei}
                            className="ei-kuva"
                            alt="testikuva"
                            />
                        <hr />
                        <Instagram />
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default About;