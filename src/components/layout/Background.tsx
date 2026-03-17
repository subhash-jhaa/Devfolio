import React from 'react';

export const Background: React.FC = () => {
  return (
    <>
      <div className="grid-background" />
      <div className="corner-glow glow-top-left" />
      <div className="corner-glow glow-top-right" />
      <div className="corner-glow glow-bottom-left" />
      <div className="corner-glow glow-bottom-right" />
    </>
  );
};
