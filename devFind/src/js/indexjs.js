// LOADING
document.body.setAttribute("class", "noscroll");

document.getElementById("overlay").style.display = "block";
document.getElementById("spinner").style.display = "block";


window.onload = function() {
  document.getElementById("spinner").style.display = "none";
  document.getElementById("overlay").style.display = "none";

  document.body.className = document.body.className.replace(/\bnoscroll\b/,'');
}

// SEARCH
function SearchFunction() {
  document.getElementById("SearchDropdown")
      .classList.toggle("show");
}

function filterFunction() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  div = document.getElementById("SearchDropdown");
  a = div.getElementsByTagName("a");
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}