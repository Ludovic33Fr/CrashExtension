// Banner TOP
let chboxActiveBanner = document.getElementById('activateBanner');
chboxActiveBanner.onclick = setRememberBanner;
chrome.storage.sync.get(['activateBanner'], function(obj) {
    chboxActiveBanner.checked = obj.activateBanner
});
function setRememberBanner() {
    console.log("test ludo");
    const payload = {
        activateBanner: chboxActiveBanner.checked ? true: false
      }
    chrome.storage.sync.set(payload);
}

// Load a big image
let chboxActiveImage = document.getElementById('activateImage');
chboxActiveImage.onclick = setRememberImage;
chrome.storage.sync.get(['activateImage'], function(obj) {
    chboxActiveImage.checked = obj.activateImage
});
function setRememberImage() {
    const payload = {
        activateImage: chboxActiveImage.checked ? true: false
      }
    chrome.storage.sync.set(payload);
}

