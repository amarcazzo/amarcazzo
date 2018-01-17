$(document).ready(function() {
  var skillsUrl = '../data/data.json';

  var loadSkills = function() {

    $.getJSON(skillsUrl, function(json){
      for (var i in json) {
        var skill = '<div class="col-3">'
        skill += '<div class="card text-center">';
        skill += '<div class="card-body">';
        skill += '<i class="' + json[i].icon + '"></i>';
        skill += '<h6 class="card-subtitle mb-2 text-muted">' + json[i].title + '</h6>';
        skill += '<p class="card-text">' + json[i].description + '</p>';
        skill += '</div>';
        skill += '</div>';
        skill += '</div>';

        $('#skills-content').append(skill);
      }
    });
  }

  loadSkills();

  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })


  $(window).scroll(function() {
      if ($(this).scrollTop()) {
          $('#toTop').fadeIn();
      } else {
          $('#toTop').fadeOut();
      }
  });

  $('.js-scrollTo').on('click', function() { // Au clic sur un élément
			var page = $(this).attr('href'); // Page cible
			var speed = 1000; // Durée de l'animation (en ms)
			$('html, body').animate({scrollTop: $(page).offset().top }, speed); // Go
			return false;
	});

  $("#toTop").click(function () {
     $("html, body").animate({scrollTop: 0}, 1000);
  });

});
