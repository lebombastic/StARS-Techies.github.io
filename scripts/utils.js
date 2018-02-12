var Utils = {
    // start perpetual clock function!
    runClock: () => {
        var now = new Date();
        var TwentyFourHour = now.getHours();
        var hour = now.getHours();
        var min = now.getMinutes();
        var mid = 'pm';
        
        if (min < 10) min = '0' + min;

        if (hour > 12) hour -= 12;
        if (hour == 0) hour = 12; 

        if (TwentyFourHour < 12) mid = 'am';

        // update text in html
        $('.time').text( `${hour}:${min + mid}` );
        setTimeout(Utils.runClock, 1000);
    }
};