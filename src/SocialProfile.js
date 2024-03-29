import React, { Component } from 'react';
import  SOCIAL_PROFILES from './assets/data/socialProfiles';

class SocialProfile extends Component {
    render() {
        console.log('this.props', this.props);
        
        const { link, image } = this.props.socialProfile;
        
        return (
            <span>
                <a href={link}>
                    <img src={image} alt='social-profile' style={{width:35, height:35, margin:10}} /></a>
            </span>
        )
    }

}

class SocialProfiles extends Component{
    render() {
        return (
            <div>
                <h2><strong>Connect with me!</strong></h2>
                <div>
                    {
                        SOCIAL_PROFILES.map(SOCIAL_PROFILES =>{
                            return <SocialProfile key={SOCIAL_PROFILES.id} socialProfile={SOCIAL_PROFILES} />
                        })
                    }
                </div>
            </div>
        )
    }
}

export default SocialProfiles;
