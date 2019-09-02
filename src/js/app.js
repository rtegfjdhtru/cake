import Vue from 'vue';
import VueObserveVisibility from 'vue-observe-visibility'

Vue.use(VueObserveVisibility)

//スクロールのカスタムディレクティブ
Vue.directive('scroll', {
    inserted: function (el, binding) {
        let f = function (evt) {
            if (binding.value(evt, el)) {
                window.removeEventListener('scroll', f);
            }
        };
        window.addEventListener('scroll', f);
    },
});


window.onload = function () {
    let hamburger = new Vue({
        el: '#hamburger-menu',
        data: {
            isActive: false
        }
    })
};

window.onload = function () {
    let heroHeigth = document.getElementById("hero");
    let header = new Vue({
        el: '#header',
        data: {
            isActive: false,
            scrollY: 0,
            timer: null,
            heightString: heroHeigth.clientHeight
        },
        created: function () {
            window.addEventListener('scroll', this.handleScroll)
        },
        beforeDestroy: function () {
            window.removeEventListener('scroll', this.handleScroll)
        },
        methods: {
            handleScroll: function () {
                if (this.timer === null) {
                    this.timer = setTimeout(function () {
                        this.scrollY = window.scrollY;
                        clearTimeout(this.timer);
                        this.timer = null
                    }.bind(this), 200)
                }
            },
        }
    })
}


let heightString = document.getElementById('vue--scroll-img');
heightString = heightString.scrollHeight;
new Vue({

    el: "#first",
    data: {
        show: false,
        heightString: heightString

    },
    methods: {
        handleScroll: function () {
            if (window.scrollY > heightString) {
                this.show = true
            } else {
                this.show = false
            }
        }
    }

})
let windowSize = window.innerHeight;
let menu = document.querySelector('.js-menu-height');
menu = menu.offsetTop - windowSize
new Vue({
    el: '#second',
    data: {
        isVisible01: false,
        isVisible02: false,
        isVisible03: false,
        show: false,
        menu: menu,
        'js-active': true,
        scrollY: window.scrollY,
    },
     methods: {
         visibilityChanged01(isVisible01, entry) {
             this.isVisible01 = isVisible01
         },
         visibilityChanged02(isVisible02, entry) {
             this.isVisible02 = isVisible02
         },
         visibilityChanged03(isVisible03, entry) {
             this.isVisible03 = isVisible03
         }

     }

})


Vue.component('menu-component', {
    props: ['menu'],
    data: function () {
        return {
            img: '',
            show: true,
            scrollY: window.scrollY,
        }
    },


    template: `
     <div class="u-menu-padding-top"  :class="menu.direction">
     <transition name="menu.anime">
                <img :src=menu.img alt="メニューの写真" class="u-img-size--menu js-img" v-if="show">
                </transition>
                
               
                <div class="text-container">
                    <h3 class="u-menu__text--h3">{{menu.title}}</h3>
                    <p>{{menu.sbTitle}}</p>
                    <div class="u-menu__text--description u-menu-padding-top"> 
                    <span v-html="menu.text"></span>
                    <p>{{menu.money}}円</p>
                    </div>
                     
                </div>
            </div>
    `

})


new Vue({
    el: '#second2',
    data: {
        menus: [
            {
                id: 1,
                direction: 'c-container__menu--left',
                anime:'menu--img--left',
                img: 'img/cake-1850011_1280.jpg',
                title: '超濃厚チョコレートケーキ',
                sbTitle: 'Super rich chocolate cake',
                text: 'ガーナで生産されたカカオを使ったとても濃厚なチョコレートケーキ</br>' +
                    '一口いれたらやみつきになる一品です',
                money: '700',

            },
            {
                id: 2,
                direction: 'c-container__menu--left',
                img: 'img/cupcakes-690040_1280.jpg',
                title: '超濃厚ホワイトチョコレートケーキ',
                sbTitle: 'Super rich white chocolate cake',
                text: 'ほどよい甘さがくせになる絶妙な一品<br/>' + 'コーヒと合わせてお召し上がりください。',
                money: '700'
            }
            ,
            {
                id: 3,
                direction: 'c-container__menu--left',
                img: 'img/coffee-4313336_1280.jpg',
                // visibilityChanged: 'visibilityChanged03',
                title: 'ブルーマウンテンコーヒ',
                sbTitle: 'Blue mountain coffee',
                text:
                    'ジャマイカのブルーマウンテンで取れた厳選された豆を使用<br/>' +
                    '                        幸福なひとときをあなたに...',
                money: '500'
            },


        ],

    },


})

new Vue({
    el:'#third',
    data:{
    }

})