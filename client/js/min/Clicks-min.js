var Clicks={};Clicks.cursors=[],Clicks.docReady=function(){$("body").click(function(c){console.log("logging click"),socket.emit("log",{entry:{type:"click",date:new Date,pos:{x:c.pageX,y:c.pageY}}}),window.setTimeout(function(){Clicks.updateClicks()},100)}),socket.on("sendClicks",Clicks.receiveClicks),Clicks.Vue=new Vue({el:"#clicks",data:{cursors:Clicks.cursors}}),Clicks.updateClicks()},Clicks.updateClicks=function(){socket.emit("getClicks",{})},Clicks.receiveClicks=function(c){Clicks.Vue.cursors=c.cursors};