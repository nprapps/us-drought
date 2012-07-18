/****
Custom events to track with Google Analytics.
Each event needs an array:

    ['_trackEvent', category, action, label, value, non-interact]

****/
jQuery(function($) {
    var category = "Texas Drought";
    window._gaq = window._gaq || [];
        
    slider.bind('slidestart', function(e, ui) {
        _gaq.push(['_trackEvent', category, 'Slider start']);
    });
    
    player.button.on('click', function(e) {
        _gaq.push(['_trackEvent', category, 'Play map slider'])
    });
    
    $('#myCarousel').find('a.btn').on('click', function(e) {
        _gaq.push(['_trackEvent', category, 'Timeline slideshow'])
    });
    
    $('#map').find('li a').on('click', function(e) {
        _gaq.push(['_trackEvent', category, 'Fire map switch']);
    });
});