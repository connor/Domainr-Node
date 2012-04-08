$(document).ready(function() {

	$("#domainr-wrapper").submit( function(e) {

		e.preventDefault()

		var nameToSearch = document.getElementById('js-domain_input').value

		$("#results li").remove()

		$.ajax({
				url: "/search/" + nameToSearch
			, type: "json"
			, method: "GET"
			, success: function(response) {
			
					$.each( response.results, function(el, i) {
						$("#results").append("<li class=" + el.availability + ">" + el.domain + " [" + el.availability + "]" + "</li>")
					})

			}
		})

	})

})