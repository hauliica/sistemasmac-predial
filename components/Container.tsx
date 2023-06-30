// import clsx from 'clsx';
//
// export function Container({className, ...props}) {
//     return (
//         <div
//             className={clsx('mx-auto max-w-7xl px-4 sm:px-6 lg:px-8', className)}
//             {...props}
//         />
//     );
// }
import clsx from 'clsx';
import React from 'react';

interface ContainerProps {
  className?: string;

  [key: string]: any;
}

export const Container: React.FC<ContainerProps> = ({
  className,
  ...props
}) => {
  return (
    <div
      className={clsx(`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8`, className)}
      {...props}
    />
  );
};
