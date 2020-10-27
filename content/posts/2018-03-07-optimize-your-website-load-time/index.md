---
title: Optimize your Website Load Time up to 2s Under Slow 3G
author: Teno Siswono
date: 2018-03-07
hero: ./images/hero.jpg
excerpt: In order to answer the WWWIDChallenge, I try to create web that has performance below 5s. In order to achieve that standard, there is a few trick and tips to do it.
---


## 📕Frameworks and Libraries

What framework should I need to use? This is the first think that we need to decide. Have more frameworks and libraries in your web the slowest your load time, since the framework and libraries will increase your application size. So in this challenge I plan to use **no framework** which is I will use **Vanilla Javascript**. But in this Vanilla Javascript I’ll use **Web Component** standard to achieve encapsulation and component based architecture.

## 🔗Web Component
> *Web components are a set of web platform APIs that allow you to create new custom, reusable, encapsulated HTML tags to use in web pages and web apps. Custom components and widgets build on the Web Component standards, will work across modern browsers, and can be used with any JavaScript library or framework that works with HTML. *([https://www.webcomponents.org/introduction](https://www.webcomponents.org/introduction))

With Web Component you can make custom and reusable component just like in modern web frameworks (react, vue, angular, etc). But without additional size for the frameworks. Yet it still need a polyfill for unsupported browser *([https://caniuse.com/#search=web%20component](https://caniuse.com/#search=web%20component)).*

In this challenge I will use the ES6 Class based HTMLElement to create the Web Component. Ofcourse if I do this I’ll need *custom-elements-es5-adapter *and a webpack to build it.

## 📦Webpack 4 and Bundle Size

Webpack 4 is released, and I want to implement it. They claim with Webpack 4 your build time will be faster. But actually is not a priority for me. The most important is to reduce the bundle size. I tried both Webpack 3 and Webpack 4 but there is no size different. Well, it’s better to choose Webpack 4 then, its newer.

In order to analyze our bundle size we need tools like *webpack-bundle-analyzer. *As I said earlier it’s better for you to minimize the need of third party library. In this report view we can see how much our bundle size, and what module which make it big. I we can find another lighter solution it’s better to use the lighter solution. For example in this challenge I use light routing (utilize *popstate *and *anchor click event*), light *unfetch *polyfill, native *Intersection Observer* for image lazy loading and no other unnecessary library.

![*webpack-bundle-analyzer result*](https://cdn-images-1.medium.com/max/3740/1*RV9-6PlNcQxuC11Ad2-x_Q.png)**webpack-bundle-analyzer result**

## 🌏Hosting Provider

Hosting provider play a big role in web performance. Poor hosting provider will lead to slow server response time.

Ofcourse if we want to use own server to host the website we need to use a web server as reverse proxy (I’ll not recommended to direct use of node server). Currently there is some web server that recommended such as *Apache*, *NGINX*, *H2O*, etc. For cloud provider there is a *Heroku*, *Firebase*, *GCP*, *AWS*, *AZURE*, etc. We need to choose server that support at least http/2 and server push.

In this challenge I’ll use *Firebase *as a hosting provider because its fast and there is a lot feature provided by firebase. It support Http/2 and server push too!. Http/2 make your website load faster because its use multiplexing connection. For Server Push I’ll describe in another section in this article.

## 💲Firebase Function

The challenge note that you should use [*https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2Fwwwid](https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2Fwwwid) *to fetch the medium article data. But if we use that url there is a lot disadvantage, we need to perform new connection to another domain and the content that we load its too much if we only view the list item. So I’ll utilize firebase function to recreate the api and use the rewrite functions. So we have same domain api calls that load faster.

## 💨Server Push
> HTTP/2 allows a server to pre-emptively send (or “push”) responses
 (along with corresponding “promised” requests) to a client in
 association with a previous client-initiated request. This can be
 useful when the server knows the client will need to have those
 responses available in order to fully process the response to the
 original request. (RFC7540: [https://tools.ietf.org/html/rfc7540](https://tools.ietf.org/html/rfc7540))

With this Server Push you can cut the load time by sending the required file at the initial request. But it depend on lot of factor, server push can be beneficial and also cannot be beneficial. There is a guide to Server Push when to use it at here [Rules of Thumb for HTTP/2 Push](https://docs.google.com/document/d/1K0NykTXBbbbTlv60t5MyJvXjqKGsCVNYHyLEXIxYMv0/).

The main thing that decide its beneficial is how much the size of your main request, server push only to fill the network idle time. Thats mean the main request size cannot exceeds the Bandwidth-delay Product of target market.

If the main request < (BDP/2), you can save around 1 RTT time.
> In data communications, bandwidth-delay product is the product of a data link’s capacity (in bits per second) and its round-trip delay time (in seconds). (RFC1072: [https://tools.ietf.org/html/rfc1072](https://tools.ietf.org/html/rfc1072))

To calculate Bandwidth-delay Product we had some equation:

**BDP (bytes) = total_available_bandwidth (KBytes/sec) x round_trip_time (ms)**

If our target market is Slow 3G with 400Kbps and 400ms RTT that mean:

**BDP = 400 Kb/s × 400 ms = 160,000 b. / 8 = 20,000 B = 19.5 KB**

That’s mean we should not push resources if the main request larger than 19.5 KB to be optimal.

![Network logs of [https://idpwa-wc.firebaseapp.com/](https://idpwa-wc.firebaseapp.com/)](https://cdn-images-1.medium.com/max/2076/1*eJ-QN9lI6waqZAcLoo5m7g.png)*Network logs of [https://idpwa-wc.firebaseapp.com/](https://idpwa-wc.firebaseapp.com/)*

With this network logs we can see main request (idpwa-wc.firebaseapp.com) is 1.9KB is still below the BDP. So it’s still beneficial.

![With Server Push](https://cdn-images-1.medium.com/max/2000/1*aWzhtSJl_VM99seNNlrNGw.png)*With Server Push*

![Without Server Push](https://cdn-images-1.medium.com/max/2000/1*ABDMIenwYFXKBe4rI57CBw.png)*Without Server Push*

With the test above we can see clear result that by using Server Push we make the website load faster.

### Trick on Pushing API Response as Server Push

When I tried to pushing API response as Server Push I face some problem that the fetch is not using the pushed resource, instead it do the fetch again so there will be two call for the API. This is described in this issue *([https://bugs.chromium.org/p/chromium/issues/detail?id=652228](https://bugs.chromium.org/p/chromium/issues/detail?id=652228)).*

![The API is called 2 time](https://cdn-images-1.medium.com/max/2000/1*Oi-qfMIzTYL6v31zYk7qMw.png)*The API is called 2 time*

Since the XHR support the pushed resource, we will use XHR instead of fetch. But there is another problem in the service worker runtime caching. Service worker doesn't listen to XHR request, they only listen to Fetch request. In order to cheat on this I’ll do some custom polyfill if its from navigation it will use the *unfetch *lib and if not from navigation (first load) it will use promised XHR.


## 🎶DNS prefetch

DNS Resolve can take a millisecond to proceed. But you can skip this DNS resolve by sending DNS prefetch from server. In firebase you can include link header for DNS prefetch.


Note that DNS prefetch sometime is useless if your domain had *Round Robin DNS Load Balancer *in it.

## 💼Workbox

Workbox is successor of SW-Precache. It developed by google. Of course you can create your service worker manually. But I prefer to use *workbox-build *to generate the service worker. Make sure to do precache and runtime caching on it.


## 💡Conclusion

With all the trick I did to achieve fastest load time, I do some testing with [https://www.webpagetest.org](https://www.webpagetest.org) with Simple Testing on Slow 3G with Lighthouse Audit enable.

![[Lighthouse Performance Result](https://www.webpagetest.org/lighthouse.php?test=180307_5H_8739c68bd433199e02f70128bd030188&run=3)](https://cdn-images-1.medium.com/max/2000/1*8ACsdVrPtSYR-1PmyBnOAA.png)*[Lighthouse Performance Result](https://www.webpagetest.org/lighthouse.php?test=180307_5H_8739c68bd433199e02f70128bd030188&run=3)*

The result [https://www.webpagetest.org/result/180307_5H_8739c68bd433199e02f70128bd030188/](https://www.webpagetest.org/result/180307_5H_8739c68bd433199e02f70128bd030188/) is fast enough to load with 3G Slow connection. It only take 2,210 ms to achieve the first meaningful paint and interactive.

Note that all the trick and tips are available in this repo, but I’ll not recommended it for production usage.

## Updates

* Fix server push strategy condition
[**tenosiswono/wwwid-pwa-wc**
*wwwid-pwa-wc - This is an example of a PWA built using Vanilla Webcomponent, Webpack and some other modules for WWWID…*github.com](https://github.com/tenosiswono/wwwid-pwa-wc)

