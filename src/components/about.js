import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl'
import InstagramEmbed from 'react-instagram-embed'
import Ei from '../img/ei.jpg'



class About extends Component {
    render() {
        return (
            <div className="about-back">
                <Grid>
                    <Cell className="about-left" col={6}>
                        <h1>About me</h1>
                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. 
                            It has roots in a piece of classical Latin literature from 45 BC, 
                            making it over 2000 years old. Richard McClintock, a Latin professor 
                            at Hampden-Sydney College in Virginia, looked up one of the more obscure 
                            Latin words, consectetur, from a Lorem Ipsum passage, and going through 
                            the cites of the word in classical literature, discovered the undoubtable 
                            source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus 
                            Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written 
                            in 45 BC. This book is a treatise on the theory of ethics, very popular 
                            during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor 
                            sit amet..", comes from a line in section 1.10.32.</p>
                    <hr/>
                        <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced 
                            below for those interested. Sections 1.10.32 and 1.10.33 from 
                            "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their 
                            exact original form, accompanied by English versions from the 1914 translation                             
                            by H. Rackham.</p>    
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
                        <InstagramEmbed className="instaFeed"
                           url='https://www.instagram.com/p/B9ZOemYl_yw/'
                           maxWidth={320}
                           hideCaption={true}
                           containerTagName='div'
                           protocol=''
                           injectScript
                           onLoading={() => {}}
                           onSuccess={() => {}}
                           onAfterRender={() => {}}
                           onFailure={() => {}}
                        />
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default About;