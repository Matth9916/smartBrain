// ParticulesBG.jsx
import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticulesBG = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesOptions = {
    background: { 
      color: { value: "transparent" } 
    },
    fpsLimit: 60,
    particles: {
      number: { 
        value: 50, 
        density: { 
          enable: true, 
          area: 800 
        } 
      },
      color: { value: "#ffffff" },
      shape: { type: "circle" },
      opacity: { 
        value: 0.7 
      },
      size: { 
        value: { min: 2, max: 5 } 
      },
      links: {
        enable: true,
        distance: 120,
        color: "#ffffff",
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        random: false,
        straight: false,
        outModes: {
          default: "out"
        },
      },
    },
    interactivity: {
      events: {
        onHover: { 
          enable: true, 
          mode: "grab" 
        },
        onClick: { 
          enable: true, 
          mode: "push" 
        },
      },
      modes: {
        grab: { 
          distance: 150, 
          links: { 
            opacity: 0.5 
          } 
        },
        push: { 
          quantity: 4 
        },
      },
    },
    detectRetina: true,
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={particlesOptions}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
      }}
    />
  );
};

export default ParticulesBG;