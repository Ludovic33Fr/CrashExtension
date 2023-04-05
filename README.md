# Cds-AdsFake

Enable to test injection js with Chrome extension. 


## Usage

Enable to display fake ads. It helps to test hijacking js


#### Bookmarklet

So simple, you have only to add the bookmarklet below to your bookmarks bar.

```javascript
javascript:(function(){var el=document.createElement('script');el.src='https://gitlab.cshield.io/xperf/cds-adsfake/-/raw/master/adsFake.js';document.body.appendChild(el);})();
```

#### Setup for test

This extension is not public. If you want to use this extension, we have to : 
- git clone locally
- go to manage extension
- click on "load unpackaged extension""# CrashExtension" 
