console.log('hello 董董')

let selectNode = document.querySelector('#select')

selectNode.onchange = function () {
    console.log(this.value)
    let self = this

    chrome.tabs.query({
        active: true,
        currentWindow: true
    }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {
            switch: self.value
        }, function (response) {
            console.log(response);
        });
    });
}