const scence = document.querySelector('#scene');
const flower = document.querySelector('#flower');
const flowerbg = document.createElement('div');
flowerbg.className = 'plant';
scence.appendChild(flowerBg);

const numpetal = 8;
let leatwidth = 0;
const leaft = [];
let opacity = 0;


for (let i = 0; i < numPetal; i++) {
  const leaf = document.createElement('div');
  leaf.className = 'leaf';
  leaf.style.backgroundImage = 'url('tulipan1.png')';
  leaf.style.backgroundsize = 'contain';
  leaf.style.backgroundrepeat = 'no-repeat';
  leaf.style.width = '10%';
  leaf.style.opacity = opacity;
  leafs.push(leaf);
  flowerbg.appendChild(leaf);
  opacity += 0.1;

}
 
flower.appendChild(flowerbg);

const intervalid = sentinterval(() => {
  flower.style.animation ='grow 2s forwards';  
}, 500);
setTimeout(() => clearInterval(intervalid), 2100);