import React, { Component } from 'react'
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl'

class Projects extends Component {
    constructor(props) {
        super(props);
            this.state = {activeTab: 0};
        }

        toggleCategories() {
            if(this.state.activeTab === 0) {
                return(
                <div className="projects-grid">
                {/* Projektikortti */}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '176px', background: 'URL(data:image/jpeg;base64,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) center / cover' }}>
                            Javascript project #1
                        </CardTitle>
                                <CardText>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</CardText>
                                    <CardActions border>
                                        <Button colored>Github</Button>
                                    </CardActions>   
                                <CardMenu style={{color: '#fff'}}>
                                    <IconButton name="share" />
                                </CardMenu> 
                    </Card>
                </div>
                )
            } else if (this.state.activeTab === 1) {
                return (
                    <div className="projects-insta">
                        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                            <CardTitle className="instaCard" style={{color: '#fff', height: '176px'}}>
                                Instagram
                            </CardTitle>
                                <CardText>Lorem ipsum lällällää</CardText>
                                    <CardActions border>
                                        <Button colored>Instagram</Button>
                                    </CardActions>
                                    <CardMenu style={{color: '#fff'}}>
                                        <IconButton name="share" />
                                    </CardMenu>
                        </Card>
                    </div>
                )
            } else if (this.state.activeTab === 2) {
                return (
                    <div><h1>This is Front end</h1></div>
                )   
            } else if ( this.state.activeTab === 3) {
                return (
                    <div><h1>This is Python</h1></div>
                )
            } else if ( this.state.activeTab === 4) {
                return (
                    <div><h1>This is Java</h1></div>
                )
            }
        }
        

    render() {
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
                    <Tab>Javascript</Tab>
                    <Tab>Instagram</Tab>
                    <Tab>Twitter</Tab>
                    <Tab>Front end</Tab>
                    <Tab>Java</Tab>
                </Tabs>    
                
                    <Grid>
                        <Cell col={12}>
                            <div className="content">{this.toggleCategories()}</div>
                        </Cell>
                    </Grid>
                
            </div>
        )
    }
}

export default Projects;