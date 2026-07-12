import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const getUniqueValues = (array: string[]): string[] => {
	return array.filter((value, index, self) => self.indexOf(value) === index);
};

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}
