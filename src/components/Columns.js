import React from "react"

class Column extends React.Component{

    constructor(){
        super()
    }

    render(){

        const contentWithProps = React.Children.map(this.props.children, child =>
            React.cloneElement(child, { isIntersecting: this.props.isIntersecting })
        );
        
        return (
            <div className={`${ this.props.styleData }`}>
                {contentWithProps}
            </div>
        )

    }

}

export default Column