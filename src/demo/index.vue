<template>
  <div class="desktop">
    <canvas ref="canvas"></canvas>

    <div class="wrapper">
      <img :class="['animated' , {fadeInDown:show}]" src="../img/logo-desktop.png" ref="imgs">
      <h1>IVER</h1>
      <p>ui components for VUE2.0</p>
      <nav>
        <a :class="['animated' , {fadeInUp:nav[0].show}]" href="#/demo/demo">demo</a>
        <a :class="['animated' , {fadeInUp:nav[1].show}]" href="https://jlianphoto.github.io/iver/#/">docs</a>
        <a :class="['animated' , {fadeInUp:nav[2].show}]" href="https://github.com/jlianphoto/iver">github</a>
      </nav>
    </div>
  </div>
</template>


<script type="text/javascript">

export default {
  data(){
    return {
        show : false,
        nav  : [
            {show : false},
            {show : false},
            {show : false}
        ]
    }
  },
  mounted(){

    var canvas = this.$refs.canvas,
        imgs   = this.$refs.imgs;
        imgs.onload = ()=>{
            this.show = true;

            setTimeout(()=> {
                this.nav.forEach(function(item,index){
                    var time = (index+1)*200;
                    setTimeout(()=>{
                        item.show = true;
                    },time)
                })
            }, 50);

        }



    // canvas
    let w = window.innerWidth,
        h = window.innerHeight;

    canvas.width = w;
    canvas.height = h;



    var ctx = canvas.getContext('2d');


    function rand(min, max) {
            return parseInt(Math.random() * (max - min + 1) + min);
        }

        function Round() {
            //随机大小
            this.r = rand(8, 14);
            //随机位置
            var x = rand(0,canvas.width - this.r);//防止超出右边界
            this.x = x<this.r ? this.r:x;
            var y = rand(0,canvas.height - this.r);
            this.y = y<this.r ? this.r:y;
            //随机速度
            var speed = rand(8, 12);
            this.speedX = rand(0, 4) > 2 ? speed : -speed;
            this.speedY = rand(0, 4) > 2 ? speed : -speed;

        }
        Round.prototype.draw = function() {
                    ctx.fillStyle = 'rgba(200,200,200,0.2)';
                    ctx.beginPath();
                    ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI, true);
                    ctx.closePath();
                    ctx.fill();
                }
        Round.prototype.links = function(){
                for (var i=0;i<ballobj.length;i++) {
                    var l = Math.sqrt((ballobj[i].x - this.x)*(ballobj[i].x - this.x)+(ballobj[i].y - this.y)*(ballobj[i].y - this.y));
                    if(l<250){
                    ctx.beginPath();
                    ctx.moveTo(this.x,this.y);
                    ctx.lineTo(ballobj[i].x,ballobj[i].y);
                    ctx.strokeStyle = 'rgba(200,200,200,0.2)';
                    ctx.stroke();
                    ctx.closePath();
                    }
            }
        }
        Round.prototype.move = function() {
                this.x += this.speedX/10;
                if (this.x > canvas.width-this.r  || this.x-this.r < 0) {
                    this.speedX *= -1;
                }
                this.y += this.speedY/10;
                if (this.y > canvas.height-this.r  || this.y-this.r < 0) {
                    this.speedY *= -1;
                }
            }
        var ballobj = [];

        function init() {
            for (var i = 0; i < 5; i++) {
                var obj = new Round();
                obj.draw();
                obj.move();
                ballobj.push(obj);
            }
        }
        init();
        function ballmove(){
            ctx.clearRect(0,0,canvas.width,canvas.height);
            for (var i=0;i<ballobj.length;i++) {
                var ball = ballobj[i];
                ball.draw();
                ball.move();
                ball.links();
            }
            window.requestAnimationFrame(ballmove);
        }
        ballmove();


  }
}
</script>

<style lang="scss" scope>
@import '../scss/_common';
@import '../scss/animate';
.desktop {
    canvas{
        position: fixed;
        top:0;
        left:0;
    }
    .wrapper{
        padding-top:torem(80);
        position: relative;
        z-index: 1;
        width: 70%;
        margin:0 auto;
        text-align:center;
        img{
            opacity: 0;
            width: 50%;
            min-width:torem(140);
            min-height:torem(140);
            margin-bottom:torem(50);
        }
        h1{
            padding:torem(20) 0;
            font-weight:bold;
            position: relative;
            font-size:torem(22);
            color:$white;
            &:after{
                content:"1.0.5";
                font-size:torem(12);
                position: absolute;
                right:torem(74);
                top:torem(10);
                color:$orange;

            }
        }
        p{
            padding-bottom:torem(60);
            color:#addaff;
        }
        nav{
            @include flexbox();
            margin-top:torem(40);
            a{
                opacity: 0;
                @include flex(1);
                color:#90cdff;
                font-size:torem(20);
            }
        }
    }
}

.desktop canvas{
  background-image:-webkit-linear-gradient(to bottom, #0f88eb 70%, #50b0ff); 
  background-image:linear-gradient(to bottom,#0f88eb 70%, #50b0ff);
}

</style>