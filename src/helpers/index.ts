import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const getUniqueValues = (array: Array<string>): Array<string> => {
  return array.filter((value, index, self) => self.indexOf(value) === index);
};

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const calculateImageHeight = (image: string): Promise<{ width: number; height: number; error?: any }> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = image;

    img.onload = () => {
      return resolve({
        width: img.width,
        height: img.height,
      });
    };
    img.onerror = (error) => {
      return reject({
        width: null,
        height: null,
        error,
      });
    };
  });
};
