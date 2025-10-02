import { useState } from 'react';
import { motion } from 'framer-motion';
import { InvestmentPlan } from '../pages/OwnAFractionPage';
import NavigationBar from './NavigationBar';

export interface PlanDetailViewProps {
  plan: InvestmentPlan;
  onBack: () => void;
}

export default function PlanDetailView({ plan, onBack }: PlanDetailViewProps) {
  const [fractionCount, setFractionCount] = useState(1);

  const incrementFraction = () => {
    if (fractionCount < plan.fractionsAvailable) {
      setFractionCount(fractionCount + 1);
    }
  };

  const decrementFraction = () => {
    if (fractionCount > 1) {
      setFractionCount(fractionCount - 1);
    }
  };

  const calculateROI = () => {
    const baseROI = parseFloat(plan.roiAmount.replace('₹', '').replace(',', ''));
    return `₹ ${(baseROI * fractionCount).toLocaleString()}`;
  };

  // Get background image for the plan
  const getBackgroundImage = () => {
    if (plan.backgroundImage) {
      return plan.backgroundImage;
    }
    // Fallback background
    return '/assets/2f919a80-5e5c-404a-b8c5-7d47af7ea92e.png';
  };

  // Get button assets based on plan type
  const getButtonAsset = (type: 'plus' | 'minus') => {
    const assets = {
      basic: {
        minus: "url('/assets/39839333-6a32-4cde-ae5d-23ac22180059.png')",
        plus: "url('/assets/18e1594b-7265-41e1-803f-31c4bd36f158.png')"
      },
      standard: {
        minus: "url('/assets/c77a15ee-2713-42de-b4d2-fb9e5dc9d8b8.png')",
        plus: "url('/assets/1158a5c6-d971-4029-8a9b-6e806d0a02fa.png')"
      },
      premium: {
        minus: "url('/assets/55fc99cb-fd7b-44b3-8c91-f9f9bae13e20.png')",
        plus: "url('/assets/b4cf7228-e356-4a38-8c44-61aad9082e8f.png')"
      },
      ultimate: {
        minus: "url('/assets/4099468d-8865-40ce-b78b-01a36b67a54a.png')", // Ultimate plan assets from Figma
        plus: "url('/assets/b8e84e9e-b120-40f9-ac40-c8b1b680f7b5.png')" // Ultimate plan assets from Figma
      }
    };

    return assets[plan.id as keyof typeof assets]?.[type] || assets.basic[type];
  };

  return (
    <motion.div 
      className="w-full h-screen overflow-hidden bg-primary-dark flex"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {/* Left Panel - Plan Specific Hero */}
      <div className="w-1/2 h-full relative">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${getBackgroundImage()}')` }}
        >
          <div className="w-full h-full bg-black bg-opacity-80 flex flex-col justify-between items-start">
            {/* Plan Title - Centered */}
            <div className="flex-1 flex items-center justify-center w-full">
              <div className="font-ulm text-7xl text-white tracking-tight font-bold">
                <span>{plan.name}</span>
              </div>
            </div>

            {/* Navigation Bar - Bottom */}
            <div className="flex justify-center w-full mb-8">
              <NavigationBar className="max-w-[700px] mx-5" />
            </div>
          </div>
        </div>
      </div>

      {/* Right Panel - Plan Details */}
      <div className="w-1/2 h-full bg-primary-dark flex flex-col p-8 overflow-y-auto">
        <div className="max-w-2xl mx-auto w-full">
          {/* Back Button */}
          <button 
            onClick={onBack}
            className="mb-8 flex items-center text-white hover:text-primary-gold transition-colors duration-300"
          >
            <span className="mr-2">←</span>
            <span className="font-ulm text-lg">Back to Plans</span>
          </button>

          {/* Plan Header */}
          <div className="mb-12">
            <h1 className="font-ulm text-4xl text-white font-medium mb-8 tracking-tight">
              {plan.name}
            </h1>
          </div>

          {/* Plan Statistics Cards */}
          <div className="grid grid-cols-2 gap-6 mb-12">
            {/* Fraction Amount */}
            <div className="bg-white rounded-2xl p-6 text-center">
              <h3 className="font-ulm text-xl text-black font-medium mb-4 tracking-tight">
                Fraction Amount
              </h3>
              <p className="font-ulm text-3xl text-black font-bold tracking-tight">
                {plan.price}
              </p>
            </div>

            {/* Fractions Available */}
            <div className="bg-white rounded-2xl p-6 text-center">
              <h3 className="font-ulm text-xl text-black font-medium mb-4 tracking-tight">
                Fractions Available
              </h3>
              <p className="font-ulm text-3xl text-black font-bold tracking-tight">
                {plan.fractionsAvailable}
              </p>
            </div>

            {/* Return on Investment */}
            <div className="bg-white rounded-2xl p-6 text-center">
              <h3 className="font-ulm text-xl text-black font-medium mb-4 tracking-tight">
                Return on Investment
              </h3>
              <p className="font-ulm text-3xl text-black font-bold tracking-tight">
                {plan.roi}
              </p>
            </div>

            {/* Payback Period */}
            <div className="bg-white rounded-2xl p-6 text-center">
              <h3 className="font-ulm text-xl text-black font-medium mb-4 tracking-tight">
                Payback Period
              </h3>
              <p className="font-ulm text-3xl text-black font-bold tracking-tight">
                {plan.duration}
              </p>
            </div>
          </div>

          {/* ROI Calculator */}
          <div className="mb-10">
            <h2 className="font-ulm text-3xl text-white font-bold mb-12 tracking-tight">
              ROI Calculator
            </h2>

            {/* Number of Fractions Input */}
            <div className="mb-12">
              <label className="block font-ulm text-3xl text-white font-medium mb-4 tracking-tight">
                Number of Fractions
              </label>
              <div className="relative">
                <div className="w-full h-18 rounded-lg border border-gray-400 bg-black bg-opacity-10 flex items-center justify-center px-16">
                  <span className="font-ulm text-4xl text-white font-normal tracking-tight">
                    {fractionCount}
                  </span>
                </div>
                <button
                  onClick={decrementFraction}
                  disabled={fractionCount <= 1}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center text-white hover:opacity-80 disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ 
                    backgroundImage: getButtonAsset('minus'), 
                    backgroundSize: '100% 100%', 
                    backgroundRepeat: 'no-repeat' 
                  }}
                >
                  <span className="font-inter text-xl font-normal tracking-tight">-</span>
                </button>
                <button
                  onClick={incrementFraction}
                  disabled={fractionCount >= plan.fractionsAvailable}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center text-white hover:opacity-80 disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ 
                    backgroundImage: getButtonAsset('plus'), 
                    backgroundSize: '100% 100%', 
                    backgroundRepeat: 'no-repeat' 
                  }}
                >
                  <span className="font-inter text-xl font-normal tracking-tight">+</span>
                </button>
              </div>
            </div>

            {/* ROI Output */}
            <div className="mb-12">
              <label className="block font-ulm text-3xl text-white font-medium mb-4 tracking-tight">
                ROI <span className="text-xl">(in rupees as per number of fractions)</span>
              </label>
              <div className="w-full h-18 rounded-lg border border-gray-400 bg-black bg-opacity-10 flex items-center px-6">
                <span className="font-ulm text-4xl text-white font-normal tracking-tight">
                  {calculateROI()}
                </span>
              </div>
            </div>

            {/* Get Fraction Button */}
            <button
              className="w-full h-16 rounded-2xl bg-primary-gold bg-opacity-90 hover:bg-opacity-100 transition-all duration-300 flex items-center justify-center"
              onClick={() => {
                console.log('Getting fraction:', { type: plan.name, count: fractionCount, roi: calculateROI() });
              }}
            >
              <span className="font-ulm text-4xl text-white font-bold tracking-tight">
                Get your Fraction
              </span>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
