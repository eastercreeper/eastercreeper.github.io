import React, { useState, useEffect, useRef } from 'react';
import { ThemeProvider, Frame, List, TitleBar, Button as React95Button } from '@react95/core';
import styled, { keyframes } from 'styled-components';
import GlobalStyles from './GlobalStyles';

// Boot Screen Component
const BootScreen = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #1e1e1e;  // Dark background
  color: #ffffff;  // Light text
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

const backgroundImages = [
  "/images/wallpaper1.png",
  "/images/wallpaper2.png",
  "/images/wallpaper3.png", // Add more images as needed
];

// Content Container Component
const ContentContainer = styled.div`
  background-color: #1e1e1e;  // Dark background
  opacity: ${({ opacity }) => opacity};
  transition: opacity 2s ease-in;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  visibility: ${({ opacity }) => (opacity > 0 ? 'visible' : 'hidden')};
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

// Desktop Component
const Desktop = styled.div`
  background-color: #1e1e1e;  // Dark background
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

// Window Border Component
const WindowBorder = styled.div`
  padding: 8px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 3px solid #606060;  // Adjust as needed
  height: 90vh;
  width: 80vw;
  background-color: #2e2e2e;  // Darker background for windows
`;

// Windowed Environment Component
const WindowedEnvironment = styled.div`
  position: relative;
  background: linear-gradient(0deg, rgba(33,5,77,1) 0%, rgba(42,8,129,1) 30%, rgba(108,14,255,1) 100%);
  height: 100%;
  width: 100%;
  box-sizing: border-box;
`;

// SlidingBackgroundStars Component
const SlidingBackgroundStars = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  animation: slide 30s linear infinite;
  background-image: url(${props => props.bgImage});
  background-size: 110%; // Ensure the background covers the area
  background-repeat: no-repeat; // Prevent tiling
  z-index: 0;
  opacity: ${({ opacity }) => opacity}; // Control opacity for fade effect
  transition: opacity 1s ease-in-out; // Smooth transition for opacity
  
  @keyframes slide {
    0% {
      background-position-x: 0%;
    }
    100% {
      background-position-x: 100%;
    }
  }
`;

// Taskbar Component
const Taskbar = styled.div`
  background: #3a3a3a;  // Dark taskbar
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

// Styled React95 Button Component
const StyledReact95Button = styled(React95Button)`
  && {
    margin-right: 8px;
    font-family: 'OMORI_GAME', monospace;
    font-size: 16px;
    height: 30px;
    background-color: #3a3a3a;  // Dark button background
    border-color: #3a3a3a;  // Dark button border
    box-shadow: 1px 1px #888, -1px -1px #fff;

    ${({ isActive }) =>
        isActive &&
        `
        background-color: #5a5a5a;  // Active button background
        border-color: #5a5a5a;
        box-shadow: inset 2px 2px #888, inset -2px -2px #fff;
      `}

    &:focus {
      outline: none;
    }
  }
`;

// Clock Component
const Clock = styled.div`
  margin-left: auto;
  font-family: 'OMORI_GAME', monospace;
  font-size: 16px;
  color: #ffffff;  // Light clock text
  text-align: center;
  padding: 2px 5px;
  background: #3a3a3a;  // Dark clock background
  box-shadow: inset 1px 1px #888, inset -1px -1px #fff;
  user-select: none;
`;

// Draggable Frame Component
const DraggableFrame = styled(Frame)`
  cursor: move;
  position: absolute;
  display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};
`;

// About Me Content Component
const AboutMeContent = () => (
    <div>
      <h1>About Me</h1>
      <p>Hey, names 이스터!<br />
        Im that weird Korean nerd that produces music, watches anime,<br />
        sweats destiny 2, edits videos, draws, and codes (clearly).<br />
        Feel free to stay and chill here!
      </p>
      <hr style={{ borderColor: '#555555' }} />
      <div style={{ display: 'flex', marginTop: '20px', alignItems: 'center', justifyContent: 'flex-start' }}>
        <a href="https://github.com/eastercreeper" target="_blank" rel="noopener noreferrer">
          <img src="/images/gh.png" alt="GitHub Logo" style={{ width: '15px', height: '15px', marginRight: '10px' }} />
        </a>
        <a href="https://github.com/eastercreeper" target="_blank" rel="noopener noreferrer">
          <img src="/images/yt.png" alt="YouTube Logo" style={{ width: '15px', height: '15px', marginRight: '10px' }} />
        </a>
      </div>
    </div>
);

// My Portfolio Content Component
const MyPortfolioContent = () => (
    <div>
      <h1 style={{ color: '#ffffff' }}>Extra Window</h1>  // Light text
      <p style={{ color: '#ffffff' }}>Test</p>  // Light text
    </div>
);

// App Component
const App = () => {
  const environmentRef = useRef(null);
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());
  const [currentBackgroundIndex, setCurrentBackgroundIndex] = useState(0);
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
  const backgroundMusicRef = useRef(new Audio('/sfx/lostnfound.mp3'));
  const [contentOpacity, setContentOpacity] = useState(0);
  const [bgOpacity, setBgOpacity] = useState(1); // State for background opacity

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date().toLocaleTimeString()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    audioRef.current.onended = () => {
      setBootScreenVisible(false);
      setContentOpacity(1);
      backgroundMusicRef.current.volume = 0.5;
      backgroundMusicRef.current.loop = true;
      backgroundMusicRef.current.play();
    };
  }, []);

  // Change background image every 30 seconds
  useEffect(() => {
    const backgroundChangeInterval = setInterval(() => {
      setBgOpacity(0); // Start fade out
      setTimeout(() => {
        setCurrentBackgroundIndex(prevIndex => (prevIndex + 1) % backgroundImages.length);
        setBgOpacity(1); // Start fade in
      }, 1000); // Match this duration with the transition duration
    }, 30000); // Change every 30 seconds

    return () => clearInterval(backgroundChangeInterval);
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
    setActiveWindow(windowName);
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
    audioRef.current.volume = 0.2;
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
                <SlidingBackgroundStars
                    key={currentBackgroundIndex}
                    bgImage={backgroundImages[currentBackgroundIndex]}
                    opacity={bgOpacity} // Use bgOpacity state for opacity
                />
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
                      <Frame
                          w="100%"
                          h="100%"
                          padding={4}
                          boxShadow="in"
                          bg="white"
                          style={{
                            overflow: 'hidden',
                            boxSizing: 'border-box',
                          }}
                      >
                        <div
                            style={{
                              padding: '10px',
                              boxSizing: 'border-box',
                              maxWidth: 'calc(100% - 0px)',
                              overflow: 'auto',
                              display: 'flex',
                              flexDirection: 'column',
                            }}
                        >
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
