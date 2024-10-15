// console.log(location.href);
// console.log(location.protocol);
// console.log(location.hostname);
// console.log(location.port);
// console.log(location.pathname);

let abir = document.querySelector('.abir');

let p1 = abir.children[0]
p1.innerHTML= location.href;

let p2 = abir.children[1]
p2.innerHTML= location.protocol;

let p3 = abir.children[2]
p3.innerHTML= location.hostname;

let p4 = abir.children[3]
p4.innerHTML= location.port;

let p5 = abir.children[4]
p5.innerHTML= location.pathname;

let amit = document.querySelector('#amit');
amit.addEventListener('click',function(){
    location.assign('https://github.com/')
})

