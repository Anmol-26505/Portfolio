import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

const BookPreloader = ({ onComplete }) => {
  const [showText, setShowText] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    // We now rely on the video's onEnded event to show the text
    // instead of a hardcoded timer.
  }, []);

  const handleFinish = () => {
    setTimeout(() => {
      setIsFinished(true);
      setTimeout(() => {
        onComplete();
      }, 1500); // fade out duration
    }, 2500); // wait a bit after text is fully written
  };

  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap');
          
          .handwriting {
            font-family: 'Great Vibes', cursive;
            color: #1a0f0f; /* Very dark brown/black ink */
            text-shadow: 0px 0px 1px rgba(0,0,0,0.5);
            /* A bit of rotation to match the page angle in the video if needed */
            transform: rotate(-1deg); 
          }
        `}
      </style>
      <AnimatePresence>
        {!isFinished && (
          <motion.div 
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black overflow-hidden"
            exit={{ opacity: 0, transition: { duration: 1.5 } }}
          >
            {/* Background Video */}
            <video 
              ref={videoRef}
              className="absolute inset-0 w-full h-full object-cover"
              src="/book-opening.mp4" 
              autoPlay 
              muted 
              playsInline
              onEnded={() => setShowText(true)}
              // We do not loop it, so it rests on the open book page
            />

            {/* Overlay Container to align text over the right page */}
            {/* The right page is typically on the right half of the screen. 
                Using relative percentages helps it stay aligned across resolutions, though object-cover on the video means it might crop.
                Using a relative wrapper to simulate the video's aspect ratio might be safer, but object-cover is okay if the book is centered. */}
            <div className="relative w-full h-full max-w-[1920px] max-h-[1080px] mx-auto flex">
              <div className="w-1/2 h-full flex flex-col justify-center items-start pl-[15%] pr-[5%] pt-[10%] pb-[10%]">
                 <div className="handwriting text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-relaxed text-left w-full">
                   {showText && (
                      <TypeAnimation
                        sequence={[
                          'Hi Anmol is here,\nlets know more about me...',
                          handleFinish
                        ]}
                        wrapper="span"
                        speed={35}
                        style={{ whiteSpace: 'pre-line', display: 'inline-block' }}
                        cursor={false}
                      />
                   )}
                 </div>
              </div>
              <div className="w-1/2 h-full"></div> {/* Right Page Spacer */}
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default BookPreloader;
