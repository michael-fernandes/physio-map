// https://stackoverflow.com/questions/23013573/swap-key-with-value-json
// exported here (rather than global util) to prevent dependency cycle
export default function objectFlip(obj) {
  const ret = {};
  Object.keys(obj).forEach((key) => {
    ret[obj[key]] = key;
  });
  return ret;
}
