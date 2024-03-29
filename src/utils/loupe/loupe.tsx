import React, { useState } from "react";

const Magnifier: React.FC<{ imageUrl: string }> = ({ imageUrl }) => {
  const [showMagnifier, setShowMagnifier] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseEnter = (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
    setShowMagnifier(true);
    setPosition({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY });
  };

  const handleMouseLeave = () => {
    setShowMagnifier(false);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setPosition({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY });
  };

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <img
        src={imageUrl}
        alt="Magnifiable"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
      {showMagnifier && (
        <div
          style={{
            position: "absolute",
            left: position.x - 50, // Adjust according to your magnifier size
            top: position.y - 50, // Adjust according to your magnifier size
            width: 100, // Adjust according to your magnifier size
            height: 100, // Adjust according to your magnifier size
            borderRadius: "50%",
            border: "2px solid #ccc",
            overflow: "hidden",
            zIndex: 999,
          }}
          onMouseMove={handleMouseMove}
        >
          <img
            src={imageUrl}
            alt="Magnified"
            style={{
              width: "100%", // Adjust according to your magnifier size
              height: "100%", // Adjust according to your magnifier size
              transform: "scale(2)", // Adjust the magnification level
              transformOrigin: "center",
            }}
          />
        </div>
      )}
    </div>
  );
};

export default Magnifier;
