import React, { Component } from 'react';
import projectData from './assets/data/projects';

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

class Projects extends Component {
    render() {
        return (
          <div>
              <h2><strong>Front end projects</strong></h2>
              <div>
                  {
                      projectData.map(projectData => {
                          return (
                              <Project key={projectData.id} project={projectData} />
                          );
                      })
                  }
              </div>

              
          </div>
        )
    }
}
export default Projects;
