$(function(){
    $("#button").click(function(){
        console.log("bbb")
        chrome.extension.sendMessage({'txt': '这里是发送的内容'}, function(d){
            console.log(d); // 将返回信息打印到控制台里
        });
    });
})