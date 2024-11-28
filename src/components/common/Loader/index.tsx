import React from "react";
import Lottie from "react-lottie";
import LoadingAnimation from "../../../../public/Loading.json";

const Loader = () => {
  const defaultOptions = {
    loop: true,          // Set to false for a one-time animation
    autoplay: true,      // Auto play animation on load
    animationData: LoadingAnimation,  // Import the animation data
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <div
      style={{
        position: 'fixed', // Makes the animation fixed on the screen
        top: 0,
        left: 0,
        width: '100vw', // Full width of the viewport
        height: '100vh', // Full height of the viewport
        backgroundColor: 'rgba(128, 128, 128, 0.5)', // Gray background with transparency
        display: 'flex',
        justifyContent: 'center', // Center the animation horizontally
        alignItems: 'center', // Center the animation vertically
        zIndex: 9999, // Ensure it's on top of other content
      }}
    >
     <Lottie height={'500px'} width={'600px'} options={defaultOptions} />;
    </div>
  );
};

export default Loader;
