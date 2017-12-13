function getHtml() {
    var url = window.location.pathname;

    var fileName = url.substring(url.lastIndexOf('.') + 1);
    var fileExtName = ["jpg", "png", "jpeg"];

    if (fileExtName.indexOf(fileName) >= 0) {

        var pagehtml = document.documentElement;
        var imgs = pagehtml.getElementsByTagName('img');
        var pass_array = [];
        for (i in imgs) {
            pass_array.push(imgs[i]["currentSrc"]);
        }
        console.log(pass_array);
        var param = { collection: pass_array };
        chrome.runtime.sendMessage(param);

    }

};
getHtml();