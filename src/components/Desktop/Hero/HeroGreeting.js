import React from "react";

const HeroGreeting = () => {
    return (
        <div className="w-full md:w-[64%] lg:w-[69%] h-80 border border-dark-yellow text-dark-yellow leading-10 flex flex-col justify-center items-center">
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

export default HeroGreeting;
