export function formatDateCard(input: string): string {
  const month = input.slice(0, 2);
  const year = input.slice(2);

  return `${month}/${'20' + year}`;
}
