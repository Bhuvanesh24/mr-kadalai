import { useNavigate } from 'react-router-dom';

interface NavigationBarProps {
  className?: string;
}

export default function NavigationBar({ className = "" }: NavigationBarProps) {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <div className={`w-full max-w-[830px] h-28 rounded-[50px] bg-white mx-4 flex justify-between items-center px-8 md:px-14 ${className}`}>
      <div 
        className="font-ulm text-2xl whitespace-nowrap text-black tracking-tight font-medium cursor-pointer hover:text-primary-gold transition-colors duration-300"
        onClick={() => handleNavigation('/')}
      >
        Home
      </div>
      <div 
        className="font-ulm text-2xl whitespace-nowrap text-black tracking-tight font-medium cursor-pointer hover:text-primary-gold transition-colors duration-300"
        onClick={() => handleNavigation('/menu')}
      >
        Menu
      </div>
      <div 
        className="font-ulm text-2xl whitespace-nowrap text-black tracking-tight font-medium cursor-pointer hover:text-primary-gold transition-colors duration-300"
        onClick={() => handleNavigation('/contact')}
      >
        Contact Us
      </div>
      <div 
        className="w-52 h-16 rounded-3xl bg-black flex flex-col justify-center items-center cursor-pointer hover:bg-primary-gold transition-colors duration-300 group"
        onClick={() => handleNavigation('/invest')}
      >
        <div className="font-ulm text-2xl whitespace-nowrap text-white group-hover:text-black tracking-tight font-medium">
          Own a Fraction
        </div>
      </div>
    </div>
  );
}
