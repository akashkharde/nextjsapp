"use client";
import  cn from '../Lib/Utils';
import React from 'react';

function Heading({ children, className, ...props }) {
  return (
    <h2
      className={cn('mb-4 text-3xl/tight font-bold text-neutrals-50 md:text-5xl/tight', className)}
      {...props}
    >
      {children}
    </h2>
  );
}

function Caption({ children, className, ...props }) {
  return (
    <p
      className={cn(
        'relative mb-4 inline-block overflow-hidden rounded-full border-0.5 border-primary/30 bg-primary/10 px-4 py-1 font-medium uppercase text-primary backdrop-blur-sm after:absolute after:inset-0 after:animate-shiny-badge-slide after:bg-primary/10 max-md:text-sm',
        className,
      )}
      {...props}
    >
      {children}
    </p>
  );
}

function Paragraph({ children, className, ...props }) {
  return (
    <p
      className={cn('max-w-prose text-base/relaxed text-neutrals-300', className)}
      {...props}
    >
      {children}
    </p>
  );
}

export { Caption, Heading, Paragraph };
