/**
 * ip2int
 * @param {string} ip
 * @example 10.0.3.193 -> 167773121
 */
const ip2int = (ip) => {
  let ipList = ip.split('.');
  let seg0 = parseInt(ipList[0]) << 24;
  let seg1 = parseInt(ipList[1]) << 16;
  let seg2 = parseInt(ipList[2]) << 8;
  let seg3 = parseInt(ipList[3]);

  let res = seg0 + seg1 + seg2 + seg3;
  return res;
};

/**
 * int2ip
 * @param {int} number
 */
const int2ip = (number) => {
  let ipList = [];

  for (let i = 0; i < 4; i++) {
    ipList.unshift(number & 255);
    number = number >> 8;
  }

  let res = ipList.join('.');
  return res;
};

ip2int('10.0.3.193');
int2ip(167773121);
