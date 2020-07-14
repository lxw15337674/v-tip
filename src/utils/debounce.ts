//防抖
export default function debounce(func: Function, wait = 50) {
  let timer = null;
  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      //将实际的this和参数传入用户实际调用的函数
      func.apply(this, args);
    }, wait);
  };
}
