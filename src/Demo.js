import React from "react"
import Img from './images/plasma.jpg'
import "./styles.css"
import pic from './images/pic.png';


class Demo extends React.Component {
	render() {
		return (
<div>
<div class="bg-img">
  <div class="container">
    <div class="topnav">
      <a href="#home"><h4>Home</h4></a>
      <a href="#news"><h4>News</h4></a>
      <a href="#contact"><h4>Contact</h4></a>
      <a href="#about"><h4>About</h4></a>
    </div>
    <div class="sidebar">

    <img src={pic} alt="pic" style={{height:'100px',width:'100px',borderRadius: '50%',marginLeft:'55px',marginTop:'10px'}}></img>

<h1>&nbsp; &nbsp; <span style={{color: 'rgb(239, 239, 239'}}>&nbsp; &nbsp; &nbsp;I</span></h1>
<h1><span style={{color: 'rgb(239, 239, 239'}}>&nbsp; &nbsp; &nbsp; &nbsp;Am</span></h1>
<h1><span style={{color: 'rgb(239, 239, 239'}}>&nbsp;Piyush Tale</span></h1>
&nbsp;&nbsp;
<p><span style={{fontSize: '20px',color:'rgb(239, 239, 239'}}>office20001024@gmail.com</span></p>

  <a href="#home"><i class="fa fa-fw fa-home"></i> Home</a>
  <a href="#services"><i class="fa fa-fw fa-wrench"></i> Services</a>
  <a href="#clients"><i class="fa fa-fw fa-user"></i> Clients</a>
  <a href="#contact"><i class="fa fa-fw fa-envelope"></i> Contact</a>
</div>
  </div>
 </div>
</div>


        )
    }
}
 export default Demo;