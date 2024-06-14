import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};
export default function Container({ children }: Props) {
  return (
    <div className="flex flex-col items-center w-full ">
      <div className="max-w-[90vw] w-full px-4">{children}</div>
    </div>
  );
}
