import React, { useEffect } from "react";
import "../styles/LoadingLoader.css";

const LoadingLoader = () => {
  useEffect(() => {
    const features = [
      'Employee Management',
      'Attendance Tracking', 
      'Payroll Automation',
      'Performance Review',
      'Leave Management',
      'Recruitment Portal',
      'Time Tracking',
      'Benefits Admin'
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
        const point = pathElement.getPointAtLength(distance * pathLength);
        
        const svg = pathElement.closest('svg');
        const svgRect = svg.getBoundingClientRect();
        const viewBox = svg.viewBox.baseVal;
        
        const scaleX = svgRect.width / viewBox.width;
        const scaleY = svgRect.height / viewBox.height;
        
        const screenX = (point.x * scaleX) + svgRect.left;
        const screenY = (point.y * scaleY) + svgRect.top;
        
        return { x: screenX, y: screenY };
      } catch (e) {
        return { x: 0, y: 0 };
      }
    }

    function animateFeatureOnPath(feature, pathData) {
      const pathElement = getPathElement(pathData.id);
      const outputPathElement = getPathElement('path-output');
      
      if (!pathElement || !outputPathElement) {
        return;
      }
      
      const dot = document.createElement('div');
      dot.className = 'moving-dot';
      document.body.appendChild(dot);
      
      const label = document.createElement('div');
      label.className = 'text-label';
      label.textContent = feature;
      document.body.appendChild(label);
      
      const inputDuration = 3000;
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
            document.body.appendChild(dotOutput);
            
            const labelOutput = document.createElement('div');
            labelOutput.className = 'text-label-output';
            labelOutput.textContent = feature;
            document.body.appendChild(labelOutput);
            
            const outputPoint = getPointOnPath(outputPathElement, 0.1);
            dotOutput.style.left = outputPoint.x + 'px';
            dotOutput.style.top = outputPoint.y + 'px';
            labelOutput.style.left = (outputPoint.x + 25) + 'px';
            labelOutput.style.top = outputPoint.y + 'px';
            
            setTimeout(() => {
              dotOutput.style.transition = 'opacity 0.5s ease-out';
              labelOutput.style.transition = 'opacity 0.5s ease-out';
              dotOutput.style.opacity = '0';
              labelOutput.style.opacity = '0';
              
              setTimeout(() => {
                dotOutput.remove();
                labelOutput.remove();
              }, 500);
            }, 1500);
          }, 200);
        }
      }
      
      requestAnimationFrame(animateInput);    
    }

    function startBatch() {
      const availablePaths = [...paths];
      const selectedPaths = [];
      
      for (let i = 0; i < 3; i++) {
        const randomIndex = Math.floor(Math.random() * availablePaths.length);
        selectedPaths.push(availablePaths[randomIndex]);
        availablePaths.splice(randomIndex, 1);
      }
      
      const availableFeatures = [...features];
      const selectedFeatures = [];
      
      for (let i = 0; i < 3; i++) {
        const randomIndex = Math.floor(Math.random() * availableFeatures.length);
        selectedFeatures.push(availableFeatures[randomIndex]);
        availableFeatures.splice(randomIndex, 1);
      }
      
      selectedPaths.forEach((path, index) => {
        setTimeout(() => {
          animateFeatureOnPath(selectedFeatures[index], path);
        }, index * 400);
      });
    }

    function startLoop() {
      startBatch();
      const interval = setInterval(() => {
        startBatch();
      }, 7000);
      return () => clearInterval(interval);
    }

    const timeout = setTimeout(() => {
      const cleanup = startLoop();
      return cleanup;
    }, 1000);
    
    return () => {
      clearTimeout(timeout);
    };
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
        {/* UPDATED LOGO SECTION WITH IMAGE */}
        <div className="logo-container-loader">
          <div className="glow-effect-loader"></div>
          <div className="logo-loader-with-image">
            <div className="logo-border-ring"></div>
            <div className="logo-border-ring-outer"></div>
            <img 
              src="/LOGO1.jpg" 
              alt="OnBoard-X Logo" 
              className="logo-image-center"
            />
          </div>
          <div className="logo-text-loader" style={{ textTransform: 'none' }}>OnBoard-X</div>
        </div>

        <svg className="connection-svg-loader" viewBox="0 0 2400 900" preserveAspectRatio="none">
          <defs>
            <linearGradient id="baseGradient" x1="0%" y1="0%" x2="100%" y2="0%" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#00d4ff" stopOpacity="0"/>
              <stop offset="20%" stopColor="#00d4ff" stopOpacity="0.3"/>
              <stop offset="50%" stopColor="#ffffff" stopOpacity="0.8"/>
              <stop offset="80%" stopColor="#00d4ff" stopOpacity="0.3"/>
              <stop offset="100%" stopColor="#00d4ff" stopOpacity="0"/>
            </linearGradient>

            <radialGradient id="glowGradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#41D1FF" stopOpacity="1"/>
              <stop offset="100%" stopColor="#41D1FF" stopOpacity="0"/>
            </radialGradient>

            <linearGradient id="outputBaseGradient" x1="0%" y1="0%" x2="100%" y2="0%" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#00ff88" stopOpacity="0"/>
              <stop offset="20%" stopColor="#00ff88" stopOpacity="0.3"/>
              <stop offset="50%" stopColor="#ffffff" stopOpacity="0.8"/>
              <stop offset="80%" stopColor="#00ff88" stopOpacity="0.3"/>
              <stop offset="100%" stopColor="#00ff88" stopOpacity="0"/>
            </linearGradient>

            <radialGradient id="outputGlowGradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#00ff88" stopOpacity="1"/>
              <stop offset="100%" stopColor="#00ff88" stopOpacity="0"/>
            </radialGradient>
          </defs>
          
          <g id="path-1-group">
            <path className="connection-path-base" 
                  d="M 0 80 L 1200 450" 
                  stroke="url(#baseGradient)" strokeWidth="1.2" fill="none" opacity="0.8"/>
            <path id="path-1" className="connection-path-loader path-1" 
                  d="M 0 80 L 1200 450" 
                  stroke="url(#glowGradient)" strokeWidth="1.2" fill="none"/>
          </g>

          <g id="path-2-group">
            <path className="connection-path-base" 
                  d="M 0 200 L 1200 450" 
                  stroke="url(#baseGradient)" strokeWidth="1.2" fill="none" opacity="0.8"/>
            <path id="path-2" className="connection-path-loader path-2" 
                  d="M 0 200 L 1200 450" 
                  stroke="url(#glowGradient)" strokeWidth="1.2" fill="none"/>
          </g>

          <g id="path-3-group">
            <path className="connection-path-base" 
                  d="M 0 320 L 1200 450" 
                  stroke="url(#baseGradient)" strokeWidth="1.2" fill="none" opacity="0.8"/>
            <path id="path-3" className="connection-path-loader path-3" 
                  d="M 0 320 L 1200 450" 
                  stroke="url(#glowGradient)" strokeWidth="1.2" fill="none"/>
          </g>

          <g id="path-4-group">
            <path className="connection-path-base" 
                  d="M 0 440 L 1200 450" 
                  stroke="url(#baseGradient)" strokeWidth="1.2" fill="none" opacity="0.8"/>
            <path id="path-4" className="connection-path-loader path-4" 
                  d="M 0 440 L 1200 450" 
                  stroke="url(#glowGradient)" strokeWidth="1.2" fill="none"/>
          </g>

          <g id="path-5-group">
            <path className="connection-path-base" 
                  d="M 0 560 L 1200 450" 
                  stroke="url(#baseGradient)" strokeWidth="1.2" fill="none" opacity="0.8"/>
            <path id="path-5" className="connection-path-loader path-5" 
                  d="M 0 560 L 1200 450" 
                  stroke="url(#glowGradient)" strokeWidth="1.2" fill="none"/>
          </g>

          <g id="path-6-group">
            <path className="connection-path-base" 
                  d="M 0 680 L 1200 450" 
                  stroke="url(#baseGradient)" strokeWidth="1.2" fill="none" opacity="0.8"/>
            <path id="path-6" className="connection-path-loader path-6" 
                  d="M 0 680 L 1200 450" 
                  stroke="url(#glowGradient)" strokeWidth="1.2" fill="none"/>
          </g>

          <g id="path-7-group">
            <path className="connection-path-base" 
                  d="M 0 800 L 1200 450" 
                  stroke="url(#baseGradient)" strokeWidth="1.2" fill="none" opacity="0.8"/>
            <path id="path-7" className="connection-path-loader path-7" 
                  d="M 0 800 L 1200 450" 
                  stroke="url(#glowGradient)" strokeWidth="1.2" fill="none"/>
          </g>
          
          <g id="path-output-group">
            <path className="connection-path-base-output" 
                  d="M 1200 450 L 2400 450" 
                  stroke="url(#outputBaseGradient)" strokeWidth="1.5" fill="none" opacity="0.8"/>
            <path id="path-output" className="connection-path-loader path-output" 
                  d="M 1200 450 L 2400 450" 
                  stroke="url(#outputGlowGradient)" strokeWidth="1.5" fill="none"/>
          </g>
        </svg>
      </div>
    </section>
  );
};

export default LoadingLoader;
