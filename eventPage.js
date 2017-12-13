chrome.runtime.onMessage.addListener(
    function(arg, sender, sendResponse) {
        var args = arg.collection;
        for (i in args) {
            var img_url = args[i];
            try {
                var imgExt = img_url.substring(img_url.lastIndexOf("."));
                saveas = "clickSaver-" + imgExt;
            } catch (problem) {}

            chrome.downloads.download({
                url: img_url,
                filename: saveas,
                saveAs: true
            });
        }
    });

function sendResponse() {}