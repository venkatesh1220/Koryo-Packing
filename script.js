
const navToggle =document.querySelector('.nav-toggle1');
const navLinks = document.querySelectorAll('.nav-link1');

navToggle.addEventListener('click',() => {
    document.body.classList.toggle('nav-open');
});


navLinks.forEach(link=>{
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})



/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
