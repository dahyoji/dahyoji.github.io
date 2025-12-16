$(function () {

    const tl = gsap.timeline();

    tl
        .from({}, {})
        .from('.intro h2', { y: 100, opacity: 0 })
        .from('.intro p', { y: 100, opacity: 0 })
        // .from('.intro span', { width: 0, duration: 2 })
        //.from('.intro em', { opacity: 0 })


    // gsap.to('.intro h2', { y: 100, duration: 2 })
    // gsap.from('.intro h2', { y: 100, })
    // gsap.from('.intro p', { y: 100, delay: 1 })


    $('.wrapper').fullpage({
        anchors: ['intro', 'portfolio01', 'portfolio02', 'portfolio03', 'portfolio04', 'portfolio05', 'training', 'profile'],
        fixedElements: '#header, #footer',

        afterLoad: function (_, idx) {
            $('#footer .gnb>ul>li').removeClass('on');
            $('#footer .gnb>ul>li').eq(idx - 1).addClass('on');

            $('.section').removeClass('on');
            $('.section').eq(idx - 1).addClass('on');

        },


        onLeave: function (_, idx, d) {

            // 첫 화면에 왔을 때 애니메이션 다시 재생하기

            if (idx == 1) {
                tl.restart();
            }
        }
    });

    $('#footer .cover_btn').on('click', function () {
        $(this).toggleClass('on');
        $('#footer .cover').toggleClass('on');
    })

    $('#footer .cover ul>li>a').on('click', function () {
        $('#footer .cover_btn').removeClass('on');
        $('#footer .cover').removeClass('on');
    })
    $('#footer .cover').on('wheel', function (e) {
        e.stopPropagation();

    });
});