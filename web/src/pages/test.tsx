import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

const Test = () => {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()
  
    useEffect(() => setMounted(true), [])
  
    if (!mounted) return null
  
    return (
      <div>
        The current theme is: {theme}
        <br/><br/>
        <button onClick={() => setTheme('light')}>Light Mode</button>
        <button onClick={() => setTheme('dark')}>Dark Mode</button>
      </div>
    )
  
  }
  
Test.theme = 'light';
export default Test;