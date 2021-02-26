import React from "react"
import "./styles.css";
import Skills from './skills.jsx';
import Demo from './Demo';
import About from './about.jsx';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends React.Component {
	render() {
		return (
        <div>
    <Router>
    <Route path ="/" component = {Demo}/>
    <Route path = "/skills/" component = {Skills} />
    <Route path = "/about/" component = {About} />
    
    </Router>
    </div>
        
        )
	}
}
export default App