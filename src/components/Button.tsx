import React from 'react';

type Props = {
  children: React.ReactNode;
  color?: 'primary' | 'secondary' | 'white';
  variant?: 'semiRounded' | 'outlined';
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const variantClasses = {
  semiRounded: {
    primary:
      'rounded-md bg-primary border-primary border text-white hover:bg-[#2FD9AE] hover:border-[#2FD9AE] disabled:bg-gray-3 disabled:border-gray-3 disabled:text-dark-5 active:bg-[#5fe4c2] active:border-[#5fe4c2]',
    secondary:
      'rounded-md bg-secondary border-secondary border text-black hover:bg-[#D3E383] hover:border-[#D3E383] disabled:bg-gray-3 disabled:border-gray-3 disabled:text-dark-5 active:bg-[#edff92] active:border-[#edff92]',
    white:
      'rounded-md border border-transparent text-dark disabled:border-gray-3 disabled:bg-gray-3 disabled:text-dark-5 bg-gray-2 shadow-box-dark hover:bg-gray-5 active:bg-white',
  },
  outlined: {
    primary:
      'rounded-md border-primary text-primary bg-transparent border hover:bg-primary hover:bg-opacity-[0.08] disabled:bg-gray-3 disabled:border-gray-3 disabled:text-dark-5 active:bg-primary active:text-white',
    secondary:
      'rounded-md border-secondary text-secondary bg-transparent border hover:bg-secondary hover:bg-opacity-[0.08] disabled:bg-gray-3 disabled:border-gray-3 disabled:text-dark-5 active:bg-secondary active:text-white',
    white:
      'rounded-md border text-white bg-transparent border-gray-3 hover:bg-gray-3 hover:bg-opacity-[0.12] disabled:bg-gray-3 disabled:text-dark-5 active:bg-gray-3 active:text-dark',
  },
};

export default function Button({ children, color = 'primary', variant = 'semiRounded', className, ...props }: Props) {
  const baseClasses = 'inline-flex items-center justify-center py-3 px-7 text-center text-base font-medium';
  const variantClass = variantClasses[variant][color];

  return (
    <button className={`${baseClasses} ${variantClass} ${className}`} {...props}>
      {children}
    </button>
  );
}
