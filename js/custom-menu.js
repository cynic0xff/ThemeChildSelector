/************************************************************
* Project		:	custom-menu								*
* Author		:	Scott Wren								*
* Date created	:	7/19/2017								*
* Purpose		:	Change the default behavoir of megamenu *
* when the cursor moves away from a menu the top menu will *
* activated.  It uses the API supplied from the mega-menu  *
* plugin to extend the functionality.  The API is very 	*
* limited so jQuery is used use to manipulate the DOM		*
* 
* NOTE: The menus use static arrays which are supplied		*
* from the menu settings in mega menu.  View HTML for info *
* 															*
* TODO:  Optimizaion - When the new API is released use 	*
* the auto id to obtain the active menu.
* 															*
* 	Revision History:										*
* 	Date:		Author		Description						*
* 	7/20/2017	S Wren		Remove top active menu			*
*	7/26/2017	S Wren		Fixed menu flick on Chrome		*
* **********************************************************/
				
/************************************************************
* MENU ITEM 80 [NOTE] STATIC ITEM NAMES						*
************************************************************/

jQuery(document).ready(function(){

             if (jQuery) {

				/************************************************************
				* MENU ITEM 80 [NOTE] STATIC ITEM NAMES						*
				************************************************************/
				var arrMenu80 = ['#menu-item-336', '#menu-item-335', '#menu-item-334', '#menu-item-332',
				 					'#menu-item-331', '#menu-item-333', '#menu-item-318'
				 ];
                
				/* MENU ITEM 80 CLOSE */
              	jQuery('#menu-item-80').on('ubermenuclose', function() {
					
					//deactivate all menus
					removeActiveClasses(arrMenu80);
				});

				/* MENU ITEM 80 OPEN - SERVICES*/
				jQuery('#menu-item-80').on('ubermenuopen', function() {
                    
					//set the top menu class to active

					//menu hovers
					jQuery('#menu-item-336').on('hover', function() {
						deactiveMenu('#menu-item-318');
					});
					
					jQuery('#menu-item-335').on('hover', function() {
						deactiveMenu('#menu-item-318');
					});

					jQuery('#menu-item-334').on('hover', function() {
						deactiveMenu('#menu-item-318');
					});
					
					jQuery('#menu-item-332').on('hover', function() {
						deactiveMenu('#menu-item-318');
					});
						
					jQuery('#menu-item-331').on('hover', function() {
						deactiveMenu('#menu-item-318');
					});

					jQuery('#menu-item-333').on('hover', function() {
						deactiveMenu('#menu-item-318');
					});
				});

				/************************************************************
				* MENU ITEM 215												*
				************************************************************/
				var arrMenu203 = ['#menu-item-538', '#menu-item-211', '#menu-item-202X', 
									'#menu-item-277', '#menu-item-372', '#menu-item-363',
									'#menu-item-467', '#menu-item-466', '#menu-item-465',
									'#menu-item-464', '#menu-item-463', '#menu-item-364',
									'#menu-item-365'];

				/* MENU ITEM 215 CLOSE */
              	jQuery('#menu-item-249').on('ubermenuclose', function() {

					//hide all menus
					removeActiveClasses(arrMenu203, '#menu-item-363');
				});

				/**************
				*  SUB MENUS  *
				**************/
				jQuery('#menu-item-249').on('ubermenuopen', function() {


					jQuery('#menu-item-202').on('hover', function() {
						//deactiveMenu('#menu-item-202');
						//activateMenu('#menu-item-202')
					});

					jQuery('#menu-item-277').on('hover', function() {
						//deactiveMenu('#menu-item-202');
					});

					jQuery('#menu-item-372').on('hover', function() {
						//deactiveMenu('#menu-item-202');
					});

					jQuery('#menu-item-363').on('hover', function() {
						//deactiveMenu('#menu-item-202');
					});
					
					/***********************
					*  2ND LEVEL SUB MENU  *
					***********************/

					//our team sub menu
					jQuery('#menu-item-211').mouseleave(function() {
						//removeActiveClasses(arrMenu203, 'IGNORE')
					});

					jQuery('#menu-item-365').on('hover', function() {
						//deactiveMenu('#menu-item-202');
						//deactiveMenu('#menu-item-364');
					});
					jQuery('#menu-item-467').on('hover', function() {
						//deactiveMenu('#menu-item-202');
					});
					jQuery('#menu-item-466').on('hover', function() {
						//deactiveMenu('#menu-item-202');
					});
					jQuery('#menu-item-465').on('hover', function() {
						//deactiveMenu('#menu-item-202');
					});
					jQuery('#menu-item-464').on('hover', function() {
						//deactiveMenu('#menu-item-202');
					});
					jQuery('#menu-item-463').on('hover', function() {
						//deactiveMenu('#menu-item-202');
					});

					//sub menus need to tidy up after themselves

					//the menu has to be closed as the default behaviour is to make the first menu
					//active so we need to close it first
					//deactiveMenu('#menu-item-365');
					
					//bugfix:  the menu item will be closed to we will need to activate it when the
					//user places the mouse over the top
					jQuery('#menu-item-365').on('hover', function() {
						//activateMenu('#menu-item-365');
					});

					//experience->asset types
					jQuery('#menu-item-363').mouseleave(function() {
						deactiveMenu('#menu-item-363');
					});

					jQuery('#menu-item-215').mouseleave(function() {
						deactiveMenu('#menu-item-215');
						deactiveMenu('#menu-item-202');
						deactiveMenu('#menu-item-538');
						deactiveMenu('#menu-item-699');
						deactiveMenu('#menu-item-698');
						deactiveMenu('#menu-item-695');
						deactiveMenu('#menu-item-696');
						deactiveMenu('#menu-item-697');
					})
				});

				/* functions */

				//remove the ubermenu-active class from an array of menu items
				//the 2nd parameter is used as an exception.  remove all except menuItem
				function removeActiveClasses(arrMenu, menuItem) {
					arrMenu.forEach(function removeClass(value) {

						//keep menuItem active
						if(value != menuItem) {
							jQuery(value).removeClass('ubermenu-active');
						}
					});
				}

				//activate the ubermenu-active class
				function activateMenu(menuItem) {
					jQuery(menuItem).addClass('ubermenu-active');
				}

				//open the top sub menu API
				function openTopSubMenu(menuItem) {
					jQuery('.ubermenu').ubermenu('openSubmenu', jQuery(menuItem));
				}

				//close the array of menus
				function closeMenus(arrMenu) {
					arrMenu.forEach(function removeMenus(value) {
						jQuery('.ubermenu').ubermenu('closeSubmenu', jQuery(value));
					});
				}

				//remove the active class
				function deactiveMenu(menuItem) {
					jQuery(menuItem).removeClass('ubermenu-active');
				}
             } else {
               // jQuery is not loaded
               console.log('jQuery has an issue');
             }
          });