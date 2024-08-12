export function cls(...classes: string[]): string {
  return classes.reduce((acc, curr) => `${acc} ${curr}`, '');
}
