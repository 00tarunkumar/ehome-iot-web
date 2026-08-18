import React from 'react';
import './Loading.css';

export function Loading() {
  return (
    <div className="loading-container">
      <div className="loading-content">
        <div className="network-loader">
          <div className="network-node node-1"></div>
          <div className="network-node node-2"></div>
          <div className="network-node node-3"></div>
          <div className="network-node node-4"></div>

          <svg className="network-lines" viewBox="0 0 200 200" preserveAspectRatio="xMidYMid meet">
            <line x1="100" y1="50" x2="50" y2="120" className="line line-1" />
            <line x1="100" y1="50" x2="150" y2="120" className="line line-2" />
            <line x1="50" y1="120" x2="150" y2="120" className="line line-3" />
          </svg>

          <div className="center-icon">
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
              <circle cx="30" cy="30" r="8" fill="currentColor" className="pulse-circle" />
              <path d="M30 15 A15 15 0 0 1 45 30" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" className="arc-1" />
              <path d="M30 10 A20 20 0 0 1 50 30" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.6" className="arc-2" />
            </svg>
          </div>
        </div>

        <div className="loading-text">
          <h1>eHome IoT</h1>
          <p>Connecting your world</p>
          <div className="loading-dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
}
