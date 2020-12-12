// LOADING
document.onreadystatechange = function() { 
  if (document.readyState !== "complete") { 
      document.querySelector( 
        "#main_Body").style.visibility = "hidden"; 
      document.querySelector( 
        "#load").style.visibility = "visible"; 
  } else { 
      document.querySelector( 
        "#load").style.display = "none"; 
      document.querySelector( 
        "#main_Body").style.visibility = "visible"; 
  } 
};

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