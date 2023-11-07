import Image from 'next/image'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
import React, { useContext, useEffect, useMemo, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { useTheme } from '@/context/ThemeContext';


export default function Home() {
  // ue state
  const [count, setCount] = useState(0);

  //use context is used in contextfile
  const { theme, toggleTheme } = useTheme();

  // useEffect hook to perform side effects
  useEffect(() => {
    // This effect will run after every render
    console.log(`Count has changed: ${count}`);
  }, [count]);

  // useRef hook 
  const inputRef = useRef(null);

  // useMemo hook to memoize a value
  const doubledCount = useMemo(() => count * 2, [count]);



  return (
    <main className=' h-screen flex flex-col justify-center items-center text-center space-y-8'>

          <div>
      <p>Current Theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
       <div className=''>
        <div className='flex gap-6 text-xl justify-center'>
      <p>Count: </p>
      <span className=' font-bold'> {count}</span>
        </div>
      <p className='flex gap-6 text-xl justify-center'>Doubled Count: <span className=' font-bold'>{doubledCount} </span> </p>
      <button className='p-2 m-2 border bg-blue-200' onClick={() => setCount(count + 1)}>Increment</button>
    </div>
      <input className='p-2 border focus:outline-none' ref={inputRef} />


    </main>
  )
}
