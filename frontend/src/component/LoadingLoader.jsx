import React, { useEffect } from "react";
import "../styles/LoadingLoader.css";

const LoadingLoader = () => {
  useEffect(() => {
    const inputMessages = [
      'Login Request', 'Weather API', 'User Profile', 'Form Submit', 
      'SQL Query', 'Stock Price', 'File Upload', 'Payment Data',
      'Email Send', 'Cart Update', 'Search Query', 'Notification',
      'Image Process', 'Video Stream', 'Data Sync', 'Auth Token',
      'Report Gen', 'Export CSV', 'Webhook Call', 'Cache Clear'
    ];

    const paths = [
      { id: 'path-1' }, { id: 'path-2' }, { id: 'path-3' }, { id: 'path-4' },
      { id: 'path-5' }, { id: 'path-6' }, { id: 'path-7' }
    ];

    function getPathElement(pathId) {
      return document.getElementById(pathId);
    }

    function getPointOnPath(pathElement, distance) {
      try {
        const pathLength = pathElement.getTotalLength();
        return pathElement.getPointAtLength(distance * pathLength);
      } catch (e) {
        return { x: 0, y: 0 };
      }
    }

    function animateDotOnPath(message, pathData) {
      const pathElement = getPathElement(pathData.id);
      const outputPathElement = getPathElement('path-output');
      const container = document.querySelector('.loading-loader-container');
      
      if (!pathElement || !outputPathElement) return;
      
      const dot = document.createElement('div');
      dot.className = 'moving-dot';
      container.appendChild(dot);
      
      const label = document.createElement('div');
      label.className = 'text-label';
      label.textContent = message;
      container.appendChild(label);
      
      const inputDuration = 4000;
      let inputStartTime = null;
      
      function animateInput(timestamp) {
        if (!inputStartTime) inputStartTime = timestamp;
        const elapsed = timestamp - inputStartTime;
        const progress = Math.min(elapsed / inputDuration, 1);
        
        if (progress < 1) {
          const point = getPointOnPath(pathElement, progress);
          dot.style.left = point.x + 'px';
          dot.style.top = point.y + 'px';
          label.style.left = (point.x + 25) + 'px';
          label.style.top = point.y + 'px';
          requestAnimationFrame(animateInput);
        } else {
          dot.remove();
          label.remove();
          
          setTimeout(() => {
            const dotOutput = document.createElement('div');
            dotOutput.className = 'moving-dot-output';
            container.appendChild(dotOutput);
            
            const labelOutput = document.createElement('div');
            labelOutput.className = 'text-label-output';
            labelOutput.textContent = message;
            container.appendChild(labelOutput);
            
            const outputDuration = 3500;
            let outputStartTime = null;
            
            function animateOutput(timestamp) {
              if (!outputStartTime) outputStartTime = timestamp;
              const elapsed = timestamp - outputStartTime;
              const progress = Math.min(elapsed / outputDuration, 1);
              
              if (progress < 1) {
                const point = getPointOnPath(outputPathElement, progress);
                dotOutput.style.left = point.x + 'px';
                dotOutput.style.top = point.y + 'px';
                labelOutput.style.left = (point.x + 25) + 'px';
                labelOutput.style.top = point.y + 'px';
                requestAnimationFrame(animateOutput);
              } else {
                dotOutput.remove();
                labelOutput.remove();
              }
            }
            requestAnimationFrame(animateOutput);
          }, 300);
        }
      }
      requestAnimationFrame(animateInput);    
    }

    function startAnimation() {
      const randomMessage = inputMessages[Math.floor(Math.random() * inputMessages.length)];
      const randomPath = paths[Math.floor(Math.random() * paths.length)];
      animateDotOnPath(randomMessage, randomPath);
      setTimeout(startAnimation, 1500 + Math.random() * 2000);
    }

    const timeout = setTimeout(startAnimation, 1000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className="loading-loader-section">
      <div className="bg-grid-loader"></div>
      <div className="particle-loader"></div>
      <div className="particle-loader"></div>
      <div className="particle-loader"></div>
      <div className="particle-loader"></div>
      <div className="particle-loader"></div>

      <div className="loading-loader-container">
        <div className="logo-container-loader">
          <div className="glow-effect-loader"></div>
          <div className="logo-loader">
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="10" y="10" width="80" height="80" stroke="url(#gradient)" strokeWidth="3" rx="5"/>
              <rect x="20" y="20" width="60" height="60" stroke="url(#gradient)" strokeWidth="2.5" opacity="0.6" rx="3"/>
              <rect x="30" y="30" width="40" height="40" stroke="url(#gradient)" strokeWidth="2" opacity="0.3" rx="2"/>
              <polygon points="50,25 65,40 65,60 50,75 35,60 35,40" stroke="url(#gradient)" strokeWidth="2.5" fill="rgba(0, 212, 255, 0.1)"/>
              <circle cx="50" cy="50" r="10" fill="url(#gradient)">
                <animate attributeName="r" values="8;12;8" dur="2s" repeatCount="indefinite"/>
              </circle>
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#00d4ff" stopOpacity="1" />
                  <stop offset="50%" stopColor="#0099ff" stopOpacity="1" />
                  <stop offset="100%" stopColor="#00d4ff" stopOpacity="1" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="logo-text-loader">PROCESS</div>
        </div>

        <svg className="connection-svg-loader" viewBox="0 0 1920 700" preserveAspectRatio="xMidYMid meet">
          <defs>
            <linearGradient id="wireGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00d4ff" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#00d4ff" stopOpacity="1" />
              <stop offset="100%" stopColor="#0099ff" stopOpacity="0.9" />
            </linearGradient>
            
            <linearGradient id="wireGradientOutput" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00ff88" stopOpacity="1" />
              <stop offset="50%" stopColor="#00ffaa" stopOpacity="1" />
              <stop offset="100%" stopColor="#00ff88" stopOpacity="1" />
            </linearGradient>
            
            <filter id="glow">
              <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          <path id="path-1" className="connection-path-loader path-1" d="M 0 50 Q 300 30, 600 180 Q 800 320, 880 350" stroke="url(#wireGradient)" strokeWidth="5" fill="none" filter="url(#glow)"/>
          <path id="path-2" className="connection-path-loader path-2" d="M 0 150 Q 350 130, 650 240 Q 800 330, 880 350" stroke="url(#wireGradient)" strokeWidth="5" fill="none" filter="url(#glow)"/>
          <path id="path-3" className="connection-path-loader path-3" d="M 0 250 Q 400 230, 700 310 Q 800 340, 880 350" stroke="url(#wireGradient)" strokeWidth="5" fill="none" filter="url(#glow)"/>
          <path id="path-4" className="connection-path-loader path-4" d="M 0 350 Q 450 350, 880 350" stroke="url(#wireGradient)" strokeWidth="5" fill="none" filter="url(#glow)"/>
          <path id="path-5" className="connection-path-loader path-5" d="M 0 450 Q 400 470, 700 390 Q 800 360, 880 350" stroke="url(#wireGradient)" strokeWidth="5" fill="none" filter="url(#glow)"/>
          <path id="path-6" className="connection-path-loader path-6" d="M 0 550 Q 350 570, 650 460 Q 800 370, 880 350" stroke="url(#wireGradient)" strokeWidth="5" fill="none" filter="url(#glow)"/>
          <path id="path-7" className="connection-path-loader path-7" d="M 0 650 Q 300 670, 600 520 Q 800 380, 880 350" stroke="url(#wireGradient)" strokeWidth="5" fill="none" filter="url(#glow)"/>
          <path id="path-output" className="connection-path-loader path-output" d="M 1040 350 L 1920 350" stroke="url(#wireGradientOutput)" strokeWidth="6" fill="none" filter="url(#glow)"/>
        </svg>
      </div>
    </section>
  );
};

export default LoadingLoader;
