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

        let animationN = this.props.animationName;

        const options = {
            onChange: this.handleChange,
            root: '#scrolling-container',
            rootMargin: '0% 0% -10%',
        };

        const contentWithProps = React.Children.map(this.props.children, child =>
            React.cloneElement(child, { isIntersecting: this.state.isIntersecting })
        );

        return(
            <div className="container">
                <Observer {...options}>
                    <div className={`row ${this.props.styleData} ${this.state.isIntersecting ? animationN : "invisible"}`}>
                        {contentWithProps}
                    </div>
                </Observer>
            </div>
        )

    }

}

export default Section