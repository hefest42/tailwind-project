import React from "react";

const HeroGreetingMobile = () => {
    return (
        <div className="md:hidden w-full h-screen overflow-scroll text-dark-yellow mt-28 leading-10 text-center flex flex-col justify-start items-center">
            <div>Hello!</div>
            <div>Start by searching for your favorite type of meal.</div>
            <div className="flex justify-center items-center">
                Keep in mind search terms are limited, for the full list of terms
            </div>
            <a
                href="https://forkify-api.herokuapp.com/phrases.html"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
            >
                CLICK HERE!
            </a>
        </div>
    );
};

export default HeroGreetingMobile;
