

$(document).ready(function() {
	
	
	
$("#searchForm").on("submit",function(s) {
	
	var movieName=$("#searchText").val();

	getmovies(movieName);

	s.preventDefault();
	
	})
		
	
});


function getmovies(movieName){

	

    axios.get("https://www.omdbapi.com/?s="+movieName+"&apikey=5d6dd771")
	
.then(function (response) {
    console.log(response);
	   var movieSearch=response.data.Search;
	   var output=""; 
	   $.each(movieSearch,(index,movie) =>{
			
		output+="<div class='col-sm-6 col-lg-3  text-center moviesHolder'><img src="+movie.Poster+" class='m-auto'><h5>"+movie.Title+"</h5><a href='#' onclick=\"movieSelected('"+movie.imdbID+"')\" class='btn btn-primary'>more info</a></div>";
		   
		   console.log(output);
		   
		  			
		});

	    $("#movies").html(output);
	   
 })	
 .catch(function (error) {
    console.log(error);
  });
	
	
	 	
};


function movieSelected(id){
  sessionStorage.setItem('movieId', id);
  window.location = 'movie.html';
  return false;
	
 
}


function getmovie(){
	
let movieId=sessionStorage.getItem("movieId");
	var output="";
    axios.get("https://www.omdbapi.com/?i="+movieId+"&apikey=5d6dd771")
	
.then(function (response) {
    console.log(response);
		
		var movieInf=response.data;
		
		output=
			
			"<div class='col-md-4'><img src="+movieInf.Poster+" class='img-fluid m-auto'><h5 class='m-2 movie-plot'>"+movieInf.Plot+"</h5><a href='index.html' class='btn btn-primary m-2'>back</a></div>"+
			
			"<div class='col-md-8'><h1 class=\"page-title\">"+movieInf.Title+"</h1><ul class='infoList'><li><b>Actors </b>:"+movieInf.Actors+"</li><li><b>Avards </b>:"+movieInf.Awards+"</li><li><b>Director </b>:"+movieInf.Director+"</li><li><b>Genre</b>:"+movieInf.Genre+"</li><li><b>Language </b>:"+movieInf.Language+"</li></ul></div>";
		
		$("#movie").html(output);
	  
	   
 })	
 .catch(function (error) {
    console.log(error);
  });
	
	
}

	  
