$(document).ready(function() {

    //main Animate css funciton 
    $.fn.extend({
        animateCss: function(animationName) {
            var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
            this.addClass('animated ' + animationName).one(animationEnd, function() {
                $(this).removeClass('animated ' + animationName);
            });
        }
    });

    //inject Audio function 
    let InjectAudio = (audio) => {
        $("<audio></audio>").attr({
            'src': 'assets/audio/' + audio,
            'volume': 0.2,
            'autoplay': 'autoplay'
        }).appendTo("body");

    }

    //function that makes shure that there is something in the input box
    let burger = $('#burger');
    $('#addBurger').prop('disabled', true);
    burger.keyup(() => {

        if (burger.val() != '') {
            $('#addBurger').prop('disabled', false);
        }

    });
    //destroy button

    $(document).on('click', '#sendBack', () => {
            console.log('hello')
            InjectAudio('ramsey.mp3')
        })
        // eat burger 
    $(document).on('click', '#eatBurger', () => {
        console.log('hello')
        InjectAudio('delicious.mp3')
    })



    // animation on order Burger button
    $('#addBurger').on('click', () => {
        $('#addBurger').animateCss('shake');
        InjectAudio('ticket.mp3')

    });




    // if (burger == '') {

    //     $('#addBurger').attr("disabled", true);
    // } else {

    //     $('#addBurger').removeAttr()
    // }


});