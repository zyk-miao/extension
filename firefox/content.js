$(function(){
    $("#button").click(function(){
        console.log("bbb")
        chrome.bookmarks.getTree((res) => {
            console.log(res);
        })
    });
})