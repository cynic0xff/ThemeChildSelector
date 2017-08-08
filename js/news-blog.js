/****************************************************************************
* Project		: news and blog filter         			                    *
* Author		: Scott Wren							                    *
* Date created	: 7/21/2017							                	    *
* Location      : http://stagingnrt.com/oncollaborative/news-and-blog/		*
* Purpose		: Filter/display news and blog based on which link has been *
*                 clicked					                                *
* 														                	*
* TODO:  Optimizaion -                                                      *
* 												                			*
* 	Revision History:				                						*
* 	Date:		Author		Description					                	*
* 	                                                                		*
*	BUG FIXES:																*
*	Date:		Author		Description										*
*	8/3/2017	S Wren		Added url traversal parameter to prevent page	*
*							displaying a 404								*
*	8/3/2017	S Wren		Added displayNews() & displayBlog() functions	*
*							because when returning from a page that isn't 	*
*							in the news or blog section it would 404		*
*																			*
****************************************************************************/

(function($) {
	var location = '';

	//url to redirect to
	var url = '../../news-and-blog';

	//check url to see if we need to modify how many directories we need to teleport to
	var pathname = window.location.pathname.split("/");
	var filename = pathname[pathname.length-1];

	if(filename !== 'news-and-blog' || filename != 'news-and-blog/?news'  || filename != 'news-and-blog/?blog')
		url = '../news-and-blog/';

	//do we have an ?news or ?blog appended
	var parameter = (window.location.search).substr(1);
	if(parameter === 'news') {
		console.log(parameter);
		displayNews();
	}

	if(parameter === 'blog') {
		displayBlog();
	}
	
	function displayNews() {
		//get the location to display
		location = $('#menu-item-690 a').text();
		hideAll();
		show(location);
	}

	function displayBlog() {
		//get the location to display
		location = $('#menu-item-691 a').text();
		hideAll();
		show(location);
	}

	//handlers for clicked items
	//news
	$('#menu-item-690').click(function(event) {

		/*check if #list-news is not on the page then we can't update so redirect*/
		if(!$('#list-news').length) {
			
			//modify the url to append the news tag in the url
			url += '?news';
			window.location.href = url;
		}

		//prevent the page from being reloaded
		event.preventDefault();
		displayNews();
	});

	//blog
	$('#menu-item-691').click(function(event) {

		/*check if #list-blog is not on the page*/
		if(!$('#list-blog').length) {
			//modify the url to append the news tag in the url
			url += '?blog';
			window.location.href = url;
		}

		//prevent the page from being reloaded
		event.preventDefault();

		//get the location to display
		location = $('#menu-item-691 a').text();
		hideAll();
		show(location);
	});

	//show the location selected
	function show(location) {
		switch(location) {
			case 'News':
				$('#list-news').show();
				break;
			case 'Blog':
				$('#list-blog').show();
				break;
			default:
				//do nothing
		}
	}

	function hideAll() {
		$('#list-news').hide();
		$('#list-blog').hide();
	}
})( jQuery );