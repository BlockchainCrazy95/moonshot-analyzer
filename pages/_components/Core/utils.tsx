export const isEmpty = (value) =>
  value === undefined ||
  value === null ||
  (typeof value === "object" && Object.keys(value).length === 0) ||
  (typeof value === "string" && value.trim().length === 0);

export const numberWithCommas = (x, digits = 3) => {
  if (isEmpty(x)) return '0';
  return Number(x).toLocaleString(undefined, { maximumFractionDigits: digits });
}

export const parseNumber = (n, digits = 3) => {
  if (isNaN(n)) return 0;
  return parseInt((n * 10 ** digits).toString()) / 10 ** digits;
}

export const parseErrorMsg = (errMsg) => {
  var returStr = "";
  let startPos = JSON.stringify(errMsg).search("message");
  if (startPos >= 0) {
    let subStr = errMsg.substring(startPos + 1, errMsg.length)
    let endPos = subStr.indexOf("\"");
    if (endPos >= 0) {
      subStr = subStr.substring(0, endPos);
      returStr = subStr;
    }
  } else returStr = errMsg;
  return returStr;
}

export const shortenAddress = (address, len = 5) => {
  let v = address.toString();
  let n = v.length;
  v = v.substring(0, len) + '...' + v.substring(n - len, n);
  return v;
}