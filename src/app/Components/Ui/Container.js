"use client";
import cn from '../Lib/Utils'
import { forwardRef } from 'react';

const Container = forwardRef(({ children, className, ...props }, ref) => {
    return(

        <div
          className={cn('mx-auto w-11/12 max-w-7xl 2xl:w-4/5', className)}
          ref={ref}
          {...props}
        >
          {children}
        </div>
      )
});
Container.displayName = 'Container';

export default Container;
