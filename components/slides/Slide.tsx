import { ReactNode } from 'react';
import { Card } from '@/components/ui/card';

interface SlideProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'green' | 'blue' | 'purple' | 'teal';
}

const variantStyles = {
  default: 'bg-white',
  green: 'bg-gradient-to-br from-green-50 to-emerald-100',
  blue: 'bg-gradient-to-br from-blue-50 to-indigo-100',
  purple: 'bg-gradient-to-br from-purple-50 to-violet-100',
  teal: 'bg-gradient-to-br from-teal-50 to-cyan-100',
};

export function Slide({ children, className = '', variant = 'default' }: SlideProps) {
  return (
    <Card
      className={`
        w-full h-full min-h-screen flex flex-col items-center justify-center
        p-8 md:p-12 lg:p-16 rounded-none shadow-none border-none
        ${variantStyles[variant]}
        ${className}
      `}
    >
      {children}
    </Card>
  );
}
