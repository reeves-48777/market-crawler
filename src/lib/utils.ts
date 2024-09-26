import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { JobData, Mapper } from './types';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function buildUrlWithQueryParams(url: string, params: object) {
  const urlObject = new URL(url);

  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined) {
      if (Array.isArray(value)) {
        urlObject.searchParams.append(key, value.join(','));
      } else {
        urlObject.searchParams.set(key, value.toString());
      }
    }
  });

  return urlObject;
}

export function transformFromMapper(rawData: any, mapper: Mapper) {
  return Object.entries(mapper).reduce((acc, [key, value]) => {
    acc[key] = rawData[value];
    return acc;
  }, {} as JobData);
}
