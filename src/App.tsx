import { useState, useEffect, useCallback } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CompaniesStrip } from './components/CompaniesStrip';
import { IntroSection } from './components/IntroSection';
import { WorkSection } from './components/WorkSection';
import { WhatIDoSection } from './components/WhatIDoSection';
import { AboutSection } from './components/AboutSection';
import { ProjectDetailPage } from './components/ProjectDetailPage';
import { Footer } from './components/Footer';
import { CommandPalette } from './components/CommandPalette';
import { Loader } from './components/Loader';
import { MusicToggle } from './components/MusicToggle';
import type { Project } from './types';
import { PROJECTS, EXPERIMENT_PROJECTS } from './data/portfolioData';
import { setSoundEnabled, playTapSound } from './utils/sound';
import { startMusic, stopMusic } from './utils/music';
import { initSmoothScroll, stopScroll, startScroll, scrollToTop } from './utils/smoothScroll';

type Theme = 'light' | 'dark' | 'warm';
type Page = 'home' | 'work' | 'about';

const nextTheme = (prev: Theme): Theme => (prev === 'light' ? 'dark' : prev === 'dark' ? 'warm' : 'light');

export function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [isSoundOn, setIsSoundOn] = useState(true);
  const [isMusicOn, setIsMusicOn] = useState(false);
  const [theme, setTheme] = useState<Theme>('dark');

  // Lenis smooth scrolling; frozen while the loader is on screen
  useEffect(() => {
    if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);
    const cleanup = initSmoothScroll();
    stopScroll();
    return cleanup;
  }, []);

  // Hero fully revealed: let it play its entrance animation
  const handleLoaderReveal = useCallback(() => {
    document.documentElement.classList.remove('is-loading');
  }, []);

  // Intro fully gone: hand scrolling back to the page
  const handleLoaderDone = useCallback(() => {
    startScroll();
    setIsLoading(false);
  }, []);

  // Theme on the root element
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // Soft tap sound for every link / button click
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if ((e.target as Element | null)?.closest?.('a, button, [role="button"]')) playTapSound();
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  const handleToggleSound = () => {
    const next = !isSoundOn;
    setIsSoundOn(next);
    setSoundEnabled(next);
  };

  const handleToggleMusic = () => {
    if (isMusicOn) stopMusic();
    else startMusic();
    setIsMusicOn(!isMusicOn);
  };

  const handleSelectPage = (page: string) => {
    if (page === 'home' || page === 'work' || page === 'about') {
      setSelectedProject(null);
      setCurrentPage(page as Page);
      scrollToTop(true);
    }
  };

  const handleSelectProject = (project: Project) => {
    setSelectedProject(project);
    scrollToTop(true);
  };

  const handleOpenProjectById = (projectId: string) => {
    const found = [...PROJECTS, ...EXPERIMENT_PROJECTS].find((p) => p.id === projectId);
    if (found) {
      handleSelectProject(found);
    }
  };

  const openPalette = useCallback(() => setIsCommandPaletteOpen(true), []);
  const closePalette = useCallback(() => setIsCommandPaletteOpen(false), []);

  return (
    <div className={`min-h-screen ${selectedProject || currentPage === 'about' ? 'bg-white text-slate-900' : 'bg-[var(--bg-primary)] text-[var(--text-primary)]'} transition-colors duration-300 relative selection:bg-indigo-500 selection:text-white`}>
      {isLoading && <Loader onReveal={handleLoaderReveal} onDone={handleLoaderDone} />}

      <Navbar
        currentPage={selectedProject ? '' : currentPage}
        isProjectView={Boolean(selectedProject)}
        onSelectPage={handleSelectPage}
        onOpenCommandPalette={openPalette}
        isSoundOn={isSoundOn}
        onToggleSound={handleToggleSound}
        theme={theme}
        onChangeTheme={setTheme}
      />

      <main>
        {selectedProject ? (
          <ProjectDetailPage
            project={selectedProject}
            onBack={() => {
              setSelectedProject(null);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        ) : (
          <>
            {currentPage === 'home' && (
              <>
                <Hero
                  isMusicOn={isMusicOn}
                  onToggleMusic={handleToggleMusic}
                  onCycleTheme={() => setTheme(nextTheme)}
                  onOpenCommandPalette={openPalette}
                />
                <CompaniesStrip />
                <IntroSection />
                <WorkSection onSelectProject={handleSelectProject} />
                <WhatIDoSection />
              </>
            )}

            {currentPage === 'work' && (
              <div className="pt-24 sm:pt-32">
                <WorkSection onSelectProject={handleSelectProject} />
                <WhatIDoSection />
              </div>
            )}

            {currentPage === 'about' && (
              <div className="pt-24 sm:pt-32 bg-white min-h-screen">
                <AboutSection />
              </div>
            )}
          </>
        )}
      </main>

      <Footer />

      <MusicToggle isOn={isMusicOn} onToggle={handleToggleMusic} />

      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onOpen={openPalette}
        onClose={closePalette}
        onSelectProject={handleOpenProjectById}
        onToggleTheme={() => setTheme(nextTheme)}
        onToggleMusic={handleToggleMusic}
      />
    </div>
  );
}

export default App;

