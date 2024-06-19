/* Task 1 --------------------------------------------------------------------------------------- */

function testCdn() {
  const p = $('#cdn');
  p.text(p.text() + new Date().getFullYear());
}

/* Task 1 solution ------------------------------------------------------------------------------ */

// There is nothing to do here. For this task you only need to add something to index8.html.

/* Task 2 --------------------------------------------------------------------------------------- */

// There is no initial provided code.

/* Task 2 solution ------------------------------------------------------------------------------ */

$(document).ready(function() {
  $('#task21 li:not(.killed)').addClass('killed');
});

$(document).ready(function() {
  $('#task22 li.killed').removeClass('killed');
});

/* Task 3 --------------------------------------------------------------------------------------- */

// There is no initial provided code.

/* Task 3 solution ------------------------------------------------------------------------------ */

$(document).ready(function() {
  function randomColorHover() {
      const colors = ['#9009', '#0909'];
      return colors[Math.floor(Math.random() * colors.length)];
  }

  function randomColorClick() {
      const colors = ['#9009', '#fff'];
      return colors[Math.floor(Math.random() * colors.length)];
  }

  $('#task3').hover(function() {
      $(this).css('background-color', randomColorHover());
  });

  $('#task3').click(function() {
      $('body').css('background-color', randomColorClick());
  });
});

/* Task 4 --------------------------------------------------------------------------------------- */

// There is no initial provided code.

/* Task 4 solution ------------------------------------------------------------------------------ */

function ajaxPokemon() {
  $(document).ready(function() {
      $.ajax({
          url: 'https://pokeapi.co/api/v2/pokemon/charmeleon',
          method: 'GET',
          success: function(data) {
              var abilities = data.abilities.map(function(abilityInfo) {
                  return abilityInfo.ability.name;
              });

              $('.task4').html('Show abilities for charmeleon: ' + abilities.join(', '));
          }
      });
  });
}

/* Task 5 --------------------------------------------------------------------------------------- */

// There is no initial provided code.

/* Task 5 solution ------------------------------------------------------------------------------ */

$(document).ready(function() {
  $('#slider').slider({
      min: 0,
      max: 42,
      value: 0,
      slide: function(event, ui) {
          console.log(ui.value);
      }
  });
});

/* DOMContentLoaded ----------------------------------------------------------------------------- */

document.addEventListener('DOMContentLoaded', () => {
  testCdn();
  ajaxPokemon();
});
