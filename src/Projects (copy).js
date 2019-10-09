import React, { Component } from 'react';
import backendData from './assets/data/projects (copy)';

class Project extends Component {
    render() {
        console.log('this.props', this.props);
        
        const { title, image, description, link } = this.props.project;
        
        return (
            <div style={{ display: 'inline-block', width: 300, margin: 10}}>
                <div style={{position:'block-line'}}>
                    <h3>{title}</h3>
                </div>
                
                <img src={image} alt='profile' style={{width: 200, height: 120}} />
                <p>{description}</p>
                <a href={link}>{link}</a>

            </div>
        )
    }
}

class Projects1 extends Component {
    render() {
        return (
          <div>
              <h2><strong>Back end projects</strong></h2>
              <div>
                  {
                      backendData.map(backendData => {
                          return (
                              <Project key={backendData.id} project={backendData} />
                          );
                      })
                  }
              </div>

              
          </div>
        )
    }
}
export default Projects1;
