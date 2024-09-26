import { useMemo } from 'react';

function makeId() {
  const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  let id = "";
  for (let i = 0; i < 10; i += 1) {
    id += chars[Math.floor(Math.random() * chars.length)];
  }
  return id;
}
const useId = (id) => {
  return useMemo(() => id !== null && id !== void 0 ? id : makeId(), [id]);
};

export { useId };
