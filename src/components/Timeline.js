import React from 'react'
import ReactDOM from 'react-dom'

class Timeline extends React.Component{

    constructor(){
        super()
    }

    render(){

        return(
            <div className="timeline">

                <ul role="tablist" className="experienceList">
                    <li><a>2019</a></li>
                    <li><a>2019</a></li>
                    <li><a>2019</a></li>
                    <li><a>2019</a></li>
                    <li><a>2019</a></li>
                </ul>

                <div className="experienceTexts">
                    <div>
                        <ul>
                            <li>Write modern, performant, maintainable code for a diverse array of client and internal projects</li>
                            <li>Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, Gatsby, React, Craft, Wordpress, Prismic, and Netlify</li>
                            <li>Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis</li>
                        </ul>
                    </div>
                </div>

            </div>
        )

    }

}

export default Timeline