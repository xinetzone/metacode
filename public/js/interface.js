function openInterface(interfaceName) {
  let x = document.getElementsByClassName("interface");
  for (let i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(interfaceName).style.display = "block";
}
