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

            InjectAudio('ramsey.mp3')
        })
        // eat burger 
    $(document).on('click', '#eatBurger', () => {

        InjectAudio('delicious.mp3')
    })



    // animation on order Burger button
    $('#addBurger').on('click', () => {
        $('#addBurger').animateCss('shake');
        InjectAudio('ticket.mp3')

    });



    $('.wasted').each(function() {
        // console.log($(this))
        $(this).animateCss('flipInY');
    })


    $('.devoured').each(function(element) {

        var elementToUpdate = $(this)
        SetBackground(element, function(data) {
            // console.log(data)
            elementToUpdate.css("background-image", `url('${data}')`)
        })

    })



});


//main AJAX call
function SetBackground(div, cb) {
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=ramsay%chef/&api_key=dc6zaTOxFJmzC&limit=100";
    $.ajax({
        url: queryURL,
        method: 'GET'
    }).done(function(response) {

        // console.log(response.data);
        var random = Math.floor(Math.random() * response.data.length)
            // console.log(random)
            // console.log(response.data[`${random}`].images.original.url)
        var data = response.data[`${random}`].images.original.url
        cb(data)
            // ["0"].images.original.url
            // div.css("background-image", "url(`${response.data[`${random}`].images.original.url}`)");
    });

}