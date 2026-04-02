"use client";

import Image, { type ImageProps } from "next/image";
import { useEffect, useRef, useState } from "react";

const shimmerClass =
  "bg-[linear-gradient(135deg,rgba(201,152,43,0.08),rgba(255,255,255,0.35),rgba(201,152,43,0.06))]";

type FadeInNextImageProps = Omit<ImageProps, "onLoad"> & {
  wrapperClassName?: string;
  placeholderClassName?: string;
};

export function FadeInNextImage({
  wrapperClassName = "",
  placeholderClassName = "",
  className = "",
  src,
  alt,
  ...props
}: FadeInNextImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const usesFill = "fill" in props && Boolean(props.fill);

  useEffect(() => {
    setIsLoaded(false);
  }, [src]);

  useEffect(() => {
    const image = imageRef.current;
    if (image?.complete && image.naturalWidth > 0) {
      setIsLoaded(true);
    }
  }, [src]);

  if (usesFill) {
    return (
      <>
        <div
          className={`pointer-events-none absolute inset-0 transition-opacity duration-700 ${shimmerClass} ${
            isLoaded ? "opacity-0" : "opacity-100"
          } ${placeholderClassName}`}
        />
        <Image
          {...props}
          ref={imageRef}
          src={src}
          alt={alt}
          onLoad={() => setIsLoaded(true)}
          className={`${className} transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"} ${wrapperClassName}`}
        />
      </>
    );
  }

  return (
    <div className={`relative h-full w-full overflow-hidden ${wrapperClassName}`}>
      <div
        className={`pointer-events-none absolute inset-0 transition-opacity duration-700 ${shimmerClass} ${
          isLoaded ? "opacity-0" : "opacity-100"
        } ${placeholderClassName}`}
      />
      <Image
        {...props}
        ref={imageRef}
        src={src}
        alt={alt}
        onLoad={() => setIsLoaded(true)}
        className={`${className} transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"}`}
      />
    </div>
  );
}

type FadeInImgProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  wrapperClassName?: string;
  placeholderClassName?: string;
  resetKey?: string;
};

export function FadeInImg({
  wrapperClassName = "",
  placeholderClassName = "",
  className = "",
  src,
  alt = "",
  resetKey,
  onLoad,
  ...props
}: FadeInImgProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const imageRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    setIsLoaded(false);
  }, [resetKey, src]);

  useEffect(() => {
    const image = imageRef.current;
    if (image?.complete && image.naturalWidth > 0) {
      setIsLoaded(true);
    }
  }, [resetKey, src]);

  return (
    <div className={`relative overflow-hidden ${wrapperClassName}`}>
      <div
        className={`pointer-events-none absolute inset-0 transition-opacity duration-700 ${shimmerClass} ${
          isLoaded ? "opacity-0" : "opacity-100"
        } ${placeholderClassName}`}
      />
      <img
        {...props}
        ref={imageRef}
        src={src}
        alt={alt}
        onLoad={(event) => {
          setIsLoaded(true);
          onLoad?.(event);
        }}
        className={`${className} transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"}`}
      />
    </div>
  );
}
