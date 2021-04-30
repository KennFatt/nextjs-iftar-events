import { forwardRef, useEffect, useRef, useState } from "react";

const Image = forwardRef((props, ref) => <img {...props} ref={ref} />);

function ImagePlaceholder(props) {
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef();

  useEffect(() => {
    const img = imgRef.current;
    if (img) {
      img.onload = () => {
        setIsLoaded(true);
      };
    }

    return () => {
      if (img) {
        img.onload = null;
      }
    };
  }, []);

  return (
    <div
      className={`bg-gradient-to-br from-green-800 to-green-400 ${
        !isLoaded && "animate-pulse"
      }`}>
      <Image {...props} ref={imgRef} />
    </div>
  );
}

export default ImagePlaceholder;
