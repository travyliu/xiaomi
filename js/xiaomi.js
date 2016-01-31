$(function(){
//banner轮播	
	var imgs=$(".tupian img");
	var btn=$(".banner-right li");
	var index=0;
	function demo(type){
		if(type=="r"){
			index++;
			if(index>=imgs.length){
				index=0;
			}
		}
		if(type=="l"){
			index--;
			if(index<=-1){
				index=imgs.length-1;
			}
		}
		imgs.hide();
	    imgs.eq(index).fadeIn();

		btn.css({background:"#ccc"});
		btn.eq(index).css({background:"#333"});
	}
	var t=setInterval(function(){
		demo("r");},4000);
	$(".tupian").hover(function(){
		clearInterval(t);
	},function(){t=setInterval(function(){
		demo("r");},2000);});
	$(".bannerbtnleft").click(function(){demo("l")});
	$(".bannerbtnright").click(function(){demo("r")});
	$(btn).hover(function(){
		var now=$(this).index();
		$(btn).css({background:"#ccc"})
        $(this).css({background:"#333"});
        imgs.hide();
        imgs.eq(now).fadeIn();
        index=now;
	},function(){

	});
//下拉框效果
	$(".xialalist1").hover(function(){
		 $(".xiala").stop();
         $(".xiala").slideDown();
         /*var now=$(this).index();
		 $(btn).css({background:"#ccc"})
         $(this).css({background:"#333"});
         imgs.hide();
         imgs.eq(now).fadeIn();
         index=now;*/
     },function(){
        
		$(".xiala").slideUp();
     });
	$(".xiala").hover(function(){
		$(this).stop();
	},function(){
		
		$(this).slideUp();
	});

//搜索框效果
	$(".sousuolan").focusin(function(){
		$(".shouhuan").css("display","none");
		$(this).css({border:"1px solid #ff6700"});
		$(this).find(".sousuokuang").css({borderRight:"1px solid #ff6700"});
		$(".keyword").css("display","block");
	})
	$(".sousuolan").focusout(function(){
		
		$(".shouhuan").css("display","block");
		$(this).css({border:"1px solid #e0e0e0"});
		$(this).find(".sousuokuang").css({borderRight:"1px solid #e0e0e0"});
		$(".keyword").css("display","none");
	});

    var kuohaoleft=$(".kuohaoleft");
    var kuohaoright=$(".kuohaoright");
    var danpingbigbox=$(".danpingbigbox");
    var flag=true;  
   function move(){
     if(flag){
     	
    danpingbigbox.animate({left:-1226},600);
    kuohaoright.css({color:"#B0B0B0"});
    kuohaoleft.css({color:"#757575"});
    flag=false;
    }else{
      danpingbigbox.animate({left:0},600);
      kuohaoleft.css({color:"#B0B0B0"});
      kuohaoright.css({color:"#757575"});
    }
    };
    var s=setInterval(move,5000);
    kuohaoleft.hover(function(){
    	clearInterval(s);
    	$(this).css({color:"#ff6700"});
    },function(){setInterval(move,5000);
    	kuohaoleft.css({color:"#B0B0B0"})});
    kuohaoright.hover(function(){
    	clearInterval(s);
    	$(this).css({color:"#ff6700"})},function(){
    		setInterval(move,5000);
    		kuohaoright.css({color:"#B0B0B0"})}
    )
    
    kuohaoleft.click(function(){
    	danpingbigbox.animate({left:0},600);
    	kuohaoright.css({color:"#757575"});
    })
    kuohaoright.click(function(){
    	danpingbigbox.animate({left:-1226},600);
    	kuohaoleft.css({color:"#757575"});
    })
})