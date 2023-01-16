import React from "react";

const HeroRecipeSkeleton = () => {
    return (
        <div className="w-full md:w-[64%] lg:w-[69%] h-full text-dark-yellow">
            <div className="w-full h-1/4 xs:h-1/3 bg-skeleton-dark animate-pulse rounded-xl"></div>

            <h1 className="w-full h-12 bg-skeleton-dark animate-pulse mt-4 rounded-xl"></h1>

            <div className="w-full flex justify-center mt-6 ">
                <div className="w-10 h-10 bg-skeleton-dark animate-pulse rounded-b-md"></div>
            </div>

            <div className="w-full flex justify-center items-center mt-4">
                <ul className=" list-none columns-2 py-4 px-6 ">
                    {Array(12)
                        .fill("0")
                        .map((item, i) => (
                            <li
                                key={i}
                                className="block w-[12rem] lg:w-[16rem] h-4 bg-skeleton-dark animate-pulse mb-4 rounded-md"
                            ></li>
                        ))}
                </ul>
            </div>

            <div className="flex flex-col justify-center items-center mt-4">
                <p className=" w-96 h-4 bg-skeleton-dark animate-pulse rounded-md"></p>
                <button className="h-10 px-16 bg-skeleton-dark animate-pulse rounded-md mt-4"></button>
            </div>

            <div className="flex flex-col justify-center items-center mt-4">
                <p className="w-96 h-4 bg-skeleton-dark animate-pulse rounded-md"></p>
                <button className="h-10 px-16 bg-skeleton-dark animate-pulse rounded-md mt-4"></button>
            </div>
        </div>
    );
};

export default HeroRecipeSkeleton;
