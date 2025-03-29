//Function for Search games
function myFunction() {
          let input, filter, GameSection, GameTitles, a, i, txtValue;
          input = document.getElementById("myInput");
          filter = input.value.toUpperCase();
          GameSection = document.getElementById("GamesList");
          GameTitles = GameSection.getElementsByClassName("product-card");
          for (i = 0; i < GameTitles.length; i++) {
                    a = GameTitles[i].querySelector(".product-title");
                    txtValue = a.textContent || a.innerText;
                    if (txtValue.toUpperCase().indexOf(filter) > -1) {
                              GameTitles[i].style.display = "";
                    } else {
                              GameTitles[i].style.display = "none";
                    }
          }
}
