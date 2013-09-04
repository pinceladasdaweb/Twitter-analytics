/*
--------------------------------
Twitter analytics - Tracking Twitter Buttons in Google Analytics
--------------------------------
+ https://github.com/pinceladasdaweb/Twitter-analytics
+ version 1.0
+ Copyright 2013 Pedro Rogerio
+ Licensed under the MIT license

+ Documentation: https://github.com/pinceladasdaweb/Twitter-analytics
*/
var TrackTwitter = function () {
    'use strict';

    var analytics = function (eventType, label) {
        return _gaq.push(['_trackEvent', 'Twitter Intents', eventType, label]);
    };

    var clickEvent = function (e) {
        if (!e) return;
        var label = e.region;
        analytics(e.type, label);
    };

    var tweetEvent = function (e) {
        if (!e) return;
        var label = "Tweet";
        analytics(e.type, label);
    };

    var retweetEvent = function (e) {
        if (!e) return;
        var label = intentEvent.data.source_tweet_id;
        analytics(e.type, label);
    };

    var favoriteEvent = function (e) {
        if (!e) return;
        var label = "Favorite";
        _gaq.push(['_trackEvent', 'Twitter Intents', e.type, label]);
    };

    var followEvent = function (e) {
        if (!e) return;
        var label = e.data.user_id + " (" + e.data.screen_name + ")";
        analytics(e.type, label);
    };

    return {
        click: clickEvent,
        tweet: tweetEvent,
        retweet: retweetEvent,
        favorite: favoriteEvent,
        follow: followEvent
    };
}();

twttr.ready(function (twttr) {
    twttr.events.bind('click', TrackTwitter.click);
    twttr.events.bind('tweet', TrackTwitter.tweet);
    twttr.events.bind('retweet', TrackTwitter.retweetEvent);
    twttr.events.bind('favorite', TrackTwitter.favoriteEvent);
    twttr.events.bind('follow', TrackTwitter.followEvent);
});