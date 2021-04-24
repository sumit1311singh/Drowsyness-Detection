function search_movie() {

  var movie = document.getElementById("find").value
  document.getElementById("find").value = "";
  console.log(movie)
  window.open("https://www.google.com/search?q="+movie);

}