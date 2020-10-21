import React, { Component } from 'react'
import InstagramEmbed from 'react-instagram-embed'

class Instagram extends Component {
    render() {
        return (
            <div>
              <InstagramEmbed className="insta-feed"
                url='https://www.instagram.com/p/B9ZOemYl_yw/?utm_source=ig_web_copy_link'
                maxWidth={320}
                hideCaption={false}
                containerTagName='div'
                protocol=''
                injectScript
                onLoading={() => {}}
                onSuccess={() => {}}
                onAfterRender={() => {}}
                onFailure={() => {}}
                />  
            </div>
        )
    }
}


export default Instagram;