//firefox
url="http://127.0.0.1:9000"
function sendBookMarkToServer() {
    chrome.bookmarks.getSubTree("toolbar_____", (res) => {
        $.ajax({
            url: url,
            method: "post",
            data: {
                'allBookMark': JSON.stringify(res[0]),
            },
            success: function (d) {
                console.log(d)
            }
        })
    })
}

function createBookmarkFromServer() {
    $.ajax({
        url: url,
        method: "get",
        success: function (d) {
            let toolbarList;
            if (d != null || d !== ''&&d!=="{}") {
                toolbarList = JSON.parse(d).children;
                console.log('toolbarList:', toolbarList);
                createAll(toolbarList)
            }
        }
    })
}

function createAll(children, parentId = "toolbar_____") {
    for (let i = 0; i < children.length; i++) {
        if (isFolder(children[i])) {
            chrome.bookmarks.create({
                parentId: parentId,
                title: children[i].title,
            }, (res) => {
                createAll(children[i].children, res.id)
            })
        } else {
            chrome.bookmarks.create({
                parentId: parentId,
                title: children[i].title,
                url: ('url' in children[i]) ? children[i].url : null
            }, (res) => {
            })
        }
    }
}

function isFolder(node) {
    return !('url' in node) && node.children.length > 0;
}
// createBookmarkFromServer()
// delAll()
function delAll() {
    chrome.bookmarks.getSubTree("toolbar_____", (res) => {
        let children = res[0].children;
        if(children.length<=0){
            return
        }
        // del(children)
        for (let i = 0; i <children.length ; i++) {
            chrome.bookmarks.removeTree(children[i].id, (res) => {
                console.log(res);
            })
        }
    })
}
