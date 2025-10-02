import React from 'react';
import NavigationBar from '../components/NavigationBar';

export type ILandingPageProps = object

const LandingPage: React.FC<ILandingPageProps> = () => {
  return (
    <div className="w-full h-screen overflow-hidden bg-gray-900 flex justify-center items-center">
      <div 
        className="flex justify-center items-center w-full h-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/assets/949a4f17-37a0-44e8-9ad1-27f4925fe5bc.png')" }}
      >
        <div className="w-full h-full bg-black bg-opacity-30 flex flex-col justify-start items-start">
          {/* Logo Section */}
          <div className="flex justify-center w-full mt-11">
            <div className="relative w-25 h-25">
              <img 
                src="/assets/534c2e1e-871a-4d05-910d-c7b473c03828.png" 
                className="w-20 h-20 absolute top-2.5 left-2.5"
                alt="MrKadalai Logo"
              />
              <div className="w-25 h-25 overflow-hidden absolute top-0 left-0">
                <div 
                  className="absolute top-9 left-8 flex justify-start items-start w-9 h-9 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: "url('/assets/90003755-6a21-4563-b0d9-0178d97f5afc.png')" }}
                >
                  {/* Logo icon elements */}
                  <div className="mt-8 ml-1 flex justify-center items-center w-1 h-1">
                    <img 
                      src="/assets/c4b0bd36-1e9c-4ab7-9ac0-45d2037c3ad8.png" 
                      className="w-1 h-1"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tagline */}
          <div className="flex justify-center w-full mt-32">
            <div className="font-satisfy text-4xl md:text-6xl whitespace-nowrap text-primary-gold tracking-tight font-normal">
              <span>Bites so elite</span>
            </div>
          </div>

          {/* Main Title */}
          <div className="flex justify-center w-full mt-11">
            <div className="font-ulm text-6xl md:text-8xl lg:text-[200px] whitespace-nowrap text-white tracking-tight font-medium">
              <span>IYKYK</span>
            </div>
          </div>

          {/* Navigation Bar */}
          <div className="flex justify-center w-full mt-36">
            <NavigationBar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;