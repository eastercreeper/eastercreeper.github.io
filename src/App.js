import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ThemeProvider, Frame, List, TitleBar, Button as React95Button } from '@react95/core';
import styled from 'styled-components';
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
  transition: opacity 1.5s ease-out;
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
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
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
  background-color: #000000;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;
`;

// Background Layers
const BackgroundContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 0;
  pointer-events: none;
  background-color: #000000;
  contain: strict;
`;

const BackgroundImageLayer = styled.div`
  position: absolute;
  top: 0;
  left: -20%;
  width: 140%;
  height: 100%;
  background-image: url(${props => props.$bgImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  opacity: ${({ $isActive }) => ($isActive ? 1 : 0)};
  transition: opacity 2s ease-in-out;
  animation: slowSlide 36s ease-in-out infinite alternate;
  will-change: transform, opacity;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  perspective: 1000px;

  @keyframes slowSlide {
    0% {
      transform: translate3d(-8%, 0, 0);
    }
    100% {
      transform: translate3d(8%, 0, 0);
    }
  }
`;

// Taskbar Component
const Taskbar = styled.div`
  background: #c3c7cb;  // Windows 95 light gray taskbar
  height: 40px;
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  padding: 0 6px;
  box-sizing: border-box;
  border-top: 2px solid #ffffff;
  box-shadow: inset 0 1px 0 #dfdfdf;
  z-index: 100;
`;

// Styled React95 Button Component
const StyledReact95Button = styled(React95Button)`
  && {
    margin-right: 6px;
    font-family: 'OMORI_GAME', monospace;
    font-size: 16px;
    height: 30px;
    padding: 2px 10px;
    background-color: #c3c7cb;  // Classic Windows 95 light gray button
    color: #000000;  // Classic dark text
    border: none;
    box-shadow: inset 1px 1px 0px 1px #ffffff,
                inset -1px -1px 0px 1px #868a8e,
                1px 1px 0 0px #000000;
    cursor: pointer;

    ${({ isActive }) =>
        isActive &&
        `
        background-color: #e0e0e0;
        box-shadow: inset 1px 1px 0px 1px #000000,
                    inset -1px -1px 0px 1px #ffffff,
                    inset 2px 2px 0px #868a8e;
        padding-top: 4px;
        padding-left: 11px;
      `}

    &:focus {
      outline: 1px dotted #000000;
      outline-offset: -4px;
    }
  }
`;

// Clock Component
const Clock = styled.div`
  margin-left: auto;
  font-family: 'OMORI_GAME', monospace;
  font-size: 16px;
  color: #000000;  // Windows 95 clock text
  text-align: center;
  padding: 2px 8px;
  background: #c3c7cb;  // Windows 95 light gray clock background
  box-shadow: inset -1px -1px 0 0 #ffffff,
              inset 1px 1px 0 0 #868a8e,
              inset -2px -2px 0 0 #dfdfdf,
              inset 2px 2px 0 0 #000000;
  user-select: none;
`;

// Draggable Frame Component
const DraggableFrame = styled(Frame)`
  cursor: move;
  position: absolute;
  display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};
`;

// Music Player Styled Components
const MusicPlayerContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  box-sizing: border-box;
  font-family: 'OMORI_GAME', monospace;
  user-select: none;
`;

const LcdScreen = styled.div`
  background-color: #0d1611;
  color: #39ff14;
  border: 2px solid;
  border-color: #808080 #dfdfdf #dfdfdf #808080;
  box-shadow: inset 1px 1px 2px #000000;
  padding: 8px 12px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  border-radius: 2px;
`;

const LcdTopRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
`;

const LcdTrackName = styled.div`
  font-weight: bold;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 220px;
  letter-spacing: 0.5px;
`;

const LcdStatus = styled.div`
  font-size: 11px;
  color: ${({ $isPlaying }) => ($isPlaying ? '#00ffff' : '#ffb86c')};
  font-weight: bold;
  background: rgba(0, 0, 0, 0.4);
  padding: 2px 6px;
  border-radius: 2px;
  letter-spacing: 0.5px;
`;

const LcdBottomRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  color: #a0ff90;
`;

const LcdArtist = styled.div`
  font-size: 12px;
  opacity: 0.9;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 170px;
`;

const LcdTime = styled.div`
  font-size: 13px;
  font-weight: bold;
  font-variant-numeric: tabular-nums;
  color: #50fa7b;
`;

const ProgressBarWrapper = styled.div`
  height: 18px;
  background-color: #ffffff;
  border: 2px solid;
  border-color: #808080 #ffffff #ffffff #808080;
  box-shadow: inset 1px 1px 2px #000000;
  position: relative;
  cursor: pointer;
  overflow: hidden;
  box-sizing: border-box;
`;

const ProgressBarFill = styled.div`
  height: 100%;
  background: repeating-linear-gradient(
    90deg,
    #000080,
    #000080 8px,
    #1040a0 8px,
    #1040a0 10px
  );
  transition: width 0.1s linear;
`;

const ControlsRow = styled.div`
  display: flex;
  gap: 4px;
  justify-content: space-between;
  align-items: center;
`;

const PlayerButton = styled.button`
  font-family: 'OMORI_GAME', monospace;
  font-size: 12px;
  height: 28px;
  padding: 2px 8px;
  background-color: #c3c7cb;
  color: #000000;
  border: none;
  box-shadow: inset 1px 1px 0px 1px #ffffff,
              inset -1px -1px 0px 1px #868a8e,
              1px 1px 0 0px #000000;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  flex: 1;

  ${({ isActive }) =>
    isActive &&
    `
    background-color: #dfdfdf;
    box-shadow: inset 1px 1px 0px 1px #000000,
                inset -1px -1px 0px 1px #ffffff,
                inset 2px 2px 0px #868a8e;
  `}

  &:active {
    box-shadow: inset 1px 1px 0px 1px #000000,
                inset -1px -1px 0px 1px #ffffff,
                inset 2px 2px 0px #868a8e;
    padding-top: 3px;
  }

  &:focus {
    outline: 1px dotted #000000;
    outline-offset: -3px;
  }
`;

const VolumeRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  color: #000000;
  background: #c3c7cb;
  padding: 4px 6px;
  box-shadow: inset -1px -1px 0 0 #ffffff,
              inset 1px 1px 0 0 #868a8e;
`;

const VolumeSlider = styled.input`
  flex: 1;
  cursor: pointer;
  accent-color: #000080;
  height: 14px;
  margin: 0;
`;

const PlaylistHeader = styled.div`
  font-size: 13px;
  font-weight: bold;
  color: #000000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2px;
`;

const PlaylistContainer = styled.div`
  background-color: #ffffff;
  border: 2px solid;
  border-color: #808080 #ffffff #ffffff #808080;
  box-shadow: inset 1px 1px 2px #000000;
  max-height: 120px;
  min-height: 50px;
  overflow-y: auto;
  box-sizing: border-box;
`;

const PlaylistItem = styled.div`
  padding: 5px 8px;
  display: flex;
  align-items: center;
  font-size: 13px;
  cursor: pointer;
  background-color: ${({ isSelected }) => (isSelected ? '#000080' : 'transparent')};
  color: ${({ isSelected }) => (isSelected ? '#ffffff' : '#000000')};

  &:hover {
    background-color: ${({ isSelected }) => (isSelected ? '#000080' : '#e0e0e0')};
  }
`;

const songs = [
  // RADWIMPS Tracks (Zenzenzense first)
  { id: 'radwimps-zenzenzense', title: 'Zenzenzense (前前前世)', artist: 'RADWIMPS', src: '/sfx/radwimps_zenzenzense.mp3' },
  { id: 'radwimps-dream-lantern', title: 'Dream Lantern (夢灯籠)', artist: 'RADWIMPS', src: '/sfx/radwimps_dream_lantern.mp3' },
  { id: 'radwimps-sparkle', title: 'Sparkle (スパークル)', artist: 'RADWIMPS', src: '/sfx/radwimps_sparkle.mp3' },

  // TUYU Tracks
  { id: 'tuyu-endpoint', title: 'If There Was an Endpoint.', artist: 'TUYU', src: '/sfx/tuyu_if_there_was_an_endpoint.mp3' },
  { id: 'tuyu-bus', title: 'Getting on a bus to another world, see ya!', artist: 'TUYU', src: '/sfx/tuyu_getting_on_a_bus.mp3' },
  { id: 'tuyu-low-as-dirt', title: "Being low as dirt, taking what's important to me", artist: 'TUYU', src: '/sfx/tuyu_being_low_as_dirt.mp3' },

  // Kessoku Band (結束バンド) - Full Album & Singles
  { id: 'kb-seishun-complex', title: 'Seishun Complex (青春コンプレックス)', artist: 'Kessoku Band', src: '/sfx/kessoku_seishun_complex.mp3' },
  { id: 'kb-hitoribocchi-tokyo', title: 'Hitoribocchi Tokyo (ひとりぼっち東京)', artist: 'Kessoku Band', src: '/sfx/kessoku_hitoribocchi_tokyo.mp3' },
  { id: 'kb-distortion', title: 'Distortion!!', artist: 'Kessoku Band', src: '/sfx/kessoku_distortion.mp3' },
  { id: 'kb-secret-base', title: 'Secret Base (ひみつ基地)', artist: 'Kessoku Band', src: '/sfx/kessoku_secret_base.mp3' },
  { id: 'kb-guitar-loneliness', title: 'Guitar, Loneliness and Blue Planet (ギターと孤独と蒼い惑星)', artist: 'Kessoku Band', src: '/sfx/kessoku_guitar_loneliness_blue_planet.mp3' },
  { id: 'kb-cant-sing-love-song', title: "I Can't Sing a Love Song (ラブソングが歌えない)", artist: 'Kessoku Band', src: '/sfx/kessoku_love_song.mp3' },
  { id: 'kb-that-band', title: 'That Band (あのバンド)', artist: 'Kessoku Band', src: '/sfx/kessoku_that_band.mp3' },
  { id: 'kb-karakara', title: 'Karakara (カラカラ)', artist: 'Kessoku Band', src: '/sfx/kessoku_karakara.mp3' },
  { id: 'kb-little-sea', title: 'The Little Sea (小さな海)', artist: 'Kessoku Band', src: '/sfx/kessoku_little_sea.mp3' },
  { id: 'kb-what-is-wrong-with', title: 'What Is Wrong With (なにが悪い)', artist: 'Kessoku Band', src: '/sfx/kessoku_what_is_wrong_with.mp3' },
  { id: 'kb-never-forget', title: 'Never Forget (忘れてやらない)', artist: 'Kessoku Band', src: '/sfx/kessoku_never_forget.mp3' },
  { id: 'kb-constellation', title: 'If I Could Be a Constellation (星座になれたら)', artist: 'Kessoku Band', src: '/sfx/kessoku_if_i_could_be_a_constellation.mp3' },
  { id: 'kb-flashbacker', title: 'Flashbacker (フラッシュバッカー)', artist: 'Kessoku Band', src: '/sfx/kessoku_flashbacker.mp3' },
  { id: 'kb-rockn-roll', title: "Rockn' Roll, Morning Light Falls on You (転がる岩、君に朝が降る)", artist: 'Kessoku Band', src: '/sfx/kessoku_rockn_roll.mp3' },
  { id: 'kb-into-the-light', title: 'Into the Light (光の中へ)', artist: 'Kessoku Band', src: '/sfx/kessoku_into_the_light.mp3' },
  { id: 'kb-blue-spring', title: 'Blue Spring and Western Sky (青い春と西の空)', artist: 'Kessoku Band', src: '/sfx/kessoku_blue_spring.mp3' },
];

// Music Player Content Component
const MusicPlayerContent = ({
  songsList,
  currentSongIndex,
  isPlaying,
  currentTime,
  duration,
  volume,
  isMuted,
  isLooping,
  onSelectSong,
  onTogglePlay,
  onStop,
  onPrev,
  onNext,
  onSeek,
  onVolumeChange,
  onToggleMute,
  onToggleLoop,
}) => {
  const currentSong = songsList[currentSongIndex] || songsList[0];
  const progressPercent = duration > 0 ? Math.min(100, Math.max(0, (currentTime / duration) * 100)) : 0;

  const formatTime = (seconds) => {
    if (isNaN(seconds) || seconds < 0) return '00:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleProgressBarClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const newPercent = Math.max(0, Math.min(1, clickX / rect.width));
    if (duration > 0) {
      onSeek(newPercent * duration);
    }
  };

  return (
    <MusicPlayerContainer>
      {/* LCD Status Screen */}
      <LcdScreen>
        <LcdTopRow>
          <LcdTrackName>
            {currentSong ? `🎵 [${(currentSongIndex + 1).toString().padStart(2, '0')}] ${currentSong.title}` : 'No Track'}
          </LcdTrackName>
          <LcdStatus $isPlaying={isPlaying}>{isPlaying ? '▶ PLAYING' : '⏸ PAUSED'}</LcdStatus>
        </LcdTopRow>
        <LcdBottomRow>
          <LcdArtist>{currentSong ? currentSong.artist : 'Unknown Artist'}</LcdArtist>
          <LcdTime>{formatTime(currentTime)} / {formatTime(duration)}</LcdTime>
        </LcdBottomRow>
      </LcdScreen>

      {/* Interactive Progress Bar */}
      <ProgressBarWrapper onClick={handleProgressBarClick} title="Click to seek">
        <ProgressBarFill style={{ width: `${progressPercent}%` }} />
      </ProgressBarWrapper>

      {/* Playback Controls */}
      <ControlsRow>
        <PlayerButton onClick={onPrev} title="Previous Track">⏮ Prev</PlayerButton>
        <PlayerButton onClick={onTogglePlay} title={isPlaying ? 'Pause' : 'Play'}>
          {isPlaying ? '⏸ Pause' : '▶ Play'}
        </PlayerButton>
        <PlayerButton onClick={onStop} title="Stop">⏹ Stop</PlayerButton>
        <PlayerButton onClick={onNext} title="Next Track">⏭ Next</PlayerButton>
        <PlayerButton onClick={onToggleLoop} isActive={isLooping} title="Toggle Loop">
          🔁 {isLooping ? 'Loop' : 'Once'}
        </PlayerButton>
      </ControlsRow>

      {/* Volume Controls */}
      <VolumeRow>
        <PlayerButton onClick={onToggleMute} style={{ flex: 'none', minWidth: '32px', padding: '2px 4px' }} title={isMuted ? 'Unmute' : 'Mute'}>
          {isMuted || volume === 0 ? '🔇' : '🔊'}
        </PlayerButton>
        <span style={{ fontWeight: 'bold' }}>Volume</span>
        <VolumeSlider
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={isMuted ? 0 : volume}
          onChange={(e) => onVolumeChange(parseFloat(e.target.value))}
        />
        <span style={{ minWidth: '38px', textAlign: 'right', fontVariantNumeric: 'tabular-nums' }}>
          {Math.round((isMuted ? 0 : volume) * 100)}%
        </span>
      </VolumeRow>

      {/* Playlist Selector */}
      <PlaylistHeader>
        <span>Track List</span>
        <span style={{ fontSize: '11px', color: '#555555' }}>({songsList.length} track{songsList.length === 1 ? '' : 's'})</span>
      </PlaylistHeader>
      <PlaylistContainer>
        {songsList.map((song, index) => {
          const isSelected = index === currentSongIndex;
          return (
            <PlaylistItem
              key={song.id}
              isSelected={isSelected}
              onClick={() => onSelectSong(index)}
            >
              <span style={{ marginRight: '6px' }}>
                {isSelected && isPlaying ? '🔊' : isSelected ? '▶' : '💿'}
              </span>
              <span style={{ flex: 1, fontWeight: isSelected ? 'bold' : 'normal' }}>
                {index + 1}. {song.title} - {song.artist}
              </span>
            </PlaylistItem>
          );
        })}
      </PlaylistContainer>
    </MusicPlayerContainer>
  );
};

// About Me Content Component
const AboutMeContent = () => (
    <div>
      <h1>About Me</h1>
      <p>Hey, names かいりー!<br />
        Im that weird Korean nerd that makes music, watches anime,<br />
        sweats destiny 2, edits videos, draws, and codes (clearly).<br />
        Feel free to stay and chill here!
      </p>
      <hr style={{ borderColor: '#555555' }} />
      <div style={{ display: 'flex', marginTop: '20px', alignItems: 'center', justifyContent: 'flex-start' }}>
        <a href="https://github.com/eastercreeper" target="_blank" rel="noopener noreferrer">
          <img src="/images/gh.png" alt="GitHub Logo" style={{ width: '15px', height: '15px', marginRight: '10px' }} />
        </a>
        <a href="https://www.youtube.com/@kairii.17" target="_blank" rel="noopener noreferrer">
          <img src="/images/yt.png" alt="YouTube Logo" style={{ width: '15px', height: '15px', marginRight: '10px' }} />
        </a>
      </div>
    </div>
);

// My Portfolio Content Component
const MyPortfolioContent = () => (
    <div>
      <h1>Extra Window</h1>
      <p>Test</p>
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
    aboutMe: { isVisible: true, position: { x: 70, y: 60 }, zIndex: 1, title: 'About Me' },
    musicPlayer: { isVisible: false, position: { x: 140, y: 80 }, zIndex: 1, title: 'Music Player' },
    extraWindow: { isVisible: false, position: { x: 200, y: 140 }, zIndex: 1, title: 'Extra Window' },
  });
  const [bootScreenVisible, setBootScreenVisible] = useState(true);
  const [bootMessage, setBootMessage] = useState("Boot up your laptop.");
  
  // Audio & Music Player state
  const audioRef = useRef(new Audio('/sfx/boot.mp3'));
  const backgroundMusicRef = useRef(new Audio(songs[0].src));
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const currentSongIndexRef = useRef(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioCurrentTime, setAudioCurrentTime] = useState(0);
  const [audioDuration, setAudioDuration] = useState(0);
  const [volume, setVolume] = useState(0.5);
  const volumeRef = useRef(0.5);
  const [isMuted, setIsMuted] = useState(false);
  const isMutedRef = useRef(false);
  const [isLooping, setIsLooping] = useState(true);
  const isLoopingRef = useRef(true);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date().toLocaleTimeString()), 1000);
    return () => clearInterval(timer);
  }, []);

  const playSong = useCallback((index) => {
    if (index < 0 || index >= songs.length) return;
    setCurrentSongIndex(index);
    currentSongIndexRef.current = index;

    const audio = backgroundMusicRef.current;
    if (!audio) return;

    setAudioCurrentTime(0);
    setAudioDuration(0);

    const targetSrc = songs[index].src;
    const isDifferentSrc = !audio.src.endsWith(targetSrc);

    if (isDifferentSrc) {
      audio.pause();
      audio.preload = 'metadata';
      audio.src = targetSrc;
      audio.load();
    } else {
      audio.currentTime = 0;
    }

    audio.loop = isLoopingRef.current;
    audio.volume = isMutedRef.current ? 0 : volumeRef.current;

    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setIsPlaying(true);
        })
        .catch(err => {
          if (err.name !== 'AbortError') {
            console.warn("Playback error for track:", songs[index].title, err);
            setIsPlaying(false);
          }
        });
    }
  }, []);

  const togglePlay = useCallback(() => {
    const audio = backgroundMusicRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.loop = isLoopingRef.current;
      audio.volume = isMutedRef.current ? 0 : volumeRef.current;
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
          })
          .catch(err => console.warn("Playback error:", err));
      }
    }
  }, [isPlaying]);

  const stopSong = useCallback(() => {
    const audio = backgroundMusicRef.current;
    if (!audio) return;
    audio.pause();
    audio.currentTime = 0;
    setIsPlaying(false);
    setAudioCurrentTime(0);
  }, []);

  const prevSong = useCallback(() => {
    const prevIndex = (currentSongIndexRef.current - 1 + songs.length) % songs.length;
    playSong(prevIndex);
  }, [playSong]);

  const nextSong = useCallback(() => {
    const nextIndex = (currentSongIndexRef.current + 1) % songs.length;
    playSong(nextIndex);
  }, [playSong]);

  const seekSong = useCallback((newTime) => {
    const audio = backgroundMusicRef.current;
    if (!audio) return;
    audio.currentTime = newTime;
    setAudioCurrentTime(newTime);
  }, []);

  const handleVolumeChange = useCallback((newVol) => {
    setVolume(newVol);
    volumeRef.current = newVol;
    setIsMuted(false);
    isMutedRef.current = false;
    if (backgroundMusicRef.current) {
      backgroundMusicRef.current.volume = newVol;
    }
  }, []);

  const handleToggleMute = useCallback(() => {
    setIsMuted(prev => {
      const nextMuted = !prev;
      isMutedRef.current = nextMuted;
      if (backgroundMusicRef.current) {
        backgroundMusicRef.current.volume = nextMuted ? 0 : volumeRef.current;
      }
      return nextMuted;
    });
  }, []);

  const handleToggleLoop = useCallback(() => {
    setIsLooping(prev => {
      const nextLoop = !prev;
      isLoopingRef.current = nextLoop;
      if (backgroundMusicRef.current) {
        backgroundMusicRef.current.loop = nextLoop;
      }
      return nextLoop;
    });
  }, []);

  useEffect(() => {
    const audio = backgroundMusicRef.current;
    if (!audio) return;

    audio.preload = 'metadata';
    audio.volume = 0.5;
    audio.loop = isLoopingRef.current;

    const handleTimeUpdate = () => setAudioCurrentTime(audio.currentTime);
    const handleLoadedMetadata = () => {
      if (!isNaN(audio.duration) && isFinite(audio.duration)) {
        setAudioDuration(audio.duration);
      }
    };
    const handleDurationChange = () => {
      if (!isNaN(audio.duration) && isFinite(audio.duration)) {
        setAudioDuration(audio.duration);
      }
    };
    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => {
      if (audio.paused) {
        setIsPlaying(false);
      }
    };
    const handleEnded = () => {
      if (!isLoopingRef.current) {
        nextSong();
      }
    };

    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('durationchange', handleDurationChange);
    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('durationchange', handleDurationChange);
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('pause', handlePause);
      audio.removeEventListener('ended', handleEnded);
    };
  }, [nextSong]);

  useEffect(() => {
    const audio = audioRef.current;
    audio.onended = () => {
      setBootScreenVisible(false);
      playSong(0);
    };
    return () => {
      audio.onended = null;
    };
  }, [playSong]);

  // Change background image smoothly every 20 seconds
  useEffect(() => {
    const backgroundChangeInterval = setInterval(() => {
      setCurrentBackgroundIndex(prevIndex => (prevIndex + 1) % backgroundImages.length);
    }, 20000);

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
    if (bootMessage === "You booted up your laptop.") return;
    setBootMessage("You booted up your laptop.");
    audioRef.current.volume = 0.2;
    audioRef.current.play().catch(err => {
      console.warn("Boot sound play prevented:", err);
      setBootScreenVisible(false);
      playSong(0);
    });
  };

  return (
      <ThemeProvider>
        <GlobalStyles />
        <BootScreen onClick={handleBootScreenClick} isVisible={bootScreenVisible}>
          {bootMessage}
        </BootScreen>
        <ContentContainer>
          <Desktop>
            <WindowBorder ref={environmentRef}>
              <WindowedEnvironment>
                <BackgroundContainer>
                  {backgroundImages.map((image, index) => (
                    <BackgroundImageLayer
                      key={image}
                      $bgImage={image}
                      $isActive={index === currentBackgroundIndex}
                    />
                  ))}
                </BackgroundContainer>
                <Taskbar>
                  <StyledReact95Button onClick={() => setStartMenuVisible(!isStartMenuVisible)}>
                    Start
                  </StyledReact95Button>
                  {isStartMenuVisible && (
                      <List style={{ position: 'absolute', left: '6px', bottom: '40px', zIndex: 110 }}>
                        <List.Item onClick={() => { toggleWindow('aboutMe'); setStartMenuVisible(false); }}>About Me</List.Item>
                        <List.Item onClick={() => { toggleWindow('musicPlayer'); setStartMenuVisible(false); }}>Music Player</List.Item>
                        <List.Item onClick={() => { toggleWindow('extraWindow'); setStartMenuVisible(false); }}>Extra Window</List.Item>
                      </List>
                  )}
                  <StyledReact95Button
                      onClick={() => toggleWindow('aboutMe')}
                      isActive={activeWindow === 'aboutMe'}>
                    About Me
                  </StyledReact95Button>
                  <StyledReact95Button
                      onClick={() => toggleWindow('musicPlayer')}
                      isActive={activeWindow === 'musicPlayer'}>
                    Music Player
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
                        style={{
                          left: windows[key].position.x,
                          top: windows[key].position.y,
                          zIndex: windows[key].zIndex,
                          width: key === 'musicPlayer' ? '360px' : undefined,
                        }}
                        boxShadow="out"
                    >
                      <TitleBar
                          title={windows[key].title || (key.charAt(0).toUpperCase() + key.slice(1))}
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
                            {key === 'musicPlayer' && (
                              <MusicPlayerContent
                                songsList={songs}
                                currentSongIndex={currentSongIndex}
                                isPlaying={isPlaying}
                                currentTime={audioCurrentTime}
                                duration={audioDuration}
                                volume={volume}
                                isMuted={isMuted}
                                isLooping={isLooping}
                                onSelectSong={playSong}
                                onTogglePlay={togglePlay}
                                onStop={stopSong}
                                onPrev={prevSong}
                                onNext={nextSong}
                                onSeek={seekSong}
                                onVolumeChange={handleVolumeChange}
                                onToggleMute={handleToggleMute}
                                onToggleLoop={handleToggleLoop}
                              />
                            )}
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
