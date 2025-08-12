import React, { useState } from "react";
import { encode, getTrimOutput } from "../utils/vocabulary2";




function TokenEncoderComponent() {
    const [userInput, setUserInput] = useState([])
    const [encodedTokens, setEncodeTokens] = useState([])
    const color = ["#fed7aa", "#d9f99d", "#bae6fd", "#fbcfe8"]
    return (

        <>
            <textarea
                placeholder="enter the text here"
                className="shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]
 px-4 py-4 focus:outline-2 focus:outline-blue-100 w-[50%] bg-white rounded-lg overflow-auto"
                onChange={(e) => {
                    const res = getTrimOutput(e.target.value);
                    const token = encode(res);
                    // console.log("from vocabulary",res);
                    setUserInput(res);
                    setEncodeTokens(token);
                }}
                resize="none"></textarea>

            <div className="w-[80%] h-0.5 bg-neutral-200"></div>

            <div
                className="bg-white rounded-lg w-[50%] h-48 flex  justify-center content-center flex-wrap gap-y-5 shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] overflow-auto">
                {userInput.map((elem) => {
                    const bgcolor = color[Math.floor(Math.random() * 4)];
                    // console.log(bgcolor)
                    return elem === " " ? (
                        <span className=" h-5 w-3"></span>
                    ) : (
                        <div
                            className="h-fit px-2"
                            style={{ backgroundColor: `${bgcolor}` }}>
                            {elem}
                        </div>
                    );
                })}

                {console.log(color[Math.floor(Math.random() * 4)])}
            </div>

            <div
                className="bg-white rounded-lg px-4 font-medium gap-x-5 h-48 w-[50%] flex justify-center content-center flex-wrap shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] overflow-auto
">
                {encodedTokens.map((elem) => (
                    <div>{elem},</div>
                ))}
            </div>
        </>
    );
}

export default TokenEncoderComponent;
