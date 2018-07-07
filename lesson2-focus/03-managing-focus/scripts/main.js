page('/', function() {
  page.redirect('/what-is-vegemite');
});

page('/:slug', function(context) {
  // This will match any value after the first / in the url. For example, if
  // the url was /foo, the value of slug would be "foo".
  var slug = context.params.slug;

  // Remove is-active class from previous menu item and section
  var oldMenuItem = document.querySelector('#menu .is-active');
  var oldPage = document.querySelector('main .is-active');
  oldMenuItem.classList.remove('is-active');
  oldPage.classList.remove('is-active');

  // Add is-active class to new menu item and section using the URL slug
  var newMenuItem = document.querySelector('#menu [data-page='+slug+']');
  var newPage = document.querySelector('main [data-page='+slug+']');
  newMenuItem.classList.add('is-active');
  newPage.classList.add('is-active');

});

page({
  hashbang: true
});


//adds focus on the header of the chosen section, for those who use tab will be able to continue at the right tab order without the need of clicking through the parts of the page which might be before the topic they have chosen!


let vegemite = document.getElementById('what-is-vegemite');
let vegemiteHeader = document.getElementById('what-is-vegemite-header');

vegemite.addEventListener('click', function() {
	vegemiteHeader.focus();
});



let recipes = document.getElementById('recipes');
let recipesHeader = document.getElementById('recipes-header');


recipes.addEventListener('click', function() {
	recipesHeader.focus();
});
