(function() {
    // This is the bare minimum JavaScript. You can opt to pass no arguments to setup.
    // e.g. just plyr.setup(); and leave it at that if you have no need for events
    // var players = plyr.setup({
    const players = plyr.setup('#player', {
        // Output to console
        debug: false,
        controls: [
            // 'play-large',// don't allow start on video click
            'play',
            'progress',
            'current-time',
            'mute', 
            'volume'
            // 'captions',  // don't allow captions
            // 'fullscreen' // don't allow fullscreen
        ],
        clickToPlay: false, // have to click on button to play / pause
        hideControls: false // never hide status bottom status bar
    });
    const Player = players[0];
  
    // Get an element
    function get(selector) {
        return document.querySelector(selector);
    }
  
    // Custom event handler (from demo site)
    function on(element, type, callback) {
        if (!(element instanceof HTMLElement)) {
            element = get(element);
        }
        element.addEventListener(type, callback, false);
    }

    // Play
    on('.js-play', 'click', function(e) { 
        Player.play();
    });
    
    // Pause
    on('.js-pause', 'click', function() { 
        Player.pause();
    });
    
    // Stop
    on('.js-stop', 'click', function() { 
        Player.stop();
    });
    
    // Rewind
    on('.js-rewind', 'click', function() { 
        Player.rewind();
    });
    
    // Forward
    on('.js-forward', 'click', function() { 
        Player.forward();
    });
})();