[Twitter analytics](https://github.com/pinceladasdaweb/Twitter-analytics)
=================

Tracking Twitter Buttons in Google Analytics

##Usage

1. Paste right before your page's closing `</body>` tag
```html
<script>
    window.twttr = (function (d,s,id) {
        var t, js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return; js=d.createElement(s); js.id=id;
        js.src="https://platform.twitter.com/widgets.js"; fjs.parentNode.insertBefore(js, fjs);
        return window.twttr || (t = { _e: [], ready: function(f){ t._e.push(f) } });
    }(document, "script", "twitter-wjs"));
</script>
<script>
    var _gaq = [['_setAccount', 'UA-XXXXXX-X'], ['_trackPageview']]; // UA-XXXXXX-X - Your Google Analytics ID
    (function(d) {
    var g = d.createElement('script'),
        s = d.scripts[0];
    g.src = '//www.google-analytics.com/ga.js';
    s.parentNode.insertBefore(g, s);
    }(document));
</script>
```

2. Call the Twitter Analytics JS file
```javascript
<script src="twitter-analytics.js"></script>
```

All of this allows you to gauge the effectiveness and utility of Twitter buttons on your site. The results will show up within Google Analytics under Traffic Sources > Social > Social Plugins.