
$('img').hide();
$('img').each( function(){
    $(this).on('load', function () {
        $(this).fadeIn(1000);
    });
});

$("h1, h2, p")
  .css('opacity', 0)
  .slideDown('slow')
  .animate(
    { opacity: 1 },
    { queue: false, duration: 'slow' }
  );
