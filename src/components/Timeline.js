import React from 'react'
import ReactDOM from 'react-dom'

class Timeline extends React.Component{

    constructor(){
        super()

        this.state = {
            active : 2019
        }

        this.revealTheContent = this.revealTheContent.bind(this);
    }

    revealTheContent(divId){

        let newID = divId.currentTarget.dataset.id;
            this.setState(() => ({ active: newID  })
        )

        console.log(this.state.active)
    }

    render(){

        return(
            <div className="timeline">

                <ul role="tablist" className="experienceList">
                    <li className={`${(this.state.active == 2019) ? "activatedTimeline" : ""}`} onClick={this.revealTheContent.bind(this)} data-id="2019"><a>2019</a></li>
                    <li className={`${(this.state.active == 2018) ? "activatedTimeline" : ""}`} onClick={this.revealTheContent.bind(this)} data-id="2018"><a>2018</a></li>
                    <li className={`${(this.state.active == 2017) ? "activatedTimeline" : ""}`} onClick={this.revealTheContent.bind(this)} data-id="2017"><a>2017</a></li>
                    <li className={`${(this.state.active == 2016) ? "activatedTimeline" : ""}`} onClick={this.revealTheContent.bind(this)} data-id="2016"><a>2016</a></li>
                    <li className={`${(this.state.active == 2015) ? "activatedTimeline" : ""}`} onClick={this.revealTheContent.bind(this)} data-id="2015"><a>2015</a></li>
                </ul>

                <div className="experienceTexts">
                    <div>
                        <ul>
                            <li id="2019" className={`textData ${(this.state.active == 2019) ? "opacReveal" : "displayNone"}`}>Write modern, performant, maintainable code for a diverse array of client and internal projects</li>
                            <li id="2018" className={`textData ${(this.state.active == 2018) ? "opacReveal" : "displayNone"}`}>Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, Gatsby, React, Craft, Wordpress, Prismic, and Netlify</li>
                            <li id="2017" className={`textData ${(this.state.active == 2017) ? "opacReveal" : "displayNone"}`}>Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis</li>
                            <li id="2016" className={`textData ${(this.state.active == 2016) ? "opacReveal" : "displayNone"}`}>Overwatch</li>
                            <li id="2015" className={`textData ${(this.state.active == 2015) ? "opacReveal" : "displayNone"}`}>Full Metal Alchemist Brotherhood :D</li>
                        </ul>
                    </div>
                </div>

            </div>
        )

    }

}

export default Timeline