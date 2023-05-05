import { BBA_DALTON_UNIT } from '@bbachain/web3.js';
import { format } from 'date-fns';

// Concatenates classes into a single className string
const cn = (...args: string[]) => args.join(' ');

const formatDate = (date: string) => format(new Date(date), 'MM/dd/yyyy h:mm:ss');

/**
 * Formats number as currency string.
 *
 * @param number Number to format.
 */
const numberToCurrencyString = (number: number) => number.toLocaleString('en-US');

/**
 * Returns a number whose value is limited to the given range.
 *
 * Example: limit the output of this computation to between 0 and 255
 * (x * 255).clamp(0, 255)
 *
 * @param {Number} min The lower boundary of the output range
 * @param {Number} max The upper boundary of the output range
 * @returns A number in the range [min, max]
 * @type Number
 */
const clamp = (current, min, max) => Math.min(Math.max(current, min), max);

export function abbreviatedNumber(value: number, fixed = 1) {
  if (value < 1e3) return value;
  if (value >= 1e3 && value < 1e6) return +(value / 1e3).toFixed(fixed) + "K";
  if (value >= 1e6 && value < 1e9) return +(value / 1e6).toFixed(fixed) + "M";
  if (value >= 1e9 && value < 1e12) return +(value / 1e9).toFixed(fixed) + "B";
  if (value >= 1e12) return +(value / 1e12).toFixed(fixed) + "T";
}

export function toBBA(daltons: number | bigint): number {
  if (typeof daltons === "number") {
    return daltons / BBA_DALTON_UNIT;
  }

  // let signMultiplier = 1;
  // if (daltons < 0) {
  //   signMultiplier = -1;
  // }

  // const absDaltons = daltons < 0 ? -daltons : daltons;
  // const daltonsString = absDaltons.toString(10).padStart(10, "0");
  // const splitIndex = daltonsString.length - 9;
  // const solString =
  //   daltonsString.slice(0, splitIndex) +
  //   "." +
  //   daltonsString.slice(splitIndex);
  // return signMultiplier * parseFloat(solString);
}

export {
    cn,
    formatDate,
    numberToCurrencyString,
    clamp,
};
