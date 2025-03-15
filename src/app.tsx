import React, { useState, useEffect } from 'react';
import { Terminal, Bug, Search, Shield } from 'lucide-react';
import { motion } from 'framer-motion';
import { LoadingScreen } from './components/LoadingScreen';
import { GridSquare } from './components/GridSquare';
import { setupScrollPositionHandler } from './utils/scrollPosition';

const frameworks = [
  {
    id: 1,
    title: 'OSINT Framework',
    description: 'Terminal-based OSINT tool navigation',
    url: '/osint',
    externalUrl: 'https://diogo-lages.github.io/OSINT-Framework/',
    icon: <Terminal className="w-8 h-8 text-primary" />
  },
  {
    id: 2,
    title: 'Bug Bounty Framework',
    description: 'Interactive tree-view of security tools',
    url: '/bugbounty',
    externalUrl: 'https://diogo-lages.github.io/BugBounty-Framework/',
    icon: <Bug className="w-8 h-8 text-primary" />
  },
  {
    id: 3,
    title: 'Google Dork Tool',
    description: 'Advanced search query builder',
    url: '/dorks',
    externalUrl: 'https://diogo-lages.github.io/Deep-Dork-Web/',
    icon: <Search className="w-8 h-8 text-primary" />
  },
  {
    id: 4,
    title: 'Blue Team Framework',
    description: 'Defense tools and resources',
    url: '/blueteam',
    externalUrl: 'https://diogo-lages.github.io/Blueteam-Framework/',
    icon: <Shield className="w-8 h-8 text-primary" />
  }
];

// Change this line
const titleText = "Framework Hub";  // Removed the underscore from here

function App() {
  const [loading, setLoading] = useState(true);
  const [displayedTitle, setDisplayedTitle] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!loading) {
      let currentIndex = 0;
      const typingInterval = setInterval(() => {
        if (currentIndex <= titleText.length) {
          setDisplayedTitle(titleText.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(typingInterval);
        }
      }, 100);

      return () => clearInterval(typingInterval);
    }
  }, [loading]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  // Add this useEffect to preserve scroll position
  useEffect(() => {
    setupScrollPositionHandler();
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen bg-black overflow-y-scroll scrollbar-hide">
      <div className="min-h-screen flex flex-col items-center pt-16 p-8"> {/* Changed justify-center to pt-16 */}
        <div className="mb-12"> {/* Changed from flex-1 flex items-center justify-center w-full to mb-12 */}
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-primary font-mono text-5xl text-center" // Increased from 5xl to 6xl
          >
            {displayedTitle}
            <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`}>_</span>
          </motion.h1>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
        >
          {frameworks.map((framework) => (
            <a
              key={framework.id}
              href={framework.externalUrl || framework.url}
              target={framework.externalUrl ? '_blank' : undefined}
              rel={framework.externalUrl ? 'noopener noreferrer' : undefined}
              className="no-underline"
            >
              <GridSquare framework={framework} />
            </a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 2 }}
          className="mt-12 text-[12px] font-mono text-primary/50" // Changed from text-xs to text-[10px]
        >
          [ DEVELOPED BY: TheOGDev ]
        </motion.div>
      </div>
    </div>
  );
}

export default App;
