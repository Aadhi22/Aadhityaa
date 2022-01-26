var x = window.matchMedia("(max-width: 999px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes

function myFunction(x) {
  if (x.matches) { // If media query matches
    document.getElementById('propic').setAttribute('src', 'images/dp1-circle.png');
    document.getElementById('propic').setAttribute('width', '50%');
    document.getElementById('propic').setAttribute('height', '50%');
    document.getElementById('photo').setAttribute('width', '20px');
    document.getElementById('photo').setAttribute('height', '20px');
    document.getElementById('video').setAttribute('width', '20px');
    document.getElementById('video').setAttribute('height', '20px');
    document.getElementById('design').setAttribute('width', '20px');
    document.getElementById('design').setAttribute('height', '20px');
    document.getElementById('sketch').setAttribute('width', '20px');
    document.getElementById('sketch').setAttribute('height', '20px');
    document.getElementById('testi').setAttribute('width', '20px');
    document.getElementById('testi').setAttribute('height', '20px');
    document.getElementById('it').setAttribute('width', '23px');
    document.getElementById('it').setAttribute('height', '23px');
    document.getElementById('contact').setAttribute('width', '25px');
    document.getElementById('contact').setAttribute('height', '30px');
  } else {
    document.getElementById('propic').setAttribute('src', 'images/dp1.jpg');
    document.getElementById('propic').setAttribute('width', '100%');
    document.getElementById('propic').setAttribute('height', '100%');
    document.getElementById('photo').setAttribute('width', '15px');
    document.getElementById('photo').setAttribute('height', '15px');
    document.getElementById('video').setAttribute('width', '15px');
    document.getElementById('video').setAttribute('height', '15px');
    document.getElementById('design').setAttribute('width', '15px');
    document.getElementById('design').setAttribute('height', '15px');
    document.getElementById('sketch').setAttribute('width', '15px');
    document.getElementById('sketch').setAttribute('height', '15px');
    document.getElementById('testi').setAttribute('width', '15px');
    document.getElementById('testi').setAttribute('height', '15px');
    document.getElementById('it').setAttribute('width', '18px');
    document.getElementById('it').setAttribute('height', '18px');
    document.getElementById('contact').setAttribute('width', '20px');
    document.getElementById('contact').setAttribute('height', '20px');
  }
}
