function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input")
  let cityElement = document.querySelector("#city")
  cityElement.innerHTML = searchInput.value;
}



let searchBoxElement = document.querySelector("#search-form");
searchBoxElement.addEventListener("submit", handleSearchSubmit)