import React from 'react'
import pt from "../../images/bg-pattern-top.svg"
import pb from "../../images/bg-pattern-bottom.svg"
import pc from "../../images/bg-pattern-card.svg"
import iv from "../../images/image-victor.jpg"

const UserProfile = () => {
    return (
        <div className="relative h-screen bg-darkCyan">
            {/* <div className="absolute z-0 w-full h-full overflow-hidden">
                <img
                    alt="Background Circle"
                    src={pt}
                    className="absolute -top-1/4 md:-top-30rem -left-44 md:-left-56 w-60rem"
                />
                <img
                    alt="Background Circle"
                    src={pb}
                    className="absolute -bottom-32 md:-bottom-34rem -right-56 w-60rem"
                />
            </div> */}
            <div className="relative z-10 flex items-center justify-center w-full h-full p-7 md:p-0">
                <div className="flex flex-col items-center overflow-hidden bg-white shadow-2xl w-96 rounded-2xl">
                    <div className="relative w-full">
                        <div className="pb-40%" />
                        <img
                            alt="Card Header"
                            src={pc}
                            className="absolute top-0 left-0 object-cover w-full h-full"
                        />
                    </div>
                    <div className="flex flex-col items-center mt-14">
                        <img
                            alt="Victor"
                            src={iv}
                            className="relative z-20 border-white rounded-full border-6"
                        />
                        <div className="flex mt-5">
                            <h3 className="text-lg font-bold font-body text-desaturatedBlue">
                                Victor Crest
                            </h3>
                            <h4 className="ml-3 text-lg font-body text-grayishBlue">26</h4>
                        </div>
                        <h5 className="mt-2 font-body text-grayishBlue">London</h5>
                    </div>
                    <hr className="w-full mt-6" />
                    <div className="flex justify-around w-full px-6 py-6">
                        <div className="flex flex-col items-center w-20">
                            <h5 className="text-lg font-bold font-body text-desaturatedBlue">80K</h5>
                            <p className="mt-1 text-xs tracking-widest font-body text-darkGray">
                                Followers
                            </p>
                        </div>
                        <div className="flex flex-col items-center w-20">
                            <h5 className="text-lg font-bold font-body text-desaturatedBlue">803K</h5>
                            <p className="mt-1 text-xs tracking-widest font-body text-darkGray">
                                Likes
                            </p>
                        </div>
                        <div className="flex flex-col items-center w-20">
                            <h5 className="text-lg font-bold font-body text-desaturatedBlue">1.4K</h5>
                            <p className="mt-1 text-xs tracking-widest font-body text-darkGray">
                                Photos
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserProfile