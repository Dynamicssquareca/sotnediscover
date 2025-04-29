import React, { useState, useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';


const ImageMagnifier = ({ src, zoomWidth = 300, zoomScale = 2, alt }) => {
  const [visible, setVisible] = useState(false);
  const [bgPos, setBgPos] = useState('0% 0%');
  const [imgHeight, setImgHeight] = useState(0);
  const [imgPos, setImgPos] = useState({});
  const [isClient, setIsClient] = useState(false); // Track if it's client-side

  const imgRef = useRef(null);

  // Check if running in the client-side
  useEffect(() => {
    setIsClient(true);
  }, []);

  

  const handleMouseEnter = () => {
    setImgHeight(imgRef.current?.clientHeight || 0);
    setVisible(true);
  };

  const handleMouseLeave = () => setVisible(false);

  const handleMouseMove = (e) => {
    const { left, top, width, height } = imgRef.current.getBoundingClientRect();
    const x = ((e.pageX - left - window.scrollX) / width) * 100;
    const y = ((e.pageY - top - window.scrollY) / height) * 100;
    setBgPos(`${x}% ${y}%`);
  };

  // Update the container position when the image is loaded or resized
  useEffect(() => {
    if (imgRef.current) {
      const rect = imgRef.current.getBoundingClientRect();
      setImgPos(rect);
    }
  }, [imgRef.current]);

  // Only render the zoom box on the client-side (after component is mounted)
  if (!isClient) {
    return <img ref={imgRef} src={src} alt={alt} className="original-image" />;
  }

  const zoomBoxStyles = {
    backgroundImage: `url(${src})`,
    backgroundPosition: bgPos,
    backgroundSize: `${zoomScale * 100}%`,
    height: imgHeight,
    width: zoomWidth,
    top: imgPos.top + window.scrollY, // Absolute position on the page
    left: imgPos.left + window.scrollX + imgPos.width + 5, // Position to the right of the image
    position: 'absolute',
    pointerEvents: 'none',
    zIndex: 999,
  };

  return (
    <div
      className="magnifier-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      <img ref={imgRef} src={src} alt={alt} className="original-image" />

      {visible && ReactDOM.createPortal(
        <div className="zoom-box-absolute" style={zoomBoxStyles} />,
        document.body // Render it outside Swiper, directly in the body
      )}
    </div>
  );
};

export default ImageMagnifier;
