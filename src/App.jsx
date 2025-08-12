import React, { useState } from 'react'
import { encode, getTrimOutput } from './utils/vocabulary2';
import TokenEncoderComponent from './components/TokenEncoderComponent';
import TokenDecoderComponent from './components/TokenDecoderComponent';


function App() {
  const [screenState, setScreenState] = useState("encode");
 
  return (
    <div className='h-screen bg-neutral-100 flex flex-col gap-10 justify-center items-center mx-auto'>
      <div className='text-5xl tracking-tight font-bold text-blue-400'>GENAI TOKENIZER</div>
      <div className=' flex bg-blue-100 px-6 py-3 rounded-lg'>
        <span className={`${screenState === "encode" ? "bg-blue-200" : ""} rounded-lg px-4 py-2 font-medium text-2xl tracking-tight cursor-pointer`} onClick={() => setScreenState("encode")}>Encode Token</span>
        <span className={`${screenState === "decode" ? "bg-blue-200" : ""} rounded-lg px-4 py-2 font-medium text-2xl tracking-tight cursor-pointer`} onClick={() => setScreenState("decode")}>Decode Token</span>
      </div>
      {screenState === "encode" ? <TokenEncoderComponent/> : <TokenDecoderComponent/>}
    </div>
  )
}

export default App

