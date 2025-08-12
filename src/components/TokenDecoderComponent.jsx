import React, { useState } from 'react'
import { decode } from '../utils/vocabulary2';

function TokenDecoderComponent() {
    const [userInput, setUserInput] = useState([])
    const [decodedTokens, setDecodeTokens] = useState([])
    console.log("✅",decodedTokens)
    console.log(userInput)
  return (
    <>
                <textarea
                    placeholder="enter comma seprated values eg: 1,2,55,66,77"
                    className="shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]
     px-4 py-4 focus:outline-2 focus:outline-blue-100 w-[50%] bg-white rounded-lg"
                    onChange={(e) => {
                        // const res = getTrimOutput(e.target.value);
                        // const token = encode(res);
                        // console.log("from vocabulary",res);
                        if(e.target.value.includes(",")){
                            setUserInput(e.target.value.split(","));
                        }else{
                            setUserInput((e.target.value + ",").split(","));
                        }
                        
                        const res = decode(userInput)
                        setDecodeTokens(res);
                        // console.log("hello hii",res)
                        // setEncodeTokens(token);
                    }}
                    resize="none"></textarea>
    
                <div className="w-[80%] h-0.5 bg-neutral-200"></div>
    
                
    
                <div
                    className="bg-white rounded-lg px-4 font-medium  h-48 w-[50%] flex justify-center content-center flex-wrap shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]
    ">
                    <div>{decodedTokens.join("")}</div>
                </div> 
            </>
  )
}

export default TokenDecoderComponent