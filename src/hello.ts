export const hello = (name: string): string => {
  const greeting = `Hello ${name}!`;
  return greeting;
};

export default (name: string): string => {
  const greeting = `Hello default ${name}!`;
  return greeting;
};
