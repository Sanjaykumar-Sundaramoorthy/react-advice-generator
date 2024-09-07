
import { useState } from 'react'
import React from 'react'

export const Advice = () => {

    const [advice, setAdvice] = useState("Please click the button to get advice");
    const [count, setCount] = useState(0);

    async function getAdvice () {
        const data = await fetch("https://api.adviceslip.com/advice");
        const res = await data.json();
        setAdvice(res.slip.advice);
        setCount((c) => c+1);
    }

  return (
    <div>
        <h3>{advice}</h3>
        <button onClick={getAdvice}>Get Advice</button>
        <p>you have read <b>{count}</b> pieces of advice</p>
    </div>
  )
}
