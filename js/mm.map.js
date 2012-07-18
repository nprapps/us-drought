var loadMap = function (tiles){
    var map,
        mm = com.modestmaps,
        url = tiles;
    wax.tilejson(url, function(tilejson) {
        window.tilejson = tilejson;
        map = new mm.Map('map',
            new wax.mm.connector(tilejson),
            new mm.Point(620,580),
            null
        );
        map.setCenterZoom(new mm.Location(31.3, -100.2), 6);
        if (window.legend) {
            $(window.legend.element()).remove();
        }
        window.legend = wax.mm.legend(map, tilejson).appendTo(map.parent);
        //window.fullscreen = wax.mm.fullscreen(map, tilejson).appendTo(map.parent);
        if (window.attribution) {
            $(window.attribution.element()).remove();
        }
        window.attribution = wax.mm.attribution(map, tilejson).appendTo(map.parent);
        

        if (window.interaction) {
            window.interaction.remove();
        }
        window.interaction = wax.mm.interaction(map, tilejson);
    });
};


// Load initial map
loadMap('http://a.tiles.mapbox.com/v3/npr.texas-wildfires-homes.jsonp');

// Setup tab interaction
$('#impact .nav-pills a').click(function(element){
    if(!$(this).parent().hasClass('active')){
        $('#impact .nav-pills li').toggleClass('active');
        if ($('#impact .legend .metric').hasClass('houses')){
            $('#impact .legend .metric').html('<span></span> Larger symbols represent relative fire size, not actual area.');
        } else {
            $('#impact .legend .metric').html('<span></span> Larger symbols represent more homes lost.');
        }
        $('#impact .legend .metric').toggleClass('houses acres');
        loadMap($(this).attr('data-target'));
    };
});


// Handles interaction layer floating tooltips
jQuery(function($){
    $('#map').mousemove(function(e) {
        var map = $('#map'),
            map_position = map.offset(),
            tooltip = $('.wax-tooltip'),
            mouse_offset = 15;
        tooltip.css({ 'display' : 'block' });
        if ( e.pageX - map_position.left + tooltip.width() + 40 > map.width()){
            tooltip.css({
                'right' : map.width() - (e.pageX - map_position.left) + mouse_offset,
                'left' : 'auto'
            });
        } else {
            tooltip.css({
                'left' : e.pageX - map_position.left + mouse_offset,
                'right' : 'auto'
            });
        }
        if ( e.pageY - map_position.top + tooltip.height() > map.height()){
            tooltip.css({
                'bottom' : map.height() - (e.pageY - map_position.top) + mouse_offset - 10,
                'top' : 'auto' 
            });
        } else {
            $('.wax-tooltip').css({
                'top' : e.pageY - map_position.top + mouse_offset,
                'bottom' : 'auto'
            });
        }   
    });
    $('a,header,.wax-legends').mouseover(function(){
        $('.wax-tooltip').css('opacity','0 !important');
    }).mouseleave(function(){
        $('.wax-tooltip').css('opacity','1');
    });
});