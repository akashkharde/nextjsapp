import  {cn} from '../Lib/Utils';
import { MotionValue, motion, useMotionTemplate, useTransform } from 'framer-motion';
import { useRef } from 'react';

function ServiceCard({
  children,
  className,
  ...props
}) {
  const ref = useRef(null);

  return (
    <motion.a
      ref={ref}
      href="/#contact"
      aria-label="Secure your package now"
      className={cn(
        'group/card relative overflow-hidden rounded-md bg-gradient-to-r  from-neutrals-300/30 via-neutrals-300/80 via-15% to-neutrals-300/30 to-35% p-[0.5px] drop-shadow-lg',
        'before:pointer-events-none before:absolute before:inset-0 before:bg-[radial-gradient(600px_circle_at_var(--mouse-position-x)_var(--mouse-position-y),rgba(255,254,249,0.06),transparent_60%)] before:opacity-0 before:transition before:duration-500 lg:hover:before:opacity-100',
        'after:pointer-events-none after:absolute after:inset-0 after:-z-10 after:bg-[radial-gradient(400px_circle_at_var(--mouse-position-x)_var(--mouse-position-y),rgba(255,254,249,0.6),transparent_60%)] after:opacity-0 after:transition after:duration-500 lg:group-hover:after:opacity-100',
        className,
      )}
      {...props}
    >
      <div className="flex h-full w-full flex-col justify-between rounded-[inherit] bg-[#0C1021] p-8">
        {children}
      </div>
    </motion.a>
  );
}

function Title({ children }) {
  return <h3 className="mb-2 font-medium text-primary md:text-lg">{children}</h3>;
}
ServiceCard.Title = Title;

function Price({ children }) {
  return <p className="mb-2 flex text-3xl font-bold md:text-4xl">{children}</p>;
}
ServiceCard.Price = Price;

function Description({ children }) {
  return <p className="mb-8 max-w-prose text-sm text-neutrals-300">{children}</p>;
}
ServiceCard.Description = Description;

function Notice({ children }) {
  return <p className="mb-8 text-xs text-neutrals-400">{children}</p>;
}
ServiceCard.Notice = Notice;

function List({ children }) {
  return <ul className="mb-8 flex flex-col gap-y-4 text-neutrals-300">{children}</ul>;
}
ServiceCard.List = List;

function BenefitListItem({ children }) {
  return (
    <li className="flex items-center gap-x-2 text-sm/tight xl:text-base/tight">
      <svg
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        className="h-5 w-5 text-neutrals-50"
      >
        <path
          d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"
          className="fill-neutrals-100 stroke-neutrals-100"
        />
        <path
          d="M8 11.8571L10.5 14.3572L15.8572 9"
          className="fill-none stroke-neutrals-900"
        />
      </svg>
      {children}
    </li>
  );
}
List.BenefitListItem = BenefitListItem;

function AddonListItem({ children }) {
  return (
    <li className="flex items-center gap-x-2 text-sm/tight xl:text-base/tight">
      <svg
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        className="h-5 w-5 text-neutrals-50"
      >
        <path
          d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"
          className="fill-neutrals-600 stroke-neutrals-100"
        />
        <path
          d="M12,7.645L12,16.355M16.355,12L7.645,12"
          className="fill-none stroke-neutrals-100"
        />
      </svg>
      {children}
    </li>
  );
}
List.AddonListItem = AddonListItem;

export default ServiceCard;
