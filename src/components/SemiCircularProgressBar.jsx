import React, { useEffect, useState } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const SemiCircularProgressBar = ({ value }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1000; // Animation duration in ms
    const increment = value / (duration / 16); // Increment based on frame rate (60fps)

    const animate = () => {
      start += increment;
      if (start < value) {
        setProgress(start);
        requestAnimationFrame(animate);
      } else {
        setProgress(value);
      }
    };

    requestAnimationFrame(animate);
  }, [value]);

  // Dynamic fill color based on value
  const getColor = (value) => {
    if (value < 40) return '#ff4d4f'; // Red for low values
    if (value < 70) return '#faad14'; // Yellow for medium values
    return '#52c41a'; // Green for high values
  };

  return (
    <div style={{ position: 'relative', width: 200, height: 100, overflow: 'hidden', alignSelf: "center" }}>
      <CircularProgressbar
        value={progress}
        maxValue={200}
        text={''} // Hide default percentage value
        styles={buildStyles({
          rotation: 0.75, // Rotate to create a semicircle
          strokeLinecap: 'round', // Rounded edges
          trailColor: '#eee',
          pathColor: getColor(progress), // Dynamic color based on value
        })}
      />

      {/* Custom percentage value */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -70%)',
        fontSize: '20px',
        fontWeight: 'bold',
        color: "var(--background-color-grayTxts)"
      }}>
        {Math.round(progress)}%
      </div>
    </div>
  );
};

export default SemiCircularProgressBar;
