import React, {useState} from "react";
import {FAQS} from "../../constants/constants";
import './faq.css'

const FAQ = () => {
    const [expanded, setExpanded] = useState(null)
    return(
        <div className={'landingScreen__faqs'}>
            <div className={'landingScreen__featuresLine'}/>
            <h1>Frequently Asked Questions</h1>
            {FAQS.map((faq)=>{
                return(
                    <div key={faq.id} className={'landingScreen__faq'} onClick={()=>expanded===faq.id?setExpanded(null):setExpanded(faq.id)}>
                        <h1>{faq.header}</h1>
                        <h2 className={expanded===faq.id?'expanded':''}>{faq.body}</h2>
                    </div>
                )
            })}
            <p className={'h3'}>Ready to watch? Enter your email to create or restart your membership.</p>
            <div className={'landingScreen__FAQlogin'}>
                <form>
                    <input type={'email'} placeholder={'Email Address'}/>
                    <button className={'landingScreen__signup'}>
                        Get Started
                    </button>
                </form>
            </div>
            <br/>
            <div className={'landingScreen__featuresLine'}/>
        </div>
    )
}
export default FAQ;
