import React from 'react';
import { Shield } from 'lucide-react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'default' | 'white' | 'dark';
  showText?: boolean;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ 
  size = 'md', 
  variant = 'default', 
  showText = true,
  className = '' 
}) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24'
  };

  const textSizeClasses = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl',
    xl: 'text-4xl'
  };

  const iconSizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-6 w-6',
    lg: 'h-8 w-8',
    xl: 'h-12 w-12'
  };

  const getVariantClasses = () => {
    switch (variant) {
      case 'white':
        return {
          container: 'bg-white bg-opacity-20 backdrop-blur-sm border border-white border-opacity-30',
          icon: 'text-white',
          text: 'text-white'
        };
      case 'dark':
        return {
          container: 'bg-gray-900 border border-gray-700',
          icon: 'text-blue-400',
          text: 'text-gray-900'
        };
      default:
        return {
          container: 'bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800 shadow-lg',
          icon: 'text-white',
          text: 'text-gray-900'
        };
    }
  };

  const variantClasses = getVariantClasses();

  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      {/* Logo Icon */}
      <div className={`
        ${sizeClasses[size]} 
        ${variantClasses.container}
        rounded-xl p-2 flex items-center justify-center
        transform transition-all duration-300 hover:scale-105 hover:shadow-xl
        relative overflow-hidden
      `}>
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-purple-500 to-blue-600 opacity-0 hover:opacity-20 transition-opacity duration-300"></div>
        
        {/* Shield icon with subtle animation */}
        <Shield className={`
          ${iconSizeClasses[size]} 
          ${variantClasses.icon}
          relative z-10 transform transition-transform duration-300 hover:rotate-12
        `} />
        
        {/* Subtle shine effect */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white to-transparent opacity-10 transform -skew-x-12 translate-x-full hover:translate-x-[-200%] transition-transform duration-700"></div>
      </div>

      {/* Logo Text */}
      {showText && (
        <div className="flex flex-col">
          <span className={`
            ${textSizeClasses[size]} 
            ${variantClasses.text}
            font-bold tracking-tight
            bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent
          `}>
            CoverCell
          </span>
          {size === 'xl' && (
            <span className="text-sm text-gray-600 font-medium tracking-wide">
              Mobile Protection
            </span>
          )}
        </div>
      )}
    </div>
  );
};

export default Logo;