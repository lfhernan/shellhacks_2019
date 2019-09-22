$(document).ready(function() {
	$.ajaxSetup({ cache: false })
	$('#refreshBtn').click(function(event){
		console.log("click")
		$.getJSON('http://127.0.0.1:8080/js/post.JSON', function(post) {
			$('#before').html(post.content);
			//post.content;
			//post.censored;
		})
	})
})