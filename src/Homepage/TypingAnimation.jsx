import  { useEffect, useState } from "react";

const TypingAnimation = ({text, speed}) => {
  const [displayText, setdisplayTest] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  // const [displayCursor, setdisplayCursor] = useState('.')
  useEffect(()=>{
    const timer = setInterval(()=>{
  
      if(currentIndex< text.length){
        setdisplayTest((prev)=>prev + text.charAt(currentIndex));
        setCurrentIndex((prev) => prev + 1);

      }else {
        setdisplayTest("")
        setCurrentIndex(0);

      }
    }, speed);
    return ()=>clearInterval(timer)
  }, [text,speed, currentIndex]);


  return (
    <div>
      {displayText}
      <span className="cursor">_</span>
    </div>
  )
}

export default TypingAnimation

