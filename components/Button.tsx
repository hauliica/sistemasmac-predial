// import clsx from 'clsx';
// import Link from 'next/link';
// import { forwardRef } from 'react';
//
// const baseStyles = {
//   solid:
//     'inline-flex justify-center rounded-sm py-2 px-3 text-sm font-semibold outline-2 outline-offset-2 transition-colors',
// };
//
// const variantStyles = {
//   solid: {
//     cyan: 'relative overflow-hidden bg-cyan-500',
//     white: 'bg-white text-cyan-900 hover:bg-white/90 active:bg-white/90',
//     gray: 'bg-gray-800 text-white hover:bg-gray-900 active:bg-gray-900 active:text-white/80',
//   },
// };
//
// export const Button = forwardRef(function Button(
//   { variant = 'solid', color = 'gray', className, href, ...props },
//   ref
// ) {
//   className = clsx(
//     baseStyles[variant],
//     variantStyles[variant][color],
//     className
//   );
//
//   return href ? (
//     <Link ref={ref} href={href} className={className} {...props} />
//   ) : (
//     <button ref={ref} className={className} {...props} />
//   );
// });
import clsx from 'clsx';
import Link from 'next/link';
import { forwardRef, Ref } from 'react';

interface ButtonProps {
  variant?: 'solid';
  color?: 'cyan' | 'white' | 'gray';
  className?: string;
  href?: string;
}

const baseStyles = {
  solid:
    'inline-flex justify-center rounded-sm py-2 px-3 text-sm font-semibold outline-2 outline-offset-2 transition-colors',
};

const variantStyles = {
  solid: {
    cyan: 'relative overflow-hidden bg-cyan-500',
    white: 'bg-white text-cyan-900 hover:bg-white/90 active:bg-white/90',
    gray: 'bg-gray-800 text-white hover:bg-gray-900 active:bg-gray-900 active:text-white/80',
  },
};

export const Button = forwardRef(function Button(
  { variant = 'solid', color = 'gray', className, href, ...props }: ButtonProps,
  ref: Ref<HTMLButtonElement>
) {
  className = clsx(
    baseStyles[variant],
    variantStyles[variant][color],
    className
  );

  return href ? (
    <Link ref={ref} href={href} className={className} {...props} />
  ) : (
    <button ref={ref} className={className} {...props} />
  );
});
