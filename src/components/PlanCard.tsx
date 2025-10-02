import { motion } from 'framer-motion';
import { InvestmentPlan } from '../pages/OwnAFractionPage';

interface PlanCardProps {
  plan: InvestmentPlan;
  onClick: (plan: InvestmentPlan) => void;
}

export default function PlanCard({ plan, onClick }: PlanCardProps) {
  const cardStyle = plan.cardImage 
    ? { 
        backgroundImage: `url('${plan.cardImage}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }
    : {};

  const cardClassName = plan.cardImage 
    ? "relative h-56 w-60 flex-shrink-0 rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 transform hover:scale-105"
    : "relative h-56 w-60 flex-shrink-0 rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 transform hover:scale-105 bg-gradient-to-br from-gray-800 to-gray-900";

  return (
    <motion.div
      onClick={() => onClick(plan)}
      className={cardClassName}
      style={cardStyle}
      whileHover={{ 
        scale: 1.05,
        transition: { duration: 0.2 }
      }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-75 flex flex-col justify-between p-4">
        <div>
          <h3 className="font-ulm text-2xl text-white font-bold mb-2 tracking-tight">
            {plan.name}
          </h3>
          <p className="font-satisfy text-lg text-white tracking-tight">
            Starts From
          </p>
        </div>
        <div className="bg-gradient-to-r from-yellow-600 to-yellow-500 rounded-2xl py-2 px-4 text-center">
          <span className="font-ulm text-lg text-white font-medium tracking-tight">
            {plan.price}
          </span>
        </div>
      </div>
    </motion.div>
  );
}
