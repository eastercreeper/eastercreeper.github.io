import React, { useState, useEffect, useRef } from 'react';
import { ThemeProvider, Frame, List, TitleBar, Button as React95Button } from '@react95/core';
import styled from 'styled-components';
import GlobalStyles from './GlobalStyles';

const BootScreen = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: black;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'OMORI_GAME', monospace;
  font-size: 24px;
  z-index: 999;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transition: opacity 2s ease-out;
  pointer-events: ${({ isVisible }) => (isVisible ? 'all' : 'none')};
`;

const ContentContainer = styled.div`
  background-color: black; // Ensures background matches the boot screen
  opacity: ${({ opacity }) => opacity};
  transition: opacity 2s ease-in; // Smooth transition for the fade-in effect
  width: 100vw;
  height: 100vh;
  position: fixed; // Covers the entire viewport
  top: 0;
  left: 0;
  visibility: ${({ opacity }) => (opacity > 0 ? 'visible' : 'hidden')}; // Controls visibility based on opacity
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const Desktop = styled.div`
  background-color: black;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const WindowBorder = styled.div`
  padding: 8px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 3px solid #606060;
  height: 90vh;
  width: 80vw;
`;

// Ensure WindowedEnvironment is positioned relatively
const WindowedEnvironment = styled.div`
  position: relative;
  background: linear-gradient(0deg, rgba(33,5,77,1) 0%, rgba(42,8,129,1) 30%, rgba(108,14,255,1) 100%);
  height: 100%;
  width: 100%;
  box-sizing: border-box;
`;

const SlidingBackgroundStars = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  animation: slide 90s linear infinite;
  background-image: url("/images/wallpaper.png"); // Adjust the path as necessary
  background-size: 120%;
  background-repeat: repeat;
  image-rendering: high-quality;
  opacity: 1;
  overflow: hidden;
  z-index: 0;

  @keyframes slide {
    0% {
      background-position-x: 0%;
    }
    100% {
      background-position-x: 100%;
    }
  }
`;

const SlidingBackgroundObjects = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-image: url("/images/objects.png");
  background-size: 150%;
  background-repeat: repeat;
  image-rendering: pixelated;
  opacity: 0.6;
  z-index: 1; // Ensures this is above the stars but below interactive elements
  animation: slide 24s linear infinite;
  pointer-events: none; // Allows clicks to pass through to elements below

  @keyframes slide {
    0% {
      background-position-x: 0%;
    }
    100% {
      background-position-x: 300%;
    }
  }
`;

const Taskbar = styled.div`
  background: #c0c0c0;
  height: 40px;
  width: 100%;
  position: absolute;
  bottom: 0;
  display: flex;
  align-items: center;
  padding: 0 10px;
  box-sizing: border-box;
  box-shadow: inset 1px 1px #fff, inset -1px -1px #888;
`;

const StyledReact95Button = styled(React95Button)`
  && {
    margin-right: 8px;
    font-family: 'OMORI_GAME', monospace;
    font-size: 16px;
    height: 30px;

    /* Normal state styles (button not pressed) */
    background-color: #C0C0C0; /* Default light gray background */
    border-color: #C0C0C0; /* Matching border color */
    box-shadow: 1px 1px #888, -1px -1px #fff; /* Outset shadow for 3D raised effect */

    /* Change styles when isActive is true (button pressed) */
    ${({ isActive }) =>
      isActive &&
      `
        background-color: #A3A3A3; /* Darker gray for active (pressed) state */
        border-color: #A3A3A3; /* Match border color to background for pressed effect */
        box-shadow: inset 2px 2px #888, inset -2px -2px #fff; /* Inset shadow for pressed effect */
      `}

    &:focus {
      outline: none; /* Remove dotted outline on focus */
    }
  }
`;


const Clock = styled.div`
  margin-left: auto;
  font-family: 'OMORI_GAME', monospace;
  font-size: 16px;
  color: black;
  text-align: center;
  padding: 2px 5px;
  background: #c0c0c0;
  box-shadow: inset 1px 1px #888, inset -1px -1px #fff;
  user-select: none;
`;

const DraggableFrame = styled(Frame)`
  cursor: move;
  position: absolute;
  display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};
`;

const AboutMeContent = () => (
  <div>
    <h1>About Me</h1>
    <p>Hey, names 이스터!<br></br> Im that weird Korean nerd that produces music, watches anime, <br></br>sweats destiny 2,edits videos, and codes (clearly). <br></br>Feel free to stay and chill here!</p>
    <hr></hr>
    <div style={{display: 'flex', marginTop: '20px', alignItems: 'center', justifyContent: 'flex-start'}}>
      {/* GitHub Link */}
      <a href="https://github.com/eastercreeper" target="_blank" rel="noopener noreferrer">
        <img src="/images/gh.png" alt="GitHub Logo" style={{width: '15px', height: '15px',marginRight: '10px'}}/>
      </a>

      <a href="https://github.com/eastercreeper" target="_blank" rel="noopener noreferrer">
        <img src="/images/yt.png" alt="YouTube Logo" style={{width: '15px', height: '15px',marginRight: '10px'}}/>
      </a>

    </div>
  </div>
);

const MyPortfolioContent = () => (
    <div>
      <h1>Extra Window</h1>
      <p>Test</p>
    </div>
);

const App = () => {
  const environmentRef = useRef(null);
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());
  const [isStartMenuVisible, setStartMenuVisible] = useState(false);
  const [zIndexCounter, setZIndexCounter] = useState(1);
  const [activeWindow, setActiveWindow] = useState('');
  const [windows, setWindows] = useState({
    aboutMe: { isVisible: false, position: { x: 100, y: 100 }, zIndex: 1 },
    extraWindow: { isVisible: false, position: { x: 200, y: 150 }, zIndex: 1 },
  });
  const [bootScreenVisible, setBootScreenVisible] = useState(true);
  const [bootMessage, setBootMessage] = useState("Boot up your laptop.");
  const audioRef = useRef(new Audio('/sfx/boot.mp3'));
  const backgroundMusicRef = useRef(new Audio('/sfx/lostnfound.mp3')); // Adjust the path to your music file
  const [contentOpacity, setContentOpacity] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date().toLocaleTimeString()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    audioRef.current.onended = () => {
      setBootScreenVisible(false);
      setContentOpacity(1); // Trigger the fade-in effect for the content

      // Start playing the background music at a lower volume once the boot sound ends
      backgroundMusicRef.current.volume = 0.5; // Adjust volume as necessary
      backgroundMusicRef.current.loop = true; // Loop the background music
      backgroundMusicRef.current.play();
    };
  }, []);

  const toggleWindow = (windowName) => {
    const newZIndex = zIndexCounter + 2;
    const isVisible = !windows[windowName].isVisible;
    setZIndexCounter(newZIndex);
    
    setWindows(prevWindows => ({
      ...prevWindows,
      [windowName]: {
        ...prevWindows[windowName],
        isVisible: isVisible,
        zIndex: isVisible ? newZIndex : prevWindows[windowName].zIndex,
      },
    }));
  
    setActiveWindow(isVisible ? windowName : (activeWindow === windowName ? '' : activeWindow));
  };  

  const startDrag = (windowName, e) => {
    e.preventDefault();
    const newZIndex = zIndexCounter + 1;
    setZIndexCounter(newZIndex);
    setActiveWindow(windowName); // Set the active window on drag
    setWindows(prevWindows => ({
      ...prevWindows,
      [windowName]: {
        ...prevWindows[windowName],
        zIndex: newZIndex,
      },
    }));

    const initialX = e.clientX;
    const initialY = e.clientY;

    const onDrag = (moveEvent) => {
      const dx = moveEvent.clientX - initialX;
      const dy = moveEvent.clientY - initialY;

      setWindows((prevWindows) => ({
        ...prevWindows,
        [windowName]: {
          ...prevWindows[windowName],
          position: { x: windows[windowName].position.x + dx, y: windows[windowName].position.y + dy },
          zIndex: prevWindows[windowName].zIndex,
        },
      }));
    };

    const onDragEnd = () => {
      document.removeEventListener('mousemove', onDrag);
      document.removeEventListener('mouseup', onDragEnd);
    };

    document.addEventListener('mousemove', onDrag);
    document.addEventListener('mouseup', onDragEnd);
  };

  const handleBootScreenClick = () => {
    setBootMessage("You booted up your laptop.");
    audioRef.current.volume = 0.2; // Adjust the volume to 30% of the full volume
    audioRef.current.play();
  };  

  return (
    <ThemeProvider>
      <GlobalStyles />
      {bootScreenVisible && (
        <BootScreen onClick={handleBootScreenClick} isVisible={bootScreenVisible}>
          {bootMessage}
        </BootScreen>
      )}
      <ContentContainer opacity={contentOpacity}>
        <Desktop>
          <WindowBorder ref={environmentRef}>
            <WindowedEnvironment>
              <SlidingBackgroundStars/>
              <Taskbar>
              <StyledReact95Button onClick={() => setStartMenuVisible(!isStartMenuVisible)}>
                Start
              </StyledReact95Button>
              {isStartMenuVisible && (
                <List style={{ position: 'absolute', left: '0', bottom: '60px' }}>
                  <List.Item onClick={() => toggleWindow('aboutMe')}>About Me</List.Item>
                  <List.Item onClick={() => toggleWindow('extraWindow')}>Extra Window</List.Item>
                </List>
              )}
              <StyledReact95Button
                onClick={() => toggleWindow('aboutMe')}
                isActive={activeWindow === 'aboutMe'}>
                About Me
              </StyledReact95Button>
              <StyledReact95Button
                onClick={() => toggleWindow('extraWindow')}
                isActive={activeWindow === 'extraWindow'}>
                Extra Window
              </StyledReact95Button>
              <Clock>{currentTime}</Clock>
            </Taskbar>
            {Object.keys(windows).map(key => (
            <DraggableFrame
              key={key}
              isVisible={windows[key].isVisible}
              onMouseDown={(e) => startDrag(key, e)}
              style={{ left: windows[key].position.x, top: windows[key].position.y, zIndex: windows[key].zIndex }}
              boxShadow="out"
            >
              <TitleBar
                title={key.charAt(0).toUpperCase() + key.slice(1)}
                active={activeWindow === key}
                onClose={() => toggleWindow(key)}
                controls
              />
              {/* Wrap the content in a Frame with a white background and an inset boxShadow */}
              <Frame
              w="100%"
              h="100%"
              padding={4}
              boxShadow="in"
              bg="white"
              style={{
                overflow: 'hidden', // Hide overflow to prevent scrollbars from appearing due to the overflow
                boxSizing: 'border-box', // Ensure padding and border are included in the width calculation
              }}
            >
              <div
                style={{
                  padding: '10px',
                  boxSizing: 'border-box', // Ensure padding is included in the width calculation
                  maxWidth: 'calc(100% - 0px)', // Account for padding
                  overflow: 'auto', // Allow scrolling within this div
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                {/* Wrap child content in a container that ensures it doesn't exceed the parent's width */}
                <div style={{ maxWidth: '100%', overflowX: 'hidden' }}>
                  {key === 'aboutMe' && <AboutMeContent />}
                  {key === 'extraWindow' && <MyPortfolioContent />}
                </div>
              </div>
            </Frame>
            </DraggableFrame>
          ))}
          </WindowedEnvironment>
        </WindowBorder>
      </Desktop>
      </ContentContainer>
    </ThemeProvider>
  );
};

export default App;
