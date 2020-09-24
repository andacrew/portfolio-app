import { useEffect, useState } from 'react';

export const DarkMode = () => {
    const [theme, setTheme] = useState('light');
    const [ btnColor, setBtnColor ] = useState('outline-dark');
    const [mountedComponent, setMountedComponent] = useState(false)

    const setMode = mode => {
        window.localStorage.setItem('theme', mode)
        setTheme(mode)
    };

    const setModeBtn = modeBtn => {
        window.localStorage.setItem('btnColor', modeBtn)
        setBtnColor(modeBtn)
    };

    const themeToggler = () => {
        theme === 'light' ? setMode('dark') : setMode('light');
        btnColor === 'outline-dark' ? setModeBtn('outline-light') : setModeBtn('outline-dark');
    };

    useEffect(() => {
        const localTheme = window.localStorage.getItem('theme');
        const localBtn = window.localStorage.getItem('btnColor');
        localTheme ? setTheme(localTheme) : setMode('light');
        localBtn ? setBtnColor(localBtn) : setBtnColor('outline-dark');
        setMountedComponent(true)
    }, []);
    return [theme, btnColor, themeToggler, mountedComponent]
};
