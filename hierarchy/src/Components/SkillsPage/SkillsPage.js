import { Component } from "react";
import "./SkillsPage.css"
class SkillsPage extends Component{ 

    render(){
        return(
        <div>  
            <h1>Skills Page</h1>
            <div id="SkillsContainer">
                <div> 
                    <span>React</span>
                </div>
                <div>
                    <span>Canvas</span>
                 </div>
                <div>
                    <span>JavaScript</span>    
                 </div>
            </div>
        </div>)
    }
} 
export default SkillsPage;