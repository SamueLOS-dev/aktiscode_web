import React, { useRef, useEffect, useState, useLayoutEffect, useCallback } from 'react';

type Option = { id: 'quick' | 'complex', label: string };

interface SegmentedProps {
  options: Option[]; // presne dve položky v tomto use-case
  value: Option['id'];
  onChange: (id: Option['id']) => void;
  className?: string;
  disabled?: boolean;
  ariaLabel?: string;
}

const SegmentedToggle: React.FC<SegmentedProps> = ({
  options,
  value,
  onChange,
  className = '',
  disabled = false,
  ariaLabel = 'Výber typu riešenia'
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const thumbRef = useRef<HTMLDivElement>(null);
  const labelRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [thumbStyle, setThumbStyle] = useState({ width: 0, transform: 'translateX(0px)' });
  const [focusedIndex, setFocusedIndex] = useState<number>(-1);
  const resizeObserverRef = useRef<ResizeObserver | null>(null);

  // Throttle function for performance
  const throttle = useCallback((func: Function, delay: number) => {
    let timeoutId: NodeJS.Timeout;
    let lastExecTime = 0;
    return (...args: any[]) => {
      const currentTime = Date.now();
      
      if (currentTime - lastExecTime > delay) {
        func(...args);
        lastExecTime = currentTime;
      } else {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
          func(...args);
          lastExecTime = Date.now();
        }, delay - (currentTime - lastExecTime));
      }
    };
  }, []);

  // Calculate thumb position and width
  const updateThumbPosition = useCallback(() => {
    const selectedIndex = options.findIndex(option => option.id === value);
    const selectedLabel = labelRefs.current[selectedIndex];
    
    if (selectedLabel && containerRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect();
      const labelRect = selectedLabel.getBoundingClientRect();
      
      // Calculate position relative to container
      const offsetLeft = labelRect.left - containerRect.left;
      const width = labelRect.width;
      
      setThumbStyle({
        width,
        transform: `translateX(${offsetLeft}px)`
      });
    }
  }, [value, options]);

  // Throttled version of updateThumbPosition
  const throttledUpdateThumb = useCallback(
    throttle(updateThumbPosition, 100),
    [updateThumbPosition]
  );

  // Update thumb position on value change
  useLayoutEffect(() => {
    updateThumbPosition();
  }, [updateThumbPosition]);

  // Setup ResizeObserver for responsive behavior
  useEffect(() => {
    if (containerRef.current) {
      resizeObserverRef.current = new ResizeObserver(throttledUpdateThumb);
      resizeObserverRef.current.observe(containerRef.current);
      
      // Also observe each label for text changes
      labelRefs.current.forEach(label => {
        if (label) {
          resizeObserverRef.current?.observe(label);
        }
      });
    }

    return () => {
      resizeObserverRef.current?.disconnect();
    };
  }, [throttledUpdateThumb]);

  // Handle keyboard navigation
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (disabled) return;

    const currentIndex = options.findIndex(option => option.id === value);
    let newIndex = currentIndex;

    switch (event.key) {
      case 'ArrowLeft':
      case 'ArrowUp':
        event.preventDefault();
        newIndex = currentIndex > 0 ? currentIndex - 1 : options.length - 1;
        break;
      case 'ArrowRight':
      case 'ArrowDown':
        event.preventDefault();
        newIndex = currentIndex < options.length - 1 ? currentIndex + 1 : 0;
        break;
      case 'Home':
        event.preventDefault();
        newIndex = 0;
        break;
      case 'End':
        event.preventDefault();
        newIndex = options.length - 1;
        break;
      case 'Enter':
      case ' ':
        event.preventDefault();
        // Value is already selected, just ensure focus
        return;
      default:
        return;
    }

    onChange(options[newIndex].id);
    labelRefs.current[newIndex]?.focus();
  };

  const handleClick = (optionId: Option['id']) => {
    if (disabled) return;
    onChange(optionId);
  };

  const handleFocus = (index: number) => {
    setFocusedIndex(index);
  };

  const handleBlur = () => {
    setFocusedIndex(-1);
  };

  return (
    <div className={`segmented-toggle-container ${className}`}>
      <div
        ref={containerRef}
        role="radiogroup"
        aria-label={ariaLabel}
        className={`
          relative inline-flex items-center
          bg-gradient-to-r from-[rgba(0,23,66,0.6)] to-[rgba(0,23,66,0.4)]
          backdrop-blur-sm
          border border-[rgba(16,231,255,0.18)]
          rounded-full
          p-1
          transition-all duration-200
          hover:border-[rgba(16,231,255,0.28)]
          ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
        `}
        onKeyDown={handleKeyDown}
      >
        {/* Thumb (sliding background) */}
        <div
          ref={thumbRef}
          className={`
            absolute top-1 bottom-1
            bg-gradient-to-r from-[#38FFCD] to-[#10E7FF]
            rounded-full
            transition-all duration-200 ease-[cubic-bezier(0.2,0.8,0.2,1)]
            shadow-[0_12px_32px_rgba(16,231,255,0.25)]
            z-10
            ${disabled ? 'opacity-50' : ''}
          `}
          style={{
            width: `${thumbStyle.width}px`,
            transform: thumbStyle.transform
          }}
          aria-hidden="true"
        />

        {/* Option buttons */}
        {options.map((option, index) => {
          const isSelected = option.id === value;
          const isFocused = focusedIndex === index;
          
          return (
            <button
              key={option.id}
              ref={el => labelRefs.current[index] = el}
              role="radio"
              aria-checked={isSelected}
              tabIndex={isSelected ? 0 : -1}
              disabled={disabled}
              className={`
                relative z-20
                px-3 py-2 sm:px-6 sm:py-3
                font-inter font-bold text-white
                text-xs sm:text-[clamp(15px,1.8vw,22px)]
                tracking-[-0.2px]
                leading-tight
                whitespace-nowrap
                transition-all duration-200
                rounded-full
                focus:outline-none
                hover:text-[#EAFBFF]
                ${disabled ? 'cursor-not-allowed text-[rgba(255,255,255,0.45)]' : 'cursor-pointer'}
                
                /* Responsive text sizing */
                md:px-7 md:py-3.5
                md:text-[clamp(16px,1.8vw,22px)]
                
                /* Mobile stacking for very small screens */
                max-[359px]:block max-[359px]:w-full max-[359px]:text-center
                max-[359px]:mb-1 max-[359px]:last:mb-0
              `}
              onClick={() => handleClick(option.id)}
              onFocus={() => handleFocus(index)}
              onBlur={handleBlur}
              onMouseDown={(e) => {
                // Active state - reduce glow opacity
                if (thumbRef.current && isSelected) {
                  thumbRef.current.style.transform = `${thumbStyle.transform} scale(0.99)`;
                  thumbRef.current.style.boxShadow = '0 12px 32px rgba(16,231,255,0.15)';
                }
              }}
              onMouseUp={() => {
                // Reset active state
                if (thumbRef.current && isSelected) {
                  thumbRef.current.style.transform = thumbStyle.transform;
                  thumbRef.current.style.boxShadow = '0 12px 32px rgba(16,231,255,0.25)';
                }
              }}
              onMouseLeave={() => {
                // Reset active state on mouse leave
                if (thumbRef.current && isSelected) {
                  thumbRef.current.style.transform = thumbStyle.transform;
                  thumbRef.current.style.boxShadow = '0 12px 32px rgba(16,231,255,0.25)';
                }
              }}
            >
              {option.label}
            </button>
          );
        })}
      </div>

      {/* Mobile stacked layout for very small screens */}
      <style jsx>{`
        @media (max-width: 359px) {
          .segmented-toggle-container .relative {
            flex-direction: column;
            align-items: stretch;
          }
          
          .segmented-toggle-container [role="radio"] {
            margin-bottom: 4px;
          }
          
          .segmented-toggle-container [role="radio"]:last-child {
            margin-bottom: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default SegmentedToggle;