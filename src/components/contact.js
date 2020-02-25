import React, { Component } from 'react'
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl'
import Photo3 from '../img/photo3.jpeg'

class Contact extends Component {
    render() {
        return (
           <div className="contact-body">
               <Grid className="contact-grid">
                   <Cell col={6}>
                       <h2>Jukka Juntunen</h2>
                        <img 
                            src={Photo3}
                            alt="avatar"
                            style={{height: '250px'}}
                        />
                        <p style={{width: '75%', margin: 'auto', paddingTop: '1em'}}>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
                   </Cell>
                   <Cell col={6}>
                       <h2>Contact me</h2>
                       <hr/>

                       <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '20px', fontFamily: 'Anton'}}>
                                        <i className="fa fa-phone" aria-hidden="true"/>
                                        040 164 0060
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '16px', fontFamily: 'Anton'}}>
                                        <i className="fa fa-at" aria-hidden="true"/>
                                        jukka.juntunen@metropolia.fi
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '16px', fontFamily: 'Anton'}}>
                                        <i className="fa fa-github" aria-hidden="true"/>
                                        www.github.com/Jukka-Jii
                                    </ListItemContent>
                                </ListItem>
                            </List>
                        </div>
                   </Cell>
               </Grid>
           </div>
        )
    }
}

export default Contact;