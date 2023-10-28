"use client";
import cn from '../Lib/Utils';

const buttonVariants = [
  'relative isolate flex justify-center items-center select-none overflow-hidden rounded-sm border align-middle transition-all duration-500 before:absolute before:-start-3 before:top-0 before:-z-10 before:h-full before:w-[calc(100%+1.5rem)] before:origin-left before:-skew-x-[16deg] before:scale-x-0 before:transition-transform before:duration-500 hover:[&:not(:disabled)]:before:scale-x-100 focus-visible:[&:not(:disabled)]:before:scale-x-100 active:[&:not(:disabled)]:scale-[1.01] disabled:opacity-70',
  {
    variants: {
      foreground: {
        default: 'border-neutrals-50',
        primary: 'border-primary',
        error: 'border-error',
      },
      background: {
        default: '',
        primary: '',
      },
      size: {
        small: 'px-3 py-1.5 text-sm md:px-4 md:py-2 md:text-base',
        medium: 'px-6 py-3 md:text-lg hover:[&:not(:disabled)]:tracking-[0.075em]',
        large: 'px-6 py-3 md:px-8 md:py-4 md:text-lg hover:[&:not(:disabled)]:tracking-[0.075em]',
      },
      isGhost: {
        true: '',
      },
    },
    compoundVariants: [
      {
        isGhost: false,
        foreground: 'primary',
        className: 'bg-primary hover:[&:not(:disabled)]:text-primary focus-visible:text-primary',
      },
      // ... (rest of your compoundVariants)
    ],
    defaultVariants: {
      foreground: 'default',
      background: 'default',
      size: 'medium',
      isGhost: false,
    },
  },
];

const Button = (props) => {
  if (props.as === 'a') {
    const { foreground, background, size, isGhost, ref, children, className, ...restProps } = props;

    return (
      <a
        className={cn(
          buttonVariants[1].variants, // Accessing the variants property directly
          {
            foreground,
            background,
            size,
            isGhost,
            className,
          },
        )}
        ref={ref}
        {...restProps}
      >
        {children}
      </a>
    );
  }

  const { foreground, background, size, isGhost, ref, children, className, ...restProps } = props;

  return (
    <button
      className={cn(
        buttonVariants[1].variants, // Accessing the variants property directly
        {
          foreground,
          background,
          size,
          isGhost,
          className,
        },
      )}
      ref={ref}
      {...restProps}
    >
      {children}
    </button>
  );
};

export default Button;
