
  var isClosed = false;
  // Expands side menu bar
  function expandMenu(){
        if (isClosed == true) {
          $('.overlay').hide();
          $('.hamburger').removeClass('is-open');
          $('.hamburger').addClass('is-closed');
          $('#wrapper').removeClass('toggled');
          isClosed = false;
        } else {
          $('.overlay').show();
          $('.hamburger').removeClass('is-closed');
          $('.hamburger').addClass('is-open');
          $('#wrapper').addClass('toggled');
          isClosed = true;
        }
  }
