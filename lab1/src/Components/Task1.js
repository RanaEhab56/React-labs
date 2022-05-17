import { Component } from "react";

export default class Task1 extends Component{
    constructor(){
        super();
        this.state = {
            userName:"",
            
        }
    }

    reset = ()=>{
        this.setState({userName:""})
    }

    render(){
        return (
            <div className="task1">
                <h1>Task1</h1>
                <input
                    value={this.state.userName}
                    type="text"
                    onChange={(e)=>{
                        this.setState({userName:e.target.value})

                    }}
                   
                />
                <br/>
                 {this.state.userName}
                 <br/>
                 <button 
                    onClick={this.reset}
                    >Reset</button>
            </div>
        )
    }
}