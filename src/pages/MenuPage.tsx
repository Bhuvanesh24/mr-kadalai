import React, { useState, useEffect } from 'react';
import NavigationBar from '../components/NavigationBar';

export type IMenuPageProps = object;

const categories = [
  'Lunch Combos',
  'Quick Bites', 
  'Desserts',
  'Kulfis',
  'Beverages'
];

const menuItems = {
  'Lunch Combos': [
    {
      id: 1,
      name: "Veg Fried Rice",
      description: "Fried Rice, seasoning, vegetables, oil, salt, spices.",
      price: "₹130",
      image: "/assets/ab2e9293-71ab-40d2-817d-62a36088c773.png"
    },
    {
      id: 2,
      name: "Chicken Biryani",
      description: "Basmati rice, chicken, spices, yogurt, onions.",
      price: "₹180",
      image: "/assets/8b9f2a23-e32f-42d4-b26c-1e72c3ebfea5.png"
    },
    {
      id: 3,
      name: "Paneer Butter Masala",
      description: "Paneer, tomatoes, cream, butter, spices.",
      price: "₹160",
      image: "/assets/16af8e06-a05e-4598-8ef0-8f027242d12b.png"
    }
  ],
  'Quick Bites': [
    {
      id: 4,
      name: "Peri Peri Corn",
      description: "Corn, seasoning, vegetables, oil, salt, spices.",
      price: "₹70",
      image: "/assets/16af8e06-a05e-4598-8ef0-8f027242d12b.png"
    },
    {
      id: 5,
      name: "Samosa",
      description: "Crispy pastry filled with spiced potatoes.",
      price: "₹25",
      image: "/assets/b046501f-25d9-4ffe-9156-7dcf95030646.png"
    }
  ],
  'Desserts': [
    {
      id: 6,
      name: "Gulab Jamun",
      description: "Sweet milk dumplings in sugar syrup.",
      price: "₹50",
      image: "/assets/ab2e9293-71ab-40d2-817d-62a36088c773.png"
    },
    {
      id: 7,
      name: "Rasgulla",
      description: "Soft cottage cheese balls in sugar syrup.",
      price: "₹45",
      image: "/assets/8b9f2a23-e32f-42d4-b26c-1e72c3ebfea5.png"
    }
  ],
  'Kulfis': [
    {
      id: 8,
      name: "Malai Kulfi",
      description: "Traditional Indian ice cream with cardamom.",
      price: "₹60",
      image: "/assets/16af8e06-a05e-4598-8ef0-8f027242d12b.png"
    },
    {
      id: 9,
      name: "Pista Kulfi",
      description: "Pistachio flavored frozen dessert.",
      price: "₹70",
      image: "/assets/b046501f-25d9-4ffe-9156-7dcf95030646.png"
    }
  ],
  'Beverages': [
    {
      id: 10,
      name: "Tea",
      description: "Water, tea leaves, milk, sugar, spices.",
      price: "₹30",
      image: "/assets/ab2e9293-71ab-40d2-817d-62a36088c773.png"
    },
    {
      id: 11,
      name: "Coffee",
      description: "Coffee powder, water, milk, sugar.",
      price: "₹30",
      image: "/assets/8b9f2a23-e32f-42d4-b26c-1e72c3ebfea5.png"
    },
    {
      id: 12,
      name: "Goli Soda",
      description: "Carbonated water, sugar, lemon, salt, flavoring.",
      price: "₹40",
      image: "/assets/16af8e06-a05e-4598-8ef0-8f027242d12b.png"
    },
    {
      id: 13,
      name: "Rose Milk",
      description: "Rose syrup, milk, sugar, cream, cardamom, nuts.",
      price: "₹70",
      image: "/assets/b046501f-25d9-4ffe-9156-7dcf95030646.png"
    }
  ]
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function MenuPage(_props: IMenuPageProps) {
  const [activeCategory, setActiveCategory] = useState('Lunch Combos');

  // Scroll detection to update active category
  useEffect(() => {
    const handleScroll = () => {
      const scrollContainer = document.querySelector('.menu-scroll-container');
      if (!scrollContainer) return;

      const containerTop = scrollContainer.getBoundingClientRect().top;
      const threshold = containerTop + 150; // Threshold for considering a section active
      
      // Find which category section is currently most visible
      for (let i = 0; i < categories.length; i++) {
        const category = categories[i];
        const element = document.getElementById(`category-${category.toLowerCase().replace(' ', '-')}`);
        
        if (element) {
          const rect = element.getBoundingClientRect();
          const nextCategory = categories[i + 1];
          const nextElement = nextCategory 
            ? document.getElementById(`category-${nextCategory.toLowerCase().replace(' ', '-')}`)
            : null;
          
          // Check if this section is currently in the active zone
          if (rect.top <= threshold) {
            // If there's a next section, check if we've scrolled past this one
            if (nextElement) {
              const nextRect = nextElement.getBoundingClientRect();
              if (nextRect.top > threshold) {
                setActiveCategory(category);
                break;
              }
            } else {
              // This is the last section
              setActiveCategory(category);
              break;
            }
          }
        }
      }
    };

    const scrollContainer = document.querySelector('.menu-scroll-container');
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll);
      // Call once to set initial state
      handleScroll();
      return () => scrollContainer.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <div className="w-full h-screen overflow-hidden bg-primary-dark flex">
      {/* Left Panel - Hero Section */}
      <div className="w-1/2 h-full relative">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/assets/5e25bc7b-f834-4577-b67b-3b3086104fd7.png')" }}
        >
          <div className="w-full h-full bg-black bg-opacity-30 flex flex-col justify-between items-start">
            <div className="flex flex-col items-start w-full">
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
                  <span>Dive into</span>
                </div>
              </div>

              {/* Main Title */}
              <div className="flex justify-center w-full mt-11">
                <div className="font-ulm text-6xl md:text-8xl whitespace-nowrap text-white tracking-tight font-medium">
                  <span>Our Menu</span>
                </div>
              </div>
            </div>

            {/* Navigation Bar - Bottom */}
            <div className="flex justify-center w-full mb-8">
              <NavigationBar />
            </div>
          </div>
        </div>
      </div>

      {/* Right Panel - Continuous Scroll Menu Content */}
      <div className="w-1/2 h-full bg-primary-dark flex flex-col">
        {/* Category Navigation */}
        <div className="flex items-center space-x-4 p-8 pb-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                const element = document.getElementById(`category-${category.toLowerCase().replace(' ', '-')}`);
                element?.scrollIntoView({ behavior: 'smooth' });
                setActiveCategory(category);
              }}
              className={`font-ulm text-lg font-medium transition-all duration-300 ${
                activeCategory === category 
                  ? 'text-primary-gold font-extrabold' 
                  : 'text-white hover:text-primary-gold hover:font-semibold'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Continuous Scrollable Menu Items */}
        <div className="flex-1 overflow-y-auto px-8 pb-8 menu-scroll-container">
          <div className="space-y-16">
            {categories.map((category) => (
              <div key={category} id={`category-${category.toLowerCase().replace(' ', '-')}`} className="scroll-mt-4">
                <h2 className="font-satisfy text-4xl text-primary-gold mb-12 sticky top-0 bg-primary-dark py-4 z-10">
                  {category}
                </h2>
                
                <div className="space-y-12">
                  {menuItems[category as keyof typeof menuItems]?.map((item) => (
                    <div key={item.id} className="flex items-start space-x-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-40 h-32 rounded-lg object-cover flex-shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <h3 className="font-ulm text-2xl text-white font-bold mb-3">
                          {item.name}
                        </h3>
                        <p className="font-ulm text-lg text-white leading-relaxed mb-4">
                          {item.description}
                        </p>
                      </div>
                      <div className="flex-shrink-0 ml-4">
                        <span className="font-ulm text-2xl text-white font-bold">
                          {item.price}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}