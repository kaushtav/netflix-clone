import React from "react";
import {FEATURES} from "../../constants/constants";
import './features.css'

const Features = () => {
    return (
        <div  className={'landingScreen__featuresPage'}>
            {FEATURES.map((feature) => {
                if(feature.direction){
                    return(
                        <div className={'landingScreen__featuresRow'} key={feature.id}>
                            <div className={'landingScreen__featuresLine'}/>
                            <div className={'landingScreen__features'} >
                                <img src={feature.image} alt={feature.alt}/>
                                <div>
                                    <h1>{feature.title}</h1>
                                    <h3>{feature.description}</h3>
                                </div>
                            </div>
                        </div>
                    )}
                return (
                    <div className={'landingScreen__featuresRow'} key={feature.id}>
                        <div className={'landingScreen__featuresLine'}/>
                        <div className={'landingScreen__features'} >
                            <div>
                                <h1>{feature.title}</h1>
                                <h3>{feature.description}</h3>
                            </div>
                            <img src={feature.image} alt={feature.alt}/>

                        </div>
                    </div>
                )
            })}
        </div>
    )
}
export default Features;
