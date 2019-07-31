import Vue from 'vue';


window.onload = function () {
    let hamburger = new Vue({
        el:'#hamburger-menu',
        data:{
            isActive:false
        }
    })
};

window.onload = function(){
    let header =  new Vue({
        el:'#header',
        data:{
            isActive: false
        }
    })
}

