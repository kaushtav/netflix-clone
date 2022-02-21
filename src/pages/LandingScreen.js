import React, {useEffect, useState} from "react";
import Header from '../components/landingScreen/header'
import Banner from "../components/landingScreen/banner";
import Features from "../components/landingScreen/features";
import FAQ from "../components/landingScreen/faq";
import Footer from "../components/landingScreen/footer";
import {useNavigate} from "react-router-dom";
import {auth} from "../helpers/firebase";

const LandingScreen = () => {

    const navigate = useNavigate();
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        return auth.onAuthStateChanged((userAuth) => {
            if (userAuth) {
                navigate('/browse')
            } else {
                setLoading(false)
            }
        });
    },[navigate])
    if(loading) {
        return <div/>
    }
    return(
        <div className={'landing_screen'} >
            <Header/>
            <Banner/>
            <Features/>
            <FAQ/>
            <Footer/>
        </div>
    )
}

export default LandingScreen;
