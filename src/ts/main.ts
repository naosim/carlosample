import * as sub from './sub'

console.log('hello ts2');

sub.fun();

async function run() {
  console.log("run");
  const res = await fetch('https://www.yahoo.co.jp');
  const text = await res.text();
  console.log(text);
}

document.addEventListener('load', run)