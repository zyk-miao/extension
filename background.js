function sendBookMark(allBookMark) {
    $.ajax({
        url: "http://127.0.0.1:8002",
        method: "post",
        data: {
            'allBookMark': JSON.stringify(allBookMark),
        },
        success: function (d) {
            console.log(d)
        }
    })
}
//
chrome.bookmarks.getTree((res) => {
    console.log(res);
    sendBookMark(res)
})
chrome.bookmarks.getTree(function (){

})
// setInterval()
// chrome.bookmarks.create({
//     parentId: "toolbar_____",
//     title: " MDN",
//     // url: "https://developer.mozilla.org/Add-ons/WebExtensions/API/bookmarks/create"
//
// }, (res) => {
//     console.log(res);
// })
chrome.bookmarks.create({
    parentId: "1",
    title: " MDN",
    // url: "https://developer.mozilla.org/Add-ons/WebExtensions/API/bookmarks/create"

}, (res) => {
    console.log(res);
})
