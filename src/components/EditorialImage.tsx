import React, { useState, useEffect, useRef } from 'react';

interface EditorialImageProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  priority?: boolean;
  aspectRatioClass?: string;
  overlayBadge?: string;
  children?: React.ReactNode;
}

export const EditorialImage: React.FC<EditorialImageProps> = ({
  src,
  alt,
  className = '',
  containerClassName = '',
  priority = false,
  aspectRatioClass = '',
  overlayBadge,
  children,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (priority) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        });
      },
      { rootMargin: '200px 0px', threshold: 0.05 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden bg-[#161B19] select-none ${aspectRatioClass} ${containerClassName}`}
    >
      {/* Subtle Editorial Tone Placeholder Skeleton */}
      <div
        className={`absolute inset-0 bg-gradient-to-tr from-[#161B19] via-[#1D2321] to-[#252E2B] transition-opacity duration-700 pointer-events-none ${
          isLoaded ? 'opacity-0' : 'opacity-100'
        }`}
      />

      {/* Render Image only when approaching viewport (or if priority) */}
      {isInView && (
        <img
          src={src}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          onLoad={() => setIsLoaded(true)}
          className={`w-full h-full object-cover transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            isLoaded
              ? 'opacity-100 scale-100 filter blur-0'
              : 'opacity-0 scale-[1.03] filter blur-[4px]'
          } ${className}`}
        />
      )}

      {/* Optional Editorial Dispatch Badge Overlay */}
      {overlayBadge && (
        <div
          className={`absolute bottom-3 left-3 bg-[#161B19]/80 backdrop-blur-xs text-[#FAFBF9] text-[10px] tracking-[0.16em] uppercase px-2.5 py-1 z-10 transition-opacity duration-500 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {overlayBadge}
        </div>
      )}

      {/* Inset Vignette Tone for Editorial Depth */}
      <div className="absolute inset-0 bg-[#161B19]/15 pointer-events-none" />

      {children}
    </div>
  );
};
