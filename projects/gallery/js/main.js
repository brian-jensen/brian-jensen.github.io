// fancybox default overides \\

$.extend($.fancybox.defaults, {
  buttons: [
    'close'
  ],
  idleTime: 9999999,
});

// Global variables
var wrapper;
var wrapperWidth;
var ul = document.getElementById('gallery-items');
var li = ul.getElementsByTagName('li');
window.addEventListener("resize", resizeCheck);

// custom responsive javascript search filter
// responsive size check for justifying conent
function resizeCheck() {
  wrapper = document.getElementById('wrapper');
  wrapperWidth = wrapper.clientWidth;
  // mobile view
  if (wrapperWidth <= 455) {
    ul.style.justifyContent = 'space-between';
  }
  // tablet and larger
  else {
    ul.style.justifyContent = 'flex-start';
  }
}
// read and filter input search results
function filterResults() {
  var input = document.getElementById('search');
  var filter = input.value.toLowerCase();
  var negativeListItems = li.length;
  var noMatchesText = document.getElementById('no-matches');
  // Loop through all list items, and hide those which don't match the search query
  for (var i = 0; i < li.length; i++) {
    var a = li[i].getElementsByTagName('a')[0];
    if (a.getAttribute('data-caption').toLowerCase().indexOf(filter) > -1) {
      li[i].style.display = '';
    } else {
      li[i].style.display = 'none';
      negativeListItems--;
      if (negativeListItems > 0) {
        noMatchesText.style.display = 'none';
      } else {
        noMatchesText.style.display = 'block';
      }
    }
  }
}
