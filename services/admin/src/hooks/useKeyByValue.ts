// object의 value를 이용하여 key를 받아옴

export const useKeyByValue = <T, K>(object: T, value: K) => {
  return Object.keys(object).find((key) => object[key] === value);
};
