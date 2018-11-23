chrome.contextMenus.create({
    title: '百度搜索：%s',
    contexts: ['selection'],
    onclick: function(info, tab) {
        chrome.tabs.create({url: 'https://www.baidu.com/s?wd=' + encodeURI(info.selectionText)});
    }
}, function() {
    console.log(chrome.extension.lastError);
})
