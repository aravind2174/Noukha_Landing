import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  href?: string;
  fullWidth?: boolean;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  icon?: React.ReactNode;
  id?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'medium',
  href,
  fullWidth = false,
  type = 'button',
  onClick,
  icon,
  id
}) => {
  const baseClasses = "inline-flex items-center justify-center rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variantClasses = {
    primary: "bg-green-600 hover:bg-green-700 text-white focus:ring-green-500",
    secondary: "bg-white hover:bg-gray-100 text-gray-800 border border-gray-300 focus:ring-green-500",
    outline: "bg-transparent hover:bg-green-50 text-green-600 border border-green-600 focus:ring-green-500"
  };
  
  const sizeClasses = {
    small: "text-sm px-3 py-1.5",
    medium: "text-base px-6 py-2.5",
    large: "text-lg px-8 py-3"
  };
  
  const widthClass = fullWidth ? "w-full" : "";
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${widthClass}`;
  
  if (href) {
    return (
      <a href={href} className={classes} id={id}>
        {icon && <span className="mr-2">{icon}</span>}
        {children}
      </a>
    );
  }
  
  return (
    <button 
      type={type} 
      className={classes} 
      onClick={onClick}
      id={id}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );
};

export default Button;