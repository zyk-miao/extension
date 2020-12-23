$.ajax({
    url:"http://127.0.0.1:8001",
    method:"get",
    success:function (){
        console.log("aaaaa")
    }
})
// chrome.extension.onMessage.addListener(function(objRequest, _, sendResponse){
//     var strText = objRequest.txt;
//     // 将信息能过Ajax发送到服务器
//     $.ajax({
//         url: 'http://127.0.0.1:8001',
//         type: 'get',
//         data: {'txt': strText},
//         dataType: 'json',
//     }).then(function(){
//         // 将正确信息返回content_script
//         sendResponse({'status': 200});
//     }, function(){
//         // 将错误信息返回content_script
//         sendResponse({'status': 500});
//     });
// });