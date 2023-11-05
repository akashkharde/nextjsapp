"use client";
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}
function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}
export {cn, clamp}