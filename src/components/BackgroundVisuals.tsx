
import React from 'react';

interface BackgroundVisualsProps {
  section?: 'hero' | 'about' | 'development' | 'products' | 'contact';
}

const BackgroundVisuals: React.FC<BackgroundVisualsProps> = ({ section = 'hero' }) => {
  // Different background patterns for different sections
  let backgroundElements;

  switch (section) {
    case 'hero':
      backgroundElements = (
        <>
          {/* Abstract grid pattern */}
          <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-[0.03] pointer-events-none"></div>
          
          {/* Trading terminal/matrix code visual */}
          <div className="absolute inset-0 pointer-events-none">
            <img 
              src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5" 
              alt="Trading Code Background" 
              className="absolute w-full h-full object-cover opacity-[0.03]"
            />
          </div>
          
          {/* Top right chart pattern */}
          <div className="absolute top-20 right-0 w-1/2 h-1/2 pointer-events-none opacity-[0.05]">
            <img 
              src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7" 
              alt="Market Data Background" 
              className="w-full h-full object-contain"
            />
          </div>
          
          {/* Green blobs for decorative visuals */}
          <div className="blob-animation bg-forex-green w-[400px] h-[400px] rounded-full top-20 -right-32 opacity-[0.07]"></div>
          <div className="blob-animation bg-forex-darkgreen w-[300px] h-[300px] rounded-full -bottom-20 left-20 animation-delay-2000 opacity-[0.07]"></div>
        </>
      );
      break;
      
    case 'products':
      backgroundElements = (
        <>
          {/* Abstract wave pattern */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.02]">
            <img 
              src="https://images.unsplash.com/photo-1486718448742-163732cd1544" 
              alt="Wave Pattern Background" 
              className="absolute w-full h-full object-cover"
            />
          </div>
          
          {/* Subtle grid for tech feel */}
          <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-[0.02] pointer-events-none"></div>
          
          {/* Decorative blobs */}
          <div className="blob-animation bg-forex-green w-[300px] h-[300px] rounded-full bottom-40 -left-32 opacity-[0.04]"></div>
        </>
      );
      break;
      
    default:
      backgroundElements = (
        <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-[0.02] pointer-events-none"></div>
      );
  }

  return <div className="absolute inset-0 overflow-hidden z-0">{backgroundElements}</div>;
};

export default BackgroundVisuals;
