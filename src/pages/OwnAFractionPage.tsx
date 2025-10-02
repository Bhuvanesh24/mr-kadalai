import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import PlanDetailView from '../components/PlanDetailView';
import NavigationBar from '../components/NavigationBar';
import PlanCard from '../components/PlanCard';

export type IOwnAFractionPageProps = object;

// Investment Plan Interface
export interface InvestmentPlan {
  id: string;
  name: string;
  price: string;
  backgroundImage: string; // This will be provided by you for each plan
  cardImage: string; // Image for the plan card in the overview
  description: string;
  features: string[];
  roi: string;
  duration: string;
  fractionsAvailable: number;
  roiAmount: string;
}

// Investment Plans Data Structure
const investmentPlans: InvestmentPlan[] = [
  {
    id: 'ultimate',
    name: 'Ultimate',
    price: '₹7,50,000',
    backgroundImage: '/assets/5d94c092-69f5-4d7d-83ee-4b89bb6d730b.png', // Ultimate background image
    cardImage: '/assets/5d94c092-69f5-4d7d-83ee-4b89bb6d730b.png', // Using same as background
    description: 'Ultimate investment package with maximum returns and complete business ownership benefits.',
    features: [
      'Complete ownership control',
      'Maximum profit sharing',
      'Exclusive brand rights',
      'Dedicated management team',
      'Full marketing control',
      'VIP training & support'
    ],
    roi: '40-50%',
    duration: '12-18 months',
    fractionsAvailable: 2,
    roiAmount: '₹3,00,000'
  },
  {
    id: 'premium',
    name: 'Premium',
    price: '₹3,00,000',
    backgroundImage: '/assets/770ea4ab-9e8d-4a02-b89e-328c54801e6d.png', // Premium plan bg image
    cardImage: '/assets/770ea4ab-9e8d-4a02-b89e-328c54801e6d.png', // Using same as background
    description: 'Premium investment tier with enhanced returns and comprehensive business support.',
    features: [
      'Major ownership stake',
      'Premium revenue sharing',
      'Full brand licensing',
      'Priority support team',
      'Advanced marketing support',
      'Executive training programs'
    ],
    roi: '40-50%',
    duration: '12-18 months',
    fractionsAvailable: 5,
    roiAmount: '₹1,20,000'
  },
  {
    id: 'standard',
    name: 'Standard',
    price: '₹1,87,000',
    backgroundImage: '/assets/c3740c9d-6266-42f2-b72b-62207fda440e.png', // Standard plan bg image
    cardImage: '/assets/c3740c9d-6266-42f2-b72b-62207fda440e.png', // Using same as background
    description: 'Balanced investment with substantial returns and moderate involvement.',
    features: [
      'Significant ownership stake',
      'Revenue sharing model',
      'Brand licensing rights',
      'Dedicated support team',
      'Marketing assistance',
      'Comprehensive training'
    ],
    roi: '40-50%',
    duration: '12-18 months',
    fractionsAvailable: 8,
    roiAmount: '₹74,800'
  },
  {
    id: 'basic',
    name: 'Basic',
    price: '₹30,000',
    backgroundImage: '/assets/61e25541-b69a-45bb-978d-d44ffe95fb1e.png', // Basic plan background image
    cardImage: '/assets/61e25541-b69a-45bb-978d-d44ffe95fb1e.png', // Using same as background
    description: 'Entry-level investment perfect for first-time franchise investors.',
    features: [
      'Fractional ownership',
      'Profit sharing model',
      'Brand association',
      'Basic support included',
      'Online training access',
      'Community membership'
    ],
    roi: '40-50%',
    duration: '12-18 months',
    fractionsAvailable: 50,
    roiAmount: '₹12,000'
  }
];

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function OwnAFractionPage(_props: IOwnAFractionPageProps) {
  const [selectedPlan, setSelectedPlan] = useState<InvestmentPlan | null>(null);
  const [showPlanDetail, setShowPlanDetail] = useState(false);


  const handlePlanSelection = (plan: InvestmentPlan) => {
    setSelectedPlan(plan);
    setShowPlanDetail(true);
  };

  const handleBackToPlans = () => {
    setShowPlanDetail(false);
    setSelectedPlan(null);
  };

  // Get background image - use selected plan's background or default left side image
  const getBackgroundImage = () => {
    if (selectedPlan && selectedPlan.backgroundImage) {
      return selectedPlan.backgroundImage;
    }
    return '/assets/2f919a80-5e5c-404a-b8c5-7d47af7ea92e.png'; // Default left side background
  };

  // If a plan is selected and we want to show detail view, render the PlanDetailView component
  if (showPlanDetail && selectedPlan) {
    return (
      <AnimatePresence mode="wait">
        <PlanDetailView plan={selectedPlan} onBack={handleBackToPlans} />
      </AnimatePresence>
    );
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div 
        className="w-full min-h-screen bg-primary-dark flex flex-col lg:flex-row"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
      {/* Left Panel - Hero Section */}
      <div className="w-full lg:w-1/2 h-64 sm:h-80 lg:h-screen relative">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${getBackgroundImage()}')` }}
        >
          <div className="w-full h-full bg-black bg-opacity-30 flex flex-col justify-between items-start p-4 lg:p-0">
            {/* Top Content */}
            <div className="flex flex-col items-center w-full lg:flex-1 lg:justify-center">
           
              {/* Logo Section - Positioned on top of "Ownership" */}
              <div className="flex justify-center w-full mt-2 lg:mt-6 mb-8 lg:mb-32 relative">
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 lg:w-25 lg:h-25 z-10">
                  <img 
                    src="/assets/0c57653e-bb60-4f45-a578-90ac5ff82fd6.png" 
                    className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 absolute top-1 left-1 sm:top-2 sm:left-2 lg:top-2.5 lg:left-2.5"
                    alt="MrKadalai Logo"
                  />
                  <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-25 lg:h-25 overflow-hidden absolute top-0 left-0">
                    <div 
                      className="absolute top-6 left-5 sm:top-7 sm:left-6 lg:top-9 lg:left-8 flex justify-start items-start w-6 h-6 sm:w-8 sm:h-8 lg:w-9 lg:h-9 bg-cover bg-center bg-no-repeat"
                      style={{ backgroundImage: "url('/assets/90003755-6a21-4563-b0d9-0178d97f5afc.png')" }}
                    >
                      {/* Logo icon elements */}
                      <div className="mt-5 ml-0.5 sm:mt-6 sm:ml-1 lg:mt-8 lg:ml-1 flex justify-center items-center w-1 h-1">
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
              <div className="flex justify-center w-full mt-4 lg:mt-32">
                <div className="font-satisfy text-2xl sm:text-3xl md:text-4xl lg:text-6xl text-primary-gold tracking-tight font-normal text-center">
                  <span>Join the</span>
                </div>
              </div>

              {/* Main Title */}
              <div className="flex justify-center w-full mt-4 lg:mt-12">
                <div className="font-ulm text-3xl sm:text-4xl md:text-5xl lg:text-8xl text-white tracking-tight font-extrabold text-center">
                  <span>Ownership</span>
                </div>
              </div>
            </div>

            {/* Navigation Bar - Bottom */}
            <div className="hidden lg:flex justify-center w-full mb-8">
              <NavigationBar />
            </div>
          </div>
        </div>
      </div>

      {/* Right Panel - Content */}
      <div className="w-full lg:w-1/2 min-h-screen lg:h-screen bg-primary-dark flex flex-col p-4 sm:p-6 lg:p-8 overflow-y-auto">
        <div className="max-w-2xl mx-auto w-full">
          {/* Mobile Navigation */}
          <div className="lg:hidden mb-6">
            <NavigationBar />
          </div>

          {/* Header */}
          <div className="mb-6 lg:mb-8">
            <h1 className="font-ulm text-2xl sm:text-3xl lg:text-4xl text-white font-medium mb-4 lg:mb-8 tracking-tight">
              Join the Ownership
            </h1>
            <p className="font-ulm text-base sm:text-lg lg:text-xl text-white font-normal leading-relaxed tracking-tight">
              Join the ownership of Mr. Kadalai and be part of a thriving food franchise with exciting growth opportunities!
            </p>
          </div>

          {/* Investment Plan Cards - Horizontal Scroll */}
          <div className="mb-6 lg:mb-10">
            <div className="flex overflow-x-auto gap-4 lg:gap-6 pb-4 scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
              {investmentPlans.map((plan) => (
                <PlanCard 
                  key={plan.id} 
                  plan={plan} 
                  onClick={handlePlanSelection} 
                />
              ))}
            </div>
          </div>

          {/* Start Journey Button */}
          <button 
            className="w-full h-16 lg:h-24 rounded-2xl bg-primary-gold bg-opacity-90 hover:bg-opacity-100 transition-all duration-300 flex items-center justify-center mb-8 lg:mb-16"
            onClick={() => {
              // Navigate to Basic plan when Start Your Journey is clicked
              handlePlanSelection(investmentPlans[3]); // Basic plan is at index 3
            }}
          >
            <span className="font-ulm text-2xl lg:text-4xl text-white font-bold tracking-tight">
              Start Your Journey
            </span>
          </button>

          {/* Success Story Section */}
          <div className="mb-6 lg:mb-10">
            <h2 className="font-ulm text-2xl sm:text-3xl lg:text-4xl text-white font-medium mb-4 lg:mb-6 tracking-tight leading-tight">
              A Milestone in Our Journey – Our First Successful Outlet at CIT Chennai!
            </h2>
            <p className="font-ulm text-base sm:text-lg lg:text-xl text-white font-normal leading-relaxed tracking-tight mb-6 lg:mb-8">
              We proudly launched our first CIT Chennai outlet, marking a key milestone in Mr. Kadalai's growth and successful investment model expansion.
            </p>
            
            {/* Success Story Images */}
            <div className="space-y-4 lg:space-y-6">
              <div className="w-full">
                <img 
                  src="/assets/3f6beb62-9008-426c-b3f0-180cf0748da2.png" 
                  alt="CIT Chennai Outlet" 
                  className="w-full h-48 sm:h-56 lg:h-64 object-cover rounded-2xl"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                <img 
                  src="/assets/6d4939bc-d996-4fa4-9990-f69c10085822.png" 
                  alt="Success Story 1" 
                  className="w-full h-24 sm:h-28 lg:h-32 object-cover rounded-2xl"
                />
                <img 
                  src="/assets/783e3374-9497-49dd-bde4-54b4cb20fbd2.png" 
                  alt="Success Story 2" 
                  className="w-full h-24 sm:h-28 lg:h-32 object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
      </motion.div>
    </AnimatePresence>
  );
}