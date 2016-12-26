/**
 * author:Believel
 * date:2016/10/10
 *  实现思路：
 * 1.传入相应的参数，然后和默认的参数合并成一个对象
 * 2.开始遍历当前所有的容器，找到当前的元素，和孩子元素，子孙元素
 * 3.注册鼠标移动事件，处理相应的功能。
 */
;(function($){
$.fn.accordion = function(options){
  var defaults = {
    maxWidth:'620px',
    minWidth:'140px',
    lazyload:true,
    speed:'1000'
  };
  var opts = $.extend(defaults,options);
  $(this).each(function(){
      var t = $(this),
          m = t.children(),//ul
          c = m.children();// li
          //初始化
          m.find('.active a').hide();
          c.on('mouseenter',function(){
            if(opts.lazyload==true && typeof($(this).attr('data-src'))!=='undefined'){
                var src = $(this).attr('data-src');
                $(this).css('background-image',"url("+src+")").removeAttr('data-src');
            }
            $(this).addClass('active')
                   .animate({width:opts.maxWidth},opts.speed)
                   .children().fadeOut(opts.speed)
                   .parent().siblings().removeClass('active')
                   .animate({width:opts.minWidth},opts.speed)
                   .children().show(opts.speed)
          })
  })
}

})(jQuery)
