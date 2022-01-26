var x = window.matchMedia("(max-width: 999px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes

function myFunction(x) {
  if (x.matches) { // If media query matches

  } else {

  }
}

/* dropdown structure starts*/
function dropfn() {
  document.getElementById("pdropdown").classList.toggle("show");
}
window.onclick = function(event) {
  if (!event.target.matches('.pdropdiv')) {
    var dropdowns = document.getElementsByClassName("pdropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
/* dropdown structure ends*/
