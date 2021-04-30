import { useState } from "react";

export default function ImagePlaceholder(props) {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const placeholderClass = !isImageLoaded && "animate-pulse";

  function onImageLoaded() {
    setIsImageLoaded(true);
  }

  return (
    <div
      className={`bg-gradient-to-br from-green-800 to-green-400 ${placeholderClass}`}>
      <img {...props} onLoad={onImageLoaded} />
    </div>
  );
}
