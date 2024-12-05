import { useEffect, useRef } from "react";
import gsap from "gsap";
import { TiLocationArrow } from "react-icons/ti";

const MusicPermissionModal = ({ onClose }) => {
  const modalRef = useRef(null);
  const backgroundRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    // GSAP Animation for modal entrance
    const tl = gsap.timeline();

    // Animate background
    tl.fromTo(
      backgroundRef.current,
      { opacity: 0 },
      {
        opacity: 0.8,
        duration: 0.5,
        ease: "power2.inOut",
      }
    );

    // Animate modal container
    tl.fromTo(
      containerRef.current,
      {
        scale: 0.7,
        opacity: 0,
        y: 50,
      },
      {
        scale: 1,
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "back.out(1.7)",
      },
      0.3 // slight delay
    );
  }, []);

  return (
    <div
      ref={backgroundRef}
      className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm flex items-center justify-center"
    >
      <div
        ref={containerRef}
        className="relative bg-gradient-to-br from-gray-900 to-blue-900 rounded-2xl border-4 border-blue-500/50 shadow-2xl max-w-md w-full p-8"
      >
        {/* Decorative anime-style elements */}
        <div className="absolute -top-10 -left-10 w-24 h-24 bg-blue-500/30 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-purple-500/30 rounded-full blur-2xl animate-pulse"></div>

        {/* Modal Content */}
        <div className="relative z-10 text-center">
          <h2 className="text-3xl font-bold text-white mb-4 tracking-wider drop-shadow-lg">
            Activate Soundtrack?
          </h2>

          <p className="text-gray-300 mb-6 leading-relaxed">
            Immerse yourself in the ambient soundscape of our world. You can
            always adjust the music from the navigation bar.
          </p>

          {/* Button Container */}
          <div className="flex justify-center space-x-4">
            <button
              onClick={() => onClose(true)}
              className="group relative px-8 py-3 bg-blue-600 text-white rounded-full 
              hover:bg-blue-500 transition duration-300 
              flex items-center justify-center
              transform hover:scale-105 active:scale-95
              shadow-lg hover:shadow-blue-500/50"
            >
              <TiLocationArrow className="mr-2 group-hover:rotate-45 transition duration-300" />
              Play Music
            </button>

            <button
              onClick={() => onClose(false)}
              className="px-8 py-3 bg-gray-700 text-gray-300 rounded-full 
              hover:bg-gray-600 transition duration-300
              transform hover:scale-105 active:scale-95
              shadow-lg hover:shadow-gray-500/50"
            >
              No, Thanks
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicPermissionModal;
