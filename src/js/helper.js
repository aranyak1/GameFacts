import { async } from 'regenerator-runtime';

export async function getFetch(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}
