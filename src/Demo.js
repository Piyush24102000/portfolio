import React from "react"
import Img from './images/plasma.jpg'
import "./styles.css"
import pic from './images/pic.png';
import icon from './images/icon.png';

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

class Demo extends React.Component {
	render() {
		return (
<div>
  <div class="bg-img">
  <div class="container1">
  <div class="topnav">

  <div class="marquee"><marquee>“The best way to predict the future is to invent it.”- Alan Kay
  &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
  "Stay hungry, stay foolish" -Steve Jobs&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
  "Growth and comfort do not coexist." -Ginni Rometty&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
  “Keep going forward because success will come” -Cassandra Sanford&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
  “It’s fine to celebrate success but it is more important to heed the lessons of failure.”- Bill Gates</marquee>
  
  </div>

</div>
    <div class="sidebar">

    <img src={pic} alt="pic" style={{height:'100px',width:'100px',borderRadius: '50%',marginLeft:'55px',marginTop:'10px'}}></img>

<h1>&nbsp; &nbsp; <span style={{color: 'rgb(239, 239, 239'}}>&nbsp; &nbsp; &nbsp;I</span></h1>
<h1><span style={{color: 'rgb(239, 239, 239'}}>&nbsp; &nbsp; &nbsp; &nbsp;Am</span></h1>
<h1><span style={{color: 'rgb(239, 239, 239'}}>&nbsp;<u>Piyush Tale</u></span></h1>

  
  <a href="about" data-nav-section="about"><i class="fa fa-fw fa-home"></i> About</a>
  <a href="skills" data-nav-section="skills"><i class="fa fa-fw fa-wrench"></i> Skills</a>
  <a href="#clients"><i class="fa fa-fw fa-user"></i> Clients</a>
  <a href="#contact"><i class="fa fa-fw fa-envelope"></i> Contact</a>
&nbsp;
  <p><span style={{fontSize: '20px',color:'rgb(239, 239, 239'}}>office20001024@gmail.com</span></p>
  <img src={icon} alt="icon" width="235" height="60" style={{marginTop:'2px'}}></img>

</div>
  </div>
 </div>
 <div>
 </div>
</div>

        )
    }
}
 export default Demo;