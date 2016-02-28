
ele = document.getElementById('mode');
ele.onchange = function (){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, document.getElementById('mode').checked, function(response) {
            console.log(response.farewell);
        });
    });
};