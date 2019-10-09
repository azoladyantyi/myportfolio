import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Projects from './Projects';
import SocialProfiles from './SocialProfile';
import profile from './assets/zola.jpg';
import Projects1 from './Projects (copy)';


class App extends Component {
  constructor(){
    super();
    this.state = {displayBio: false};

    console.log('Component this', this);

    this.toggleDisplayBio = this.toggleDisplayBio.bind(this);

  }
  toggleDisplayBio = () =>{
    this.setState({ displayBio: !this.state.displayBio});
}
 

 render(){
   return(
     <div>
       <img src={profile} alt='profile' alt="Avatar" width="250" height="250"
/>
       <h1><strong>Hello!</strong></h1>
       <p class="mySlides">My name is <strong >Azola</strong> I am a <strong>Software engineer</strong> . </p>

  {
    this.state.displayBio ? (
      <div>
	<div>
        <p>I created this site to document everything I have learnt, and share a bit of myself with the world</p>
        <p>My passion for developing web applications started in 2017 at <a href="http://www.projectcodex.co/">CodeX</a>.
        As a Full Stack developer student I used HTML4, CSS3, JavaScript, 
        and used MongoDB as a Database and Bootstrap. 
        At CodeX, we created projects which are included here and split into two categories:
        Frond-end and Back-end.</p>
        <p>As part of my further professional development, I attended the
        <a href="http://www.citi.org.za/capaciti/">CapaCiTi</a> programme where I studied Software Engineering and Data Science using Python, Java and SQL. Skills learnt at both institutions
        have been applied in the creation of this site.</p>
</div>
	<div>
			<h3><strong>Tech Skills</strong></h3>
			<ul>
				<ul> Ubuntu (Operating System). </ul>
				<ul>CSS frameworks(Bootstrap,Skeleton).</ul>
				<ul>HTML(Mark-up Language).</ul>
				<ul>MongoBD (Database).</ul>
				<ul>CSS (Styling Language).</ul>
				<ul>Javascript (Scripting Language).</ul>
				<ul>Python Fundamentals(Programming Language).</ul>
				<ul>Java Fundamentals(Programming Language).</ul>
				<ul>Githu.</ul>
				<ul>Heroku.</ul>
			</ul>
</div>

        <button onClick={this.toggleDisplayBio}>See less</button>
      </div>
    ) : (
      
      <div>
        <button onClick={this.toggleDisplayBio}>Read more</button>
      </div>
    )
  }
  <hr />
  < Projects />

<hr />
 < Projects1 />

   <hr />
 < SocialProfiles />


     </div>
   );
 }
}

export default App;
