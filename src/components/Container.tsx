import React, { ReactNode } from 'react';

type Props = {
  clasName?: string;
  children: ReactNode;
};
export default function Container({ children, clasName = '' }: Props) {
  return (
    <div className="flex flex-col items-center w-full ">
      <div className={`max-w-[90vw] w-full px-4 ${clasName}`}>{children}</div>
    </div>
  );
}
