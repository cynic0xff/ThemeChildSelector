/****************************************************************************
* Project		: property filter         			                        *
* Author		: Scott Wren							                    *
* Date created	: 7/21/2017							                	    *
* Location      : http://stagingnrt.com/oncollaborative/property-portfolio/ *
* Purpose		: Filter/display the property location based on which       *
*                 location has been selected                                *
* 														                	*
* TODO:  Optimizaion -                                                      *
* 												                			*
* 	Revision History:				                						*
* 	Date:		Author		Description					                	*
*	7/24/2017	S Wren		Added url parameter check and redirect			*
*	7/26/2017	S Wren		Added portfolio redirection						*
* 	                                                                		*
****************************************************************************/

(function($) {
	var location = '';

	//get parameters
	var parameter = (window.location.search).substr(1);

	//var path = window.location.pathname.split('/');
	
	//are we landing on the page with a parameter set
	if(parameter) {
		hideAll();
		show(parameter);
	}

	//handlers for clicked items
	//midwest
	$('#menu-item-1037').click(function(event) {

		//prevent the page from being reloaded
		event.preventDefault();

		//if the property location link has been click then lets transporter to travel
		//to a property location page but first lets check if we need to engage the isPortfolioPath method
		
		//get the location to display
		location = $('#menu-item-1037 a').text();

		//are we local
		isPortfolioPath(location);
		hideAll();
		show(location);
	});

	//northeast
	$('#menu-item-706').click(function(event) {

		//prevent the page from being reloaded
		event.preventDefault();

		//get the location to display
		location = $('#menu-item-706 a').text();

		//are we local
		isPortfolioPath(location);
		hideAll();
		show(location);
	});

	//south
	$('#menu-item-707').click(function(event) {

		//prevent the page from being reloaded
		event.preventDefault();

		//get the location to display
		location = $('#menu-item-707 a').text();
		
		//are we local
		isPortfolioPath(location);
		hideAll();
		show(location);
	});

	//west
	$('#menu-item-766').click(function(event) {

		//prevent the page from being reloaded
		event.preventDefault();

		//get the location to display
		location = $('#menu-item-766 a').text();
		
		//are we local
		isPortfolioPath(location);
		hideAll();
		show(location);
	});

	//show the location selected
	function show(location) {
		switch(location) {
			case 'Midwest':
				$('#property-list-midwest').show();
				break;
			case 'Northeast':
				$('#property-list-northeast').show();
				break;
			case 'South':
				$('#property-list-south').show();
				break;
			case 'West':
				$('#property-list-west').show();
				break;
			default:
				//do nothing
		}
	}

	function hideAll() {
		$('#property-list-midwest').hide();
		$('#property-list-northeast').hide();
		$('#property-list-south').hide();
		$('#property-list-west').hide();
	}

	//if we have the portfolio page then we allow the property portfolio redirection
	function isPortfolioPath(location) {

		//get the path and obtain the actual path
		var arrPath = window.location.pathname.split('/');
		var currentPath = arrPath[arrPath.length-3];

		//if we are not local we need to warp to another page property-portfolio/
		if(currentPath === 'portfolio') {

			//make it so
			switch(location) {
				case 'Midwest':
					window.location.replace('./property-portfolio/?Midwest');
					//window.location.replace('./Portfolio%20–%20OnCollaborative.html?Midwest');
					break;
				case 'Northeast':
					window.location.replace('./property-portfolio/?Northeast');
					//window.location.replace('./Portfolio%20–%20OnCollaborative.html?Northeast');
					break;
				case 'South':
					window.location.replace('./property-portfolio/?South');
					//window.location.replace('./Portfolio%20–%20OnCollaborative.html?South');
					break;
				case 'West':
					window.location.replace('./property-portfolio/?West');
					//window.location.replace('./Portfolio%20–%20OnCollaborative.html?West');
					break;
				default:
					//abandon ship
			}
		}
	}
})( jQuery );