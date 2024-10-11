import React from 'react'
import Typewriter from 'typewriter-effect';


type effectTypes = {
    word: string | "";
}

const TypeEffects = ({word} : effectTypes) => {
  return (
    <div>
        <Typewriter
  onInit={(typewriter) => {
    typewriter.typeString(word)
      .callFunction(() => {
        console.log('String typed out!');
      })
      .pauseFor(2500)
      .deleteAll()
      .callFunction(() => {
        console.log('All strings were deleted');
      })
      .start();
  }}
/>
    
    </div>
  )
}

export default TypeEffects