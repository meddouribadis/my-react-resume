import React from "react"
import ReactDOM from "react-dom"
import Observer from '@researchgate/react-intersection-observer';

class Section extends React.Component{

    constructor(){
        super()

        this.state={
            isIntersecting: false,
        }
    }

    handleChange = ({ isIntersecting }) => {
        this.setState({ isIntersecting });
    };
    
    render(){

        const options = {
            onChange: this.handleChange,
            root: '#scrolling-container',
            rootMargin: '0% 0% -10%',
        };

        return(
            <div className="container">
                <Observer {...options}>
                    <div className={`row ${this.props.styleData} ${this.state.isIntersecting ? "startAnimation" : "invisible"}`}>
                        {this.props.children}
                    </div>
                </Observer>
            </div>
        )

    }

}

export default Section