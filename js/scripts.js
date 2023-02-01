window.onload = function(event) {
  let joyous = document.getElementById("joyous");
  let indifferent = document.getElementById("indifferent");
  let defeated = document.getElementById("defeated");
  let afraid = document.getElementById("afraid");
  
  let button = document.querySelector(".enter");

  button.addEventListener("click", function() {
    let inputMood = document.getElementById("mood").value;

    if (inputMood === "Joyous")  {
      document.setElementById("mood1").removeAttribute("class","hidden");
      document.setElementById("mood2").setAttribute("class","hidden");
      document.setElementById("mood3").setAttribute("class","hidden");
      document.setElementById("mood4").setAttribute("class","hidden");
      
    } else if (inputMood === "Indifferent") {
      document.getElementById("mood2").removeAttribute("class","hidden");
      document.setElementById("mood1").setAttribute("class","hidden");
      document.setElementById("mood3").setAttribute("class","hidden");
      document.setElementById("mood4").setAttribute("class","hidden");
    } else if (inputMood === "Defeated") {
      document.setElementById("mood3").removeAttribute("class","hidden");
      document.setElementById("mood1").setAttribute("class","hidden");
      document.setElementById("mood2").setAttribute("class","hidden");
      document.setElementById("mood4").setAttribute("class","hidden");

    } else (inputMood === "Afraid") {
      document.setElementById("mood4").removeAttribute("class","hidden");
      document.setElementById("mood1").setAttribute("class","hidden");
      document.setElementById("mood2").setAttribute("class","hidden");
      document.setElementById("mood3").setAttribute("class","hidden");
    }
  });
  event.preventDefault
}