jQuery(function($) {
    if (!map_images) return;
    var img_root = "img/maps/"
    window.dates = [];
    window.images = _.map(map_images, function(src, i) {
        var date = new Date(Date.parse(src.replace('.png', '')));
        dates.push(date);
        
        var img = document.createElement('img');
        img.setAttribute('src', img_root + src);
        return img;
    });
    var map = $('#drought-map'),
        date_label = $('#map-date');
    
    var set_map = function(event, ui) {
        var img = images[ui.value];
        map.html(img);
        
        var date = dates[ui.value];
        if (date) {
            date_label.text(date.toString('MMMM d, yyyy'));
        }
        
    }
    
    window.slider = $('#slider').slider({
        animate: false,
        max: images.length,
        change: function(event, ui) {
            // update the map image
            // need to make sure this doesn't happen twice on slide
            set_map(event, ui);
        },
        slide: set_map,
        value: images.length
    });
    map.html(_.last(images));
    date_label.text(_.last(dates).toString('MMMM d, yyyy'));
    
    function Player(slider) {
        _.bindAll(this);
        
        this.interval = null;
        this._slider = slider;
        this.value = slider.slider('value') || 0;
        
        var player = this;
        slider.bind('slidechange', function(e, ui) {
            player.value = ui.value;
        });
        
        slider.bind('slide', function(e, ui) {
            // stop if user slides
            player.stop();
        });
        
        this.button = $('#play-slider');
        this.icon = $('#play-icon');
        this.bindStart();
    }
    
    _.extend(Player.prototype, {
                
        bindStart: function() {
            var player = this;
            this.button.off('click').on('click', function(e) {
                player.start();
            });
        },
        
        bindStop: function() {
            var player = this;
            this.button.off('click').on('click', function(e) {
                e.preventDefault();
                player.stop();
            });
        },
        
        next: function() {
            // increment the slider, or bail if we're at the end
            if (this.option('max') == this.value) {
                this.stop();
                return;
            }
            
            this._slider.slider('value', this.value + 1);
            return this.value;
        },
        
        previous: function() {
            // decrement the slider, or bail if we're at the beginning
            if (this.option('min') == this.value) return;
            
            this._slider.slider('value', this.value - 1);
            return this.value;
        },
        
        option: function(key, value) {
            return this._slider.slider('option', key, value);
        },
        
        start: function() {
            this.stop(); // clear the interval, so they don't pile up
            if (this.value == this.option('max')) {
                this._slider.slider('value', 0);
            }
            this.interval = setInterval(this.next, 250);
            this.icon.removeClass('icon-play').addClass('icon-pause');
            this.bindStop();
        },
        
        stop: function() {
            clearInterval(this.interval);
            this.icon.removeClass('icon-pause').addClass('icon-play');
            this.bindStart();
        }
    });
    
    window.player = new Player(slider);
});