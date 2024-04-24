import { ReactNode } from 'react';

const labelManager = (label: string): ReactNode => (
  <p className="text-[30px] py-[20px] font-bold text-[#2c304d]">{label}</p>
);
export default labelManager;
