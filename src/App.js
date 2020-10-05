import React, { useState } from 'react';
import './App.css';
import { DarkMode } from './components/darkMode';
import { Header } from './Header';
import { Home } from './pages/Home';
import { Portfolio } from './pages/Portfolio';
import { Contact } from './pages/Contact';
import { Resume } from './pages/Resume';
import resumePDF from './download/AndrewCopasResume.pdf';

function App() {
  const [theme, btnColor, themeToggler, mountedComponent] = DarkMode();
  const [page, setPage] = useState('home');

  if(!mountedComponent) return <div/>
  return (
    <div className={theme}>
      <Header theme={theme} themeToggler={themeToggler} btnColor={btnColor} setPage={setPage}/>
      {
        {
          'home': <Home btnColor={btnColor}/>,
          'portfolio': <Portfolio btnColor={btnColor} />,
          'contact': <Contact btnColor={btnColor} />,
          'resume': <Resume resumePDF={resumePDF} btnColor={btnColor} />
        }[page]
      }
    </div>
  );
}

export default App;
