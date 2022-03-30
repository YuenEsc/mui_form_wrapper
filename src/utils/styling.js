export const classNames = (...classes) => classes.filter(Boolean).toString().replace(/,[s]*/g, ' ').trim();
