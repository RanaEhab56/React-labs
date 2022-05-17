import { Component } from "react";

export default class Task2 extends Component{
    constructor(){
        super();
        this.images=[
            './Images/1.jpg',
            './Images/2.jpg',
            './Images/3.jpg',
            './Images/4.jpg'
        ]
        this.state = {
            currentIndex: 0,
            slideInterval:0,
            
        }
    }

    goToNext = ()=>{
        const {currentIndex} = this.state;
        const newPointer = currentIndex === this.images.length - 1 ? 0 : currentIndex + 1;
        this.setState({currentIndex: newPointer});
    }
    gotoPrev=()=>{
        const {currentIndex} = this.state;
        const newPointer = currentIndex === 0 ? this.images.length -1 : currentIndex - 1;
        this.setState({currentIndex: newPointer});
    }
    slide = () => {
        this.state.slideInterval = setInterval(this.goToNext, 1000);
    }

    stop = () => {
        clearInterval(this.state.slideInterval);
    }


    render(){
        return (
            <div className="task2">
                <h1>Task2</h1>
                <img src={this.images[this.state.currentIndex]}/>
                <br/>
                <input
                    value="<<Prev"
                    type="button"
                    onClick={this.gotoPrev}
                />
                <input
                    value="next>>"
                    type="button"
                    onClick={this.goToNext}
                />

                <input
                    value="slide"
                    type="button"
                    onClick={this.slide}
                />
                <input
                    value="stop"
                    type="button"
                    onClick={this.stop}
                />
               
                <br/>
                
            </div>
        )
    }
}