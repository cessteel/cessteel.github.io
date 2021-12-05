var footer_links_blocks = document.querySelectorAll("footer .top_footer ._block");
var footer_links = document.querySelectorAll("footer .top_footer ._block h1");
var footer_open_but = document.querySelectorAll("footer .top_footer ._block h1 img");

var burger_menu = document.querySelector('.burger_menu');
var mobile_menu = document.querySelector('.mobile_menu');
var quit = document.querySelector('.mobile_menu .quit');

var block_1 = document.querySelector('.block-1');
var blocks_block_1 = document.querySelectorAll('.block-1 ._blocks ._block');

var block_2 = document.querySelector('.block-2');
var heading_block_2 = document.querySelector('.block-2 ._content .heading');
var discription_block_2 = document.querySelector('.block-2 ._content .discription');
var background_block_2 = document.querySelector('.block-2 .background');

var block_3 = document.querySelector('.block-3');
var content_block_3 = document.querySelector('.block-3 ._content');

var block_4 = document.querySelector('.block-4');
var heading_block_4 = document.querySelector('.block-4 ._content .heading h1');
var line_block_4 = document.querySelector('.block-4 ._content .heading .block_line ._line');
var block_line_block_4 = document.querySelector('.block-4 ._content .heading .block_line');
var blocks_block_4 = document.querySelectorAll('.block-4 ._content ._blocks ._block');
var obj_parallax = document.querySelector('.block-4 ._content .heading .decor-2');
var obj_right_block_4 = document.querySelector('.block-4 ._content .heading .decor-1');

var block_5 = document.querySelector('.block-5');
var decor_block_5 = document.querySelector('.block-5 .decor-1');
var content_block_5 = document.querySelector('.block-5 ._content');

var block_6 = document.querySelector('.block-6');
var but_more_answer = document.querySelector('.block-6 ._content .button');
var answer = document.querySelectorAll('.block-6 ._content .questions .q');
var but_open_answer = document.querySelectorAll('.block-6 ._content .questions .q ._heading img');

var block_7 = document.querySelector('.block-7');
var comments_block_7 = document.querySelectorAll('.block-7 ._content .comments .comment');

new Swiper('.block-3 ._content', {
    navigation: {
        nextEl: '.block-3 ._content .ctrl_right',
        prevEl: '.block-3 ._content .ctrl_left'
    },
    slidesPerView: 'auto',
    centeredSlides: true
});
new Swiper('.block-5 ._content .container_bio', {
    navigation: {
        nextEl: '.block-5 ._content .container_bio .ctrl_right',
        prevEl: '.block-5 ._content .container_bio .ctrl_left'
    },
    slidesPerView: 1,
    virtualTranslate: true,
    effect: 'fade',
    loop: true
});


function openAnswer(number, version){
    if(version==1){
    number.onclick = function(){
        for(var i = 0; i<4; i++){
            if(i==number.dataset.index) continue
            answer[i].classList.remove('_open');
            but_open_answer[i].classList.remove('_active');
        }

        answer[number.dataset.index].classList.toggle('_open');
        number.classList.toggle('_active');
    }
}

if(version==2){number.onclick = function(){mobile_menu.classList.toggle('_active')}}

if(version==3){number.onclick = function(){
    for(var i = 0; i<5; i++){
        if(i==number.dataset.index) continue
        footer_links_blocks[i].classList.remove('_open');
        footer_open_but[i].classList.remove('_active');
    }

    footer_links_blocks[number.dataset.index].classList.toggle('_open');
    number.querySelector('img').classList.toggle('_active');
    
}}
}

function showBlocks(block, zone_block, version){
    if(block.getBoundingClientRect().top <= zone_block){
        switch (version) {
            case 1:
                blocks_block_1[0].style.animation = "showBlocksBlock1 0.5s 0s 1 forwards";
                blocks_block_1[1].style.animation = "showBlocksBlock1 0.5s 0.1s 1 forwards";
                blocks_block_1[2].style.animation = "showBlocksBlock1 0.5s 0.2s 1 forwards";
                break;

            case 2:
                heading_block_2.style.animation = "easeOutElastic 1.5s 0s 1 forwards";
                discription_block_2.style.animation = "easeOutElastic 1.5s 0.2s 1 forwards";
                heading_block_2.style.opacity = "1";
                discription_block_2.style.opacity = "1";
                background_block_2.style.animation = "showMainWindow 0.5s 0.4s 1 forwards";
            break;
            case 3:
                content_block_3.style.animation = "emersionBottom 1s 0s 1 forwards";
            break;
            case 4:
                heading_block_4.style.animation = "showBlocksBlock1 0.5s 0s 1 forwards";
                line_block_4.style.animation = "lineFromBlock4 1s 0s 2 forwards";
                block_line_block_4.style.animation = "showBlocksBlock1 0.5s 0s 1 forwards";
                content_block_3.style.animation = "emersionBottom 1s 0s 1 forwards";
                blocks_block_4[0].style.animation = "emersionBottom 1s 0.1s 1 forwards";
                blocks_block_4[1].style.animation = "emersionBottom 1s 0.2s 1 forwards";
                blocks_block_4[2].style.animation = "emersionBottom 1s 0.3s 1 forwards";
                obj_right_block_4.style.right = 0;
                obj_right_block_4.style.opacity = 1;
                
            break;
            case 5:
                decor_block_5.style.left = "0";
                content_block_5.style.animation = "showBlocksBlock1 0.5s 0s 1 forwards";
            break;
            case 6:
                for (let i = 0; i < answer.length; i++) {
                    answer[i].style.animation = "animQuestions .5s 0s 1 forwards";
                    setTimeout(() => {
                        but_more_answer.style.opacity = "1";
                    }, 500)
                }
            break;
            case 7:
                comments_block_7[0].style.opacity = "1";
                setTimeout(() => {
                    comments_block_7[1].style.opacity = "1";
                }, 200)
                setTimeout(() => {
                    comments_block_7[2].style.opacity = "1";
                }, 400)
            break;
        
            default:
                break;
        }

    }
}
function parallaxEffect(obj, value){
    obj.style.transform = 'translateY('+value+'px)';
}

window.addEventListener('scroll', function() {

    parallaxEffect(obj_parallax, -((this.pageYOffset*19)/50)+900);
    
    showBlocks(block_1, 500, 1);
    showBlocks(block_2, 400, 2);
    showBlocks(block_3, 500, 3);
    showBlocks(block_4, 500, 4);
    showBlocks(block_5, 500, 5);
    showBlocks(block_6, 400, 6);
    showBlocks(block_7, 400, 7);

  });

openAnswer(but_open_answer[0], 1);
openAnswer(but_open_answer[1], 1);
openAnswer(but_open_answer[2], 1);
openAnswer(but_open_answer[3], 1);
openAnswer(burger_menu, 2);
openAnswer(quit, 2);
openAnswer(footer_links[0], 3);
openAnswer(footer_links[1], 3);
openAnswer(footer_links[2], 3);
openAnswer(footer_links[3], 3);
openAnswer(footer_links[4], 3);
