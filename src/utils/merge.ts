// 仅合并对象已有的属性
// 例如 {a:1,b:2} ，{b:3,c:4} =>{a:1,b:3}

export default function merge(obj1: Object, obj2: Object) {
  let assignObj = {};
  for (let key in obj1) {
    assignObj[key] = obj2[key] ? obj2[key] : obj1[key];
  }
  return assignObj;
}
