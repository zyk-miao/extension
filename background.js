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

chrome.bookmarks.getTree((res) => {
    console.log(res);
    sendBookMark(res)
})
// setInterval()