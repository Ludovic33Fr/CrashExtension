// User has navigated to a new URL in a tab
chrome.tabs.onUpdated.addListener ((tabId, changeInfo, tab) => {
  if (
    changeInfo.status == 'loading' &&
    tab.url.startsWith ('http') &&
    tab.active
  ) {

    InjectBanner(tabId);
    InjectFixedBanner(tabId);
    InjectFloatingBanner(tabId);
    InjectImage(tabId)

  }
});

function InjectBanner(tabId) {
  console.log("Start to watch to inject")
  chrome.storage.sync.get (['activateBanner'], function (obj) {
    if (obj.activateBanner == true) {
      chrome.scripting.executeScript(
          {
            target: {tabId: tabId},
            files: ['InjectBannerTop.js'],
          },null);
    }
  });
}

function InjectFixedBanner(tabId) {
  chrome.storage.sync.get (['activateFixedBanner'], function (obj) {
    if (obj.activateFixedBanner == true) {
      chrome.scripting.executeScript(
          {
            target: {tabId: tabId},
            files: ['InjectBannerTopFixed.js'],
          },null);
    }
  });
}

function InjectFloatingBanner(tabId) {
  chrome.storage.sync.get (['activateFloatingBanner'], function (obj) {
    if (obj.activateFloatingBanner == true) {
      chrome.scripting.executeScript(
          {
            target: {tabId: tabId},
            files: ['InjectBannerFloating.js'],
          },null);
    }
  });
}

function InjectImage(tabId) {
  chrome.storage.sync.get (['activateImage'], function (obj) {
    if (obj.activateImage == true) {
      chrome.scripting.executeScript(
          {
            target: {tabId: tabId},
            files: ['InjectImage.js'],
          },null);
    }
  });
}
