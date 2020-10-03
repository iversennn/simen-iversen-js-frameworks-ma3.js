import React from "react";
import Heading from "../layout/Heading";
import HomeContent from "./HomeContent";

export function Home(){
    return(
        <>
            <Heading title="Home"/>
            <HomeContent />
        </>
    )
}

export default Home;