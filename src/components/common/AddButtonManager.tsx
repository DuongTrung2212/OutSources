import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';
import React from 'react';

export default function AddButtonManager({
  children,
  className,
  ...attributes
}: React.PropsWithChildren<
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
>) {
  return (
    <button
      className={`rounded py-[10px] px-[20px] text-white bg-[#4ad49f] ${className}`}
      {...attributes}
    >
      {children}
    </button>
  );
}
