import React, { Component } from 'react'
import john from './images/john.jpg';
export default class About extends Component {
  render() {
    return (
<div>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        <div class="about-section">
  <h1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<u>  About me  </u></h1>
  
  
  <div class="a1"><h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Greetings, A warm welcome from me </h3>&nbsp;</div>
  <div class = "a2"><p>I am currently pursuing engineering from Amravati University. My interest in Technology started from the teenage and i am passionate toward's it.
   I am enthusiastic about my work and with complete focus I am able to accompolish the task with an ease.</p></div>
   
   <div class = "a3"><p>I believe that Every Problem has a solution, we just have to think out of the box....</p></div>
  

  <div class ="a4"><p style = {{color:'#00E9FD '}}>Strengths:-The key which separates me from others is that <u>"I have a never Give Up Attitude".</u> </p>
  <div class="a5">
    <ul><li><p>Ever learner.</p></li>
    <li><p>Natural leadership.</p></li>
    <li><p>I'm a people person.</p></li>
    <li><p>Team Oriented.</p></li>
    </ul>
    </div>
    </div>
  <div class = "a6"><p style = {{color:'red'}}>Weakness:-Many times I get too much involved in work, thus causing little impact on my health</p></div>
  <div class="glowing"><p><span>&#9733;</span>That's all about me !<span>&#9733;</span></p></div>
  <div>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <style dangerouslySetInnerHTML={{__html: "\n   body {\n      background-color: rgb(0, 0, 0);\n      font-family: cursive;\n   }\n   .glowing {\n      font-size: 50px;\n      color: #fff;\n      text-align: center;\n      -webkit-animation: glowing 1s ease-in-out infinite alternate;\n      -moz-animation: glowing 1s ease-in-out infinite alternate;\n      animation: glowing 1s ease-in-out infinite alternate;\n   }\n   @-webkit-keyframes glowing{\n      from {\n         text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #13d4cd, 0 0 40px #13d4cd, 0 0 50px #13d4cd, 0 0 60px #13d4cd, 0 0 70px #13d4cd;\n      }\n      to {\n      text-shadow: 0 0 20px #13d4cd, 0 0 30px #13d4cd, 0 0 40px #13d4cd, 0 0 50px #13d4cd, 0 0 60px #13d4cd, 0 0 70px #13d4cd, 0 0 80px #13d4cd;\n   }\n}\n" }} />
        
      </div>

</div>

      </div>
    );
  }
};