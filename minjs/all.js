!function(){for(var o,n=function(){},e=["assert","clear","count","debug","dir","dirxml","error","exception","group","groupCollapsed","groupEnd","info","log","markTimeline","profile","profileEnd","table","time","timeEnd","timeline","timelineEnd","timeStamp","trace","warn"],i=e.length,t=window.console=window.console||{};i--;)o=e[i],t[o]||(t[o]=n)}(),window.location.hash&&scroll(0,0),setTimeout(function(){scroll(0,0)},1),$(function(){var o=$("#nav").height();$(".scroll").on("click",function(n){n.preventDefault(),$("html, body").animate({scrollTop:$($(this).attr("href")).offset().top-o},1e3,"swing")}),window.location.hash&&$("html, body").animate({scrollTop:$(window.location.hash).offset().top-o},1e3,"swing")});