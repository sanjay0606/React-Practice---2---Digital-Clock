import React, {Component, useState} from "react";
import '../styles/App.css';

function getcurrentTime(){
    const currentdate= new Date();
   

    return currentdate.toLocaleTimeString().toUpperCase();
}

class App extends Component {

    constructor(props){
        super(props);
        
        this.state = {
            
            time:getcurrentTime(),
        };

    }
    componentDidMount(){
        this.intervalId=setInterval(()=>{
            this.setState({ time:getcurrentTime() });

        }, 1000);

    }
    componentWillUnmount(){
        clearInterval(this.intervalId);
    }
    render() {

        return(
            <div className="Clock">
                <h1 id="time">{this.state.time}</h1>
                
            </div>
            
        )
    }
}


export default App;
