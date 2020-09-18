        //圖片輪播動畫
        $(document).on('ready', function () {
            $(".single-item").slick({
                dots: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 3500,
                arrows: true,
            })
        })
        //其他動畫
        $(function () {
            //語言列動畫
            $('.langbot').click(function () {
                $('main ul').toggleClass('langlist')
            })
            $('.t1').click(function () {
                $('article').attr('class', 'lang1')
                $('.mainlang').text("繁體中文")
            })
            $('.t2').click(function () {
                $('article').attr('class', 'lang2')
                $('.mainlang').text("English")
            })
            $('.t3').click(function () {
                $('article').attr('class', 'lang3')
                $('.mainlang').text("简体中文")
            })
            //上選單動畫
            $('.li1').click(function () {
                $('header ul').attr('class', 'visited1')
            })
            $('.li2').click(function () {
                $('header ul').attr('class', 'visited2')
            })
            $('.li3').click(function () {
                $('header ul').attr('class', 'visited3')
            })
            $('.li4').click(function () {
                $('header ul').attr('class', 'visited4')
            })
            $('.li5').click(function () {
                $('header ul').attr('class', 'visited5')
            })
            $('.li6').click(function () {
                $('header ul').attr('class', 'visited6')
            })
            $('.li7').click(function () {
                $('header ul').attr('class', 'visited7')
            })
            //下選單動畫
            $('.son1 a').hover(function () {
                $('.mom').toggleClass('hidden1')
            })
            $('.son2 a').hover(function () {
                $('.mom').toggleClass('hidden2')
            })
            $('.son3 a').hover(function () {
                $('.mom').toggleClass('hidden3')
            })
            $('.son4 a').hover(function () {
                $('.mom').toggleClass('hidden4')
            })
            $('.son5 a').hover(function () {
                $('.mom').toggleClass('hidden5')
            })
            $('.son6 a').hover(function () {
                $('.mom').toggleClass('hidden6')
            })
            //footer選單動畫
            $('.fli1').click(function () {
                $('footer ul').attr('class', 'visited1')
            })
            $('.fli2').click(function () {
                $('footer ul').attr('class', 'visited2')
            })
            $('.fli3').click(function () {
                $('footer ul').attr('class', 'visited3')
            })
            $('.fli4').click(function () {
                $('footer ul').attr('class', 'visited4')
            })
            $('.fli5').click(function () {
                $('footer ul').attr('class', 'visited5')
            })
            $('.fli6').click(function () {
                $('footer ul').attr('class', 'visited6')
            })
            $('.fli7').click(function () {
                $('footer ul').attr('class', 'visited7')
            })
        })