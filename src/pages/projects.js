import React, { Component } from "react";
import "../styles/projects.css";
import { Link } from "react-router-dom";
import Box from "../components/Box";
import gameLogo from "../assets/shootingGame.svg";
import portfolioLogo from "../assets/portfolioLogo.svg";
import twitterCloneLogo from "../assets/twitterCloneLogo.svg";
import codeniteLogo from "../assets/codeniteLogo.svg";

class about extends Component {
  render() {
    return (
      <div className="mainWrapper">
        <Link to="/" className="brandName">
          Anish Kumar
        </Link>
        <div className="content">
          <div className="title">Projects</div>
          <div className="subtitle">
            // Have a look at some of the projects I have been working on.
          </div>
          <main>
            <Box
              logo={codeniteLogo}
              title="Codenite.io"
              tagNames="NODE.JS, EXPRESS.JS, MONGODB, HTML & CSS, REACT.JS, AWS, EC2, REST API, PYHTON, FLASK"
              p1="This web app contains some interesting and brainstorming programming questions which can written and executed within the app."
              p2="For this project I used Python to compile and get the output of the code, express to communicate to react app and mongodb to store all the data. This project is deployed on an ec2 instance of ubuntu."
              p3="Through this project I was able to learn a lot of new technologies like flask, mongodb and amazon ec2. Do check it out below."
              toCode="http://github.com/anish0285/codenite-frontend"
              toSite="http://www.codenite.io"
            />
            <Box
              logo={twitterCloneLogo}
              title="Twitter Clone"
              tagNames="NODE.JS, EXPRESS.JS, HTML & CSS, REACT.JS, FIREBASE, REST API, MATERIAL UI"
              p1="For this project I worked with nodejs, express and firebase to make a backend and REST API and used to react to make a single page application."
              p2="The idea was to make a twitter clone which would include all the fundamentals on which twitter is based upon like making a post, adding a comment, user authentication, likes, notifications."
              p3="Even though the project is not even close to what existing twitter is but still it helped me feel more confident with my development skills."
              toCode="http://github.com/anish0285/callofweb"
              toSite="http://www.callofweb.com"
            />
            <Box
              logo={gameLogo}
              title="Shooting Game"
              tagNames="JAVASCRIPT, PIXI.JS, GAME ENGINE, PHYSICS, HTML, CANVAS, FIGMA"
              p1="Through this project I aimed to make myself more familiar with the syntax and working of javascript."
              p2="The game was meant to be a 2d multiplayer shooter game where users can jump, shoot and kill each other. For this I used a popular and well documented library called pixijs."
              p3="I learned a lot of stuff as I have to code basic physics concepts like collissions and gravity. Currently i have been able to implement only the single player mode which you can checkout below."
              toCode="http://github.com/anish0285/madshot.io"
              toSite="http://madshot.web.app"
            />
            <Box
              logo={portfolioLogo}
              title="Portfolio"
              tagNames="RESPONSIVE, HTML & CSS, REACT.JS, UI/UX"
              p1="The idea behind this project was to create a showcase of all my projects which I have worked on. I tried to keep the UI as simple as possible without any fluff."
              p2="This is a Single Page Application and is built using React.js and CSS."
              toCode="http://github.com/anish0285/portfolio"
              toSite="/"
            />
          </main>
        </div>
      </div>
    );
  }
}

export default about;
