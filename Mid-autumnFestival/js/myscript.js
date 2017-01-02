var mySwiper = new Swiper ('.swiper-container', {	
	direction: 'vertical',
	loop: false,

	// 如果需要前进后退按钮
	nextButton: '.swiper-button-next',
	prevButton: '.swiper-button-prev',


	onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
    	swiperAnimateCache(swiper); //隐藏动画元素 
    	swiperAnimate(swiper); //初始化完成开始动画
	}, 
    onSlideChangeEnd: function(swiper){ 
   		swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
    }, 
})    
var music=document.getElementById('music');
var audio=document.getElementsByTagName('audio')[0];   
music.addEventListener('touchstart',function(){
	if(audio.paused){
		audio.play();
		this.setAttribute('class','play');
		this.style.backgroundImage='url(./img/play.png)';
	}else{
		audio.pause();
		this.setAttribute('class','');
		this.style.backgroundImage='url(./img/pause.png)';
	}
},false);