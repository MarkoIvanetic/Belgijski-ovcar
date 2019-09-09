/*! jQuery & Zepto Lazy v1.7.10 - http://jquery.eisbehr.de/lazy - MIT&GPL-2.0 license - Copyright 2012-2018 Daniel 'Eisbehr' Kern */
!function(t,e){"use strict";function r(r,a,i,u,l){function f(){L=t.devicePixelRatio>1,i=c(i),a.delay>=0&&setTimeout(function(){s(!0)},a.delay),(a.delay<0||a.combined)&&(u.e=v(a.throttle,function(t){"resize"===t.type&&(w=B=-1),s(t.all)}),u.a=function(t){t=c(t),i.push.apply(i,t)},u.g=function(){return i=n(i).filter(function(){return!n(this).data(a.loadedName)})},u.f=function(t){for(var e=0;e<t.length;e++){var r=i.filter(function(){return this===t[e]});r.length&&s(!1,r)}},s(),n(a.appendScroll).on("scroll."+l+" resize."+l,u.e))}function c(t){var i=a.defaultImage,o=a.placeholder,u=a.imageBase,l=a.srcsetAttribute,f=a.loaderAttribute,c=a._f||{};t=n(t).filter(function(){var t=n(this),r=m(this);return!t.data(a.handledName)&&(t.attr(a.attribute)||t.attr(l)||t.attr(f)||c[r]!==e)}).data("plugin_"+a.name,r);for(var s=0,d=t.length;s<d;s++){var A=n(t[s]),g=m(t[s]),h=A.attr(a.imageBaseAttribute)||u;g===N&&h&&A.attr(l)&&A.attr(l,b(A.attr(l),h)),c[g]===e||A.attr(f)||A.attr(f,c[g]),g===N&&i&&!A.attr(E)?A.attr(E,i):g===N||!o||A.css(O)&&"none"!==A.css(O)||A.css(O,"url('"+o+"')")}return t}function s(t,e){if(!i.length)return void(a.autoDestroy&&r.destroy());for(var o=e||i,u=!1,l=a.imageBase||"",f=a.srcsetAttribute,c=a.handledName,s=0;s<o.length;s++)if(t||e||A(o[s])){var g=n(o[s]),h=m(o[s]),b=g.attr(a.attribute),v=g.attr(a.imageBaseAttribute)||l,p=g.attr(a.loaderAttribute);g.data(c)||a.visibleOnly&&!g.is(":visible")||!((b||g.attr(f))&&(h===N&&(v+b!==g.attr(E)||g.attr(f)!==g.attr(F))||h!==N&&v+b!==g.css(O))||p)||(u=!0,g.data(c,!0),d(g,h,v,p))}u&&(i=n(i).filter(function(){return!n(this).data(c)}))}function d(t,e,r,i){++z;var o=function(){y("onError",t),p(),o=n.noop};y("beforeLoad",t);var u=a.attribute,l=a.srcsetAttribute,f=a.sizesAttribute,c=a.retinaAttribute,s=a.removeAttribute,d=a.loadedName,A=t.attr(c);if(i){var g=function(){s&&t.removeAttr(a.loaderAttribute),t.data(d,!0),y(T,t),setTimeout(p,1),g=n.noop};t.off(I).one(I,o).one(D,g),y(i,t,function(e){e?(t.off(D),g()):(t.off(I),o())})||t.trigger(I)}else{var h=n(new Image);h.one(I,o).one(D,function(){t.hide(),e===N?t.attr(C,h.attr(C)).attr(F,h.attr(F)).attr(E,h.attr(E)):t.css(O,"url('"+h.attr(E)+"')"),t[a.effect](a.effectTime),s&&(t.removeAttr(u+" "+l+" "+c+" "+a.imageBaseAttribute),f!==C&&t.removeAttr(f)),t.data(d,!0),y(T,t),h.remove(),p()});var m=(L&&A?A:t.attr(u))||"";h.attr(C,t.attr(f)).attr(F,t.attr(l)).attr(E,m?r+m:null),h.complete&&h.trigger(D)}}function A(t){var e=t.getBoundingClientRect(),r=a.scrollDirection,n=a.threshold,i=h()+n>e.top&&-n<e.bottom,o=g()+n>e.left&&-n<e.right;return"vertical"===r?i:"horizontal"===r?o:i&&o}function g(){return w>=0?w:w=n(t).width()}function h(){return B>=0?B:B=n(t).height()}function m(t){return t.tagName.toLowerCase()}function b(t,e){if(e){var r=t.split(",");t="";for(var a=0,n=r.length;a<n;a++)t+=e+r[a].trim()+(a!==n-1?",":"")}return t}function v(t,e){var n,i=0;return function(o,u){function l(){i=+new Date,e.call(r,o)}var f=+new Date-i;n&&clearTimeout(n),f>t||!a.enableThrottle||u?l():n=setTimeout(l,t-f)}}function p(){--z,i.length||z||y("onFinishedAll")}function y(t,e,n){return!!(t=a[t])&&(t.apply(r,[].slice.call(arguments,1)),!0)}var z=0,w=-1,B=-1,L=!1,T="afterLoad",D="load",I="error",N="img",E="src",F="srcset",C="sizes",O="background-image";"event"===a.bind||o?f():n(t).on(D+"."+l,f)}function a(a,o){var u=this,l=n.extend({},u.config,o),f={},c=l.name+"-"+ ++i;return u.config=function(t,r){return r===e?l[t]:(l[t]=r,u)},u.addItems=function(t){return f.a&&f.a("string"===n.type(t)?n(t):t),u},u.getItems=function(){return f.g?f.g():{}},u.update=function(t){return f.e&&f.e({},!t),u},u.force=function(t){return f.f&&f.f("string"===n.type(t)?n(t):t),u},u.loadAll=function(){return f.e&&f.e({all:!0},!0),u},u.destroy=function(){return n(l.appendScroll).off("."+c,f.e),n(t).off("."+c),f={},e},r(u,l,a,f,c),l.chainable?a:u}var n=t.jQuery||t.Zepto,i=0,o=!1;n.fn.Lazy=n.fn.lazy=function(t){return new a(this,t)},n.Lazy=n.lazy=function(t,r,i){if(n.isFunction(r)&&(i=r,r=[]),n.isFunction(i)){t=n.isArray(t)?t:[t],r=n.isArray(r)?r:[r];for(var o=a.prototype.config,u=o._f||(o._f={}),l=0,f=t.length;l<f;l++)(o[t[l]]===e||n.isFunction(o[t[l]]))&&(o[t[l]]=i);for(var c=0,s=r.length;c<s;c++)u[r[c]]=t[0]}},a.prototype.config={name:"lazy",chainable:!0,autoDestroy:!0,bind:"load",threshold:500,visibleOnly:!1,appendScroll:t,scrollDirection:"both",imageBase:null,defaultImage:"data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==",placeholder:null,delay:-1,combined:!1,attribute:"data-src",srcsetAttribute:"data-srcset",sizesAttribute:"data-sizes",retinaAttribute:"data-retina",loaderAttribute:"data-loader",imageBaseAttribute:"data-imagebase",removeAttribute:!0,handledName:"handled",loadedName:"loaded",effect:"show",effectTime:0,enableThrottle:!0,throttle:250,beforeLoad:e,afterLoad:e,onError:e,onFinishedAll:e},n(t).on("load",function(){o=!0})}(window);
/*! Magnific Popup - v1.0.0 - 2015-09-17
 * http://dimsemenov.com/plugins/magnific-popup/
 * Copyright (c) 2015 Dmitry Semenov; */
;
(function(factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module. 
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        // Node/CommonJS 
        factory(require('jquery'));
    } else {
        // Browser globals 
        factory(window.jQuery || window.Zepto);
    }
}(function($) {

    /*>>core*/
    /**
     * 
     * Magnific Popup Core JS file
     * 
     */


    /**
     * Private static constants
     */
    var CLOSE_EVENT = 'Close',
        BEFORE_CLOSE_EVENT = 'BeforeClose',
        AFTER_CLOSE_EVENT = 'AfterClose',
        BEFORE_APPEND_EVENT = 'BeforeAppend',
        MARKUP_PARSE_EVENT = 'MarkupParse',
        OPEN_EVENT = 'Open',
        CHANGE_EVENT = 'Change',
        NS = 'mfp',
        EVENT_NS = '.' + NS,
        READY_CLASS = 'mfp-ready',
        REMOVING_CLASS = 'mfp-removing',
        PREVENT_CLOSE_CLASS = 'mfp-prevent-close';


    /**
     * Private vars 
     */
    /*jshint -W079 */
    var mfp, // As we have only one instance of MagnificPopup object, we define it locally to not to use 'this'
        MagnificPopup = function() {},
        _isJQ = !!(window.jQuery),
        _prevStatus,
        _window = $(window),
        _document,
        _prevContentType,
        _wrapClasses,
        _currPopupType;


    /**
     * Private functions
     */
    var _mfpOn = function(name, f) {
            mfp.ev.on(NS + name + EVENT_NS, f);
        },
        _getEl = function(className, appendTo, html, raw) {
            var el = document.createElement('div');
            el.className = 'mfp-' + className;
            if (html) {
                el.innerHTML = html;
            }
            if (!raw) {
                el = $(el);
                if (appendTo) {
                    el.appendTo(appendTo);
                }
            } else if (appendTo) {
                appendTo.appendChild(el);
            }
            return el;
        },
        _mfpTrigger = function(e, data) {
            mfp.ev.triggerHandler(NS + e, data);

            if (mfp.st.callbacks) {
                // converts "mfpEventName" to "eventName" callback and triggers it if it's present
                e = e.charAt(0).toLowerCase() + e.slice(1);
                if (mfp.st.callbacks[e]) {
                    mfp.st.callbacks[e].apply(mfp, $.isArray(data) ? data : [data]);
                }
            }
        },
        _getCloseBtn = function(type) {
            if (type !== _currPopupType || !mfp.currTemplate.closeBtn) {
                mfp.currTemplate.closeBtn = $(mfp.st.closeMarkup.replace('%title%', mfp.st.tClose));
                _currPopupType = type;
            }
            return mfp.currTemplate.closeBtn;
        },
        // Initialize Magnific Popup only when called at least once
        _checkInstance = function() {
            if (!$.magnificPopup.instance) {
                /*jshint -W020 */
                mfp = new MagnificPopup();
                mfp.init();
                $.magnificPopup.instance = mfp;
            }
        },
        // CSS transition detection, http://stackoverflow.com/questions/7264899/detect-css-transitions-using-javascript-and-without-modernizr
        supportsTransitions = function() {
            var s = document.createElement('p').style, // 's' for style. better to create an element if body yet to exist
                v = ['ms', 'O', 'Moz', 'Webkit']; // 'v' for vendor

            if (s['transition'] !== undefined) {
                return true;
            }

            while (v.length) {
                if (v.pop() + 'Transition' in s) {
                    return true;
                }
            }

            return false;
        };



    /**
     * Public functions
     */
    MagnificPopup.prototype = {

        constructor: MagnificPopup,

        /**
         * Initializes Magnific Popup plugin. 
         * This function is triggered only once when $.fn.magnificPopup or $.magnificPopup is executed
         */
        init: function() {
            var appVersion = navigator.appVersion;
            mfp.isIE7 = appVersion.indexOf("MSIE 7.") !== -1;
            mfp.isIE8 = appVersion.indexOf("MSIE 8.") !== -1;
            mfp.isLowIE = mfp.isIE7 || mfp.isIE8;
            mfp.isAndroid = (/android/gi).test(appVersion);
            mfp.isIOS = (/iphone|ipad|ipod/gi).test(appVersion);
            mfp.supportsTransition = supportsTransitions();

            // We disable fixed positioned lightbox on devices that don't handle it nicely.
            // If you know a better way of detecting this - let me know.
            mfp.probablyMobile = (mfp.isAndroid || mfp.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent));
            _document = $(document);

            mfp.popupsCache = {};
        },

        /**
         * Opens popup
         * @param  data [description]
         */
        open: function(data) {

            var i;

            if (data.isObj === false) {
                // convert jQuery collection to array to avoid conflicts later
                mfp.items = data.items.toArray();

                mfp.index = 0;
                var items = data.items,
                    item;
                for (i = 0; i < items.length; i++) {
                    item = items[i];
                    if (item.parsed) {
                        item = item.el[0];
                    }
                    if (item === data.el[0]) {
                        mfp.index = i;
                        break;
                    }
                }
            } else {
                mfp.items = $.isArray(data.items) ? data.items : [data.items];
                mfp.index = data.index || 0;
            }

            // if popup is already opened - we just update the content
            if (mfp.isOpen) {
                mfp.updateItemHTML();
                return;
            }

            mfp.types = [];
            _wrapClasses = '';
            if (data.mainEl && data.mainEl.length) {
                mfp.ev = data.mainEl.eq(0);
            } else {
                mfp.ev = _document;
            }

            if (data.key) {
                if (!mfp.popupsCache[data.key]) {
                    mfp.popupsCache[data.key] = {};
                }
                mfp.currTemplate = mfp.popupsCache[data.key];
            } else {
                mfp.currTemplate = {};
            }



            mfp.st = $.extend(true, {}, $.magnificPopup.defaults, data);
            mfp.fixedContentPos = mfp.st.fixedContentPos === 'auto' ? !mfp.probablyMobile : mfp.st.fixedContentPos;

            if (mfp.st.modal) {
                mfp.st.closeOnContentClick = false;
                mfp.st.closeOnBgClick = false;
                mfp.st.showCloseBtn = false;
                mfp.st.enableEscapeKey = false;
            }


            // Building markup
            // main containers are created only once
            if (!mfp.bgOverlay) {

                // Dark overlay
                mfp.bgOverlay = _getEl('bg').on('click' + EVENT_NS, function() {
                    mfp.close();
                });

                mfp.wrap = _getEl('wrap').attr('tabindex', -1).on('click' + EVENT_NS, function(e) {
                    if (mfp._checkIfClose(e.target)) {
                        mfp.close();
                    }
                });

                mfp.container = _getEl('container', mfp.wrap);
            }

            mfp.contentContainer = _getEl('content');
            if (mfp.st.preloader) {
                mfp.preloader = _getEl('preloader', mfp.container, mfp.st.tLoading);
            }


            // Initializing modules
            var modules = $.magnificPopup.modules;
            for (i = 0; i < modules.length; i++) {
                var n = modules[i];
                n = n.charAt(0).toUpperCase() + n.slice(1);
                mfp['init' + n].call(mfp);
            }
            _mfpTrigger('BeforeOpen');


            if (mfp.st.showCloseBtn) {
                // Close button
                if (!mfp.st.closeBtnInside) {
                    mfp.wrap.append(_getCloseBtn());
                } else {
                    _mfpOn(MARKUP_PARSE_EVENT, function(e, template, values, item) {
                        values.close_replaceWith = _getCloseBtn(item.type);
                    });
                    _wrapClasses += ' mfp-close-btn-in';
                }
            }

            if (mfp.st.alignTop) {
                _wrapClasses += ' mfp-align-top';
            }



            if (mfp.fixedContentPos) {
                mfp.wrap.css({
                    overflow: mfp.st.overflowY,
                    overflowX: 'hidden',
                    overflowY: mfp.st.overflowY
                });
            } else {
                mfp.wrap.css({
                    top: _window.scrollTop(),
                    position: 'absolute'
                });
            }
            if (mfp.st.fixedBgPos === false || (mfp.st.fixedBgPos === 'auto' && !mfp.fixedContentPos)) {
                mfp.bgOverlay.css({
                    height: _document.height(),
                    position: 'absolute'
                });
            }



            if (mfp.st.enableEscapeKey) {
                // Close on ESC key
                _document.on('keyup' + EVENT_NS, function(e) {
                    if (e.keyCode === 27) {
                        mfp.close();
                    }
                });
            }

            _window.on('resize' + EVENT_NS, function() {
                mfp.updateSize();
            });


            if (!mfp.st.closeOnContentClick) {
                _wrapClasses += ' mfp-auto-cursor';
            }

            if (_wrapClasses)
                mfp.wrap.addClass(_wrapClasses);


            // this triggers recalculation of layout, so we get it once to not to trigger twice
            var windowHeight = mfp.wH = _window.height();


            var windowStyles = {};

            if (mfp.fixedContentPos) {
                if (mfp._hasScrollBar(windowHeight)) {
                    var s = mfp._getScrollbarSize();
                    if (s) {
                        windowStyles.marginRight = s;
                    }
                }
            }

            if (mfp.fixedContentPos) {
                if (!mfp.isIE7) {
                    windowStyles.overflow = 'hidden';
                } else {
                    // ie7 double-scroll bug
                    $('body, html').css('overflow', 'hidden');
                }
            }



            var classesToadd = mfp.st.mainClass;
            if (mfp.isIE7) {
                classesToadd += ' mfp-ie7';
            }
            if (classesToadd) {
                mfp._addClassToMFP(classesToadd);
            }

            // add content
            mfp.updateItemHTML();

            _mfpTrigger('BuildControls');

            // remove scrollbar, add margin e.t.c
            $('html').css(windowStyles);

            // add everything to DOM
            mfp.bgOverlay.add(mfp.wrap).prependTo(mfp.st.prependTo || $(document.body));

            // Save last focused element
            mfp._lastFocusedEl = document.activeElement;

            // Wait for next cycle to allow CSS transition
            setTimeout(function() {

                if (mfp.content) {
                    mfp._addClassToMFP(READY_CLASS);
                    mfp._setFocus();
                } else {
                    // if content is not defined (not loaded e.t.c) we add class only for BG
                    mfp.bgOverlay.addClass(READY_CLASS);
                }

                // Trap the focus in popup
                _document.on('focusin' + EVENT_NS, mfp._onFocusIn);

            }, 16);

            mfp.isOpen = true;
            mfp.updateSize(windowHeight);
            _mfpTrigger(OPEN_EVENT);

            return data;
        },

        /**
         * Closes the popup
         */
        close: function() {
            if (!mfp.isOpen) return;
            _mfpTrigger(BEFORE_CLOSE_EVENT);

            mfp.isOpen = false;
            // for CSS3 animation
            if (mfp.st.removalDelay && !mfp.isLowIE && mfp.supportsTransition) {
                mfp._addClassToMFP(REMOVING_CLASS);
                setTimeout(function() {
                    mfp._close();
                }, mfp.st.removalDelay);
            } else {
                mfp._close();
            }
        },

        /**
         * Helper for close() function
         */
        _close: function() {
            _mfpTrigger(CLOSE_EVENT);

            var classesToRemove = REMOVING_CLASS + ' ' + READY_CLASS + ' ';

            mfp.bgOverlay.detach();
            mfp.wrap.detach();
            mfp.container.empty();

            if (mfp.st.mainClass) {
                classesToRemove += mfp.st.mainClass + ' ';
            }

            mfp._removeClassFromMFP(classesToRemove);

            if (mfp.fixedContentPos) {
                var windowStyles = {
                    marginRight: ''
                };
                if (mfp.isIE7) {
                    $('body, html').css('overflow', '');
                } else {
                    windowStyles.overflow = '';
                }
                $('html').css(windowStyles);
            }

            _document.off('keyup' + EVENT_NS + ' focusin' + EVENT_NS);
            mfp.ev.off(EVENT_NS);

            // clean up DOM elements that aren't removed
            mfp.wrap.attr('class', 'mfp-wrap').removeAttr('style');
            mfp.bgOverlay.attr('class', 'mfp-bg');
            mfp.container.attr('class', 'mfp-container');

            // remove close button from target element
            if (mfp.st.showCloseBtn &&
                (!mfp.st.closeBtnInside || mfp.currTemplate[mfp.currItem.type] === true)) {
                if (mfp.currTemplate.closeBtn)
                    mfp.currTemplate.closeBtn.detach();
            }


            if (mfp._lastFocusedEl) {
                $(mfp._lastFocusedEl).focus(); // put tab focus back
            }
            mfp.currItem = null;
            mfp.content = null;
            mfp.currTemplate = null;
            mfp.prevHeight = 0;

            _mfpTrigger(AFTER_CLOSE_EVENT);
        },

        updateSize: function(winHeight) {

            if (mfp.isIOS) {
                // fixes iOS nav bars https://github.com/dimsemenov/Magnific-Popup/issues/2
                var zoomLevel = document.documentElement.clientWidth / window.innerWidth;
                var height = window.innerHeight * zoomLevel;
                mfp.wrap.css('height', height);
                mfp.wH = height;
            } else {
                mfp.wH = winHeight || _window.height();
            }
            // Fixes #84: popup incorrectly positioned with position:relative on body
            if (!mfp.fixedContentPos) {
                mfp.wrap.css('height', mfp.wH);
            }

            _mfpTrigger('Resize');

        },

        /**
         * Set content of popup based on current index
         */
        updateItemHTML: function() {
            var item = mfp.items[mfp.index];

            // Detach and perform modifications
            mfp.contentContainer.detach();

            if (mfp.content)
                mfp.content.detach();

            if (!item.parsed) {
                item = mfp.parseEl(mfp.index);
            }

            var type = item.type;

            _mfpTrigger('BeforeChange', [mfp.currItem ? mfp.currItem.type : '', type]);
            // BeforeChange event works like so:
            // _mfpOn('BeforeChange', function(e, prevType, newType) { });

            mfp.currItem = item;





            if (!mfp.currTemplate[type]) {
                var markup = mfp.st[type] ? mfp.st[type].markup : false;

                // allows to modify markup
                _mfpTrigger('FirstMarkupParse', markup);

                if (markup) {
                    mfp.currTemplate[type] = $(markup);
                } else {
                    // if there is no markup found we just define that template is parsed
                    mfp.currTemplate[type] = true;
                }
            }

            if (_prevContentType && _prevContentType !== item.type) {
                mfp.container.removeClass('mfp-' + _prevContentType + '-holder');
            }

            var newContent = mfp['get' + type.charAt(0).toUpperCase() + type.slice(1)](item, mfp.currTemplate[type]);
            mfp.appendContent(newContent, type);

            item.preloaded = true;

            _mfpTrigger(CHANGE_EVENT, item);
            _prevContentType = item.type;

            // Append container back after its content changed
            mfp.container.prepend(mfp.contentContainer);

            _mfpTrigger('AfterChange');
        },


        /**
         * Set HTML content of popup
         */
        appendContent: function(newContent, type) {
            mfp.content = newContent;

            if (newContent) {
                if (mfp.st.showCloseBtn && mfp.st.closeBtnInside &&
                    mfp.currTemplate[type] === true) {
                    // if there is no markup, we just append close button element inside
                    if (!mfp.content.find('.mfp-close').length) {
                        mfp.content.append(_getCloseBtn());
                    }
                } else {
                    mfp.content = newContent;
                }
            } else {
                mfp.content = '';
            }

            _mfpTrigger(BEFORE_APPEND_EVENT);
            mfp.container.addClass('mfp-' + type + '-holder');

            mfp.contentContainer.append(mfp.content);
        },




        /**
         * Creates Magnific Popup data object based on given data
         * @param  {int} index Index of item to parse
         */
        parseEl: function(index) {
            var item = mfp.items[index],
                type;

            if (item.tagName) {
                item = {
                    el: $(item)
                };
            } else {
                type = item.type;
                item = {
                    data: item,
                    src: item.src
                };
            }

            if (item.el) {
                var types = mfp.types;

                // check for 'mfp-TYPE' class
                for (var i = 0; i < types.length; i++) {
                    if (item.el.hasClass('mfp-' + types[i])) {
                        type = types[i];
                        break;
                    }
                }

                item.src = item.el.attr('data-mfp-src');
                if (!item.src) {
                    item.src = item.el.attr('href');
                }
            }

            item.type = type || mfp.st.type || 'inline';
            item.index = index;
            item.parsed = true;
            mfp.items[index] = item;
            _mfpTrigger('ElementParse', item);

            return mfp.items[index];
        },


        /**
         * Initializes single popup or a group of popups
         */
        addGroup: function(el, options) {
            var eHandler = function(e) {
                e.mfpEl = this;
                mfp._openClick(e, el, options);
            };

            if (!options) {
                options = {};
            }

            var eName = 'click.magnificPopup';
            options.mainEl = el;

            if (options.items) {
                options.isObj = true;
                el.off(eName).on(eName, eHandler);
            } else {
                options.isObj = false;
                if (options.delegate) {
                    el.off(eName).on(eName, options.delegate, eHandler);
                } else {
                    options.items = el;
                    el.off(eName).on(eName, eHandler);
                }
            }
        },
        _openClick: function(e, el, options) {
            var midClick = options.midClick !== undefined ? options.midClick : $.magnificPopup.defaults.midClick;


            if (!midClick && (e.which === 2 || e.ctrlKey || e.metaKey || e.altKey || e.shiftKey)) {
                return;
            }

            var disableOn = options.disableOn !== undefined ? options.disableOn : $.magnificPopup.defaults.disableOn;

            if (disableOn) {
                if ($.isFunction(disableOn)) {
                    if (!disableOn.call(mfp)) {
                        return true;
                    }
                } else { // else it's number
                    if (_window.width() < disableOn) {
                        return true;
                    }
                }
            }

            if (e.type) {
                e.preventDefault();

                // This will prevent popup from closing if element is inside and popup is already opened
                if (mfp.isOpen) {
                    e.stopPropagation();
                }
            }


            options.el = $(e.mfpEl);
            if (options.delegate) {
                options.items = el.find(options.delegate);
            }
            mfp.open(options);
        },


        /**
         * Updates text on preloader
         */
        updateStatus: function(status, text) {

            if (mfp.preloader) {
                if (_prevStatus !== status) {
                    mfp.container.removeClass('mfp-s-' + _prevStatus);
                }

                if (!text && status === 'loading') {
                    text = mfp.st.tLoading;
                }

                var data = {
                    status: status,
                    text: text
                };
                // allows to modify status
                _mfpTrigger('UpdateStatus', data);

                status = data.status;
                text = data.text;

                mfp.preloader.html(text);

                mfp.preloader.find('a').on('click', function(e) {
                    e.stopImmediatePropagation();
                });

                mfp.container.addClass('mfp-s-' + status);
                _prevStatus = status;
            }
        },


        /*
        	"Private" helpers that aren't private at all
         */
        // Check to close popup or not
        // "target" is an element that was clicked
        _checkIfClose: function(target) {

            if ($(target).hasClass(PREVENT_CLOSE_CLASS)) {
                return;
            }

            var closeOnContent = mfp.st.closeOnContentClick;
            var closeOnBg = mfp.st.closeOnBgClick;

            if (closeOnContent && closeOnBg) {
                return true;
            } else {

                // We close the popup if click is on close button or on preloader. Or if there is no content.
                if (!mfp.content || $(target).hasClass('mfp-close') || (mfp.preloader && target === mfp.preloader[0])) {
                    return true;
                }

                // if click is outside the content
                if ((target !== mfp.content[0] && !$.contains(mfp.content[0], target))) {
                    if (closeOnBg) {
                        // last check, if the clicked element is in DOM, (in case it's removed onclick)
                        if ($.contains(document, target)) {
                            return true;
                        }
                    }
                } else if (closeOnContent) {
                    return true;
                }

            }
            return false;
        },
        _addClassToMFP: function(cName) {
            mfp.bgOverlay.addClass(cName);
            mfp.wrap.addClass(cName);
        },
        _removeClassFromMFP: function(cName) {
            this.bgOverlay.removeClass(cName);
            mfp.wrap.removeClass(cName);
        },
        _hasScrollBar: function(winHeight) {
            return ((mfp.isIE7 ? _document.height() : document.body.scrollHeight) > (winHeight || _window.height()));
        },
        _setFocus: function() {
            (mfp.st.focus ? mfp.content.find(mfp.st.focus).eq(0) : mfp.wrap).focus();
        },
        _onFocusIn: function(e) {
            if (e.target !== mfp.wrap[0] && !$.contains(mfp.wrap[0], e.target)) {
                mfp._setFocus();
                return false;
            }
        },
        _parseMarkup: function(template, values, item) {
            var arr;
            if (item.data) {
                values = $.extend(item.data, values);
            }
            _mfpTrigger(MARKUP_PARSE_EVENT, [template, values, item]);

            $.each(values, function(key, value) {
                if (value === undefined || value === false) {
                    return true;
                }
                arr = key.split('_');
                if (arr.length > 1) {
                    var el = template.find(EVENT_NS + '-' + arr[0]);

                    if (el.length > 0) {
                        var attr = arr[1];
                        if (attr === 'replaceWith') {
                            if (el[0] !== value[0]) {
                                el.replaceWith(value);
                            }
                        } else if (attr === 'img') {
                            if (el.is('img')) {
                                el.attr('src', value);
                            } else {
                                el.replaceWith('<img src="' + value + '" class="' + el.attr('class') + '" />');
                            }
                        } else {
                            el.attr(arr[1], value);
                        }
                    }

                } else {
                    template.find(EVENT_NS + '-' + key).html(value);
                }
            });
        },

        _getScrollbarSize: function() {
            // thx David
            if (mfp.scrollbarSize === undefined) {
                var scrollDiv = document.createElement("div");
                scrollDiv.style.cssText = 'width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;';
                document.body.appendChild(scrollDiv);
                mfp.scrollbarSize = scrollDiv.offsetWidth - scrollDiv.clientWidth;
                document.body.removeChild(scrollDiv);
            }
            return mfp.scrollbarSize;
        }

    }; /* MagnificPopup core prototype end */




    /**
     * Public static functions
     */
    $.magnificPopup = {
        instance: null,
        proto: MagnificPopup.prototype,
        modules: [],

        open: function(options, index) {
            _checkInstance();

            if (!options) {
                options = {};
            } else {
                options = $.extend(true, {}, options);
            }


            options.isObj = true;
            options.index = index || 0;
            return this.instance.open(options);
        },

        close: function() {
            return $.magnificPopup.instance && $.magnificPopup.instance.close();
        },

        registerModule: function(name, module) {
            if (module.options) {
                $.magnificPopup.defaults[name] = module.options;
            }
            $.extend(this.proto, module.proto);
            this.modules.push(name);
        },

        defaults: {

            // Info about options is in docs:
            // http://dimsemenov.com/plugins/magnific-popup/documentation.html#options

            disableOn: 0,

            key: null,

            midClick: false,

            mainClass: '',

            preloader: true,

            focus: '', // CSS selector of input to focus after popup is opened

            closeOnContentClick: false,

            closeOnBgClick: true,

            closeBtnInside: true,

            showCloseBtn: true,

            enableEscapeKey: true,

            modal: false,

            alignTop: false,

            removalDelay: 0,

            prependTo: null,

            fixedContentPos: true,

            fixedBgPos: 'auto',

            overflowY: 'auto',

            closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>',

            tClose: 'Close (Esc)',

            tLoading: 'Loading...'

        }
    };



    $.fn.magnificPopup = function(options) {
        _checkInstance();

        var jqEl = $(this);

        // We call some API method of first param is a string
        if (typeof options === "string") {

            if (options === 'open') {
                var items,
                    itemOpts = _isJQ ? jqEl.data('magnificPopup') : jqEl[0].magnificPopup,
                    index = parseInt(arguments[1], 10) || 0;

                if (itemOpts.items) {
                    items = itemOpts.items[index];
                } else {
                    items = jqEl;
                    if (itemOpts.delegate) {
                        items = items.find(itemOpts.delegate);
                    }
                    items = items.eq(index);
                }
                mfp._openClick({
                    mfpEl: items
                }, jqEl, itemOpts);
            } else {
                if (mfp.isOpen)
                    mfp[options].apply(mfp, Array.prototype.slice.call(arguments, 1));
            }

        } else {
            // clone options obj
            options = $.extend(true, {}, options);

            /*
             * As Zepto doesn't support .data() method for objects 
             * and it works only in normal browsers
             * we assign "options" object directly to the DOM element. FTW!
             */
            if (_isJQ) {
                jqEl.data('magnificPopup', options);
            } else {
                jqEl[0].magnificPopup = options;
            }

            mfp.addGroup(jqEl, options);

        }
        return jqEl;
    };


    //Quick benchmark
    /*
    var start = performance.now(),
    	i,
    	rounds = 1000;

    for(i = 0; i < rounds; i++) {

    }
    console.log('Test #1:', performance.now() - start);

    start = performance.now();
    for(i = 0; i < rounds; i++) {

    }
    console.log('Test #2:', performance.now() - start);
    */


    /*>>core*/

    /*>>inline*/

    var INLINE_NS = 'inline',
        _hiddenClass,
        _inlinePlaceholder,
        _lastInlineElement,
        _putInlineElementsBack = function() {
            if (_lastInlineElement) {
                _inlinePlaceholder.after(_lastInlineElement.addClass(_hiddenClass)).detach();
                _lastInlineElement = null;
            }
        };

    $.magnificPopup.registerModule(INLINE_NS, {
        options: {
            hiddenClass: 'hide', // will be appended with `mfp-` prefix
            markup: '',
            tNotFound: 'Content not found'
        },
        proto: {

            initInline: function() {
                mfp.types.push(INLINE_NS);

                _mfpOn(CLOSE_EVENT + '.' + INLINE_NS, function() {
                    _putInlineElementsBack();
                });
            },

            getInline: function(item, template) {

                _putInlineElementsBack();

                if (item.src) {
                    var inlineSt = mfp.st.inline,
                        el = $(item.src);

                    if (el.length) {

                        // If target element has parent - we replace it with placeholder and put it back after popup is closed
                        var parent = el[0].parentNode;
                        if (parent && parent.tagName) {
                            if (!_inlinePlaceholder) {
                                _hiddenClass = inlineSt.hiddenClass;
                                _inlinePlaceholder = _getEl(_hiddenClass);
                                _hiddenClass = 'mfp-' + _hiddenClass;
                            }
                            // replace target inline element with placeholder
                            _lastInlineElement = el.after(_inlinePlaceholder).detach().removeClass(_hiddenClass);
                        }

                        mfp.updateStatus('ready');
                    } else {
                        mfp.updateStatus('error', inlineSt.tNotFound);
                        el = $('<div>');
                    }

                    item.inlineElement = el;
                    return el;
                }

                mfp.updateStatus('ready');
                mfp._parseMarkup(template, {}, item);
                return template;
            }
        }
    });

    /*>>inline*/

    /*>>ajax*/
    var AJAX_NS = 'ajax',
        _ajaxCur,
        _removeAjaxCursor = function() {
            if (_ajaxCur) {
                $(document.body).removeClass(_ajaxCur);
            }
        },
        _destroyAjaxRequest = function() {
            _removeAjaxCursor();
            if (mfp.req) {
                mfp.req.abort();
            }
        };

    $.magnificPopup.registerModule(AJAX_NS, {

        options: {
            settings: null,
            cursor: 'mfp-ajax-cur',
            tError: '<a href="%url%">The content</a> could not be loaded.'
        },

        proto: {
            initAjax: function() {
                mfp.types.push(AJAX_NS);
                _ajaxCur = mfp.st.ajax.cursor;

                _mfpOn(CLOSE_EVENT + '.' + AJAX_NS, _destroyAjaxRequest);
                _mfpOn('BeforeChange.' + AJAX_NS, _destroyAjaxRequest);
            },
            getAjax: function(item) {

                if (_ajaxCur) {
                    $(document.body).addClass(_ajaxCur);
                }

                mfp.updateStatus('loading');

                var opts = $.extend({
                    url: item.src,
                    success: function(data, textStatus, jqXHR) {
                        var temp = {
                            data: data,
                            xhr: jqXHR
                        };

                        _mfpTrigger('ParseAjax', temp);

                        mfp.appendContent($(temp.data), AJAX_NS);

                        item.finished = true;

                        _removeAjaxCursor();

                        mfp._setFocus();

                        setTimeout(function() {
                            mfp.wrap.addClass(READY_CLASS);
                        }, 16);

                        mfp.updateStatus('ready');

                        _mfpTrigger('AjaxContentAdded');
                    },
                    error: function() {
                        _removeAjaxCursor();
                        item.finished = item.loadError = true;
                        mfp.updateStatus('error', mfp.st.ajax.tError.replace('%url%', item.src));
                    }
                }, mfp.st.ajax.settings);

                mfp.req = $.ajax(opts);

                return '';
            }
        }
    });







    /*>>ajax*/

    /*>>image*/
    var _imgInterval,
        _getTitle = function(item) {
            if (item.data && item.data.title !== undefined)
                return item.data.title;

            var src = mfp.st.image.titleSrc;

            if (src) {
                if ($.isFunction(src)) {
                    return src.call(mfp, item);
                } else if (item.el) {
                    return item.el.attr(src) || '';
                }
            }
            return '';
        };

    $.magnificPopup.registerModule('image', {

        options: {
            markup: '<div class="mfp-figure">' +
                '<div class="mfp-close"></div>' +
                '<figure>' +
                '<div class="mfp-img"></div>' +
                '<figcaption>' +
                '<div class="mfp-bottom-bar">' +
                '<div class="mfp-title"></div>' +
                '<div class="mfp-counter"></div>' +
                '</div>' +
                '</figcaption>' +
                '</figure>' +
                '</div>',
            cursor: 'mfp-zoom-out-cur',
            titleSrc: 'title',
            verticalFit: true,
            tError: '<a href="%url%">The image</a> could not be loaded.'
        },

        proto: {
            initImage: function() {
                var imgSt = mfp.st.image,
                    ns = '.image';

                mfp.types.push('image');

                _mfpOn(OPEN_EVENT + ns, function() {
                    if (mfp.currItem.type === 'image' && imgSt.cursor) {
                        $(document.body).addClass(imgSt.cursor);
                    }
                });

                _mfpOn(CLOSE_EVENT + ns, function() {
                    if (imgSt.cursor) {
                        $(document.body).removeClass(imgSt.cursor);
                    }
                    _window.off('resize' + EVENT_NS);
                });

                _mfpOn('Resize' + ns, mfp.resizeImage);
                if (mfp.isLowIE) {
                    _mfpOn('AfterChange', mfp.resizeImage);
                }
            },
            resizeImage: function() {
                var item = mfp.currItem;
                if (!item || !item.img) return;

                if (mfp.st.image.verticalFit) {
                    var decr = 0;
                    // fix box-sizing in ie7/8
                    if (mfp.isLowIE) {
                        decr = parseInt(item.img.css('padding-top'), 10) + parseInt(item.img.css('padding-bottom'), 10);
                    }
                    item.img.css('max-height', mfp.wH - decr);
                }
            },
            _onImageHasSize: function(item) {
                if (item.img) {

                    item.hasSize = true;

                    if (_imgInterval) {
                        clearInterval(_imgInterval);
                    }

                    item.isCheckingImgSize = false;

                    _mfpTrigger('ImageHasSize', item);

                    if (item.imgHidden) {
                        if (mfp.content)
                            mfp.content.removeClass('mfp-loading');

                        item.imgHidden = false;
                    }

                }
            },

            /**
             * Function that loops until the image has size to display elements that rely on it asap
             */
            findImageSize: function(item) {

                var counter = 0,
                    img = item.img[0],
                    mfpSetInterval = function(delay) {

                        if (_imgInterval) {
                            clearInterval(_imgInterval);
                        }
                        // decelerating interval that checks for size of an image
                        _imgInterval = setInterval(function() {
                            if (img.naturalWidth > 0) {
                                mfp._onImageHasSize(item);
                                return;
                            }

                            if (counter > 200) {
                                clearInterval(_imgInterval);
                            }

                            counter++;
                            if (counter === 3) {
                                mfpSetInterval(10);
                            } else if (counter === 40) {
                                mfpSetInterval(50);
                            } else if (counter === 100) {
                                mfpSetInterval(500);
                            }
                        }, delay);
                    };

                mfpSetInterval(1);
            },

            getImage: function(item, template) {

                var guard = 0,

                    // image load complete handler
                    onLoadComplete = function() {
                        if (item) {
                            if (item.img[0].complete) {
                                item.img.off('.mfploader');

                                if (item === mfp.currItem) {
                                    mfp._onImageHasSize(item);

                                    mfp.updateStatus('ready');
                                }

                                item.hasSize = true;
                                item.loaded = true;

                                _mfpTrigger('ImageLoadComplete');

                            } else {
                                // if image complete check fails 200 times (20 sec), we assume that there was an error.
                                guard++;
                                if (guard < 200) {
                                    setTimeout(onLoadComplete, 100);
                                } else {
                                    onLoadError();
                                }
                            }
                        }
                    },

                    // image error handler
                    onLoadError = function() {
                        if (item) {
                            item.img.off('.mfploader');
                            if (item === mfp.currItem) {
                                mfp._onImageHasSize(item);
                                mfp.updateStatus('error', imgSt.tError.replace('%url%', item.src));
                            }

                            item.hasSize = true;
                            item.loaded = true;
                            item.loadError = true;
                        }
                    },
                    imgSt = mfp.st.image;


                var el = template.find('.mfp-img');
                if (el.length) {
                    var img = document.createElement('img');
                    img.className = 'mfp-img';
                    if (item.el && item.el.find('img').length) {
                        img.alt = item.el.find('img').attr('alt');
                    }
                    item.img = $(img).on('load.mfploader', onLoadComplete).on('error.mfploader', onLoadError);
                    img.src = item.src;

                    // without clone() "error" event is not firing when IMG is replaced by new IMG
                    // TODO: find a way to avoid such cloning
                    if (el.is('img')) {
                        item.img = item.img.clone();
                    }

                    img = item.img[0];
                    if (img.naturalWidth > 0) {
                        item.hasSize = true;
                    } else if (!img.width) {
                        item.hasSize = false;
                    }
                }

                mfp._parseMarkup(template, {
                    title: _getTitle(item),
                    img_replaceWith: item.img
                }, item);

                mfp.resizeImage();

                if (item.hasSize) {
                    if (_imgInterval) clearInterval(_imgInterval);

                    if (item.loadError) {
                        template.addClass('mfp-loading');
                        mfp.updateStatus('error', imgSt.tError.replace('%url%', item.src));
                    } else {
                        template.removeClass('mfp-loading');
                        mfp.updateStatus('ready');
                    }
                    return template;
                }

                mfp.updateStatus('loading');
                item.loading = true;

                if (!item.hasSize) {
                    item.imgHidden = true;
                    template.addClass('mfp-loading');
                    mfp.findImageSize(item);
                }

                return template;
            }
        }
    });



    /*>>image*/

    /*>>zoom*/
    var hasMozTransform,
        getHasMozTransform = function() {
            if (hasMozTransform === undefined) {
                hasMozTransform = document.createElement('p').style.MozTransform !== undefined;
            }
            return hasMozTransform;
        };

    $.magnificPopup.registerModule('zoom', {

        options: {
            enabled: false,
            easing: 'ease-in-out',
            duration: 300,
            opener: function(element) {
                return element.is('img') ? element : element.find('img');
            }
        },

        proto: {

            initZoom: function() {
                var zoomSt = mfp.st.zoom,
                    ns = '.zoom',
                    image;

                if (!zoomSt.enabled || !mfp.supportsTransition) {
                    return;
                }

                var duration = zoomSt.duration,
                    getElToAnimate = function(image) {
                        var newImg = image.clone().removeAttr('style').removeAttr('class').addClass('mfp-animated-image'),
                            transition = 'all ' + (zoomSt.duration / 1000) + 's ' + zoomSt.easing,
                            cssObj = {
                                position: 'fixed',
                                zIndex: 9999,
                                left: 0,
                                top: 0,
                                '-webkit-backface-visibility': 'hidden'
                            },
                            t = 'transition';

                        cssObj['-webkit-' + t] = cssObj['-moz-' + t] = cssObj['-o-' + t] = cssObj[t] = transition;

                        newImg.css(cssObj);
                        return newImg;
                    },
                    showMainContent = function() {
                        mfp.content.css('visibility', 'visible');
                    },
                    openTimeout,
                    animatedImg;

                _mfpOn('BuildControls' + ns, function() {
                    if (mfp._allowZoom()) {

                        clearTimeout(openTimeout);
                        mfp.content.css('visibility', 'hidden');

                        // Basically, all code below does is clones existing image, puts in on top of the current one and animated it

                        image = mfp._getItemToZoom();

                        if (!image) {
                            showMainContent();
                            return;
                        }

                        animatedImg = getElToAnimate(image);

                        animatedImg.css(mfp._getOffset());

                        mfp.wrap.append(animatedImg);

                        openTimeout = setTimeout(function() {
                            animatedImg.css(mfp._getOffset(true));
                            openTimeout = setTimeout(function() {

                                showMainContent();

                                setTimeout(function() {
                                    animatedImg.remove();
                                    image = animatedImg = null;
                                    _mfpTrigger('ZoomAnimationEnded');
                                }, 16); // avoid blink when switching images 

                            }, duration); // this timeout equals animation duration

                        }, 16); // by adding this timeout we avoid short glitch at the beginning of animation


                        // Lots of timeouts...
                    }
                });
                _mfpOn(BEFORE_CLOSE_EVENT + ns, function() {
                    if (mfp._allowZoom()) {

                        clearTimeout(openTimeout);

                        mfp.st.removalDelay = duration;

                        if (!image) {
                            image = mfp._getItemToZoom();
                            if (!image) {
                                return;
                            }
                            animatedImg = getElToAnimate(image);
                        }


                        animatedImg.css(mfp._getOffset(true));
                        mfp.wrap.append(animatedImg);
                        mfp.content.css('visibility', 'hidden');

                        setTimeout(function() {
                            animatedImg.css(mfp._getOffset());
                        }, 16);
                    }

                });

                _mfpOn(CLOSE_EVENT + ns, function() {
                    if (mfp._allowZoom()) {
                        showMainContent();
                        if (animatedImg) {
                            animatedImg.remove();
                        }
                        image = null;
                    }
                });
            },

            _allowZoom: function() {
                return mfp.currItem.type === 'image';
            },

            _getItemToZoom: function() {
                if (mfp.currItem.hasSize) {
                    return mfp.currItem.img;
                } else {
                    return false;
                }
            },

            // Get element postion relative to viewport
            _getOffset: function(isLarge) {
                var el;
                if (isLarge) {
                    el = mfp.currItem.img;
                } else {
                    el = mfp.st.zoom.opener(mfp.currItem.el || mfp.currItem);
                }

                var offset = el.offset();
                var paddingTop = parseInt(el.css('padding-top'), 10);
                var paddingBottom = parseInt(el.css('padding-bottom'), 10);
                offset.top -= ($(window).scrollTop() - paddingTop);


                /*
			
                Animating left + top + width/height looks glitchy in Firefox, but perfect in Chrome. And vice-versa.

                 */
                var obj = {
                    width: el.width(),
                    // fix Zepto height+padding issue
                    height: (_isJQ ? el.innerHeight() : el[0].offsetHeight) - paddingBottom - paddingTop
                };

                // I hate to do this, but there is no another option
                if (getHasMozTransform()) {
                    obj['-moz-transform'] = obj['transform'] = 'translate(' + offset.left + 'px,' + offset.top + 'px)';
                } else {
                    obj.left = offset.left;
                    obj.top = offset.top;
                }
                return obj;
            }

        }
    });



    /*>>zoom*/

    /*>>iframe*/

    var IFRAME_NS = 'iframe',
        _emptyPage = '//about:blank',

        _fixIframeBugs = function(isShowing) {
            if (mfp.currTemplate[IFRAME_NS]) {
                var el = mfp.currTemplate[IFRAME_NS].find('iframe');
                if (el.length) {
                    // reset src after the popup is closed to avoid "video keeps playing after popup is closed" bug
                    if (!isShowing) {
                        el[0].src = _emptyPage;
                    }

                    // IE8 black screen bug fix
                    if (mfp.isIE8) {
                        el.css('display', isShowing ? 'block' : 'none');
                    }
                }
            }
        };

    $.magnificPopup.registerModule(IFRAME_NS, {

        options: {
            markup: '<div class="mfp-iframe-scaler">' +
                '<div class="mfp-close"></div>' +
                '<iframe class="mfp-iframe" src="//about:blank" allowfullscreen></iframe>' +
                '</div>',

            srcAction: 'iframe_src',

            // we don't care and support only one default type of URL by default
            patterns: {
                youtube: {
                    index: 'youtube.com',
                    id: 'v=',
                    src: '//www.youtube.com/embed/%id%?autoplay=1'
                },
                vimeo: {
                    index: 'vimeo.com/',
                    id: '/',
                    src: '//player.vimeo.com/video/%id%?autoplay=1'
                },
                gmaps: {
                    index: '//maps.google.',
                    src: '%id%&output=embed'
                }
            }
        },

        proto: {
            initIframe: function() {
                mfp.types.push(IFRAME_NS);

                _mfpOn('BeforeChange', function(e, prevType, newType) {
                    if (prevType !== newType) {
                        if (prevType === IFRAME_NS) {
                            _fixIframeBugs(); // iframe if removed
                        } else if (newType === IFRAME_NS) {
                            _fixIframeBugs(true); // iframe is showing
                        }
                    } // else {
                    // iframe source is switched, don't do anything
                    //}
                });

                _mfpOn(CLOSE_EVENT + '.' + IFRAME_NS, function() {
                    _fixIframeBugs();
                });
            },

            getIframe: function(item, template) {
                var embedSrc = item.src;
                var iframeSt = mfp.st.iframe;

                $.each(iframeSt.patterns, function() {
                    if (embedSrc.indexOf(this.index) > -1) {
                        if (this.id) {
                            if (typeof this.id === 'string') {
                                embedSrc = embedSrc.substr(embedSrc.lastIndexOf(this.id) + this.id.length, embedSrc.length);
                            } else {
                                embedSrc = this.id.call(this, embedSrc);
                            }
                        }
                        embedSrc = this.src.replace('%id%', embedSrc);
                        return false; // break;
                    }
                });

                var dataObj = {};
                if (iframeSt.srcAction) {
                    dataObj[iframeSt.srcAction] = embedSrc;
                }
                mfp._parseMarkup(template, dataObj, item);

                mfp.updateStatus('ready');

                return template;
            }
        }
    });



    /*>>iframe*/

    /*>>gallery*/
    /**
     * Get looped index depending on number of slides
     */
    var _getLoopedId = function(index) {
            var numSlides = mfp.items.length;
            if (index > numSlides - 1) {
                return index - numSlides;
            } else if (index < 0) {
                return numSlides + index;
            }
            return index;
        },
        _replaceCurrTotal = function(text, curr, total) {
            return text.replace(/%curr%/gi, curr + 1).replace(/%total%/gi, total);
        };

    $.magnificPopup.registerModule('gallery', {

        options: {
            enabled: false,
            arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
            preload: [0, 2],
            navigateByImgClick: true,
            arrows: true,

            tPrev: 'Previous (Left arrow key)',
            tNext: 'Next (Right arrow key)',
            tCounter: '%curr% of %total%'
        },

        proto: {
            initGallery: function() {

                var gSt = mfp.st.gallery,
                    ns = '.mfp-gallery',
                    supportsFastClick = Boolean($.fn.mfpFastClick);

                mfp.direction = true; // true - next, false - prev

                if (!gSt || !gSt.enabled) return false;

                _wrapClasses += ' mfp-gallery';

                _mfpOn(OPEN_EVENT + ns, function() {

                    if (gSt.navigateByImgClick) {
                        mfp.wrap.on('click' + ns, '.mfp-img', function() {
                            if (mfp.items.length > 1) {
                                mfp.next();
                                return false;
                            }
                        });
                    }

                    _document.on('keydown' + ns, function(e) {
                        if (e.keyCode === 37) {
                            mfp.prev();
                        } else if (e.keyCode === 39) {
                            mfp.next();
                        }
                    });
                });

                _mfpOn('UpdateStatus' + ns, function(e, data) {
                    if (data.text) {
                        data.text = _replaceCurrTotal(data.text, mfp.currItem.index, mfp.items.length);
                    }
                });

                _mfpOn(MARKUP_PARSE_EVENT + ns, function(e, element, values, item) {
                    var l = mfp.items.length;
                    values.counter = l > 1 ? _replaceCurrTotal(gSt.tCounter, item.index, l) : '';
                });

                _mfpOn('BuildControls' + ns, function() {
                    if (mfp.items.length > 1 && gSt.arrows && !mfp.arrowLeft) {
                        var markup = gSt.arrowMarkup,
                            arrowLeft = mfp.arrowLeft = $(markup.replace(/%title%/gi, gSt.tPrev).replace(/%dir%/gi, 'left')).addClass(PREVENT_CLOSE_CLASS),
                            arrowRight = mfp.arrowRight = $(markup.replace(/%title%/gi, gSt.tNext).replace(/%dir%/gi, 'right')).addClass(PREVENT_CLOSE_CLASS);

                        var eName = supportsFastClick ? 'mfpFastClick' : 'click';
                        arrowLeft[eName](function() {
                            mfp.prev();
                        });
                        arrowRight[eName](function() {
                            mfp.next();
                        });

                        // Polyfill for :before and :after (adds elements with classes mfp-a and mfp-b)
                        if (mfp.isIE7) {
                            _getEl('b', arrowLeft[0], false, true);
                            _getEl('a', arrowLeft[0], false, true);
                            _getEl('b', arrowRight[0], false, true);
                            _getEl('a', arrowRight[0], false, true);
                        }

                        mfp.container.append(arrowLeft.add(arrowRight));
                    }
                });

                _mfpOn(CHANGE_EVENT + ns, function() {
                    if (mfp._preloadTimeout) clearTimeout(mfp._preloadTimeout);

                    mfp._preloadTimeout = setTimeout(function() {
                        mfp.preloadNearbyImages();
                        mfp._preloadTimeout = null;
                    }, 16);
                });


                _mfpOn(CLOSE_EVENT + ns, function() {
                    _document.off(ns);
                    mfp.wrap.off('click' + ns);

                    if (mfp.arrowLeft && supportsFastClick) {
                        mfp.arrowLeft.add(mfp.arrowRight).destroyMfpFastClick();
                    }
                    mfp.arrowRight = mfp.arrowLeft = null;
                });

            },
            next: function() {
                mfp.direction = true;
                mfp.index = _getLoopedId(mfp.index + 1);
                mfp.updateItemHTML();
            },
            prev: function() {
                mfp.direction = false;
                mfp.index = _getLoopedId(mfp.index - 1);
                mfp.updateItemHTML();
            },
            goTo: function(newIndex) {
                mfp.direction = (newIndex >= mfp.index);
                mfp.index = newIndex;
                mfp.updateItemHTML();
            },
            preloadNearbyImages: function() {
                var p = mfp.st.gallery.preload,
                    preloadBefore = Math.min(p[0], mfp.items.length),
                    preloadAfter = Math.min(p[1], mfp.items.length),
                    i;

                for (i = 1; i <= (mfp.direction ? preloadAfter : preloadBefore); i++) {
                    mfp._preloadItem(mfp.index + i);
                }
                for (i = 1; i <= (mfp.direction ? preloadBefore : preloadAfter); i++) {
                    mfp._preloadItem(mfp.index - i);
                }
            },
            _preloadItem: function(index) {
                index = _getLoopedId(index);

                if (mfp.items[index].preloaded) {
                    return;
                }

                var item = mfp.items[index];
                if (!item.parsed) {
                    item = mfp.parseEl(index);
                }

                _mfpTrigger('LazyLoad', item);

                if (item.type === 'image') {
                    item.img = $('<img class="mfp-img" />').on('load.mfploader', function() {
                        item.hasSize = true;
                    }).on('error.mfploader', function() {
                        item.hasSize = true;
                        item.loadError = true;
                        _mfpTrigger('LazyLoadError', item);
                    }).attr('src', item.src);
                }


                item.preloaded = true;
            }
        }
    });

    /*
    Touch Support that might be implemented some day

    addSwipeGesture: function() {
    	var startX,
    		moved,
    		multipleTouches;

    		return;

    	var namespace = '.mfp',
    		addEventNames = function(pref, down, move, up, cancel) {
    			mfp._tStart = pref + down + namespace;
    			mfp._tMove = pref + move + namespace;
    			mfp._tEnd = pref + up + namespace;
    			mfp._tCancel = pref + cancel + namespace;
    		};

    	if(window.navigator.msPointerEnabled) {
    		addEventNames('MSPointer', 'Down', 'Move', 'Up', 'Cancel');
    	} else if('ontouchstart' in window) {
    		addEventNames('touch', 'start', 'move', 'end', 'cancel');
    	} else {
    		return;
    	}
    	_window.on(mfp._tStart, function(e) {
    		var oE = e.originalEvent;
    		multipleTouches = moved = false;
    		startX = oE.pageX || oE.changedTouches[0].pageX;
    	}).on(mfp._tMove, function(e) {
    		if(e.originalEvent.touches.length > 1) {
    			multipleTouches = e.originalEvent.touches.length;
    		} else {
    			//e.preventDefault();
    			moved = true;
    		}
    	}).on(mfp._tEnd + ' ' + mfp._tCancel, function(e) {
    		if(moved && !multipleTouches) {
    			var oE = e.originalEvent,
    				diff = startX - (oE.pageX || oE.changedTouches[0].pageX);

    			if(diff > 20) {
    				mfp.next();
    			} else if(diff < -20) {
    				mfp.prev();
    			}
    		}
    	});
    },
    */


    /*>>gallery*/

    /*>>retina*/

    var RETINA_NS = 'retina';

    $.magnificPopup.registerModule(RETINA_NS, {
        options: {
            replaceSrc: function(item) {
                return item.src.replace(/\.\w+$/, function(m) {
                    return '@2x' + m;
                });
            },
            ratio: 1 // Function or number.  Set to 1 to disable.
        },
        proto: {
            initRetina: function() {
                if (window.devicePixelRatio > 1) {

                    var st = mfp.st.retina,
                        ratio = st.ratio;

                    ratio = !isNaN(ratio) ? ratio : ratio();

                    if (ratio > 1) {
                        _mfpOn('ImageHasSize' + '.' + RETINA_NS, function(e, item) {
                            item.img.css({
                                'max-width': item.img[0].naturalWidth / ratio,
                                'width': '100%'
                            });
                        });
                        _mfpOn('ElementParse' + '.' + RETINA_NS, function(e, item) {
                            item.src = st.replaceSrc(item, ratio);
                        });
                    }
                }

            }
        }
    });

    /*>>retina*/

    /*>>fastclick*/
    /**
     * FastClick event implementation. (removes 300ms delay on touch devices)
     * Based on https://developers.google.com/mobile/articles/fast_buttons
     *
     * You may use it outside the Magnific Popup by calling just:
     *
     * $('.your-el').mfpFastClick(function() {
     *     console.log('Clicked!');
     * });
     *
     * To unbind:
     * $('.your-el').destroyMfpFastClick();
     * 
     * 
     * Note that it's a very basic and simple implementation, it blocks ghost click on the same element where it was bound.
     * If you need something more advanced, use plugin by FT Labs https://github.com/ftlabs/fastclick
     * 
     */

    (function() {
        var ghostClickDelay = 1000,
            supportsTouch = 'ontouchstart' in window,
            unbindTouchMove = function() {
                _window.off('touchmove' + ns + ' touchend' + ns);
            },
            eName = 'mfpFastClick',
            ns = '.' + eName;


        // As Zepto.js doesn't have an easy way to add custom events (like jQuery), so we implement it in this way
        $.fn.mfpFastClick = function(callback) {

            return $(this).each(function() {

                var elem = $(this),
                    lock;

                if (supportsTouch) {

                    var timeout,
                        startX,
                        startY,
                        pointerMoved,
                        point,
                        numPointers;

                    elem.on('touchstart' + ns, function(e) {
                        pointerMoved = false;
                        numPointers = 1;

                        point = e.originalEvent ? e.originalEvent.touches[0] : e.touches[0];
                        startX = point.clientX;
                        startY = point.clientY;

                        _window.on('touchmove' + ns, function(e) {
                            point = e.originalEvent ? e.originalEvent.touches : e.touches;
                            numPointers = point.length;
                            point = point[0];
                            if (Math.abs(point.clientX - startX) > 10 ||
                                Math.abs(point.clientY - startY) > 10) {
                                pointerMoved = true;
                                unbindTouchMove();
                            }
                        }).on('touchend' + ns, function(e) {
                            unbindTouchMove();
                            if (pointerMoved || numPointers > 1) {
                                return;
                            }
                            lock = true;
                            e.preventDefault();
                            clearTimeout(timeout);
                            timeout = setTimeout(function() {
                                lock = false;
                            }, ghostClickDelay);
                            callback();
                        });
                    });

                }

                elem.on('click' + ns, function() {
                    if (!lock) {
                        callback();
                    }
                });
            });
        };

        $.fn.destroyMfpFastClick = function() {
            $(this).off('touchstart' + ns + ' click' + ns);
            if (supportsTouch) _window.off('touchmove' + ns + ' touchend' + ns);
        };
    })();

    /*>>fastclick*/
    _checkInstance();
}));

/*
 * jQuery Mobile v1.4.5
 * http://jquerymobile.com
 *
 * Copyright 2010, 2014 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 */

(function(root, doc, factory) {
    if (typeof define === "function" && define.amd) {
        // AMD. Register as an anonymous module.
        define(["jquery"], function($) {
            factory($, root, doc);
            return $.mobile;
        });
    } else {
        // Browser globals
        factory(root.jQuery, root, doc);
    }
}(this, document, function(jQuery, window, document, undefined) { // This plugin is an experiment for abstracting away the touch and mouse
    // events so that developers don't have to worry about which method of input
    // the device their document is loaded on supports.
    //
    // The idea here is to allow the developer to register listeners for the
    // basic mouse events, such as mousedown, mousemove, mouseup, and click,
    // and the plugin will take care of registering the correct listeners
    // behind the scenes to invoke the listener at the fastest possible time
    // for that device, while still retaining the order of event firing in
    // the traditional mouse environment, should multiple handlers be registered
    // on the same element for different events.
    //
    // The current version exposes the following virtual events to jQuery bind methods:
    // "vmouseover vmousedown vmousemove vmouseup vclick vmouseout vmousecancel"

    (function($, window, document, undefined) {

        var dataPropertyName = "virtualMouseBindings",
            touchTargetPropertyName = "virtualTouchID",
            virtualEventNames = "vmouseover vmousedown vmousemove vmouseup vclick vmouseout vmousecancel".split(" "),
            touchEventProps = "clientX clientY pageX pageY screenX screenY".split(" "),
            mouseHookProps = $.event.mouseHooks ? $.event.mouseHooks.props : [],
            mouseEventProps = $.event.props.concat(mouseHookProps),
            activeDocHandlers = {},
            resetTimerID = 0,
            startX = 0,
            startY = 0,
            didScroll = false,
            clickBlockList = [],
            blockMouseTriggers = false,
            blockTouchTriggers = false,
            eventCaptureSupported = "addEventListener" in document,
            $document = $(document),
            nextTouchID = 1,
            lastTouchID = 0,
            threshold,
            i;

        $.vmouse = {
            moveDistanceThreshold: 10,
            clickDistanceThreshold: 10,
            resetTimerDuration: 1500
        };

        function getNativeEvent(event) {

            while (event && typeof event.originalEvent !== "undefined") {
                event = event.originalEvent;
            }
            return event;
        }

        function createVirtualEvent(event, eventType) {

            var t = event.type,
                oe, props, ne, prop, ct, touch, i, j, len;

            event = $.Event(event);
            event.type = eventType;

            oe = event.originalEvent;
            props = $.event.props;

            // addresses separation of $.event.props in to $.event.mouseHook.props and Issue 3280
            // https://github.com/jquery/jquery-mobile/issues/3280
            if (t.search(/^(mouse|click)/) > -1) {
                props = mouseEventProps;
            }

            // copy original event properties over to the new event
            // this would happen if we could call $.event.fix instead of $.Event
            // but we don't have a way to force an event to be fixed multiple times
            if (oe) {
                for (i = props.length, prop; i;) {
                    prop = props[--i];
                    event[prop] = oe[prop];
                }
            }

            // make sure that if the mouse and click virtual events are generated
            // without a .which one is defined
            if (t.search(/mouse(down|up)|click/) > -1 && !event.which) {
                event.which = 1;
            }

            if (t.search(/^touch/) !== -1) {
                ne = getNativeEvent(oe);
                t = ne.touches;
                ct = ne.changedTouches;
                touch = (t && t.length) ? t[0] : ((ct && ct.length) ? ct[0] : undefined);

                if (touch) {
                    for (j = 0, len = touchEventProps.length; j < len; j++) {
                        prop = touchEventProps[j];
                        event[prop] = touch[prop];
                    }
                }
            }

            return event;
        }

        function getVirtualBindingFlags(element) {

            var flags = {},
                b, k;

            while (element) {

                b = $.data(element, dataPropertyName);

                for (k in b) {
                    if (b[k]) {
                        flags[k] = flags.hasVirtualBinding = true;
                    }
                }
                element = element.parentNode;
            }
            return flags;
        }

        function getClosestElementWithVirtualBinding(element, eventType) {
            var b;
            while (element) {

                b = $.data(element, dataPropertyName);

                if (b && (!eventType || b[eventType])) {
                    return element;
                }
                element = element.parentNode;
            }
            return null;
        }

        function enableTouchBindings() {
            blockTouchTriggers = false;
        }

        function disableTouchBindings() {
            blockTouchTriggers = true;
        }

        function enableMouseBindings() {
            lastTouchID = 0;
            clickBlockList.length = 0;
            blockMouseTriggers = false;

            // When mouse bindings are enabled, our
            // touch bindings are disabled.
            disableTouchBindings();
        }

        function disableMouseBindings() {
            // When mouse bindings are disabled, our
            // touch bindings are enabled.
            enableTouchBindings();
        }

        function startResetTimer() {
            clearResetTimer();
            resetTimerID = setTimeout(function() {
                resetTimerID = 0;
                enableMouseBindings();
            }, $.vmouse.resetTimerDuration);
        }

        function clearResetTimer() {
            if (resetTimerID) {
                clearTimeout(resetTimerID);
                resetTimerID = 0;
            }
        }

        function triggerVirtualEvent(eventType, event, flags) {
            var ve;

            if ((flags && flags[eventType]) ||
                (!flags && getClosestElementWithVirtualBinding(event.target, eventType))) {

                ve = createVirtualEvent(event, eventType);

                $(event.target).trigger(ve);
            }

            return ve;
        }

        function mouseEventCallback(event) {
            var touchID = $.data(event.target, touchTargetPropertyName),
                ve;

            if (!blockMouseTriggers && (!lastTouchID || lastTouchID !== touchID)) {
                ve = triggerVirtualEvent("v" + event.type, event);
                if (ve) {
                    if (ve.isDefaultPrevented()) {
                        event.preventDefault();
                    }
                    if (ve.isPropagationStopped()) {
                        event.stopPropagation();
                    }
                    if (ve.isImmediatePropagationStopped()) {
                        event.stopImmediatePropagation();
                    }
                }
            }
        }

        function handleTouchStart(event) {

            var touches = getNativeEvent(event).touches,
                target, flags, t;

            if (touches && touches.length === 1) {

                target = event.target;
                flags = getVirtualBindingFlags(target);

                if (flags.hasVirtualBinding) {

                    lastTouchID = nextTouchID++;
                    $.data(target, touchTargetPropertyName, lastTouchID);

                    clearResetTimer();

                    disableMouseBindings();
                    didScroll = false;

                    t = getNativeEvent(event).touches[0];
                    startX = t.pageX;
                    startY = t.pageY;

                    triggerVirtualEvent("vmouseover", event, flags);
                    triggerVirtualEvent("vmousedown", event, flags);
                }
            }
        }

        function handleScroll(event) {
            if (blockTouchTriggers) {
                return;
            }

            if (!didScroll) {
                triggerVirtualEvent("vmousecancel", event, getVirtualBindingFlags(event.target));
            }

            didScroll = true;
            startResetTimer();
        }

        function handleTouchMove(event) {
            if (blockTouchTriggers) {
                return;
            }

            var t = getNativeEvent(event).touches[0],
                didCancel = didScroll,
                moveThreshold = $.vmouse.moveDistanceThreshold,
                flags = getVirtualBindingFlags(event.target);

            didScroll = didScroll ||
                (Math.abs(t.pageX - startX) > moveThreshold ||
                    Math.abs(t.pageY - startY) > moveThreshold);

            if (didScroll && !didCancel) {
                triggerVirtualEvent("vmousecancel", event, flags);
            }

            triggerVirtualEvent("vmousemove", event, flags);
            startResetTimer();
        }

        function handleTouchEnd(event) {
            if (blockTouchTriggers) {
                return;
            }

            disableTouchBindings();

            var flags = getVirtualBindingFlags(event.target),
                ve, t;
            triggerVirtualEvent("vmouseup", event, flags);

            if (!didScroll) {
                ve = triggerVirtualEvent("vclick", event, flags);
                if (ve && ve.isDefaultPrevented()) {
                    // The target of the mouse events that follow the touchend
                    // event don't necessarily match the target used during the
                    // touch. This means we need to rely on coordinates for blocking
                    // any click that is generated.
                    t = getNativeEvent(event).changedTouches[0];
                    clickBlockList.push({
                        touchID: lastTouchID,
                        x: t.clientX,
                        y: t.clientY
                    });

                    // Prevent any mouse events that follow from triggering
                    // virtual event notifications.
                    blockMouseTriggers = true;
                }
            }
            triggerVirtualEvent("vmouseout", event, flags);
            didScroll = false;

            startResetTimer();
        }

        function hasVirtualBindings(ele) {
            var bindings = $.data(ele, dataPropertyName),
                k;

            if (bindings) {
                for (k in bindings) {
                    if (bindings[k]) {
                        return true;
                    }
                }
            }
            return false;
        }

        function dummyMouseHandler() {}

        function getSpecialEventObject(eventType) {
            var realType = eventType.substr(1);

            return {
                setup: function( /* data, namespace */ ) {
                    // If this is the first virtual mouse binding for this element,
                    // add a bindings object to its data.

                    if (!hasVirtualBindings(this)) {
                        $.data(this, dataPropertyName, {});
                    }

                    // If setup is called, we know it is the first binding for this
                    // eventType, so initialize the count for the eventType to zero.
                    var bindings = $.data(this, dataPropertyName);
                    bindings[eventType] = true;

                    // If this is the first virtual mouse event for this type,
                    // register a global handler on the document.

                    activeDocHandlers[eventType] = (activeDocHandlers[eventType] || 0) + 1;

                    if (activeDocHandlers[eventType] === 1) {
                        $document.bind(realType, mouseEventCallback);
                    }

                    // Some browsers, like Opera Mini, won't dispatch mouse/click events
                    // for elements unless they actually have handlers registered on them.
                    // To get around this, we register dummy handlers on the elements.

                    $(this).bind(realType, dummyMouseHandler);

                    // For now, if event capture is not supported, we rely on mouse handlers.
                    if (eventCaptureSupported) {
                        // If this is the first virtual mouse binding for the document,
                        // register our touchstart handler on the document.

                        activeDocHandlers["touchstart"] = (activeDocHandlers["touchstart"] || 0) + 1;

                        if (activeDocHandlers["touchstart"] === 1) {
                            $document.bind("touchstart", handleTouchStart)
                                .bind("touchend", handleTouchEnd)

                            // On touch platforms, touching the screen and then dragging your finger
                            // causes the window content to scroll after some distance threshold is
                            // exceeded. On these platforms, a scroll prevents a click event from being
                            // dispatched, and on some platforms, even the touchend is suppressed. To
                            // mimic the suppression of the click event, we need to watch for a scroll
                            // event. Unfortunately, some platforms like iOS don't dispatch scroll
                            // events until *AFTER* the user lifts their finger (touchend). This means
                            // we need to watch both scroll and touchmove events to figure out whether
                            // or not a scroll happenens before the touchend event is fired.

                            .bind("touchmove", handleTouchMove)
                                .bind("scroll", handleScroll);
                        }
                    }
                },

                teardown: function( /* data, namespace */ ) {
                    // If this is the last virtual binding for this eventType,
                    // remove its global handler from the document.

                    --activeDocHandlers[eventType];

                    if (!activeDocHandlers[eventType]) {
                        $document.unbind(realType, mouseEventCallback);
                    }

                    if (eventCaptureSupported) {
                        // If this is the last virtual mouse binding in existence,
                        // remove our document touchstart listener.

                        --activeDocHandlers["touchstart"];

                        if (!activeDocHandlers["touchstart"]) {
                            $document.unbind("touchstart", handleTouchStart)
                                .unbind("touchmove", handleTouchMove)
                                .unbind("touchend", handleTouchEnd)
                                .unbind("scroll", handleScroll);
                        }
                    }

                    var $this = $(this),
                        bindings = $.data(this, dataPropertyName);

                    // teardown may be called when an element was
                    // removed from the DOM. If this is the case,
                    // jQuery core may have already stripped the element
                    // of any data bindings so we need to check it before
                    // using it.
                    if (bindings) {
                        bindings[eventType] = false;
                    }

                    // Unregister the dummy event handler.

                    $this.unbind(realType, dummyMouseHandler);

                    // If this is the last virtual mouse binding on the
                    // element, remove the binding data from the element.

                    if (!hasVirtualBindings(this)) {
                        $this.removeData(dataPropertyName);
                    }
                }
            };
        }

        // Expose our custom events to the jQuery bind/unbind mechanism.

        for (i = 0; i < virtualEventNames.length; i++) {
            $.event.special[virtualEventNames[i]] = getSpecialEventObject(virtualEventNames[i]);
        }

        // Add a capture click handler to block clicks.
        // Note that we require event capture support for this so if the device
        // doesn't support it, we punt for now and rely solely on mouse events.
        if (eventCaptureSupported) {
            document.addEventListener("click", function(e) {
                var cnt = clickBlockList.length,
                    target = e.target,
                    x, y, ele, i, o, touchID;

                if (cnt) {
                    x = e.clientX;
                    y = e.clientY;
                    threshold = $.vmouse.clickDistanceThreshold;

                    // The idea here is to run through the clickBlockList to see if
                    // the current click event is in the proximity of one of our
                    // vclick events that had preventDefault() called on it. If we find
                    // one, then we block the click.
                    //
                    // Why do we have to rely on proximity?
                    //
                    // Because the target of the touch event that triggered the vclick
                    // can be different from the target of the click event synthesized
                    // by the browser. The target of a mouse/click event that is synthesized
                    // from a touch event seems to be implementation specific. For example,
                    // some browsers will fire mouse/click events for a link that is near
                    // a touch event, even though the target of the touchstart/touchend event
                    // says the user touched outside the link. Also, it seems that with most
                    // browsers, the target of the mouse/click event is not calculated until the
                    // time it is dispatched, so if you replace an element that you touched
                    // with another element, the target of the mouse/click will be the new
                    // element underneath that point.
                    //
                    // Aside from proximity, we also check to see if the target and any
                    // of its ancestors were the ones that blocked a click. This is necessary
                    // because of the strange mouse/click target calculation done in the
                    // Android 2.1 browser, where if you click on an element, and there is a
                    // mouse/click handler on one of its ancestors, the target will be the
                    // innermost child of the touched element, even if that child is no where
                    // near the point of touch.

                    ele = target;

                    while (ele) {
                        for (i = 0; i < cnt; i++) {
                            o = clickBlockList[i];
                            touchID = 0;

                            if ((ele === target && Math.abs(o.x - x) < threshold && Math.abs(o.y - y) < threshold) ||
                                $.data(ele, touchTargetPropertyName) === o.touchID) {
                                // XXX: We may want to consider removing matches from the block list
                                //      instead of waiting for the reset timer to fire.
                                e.preventDefault();
                                e.stopPropagation();
                                return;
                            }
                        }
                        ele = ele.parentNode;
                    }
                }
            }, true);
        }
    })(jQuery, window, document);

    (function($) {
        $.mobile = {};
    }(jQuery));

    (function($, undefined) {
        var support = {
            touch: "ontouchend" in document
        };

        $.mobile.support = $.mobile.support || {};
        $.extend($.support, support);
        $.extend($.mobile.support, support);
    }(jQuery));


    (function($, window, undefined) {
        var $document = $(document),
            supportTouch = $.mobile.support.touch,
            scrollEvent = "touchmove scroll",
            touchStartEvent = supportTouch ? "touchstart" : "mousedown",
            touchStopEvent = supportTouch ? "touchend" : "mouseup",
            touchMoveEvent = supportTouch ? "touchmove" : "mousemove";

        // setup new event shortcuts
        $.each(("touchstart touchmove touchend " +
            "tap taphold " +
            "swipe swipeleft swiperight " +
            "scrollstart scrollstop").split(" "), function(i, name) {

            $.fn[name] = function(fn) {
                return fn ? this.bind(name, fn) : this.trigger(name);
            };

            // jQuery < 1.8
            if ($.attrFn) {
                $.attrFn[name] = true;
            }
        });

        function triggerCustomEvent(obj, eventType, event, bubble) {
            var originalType = event.type;
            event.type = eventType;
            if (bubble) {
                $.event.trigger(event, undefined, obj);
            } else {
                $.event.dispatch.call(obj, event);
            }
            event.type = originalType;
        }

        // also handles scrollstop
        $.event.special.scrollstart = {

            enabled: true,
            setup: function() {

                var thisObject = this,
                    $this = $(thisObject),
                    scrolling,
                    timer;

                function trigger(event, state) {
                    scrolling = state;
                    triggerCustomEvent(thisObject, scrolling ? "scrollstart" : "scrollstop", event);
                }

                // iPhone triggers scroll after a small delay; use touchmove instead
                $this.bind(scrollEvent, function(event) {

                    if (!$.event.special.scrollstart.enabled) {
                        return;
                    }

                    if (!scrolling) {
                        trigger(event, true);
                    }

                    clearTimeout(timer);
                    timer = setTimeout(function() {
                        trigger(event, false);
                    }, 50);
                });
            },
            teardown: function() {
                $(this).unbind(scrollEvent);
            }
        };

        // also handles taphold
        $.event.special.tap = {
            tapholdThreshold: 750,
            emitTapOnTaphold: true,
            setup: function() {
                var thisObject = this,
                    $this = $(thisObject),
                    isTaphold = false;

                $this.bind("vmousedown", function(event) {
                    isTaphold = false;
                    if (event.which && event.which !== 1) {
                        return false;
                    }

                    var origTarget = event.target,
                        timer;

                    function clearTapTimer() {
                        clearTimeout(timer);
                    }

                    function clearTapHandlers() {
                        clearTapTimer();

                        $this.unbind("vclick", clickHandler)
                            .unbind("vmouseup", clearTapTimer);
                        $document.unbind("vmousecancel", clearTapHandlers);
                    }

                    function clickHandler(event) {
                        clearTapHandlers();

                        // ONLY trigger a 'tap' event if the start target is
                        // the same as the stop target.
                        if (!isTaphold && origTarget === event.target) {
                            triggerCustomEvent(thisObject, "tap", event);
                        } else if (isTaphold) {
                            event.preventDefault();
                        }
                    }

                    $this.bind("vmouseup", clearTapTimer)
                        .bind("vclick", clickHandler);
                    $document.bind("vmousecancel", clearTapHandlers);

                    timer = setTimeout(function() {
                        if (!$.event.special.tap.emitTapOnTaphold) {
                            isTaphold = true;
                        }
                        triggerCustomEvent(thisObject, "taphold", $.Event("taphold", {
                            target: origTarget
                        }));
                    }, $.event.special.tap.tapholdThreshold);
                });
            },
            teardown: function() {
                $(this).unbind("vmousedown").unbind("vclick").unbind("vmouseup");
                $document.unbind("vmousecancel");
            }
        };

        // Also handles swipeleft, swiperight
        $.event.special.swipe = {

            // More than this horizontal displacement, and we will suppress scrolling.
            scrollSupressionThreshold: 30,

            // More time than this, and it isn't a swipe.
            durationThreshold: 1000,

            // Swipe horizontal displacement must be more than this.
            horizontalDistanceThreshold: 30,

            // Swipe vertical displacement must be less than this.
            verticalDistanceThreshold: 30,

            getLocation: function(event) {
                var winPageX = window.pageXOffset,
                    winPageY = window.pageYOffset,
                    x = event.clientX,
                    y = event.clientY;

                if (event.pageY === 0 && Math.floor(y) > Math.floor(event.pageY) ||
                    event.pageX === 0 && Math.floor(x) > Math.floor(event.pageX)) {

                    // iOS4 clientX/clientY have the value that should have been
                    // in pageX/pageY. While pageX/page/ have the value 0
                    x = x - winPageX;
                    y = y - winPageY;
                } else if (y < (event.pageY - winPageY) || x < (event.pageX - winPageX)) {

                    // Some Android browsers have totally bogus values for clientX/Y
                    // when scrolling/zooming a page. Detectable since clientX/clientY
                    // should never be smaller than pageX/pageY minus page scroll
                    x = event.pageX - winPageX;
                    y = event.pageY - winPageY;
                }

                return {
                    x: x,
                    y: y
                };
            },

            start: function(event) {
                var data = event.originalEvent.touches ?
                    event.originalEvent.touches[0] : event,
                    location = $.event.special.swipe.getLocation(data);
                return {
                    time: (new Date()).getTime(),
                    coords: [location.x, location.y],
                    origin: $(event.target)
                };
            },

            stop: function(event) {
                var data = event.originalEvent.touches ?
                    event.originalEvent.touches[0] : event,
                    location = $.event.special.swipe.getLocation(data);
                return {
                    time: (new Date()).getTime(),
                    coords: [location.x, location.y]
                };
            },

            handleSwipe: function(start, stop, thisObject, origTarget) {
                if (stop.time - start.time < $.event.special.swipe.durationThreshold &&
                    Math.abs(start.coords[0] - stop.coords[0]) > $.event.special.swipe.horizontalDistanceThreshold &&
                    Math.abs(start.coords[1] - stop.coords[1]) < $.event.special.swipe.verticalDistanceThreshold) {
                    var direction = start.coords[0] > stop.coords[0] ? "swipeleft" : "swiperight";

                    triggerCustomEvent(thisObject, "swipe", $.Event("swipe", {
                        target: origTarget,
                        swipestart: start,
                        swipestop: stop
                    }), true);
                    triggerCustomEvent(thisObject, direction, $.Event(direction, {
                        target: origTarget,
                        swipestart: start,
                        swipestop: stop
                    }), true);
                    return true;
                }
                return false;

            },

            // This serves as a flag to ensure that at most one swipe event event is
            // in work at any given time
            eventInProgress: false,

            setup: function() {
                var events,
                    thisObject = this,
                    $this = $(thisObject),
                    context = {};

                // Retrieve the events data for this element and add the swipe context
                events = $.data(this, "mobile-events");
                if (!events) {
                    events = {
                        length: 0
                    };
                    $.data(this, "mobile-events", events);
                }
                events.length++;
                events.swipe = context;

                context.start = function(event) {

                    // Bail if we're already working on a swipe event
                    if ($.event.special.swipe.eventInProgress) {
                        return;
                    }
                    $.event.special.swipe.eventInProgress = true;

                    var stop,
                        start = $.event.special.swipe.start(event),
                        origTarget = event.target,
                        emitted = false;

                    context.move = function(event) {
                        if (!start || event.isDefaultPrevented()) {
                            return;
                        }

                        stop = $.event.special.swipe.stop(event);
                        if (!emitted) {
                            emitted = $.event.special.swipe.handleSwipe(start, stop, thisObject, origTarget);
                            if (emitted) {

                                // Reset the context to make way for the next swipe event
                                $.event.special.swipe.eventInProgress = false;
                            }
                        }
                        // prevent scrolling
                        if (Math.abs(start.coords[0] - stop.coords[0]) > $.event.special.swipe.scrollSupressionThreshold) {
                            event.preventDefault();
                        }
                    };

                    context.stop = function() {
                        emitted = true;

                        // Reset the context to make way for the next swipe event
                        $.event.special.swipe.eventInProgress = false;
                        $document.off(touchMoveEvent, context.move);
                        context.move = null;
                    };

                    $document.on(touchMoveEvent, context.move)
                        .one(touchStopEvent, context.stop);
                };
                $this.on(touchStartEvent, context.start);
            },

            teardown: function() {
                var events, context;

                events = $.data(this, "mobile-events");
                if (events) {
                    context = events.swipe;
                    delete events.swipe;
                    events.length--;
                    if (events.length === 0) {
                        $.removeData(this, "mobile-events");
                    }
                }

                if (context) {
                    if (context.start) {
                        $(this).off(touchStartEvent, context.start);
                    }
                    if (context.move) {
                        $document.off(touchMoveEvent, context.move);
                    }
                    if (context.stop) {
                        $document.off(touchStopEvent, context.stop);
                    }
                }
            }
        };
        $.each({
            scrollstop: "scrollstart",
            taphold: "tap",
            swipeleft: "swipe.left",
            swiperight: "swipe.right"
        }, function(event, sourceEvent) {

            $.event.special[event] = {
                setup: function() {
                    $(this).bind(sourceEvent, $.noop);
                },
                teardown: function() {
                    $(this).unbind(sourceEvent);
                }
            };
        });

    })(jQuery, this);


}));

!function(t,e){"function"==typeof define&&define.amd?define("eve",function(){return e()}):"object"==typeof exports?module.exports=e():t.eve=e()}(this,function(){var t,e,i="0.4.2",r="hasOwnProperty",n=/[\.\/]/,s=function(){},a=function(t,e){return t-e},o={n:{}},h=function(i,r){i=String(i);var n,s=e,o=Array.prototype.slice.call(arguments,2),l=h.listeners(i),c=0,u=[],d={},f=[],p=t;t=i,e=0;for(var g=0,v=l.length;v>g;g++)"zIndex"in l[g]&&(u.push(l[g].zIndex),l[g].zIndex<0&&(d[l[g].zIndex]=l[g]));for(u.sort(a);u[c]<0;)if(n=d[u[c++]],f.push(n.apply(r,o)),e)return e=s,f;for(g=0;v>g;g++)if("zIndex"in(n=l[g]))if(n.zIndex==u[c]){if(f.push(n.apply(r,o)),e)break;do{if((n=d[u[++c]])&&f.push(n.apply(r,o)),e)break}while(n)}else d[n.zIndex]=n;else if(f.push(n.apply(r,o)),e)break;return e=s,t=p,f.length?f:null};return h._events=o,h.listeners=function(t){var e,i,r,s,a,h,l,c,u=t.split(n),d=o,f=[d],p=[];for(s=0,a=u.length;a>s;s++){for(c=[],h=0,l=f.length;l>h;h++)for(i=[(d=f[h].n)[u[s]],d["*"]],r=2;r--;)(e=i[r])&&(c.push(e),p=p.concat(e.f||[]));f=c}return p},h.on=function(t,e){if(t=String(t),"function"!=typeof e)return function(){};for(var i=t.split(n),r=o,a=0,h=i.length;h>a;a++)r=(r=r.n).hasOwnProperty(i[a])&&r[i[a]]||(r[i[a]]={n:{}});for(r.f=r.f||[],a=0,h=r.f.length;h>a;a++)if(r.f[a]==e)return s;return r.f.push(e),function(t){+t==+t&&(e.zIndex=+t)}},h.f=function(t){var e=[].slice.call(arguments,1);return function(){h.apply(null,[t,null].concat(e).concat([].slice.call(arguments,0)))}},h.stop=function(){e=1},h.nt=function(e){return e?new RegExp("(?:\\.|\\/|^)"+e+"(?:\\.|\\/|$)").test(t):t},h.nts=function(){return t.split(n)},h.off=h.unbind=function(t,e){if(t){var i,s,a,l,c,u,d,f=t.split(n),p=[o];for(l=0,c=f.length;c>l;l++)for(u=0;u<p.length;u+=a.length-2){if(a=[u,1],i=p[u].n,"*"!=f[l])i[f[l]]&&a.push(i[f[l]]);else for(s in i)i[r](s)&&a.push(i[s]);p.splice.apply(p,a)}for(l=0,c=p.length;c>l;l++)for(i=p[l];i.n;){if(e){if(i.f){for(u=0,d=i.f.length;d>u;u++)if(i.f[u]==e){i.f.splice(u,1);break}!i.f.length&&delete i.f}for(s in i.n)if(i.n[r](s)&&i.n[s].f){var g=i.n[s].f;for(u=0,d=g.length;d>u;u++)if(g[u]==e){g.splice(u,1);break}!g.length&&delete i.n[s].f}}else for(s in delete i.f,i.n)i.n[r](s)&&i.n[s].f&&delete i.n[s].f;i=i.n}}else h._events=o={n:{}}},h.once=function(t,e){var i=function(){return h.unbind(t,i),e.apply(this,arguments)};return h.on(t,i)},h.version=i,h.toString=function(){return"You are running Eve "+i},h}),function(t,e){"function"==typeof define&&define.amd?define("raphael.core",["eve"],function(t){return e(t)}):"object"==typeof exports?module.exports=e(require("eve")):t.Raphael=e(t.eve)}(this,function(t){function e(i){if(e.is(i,"function"))return y?i():t.on("raphael.DOMload",i);if(e.is(i,q))return e._engine.create[T](e,i.splice(0,3+e.is(i[0],H))).add(i);var r=Array.prototype.slice.call(arguments,0);if(e.is(r[r.length-1],"function")){var n=r.pop();return y?n.call(e._engine.create[T](e,r)):t.on("raphael.DOMload",function(){n.call(e._engine.create[T](e,r))})}return e._engine.create[T](e,arguments)}function i(t){if("function"==typeof t||Object(t)!==t)return t;var e=new t.constructor;for(var r in t)t[_](r)&&(e[r]=i(t[r]));return e}function r(t,e,i){return function r(){var n=Array.prototype.slice.call(arguments,0),s=n.join("␀"),a=r.cache=r.cache||{},o=r.count=r.count||[];return a[_](s)?(function(t,e){for(var i=0,r=t.length;r>i;i++)if(t[i]===e)return t.push(t.splice(i,1)[0])}(o,s),i?i(a[s]):a[s]):(o.length>=1e3&&delete a[o.shift()],o.push(s),a[s]=t[T](e,n),i?i(a[s]):a[s])}}function n(){return this.hex}function s(t,e){for(var i=[],r=0,n=t.length;n-2*!e>r;r+=2){var s=[{x:+t[r-2],y:+t[r-1]},{x:+t[r],y:+t[r+1]},{x:+t[r+2],y:+t[r+3]},{x:+t[r+4],y:+t[r+5]}];e?r?n-4==r?s[3]={x:+t[0],y:+t[1]}:n-2==r&&(s[2]={x:+t[0],y:+t[1]},s[3]={x:+t[2],y:+t[3]}):s[0]={x:+t[n-2],y:+t[n-1]}:n-4==r?s[3]=s[2]:r||(s[0]={x:+t[r],y:+t[r+1]}),i.push(["C",(-s[0].x+6*s[1].x+s[2].x)/6,(-s[0].y+6*s[1].y+s[2].y)/6,(s[1].x+6*s[2].x-s[3].x)/6,(s[1].y+6*s[2].y-s[3].y)/6,s[2].x,s[2].y])}return i}function a(t,e,i,r,n){return t*(t*(-3*e+9*i-9*r+3*n)+6*e-12*i+6*r)-3*e+3*i}function o(t,e,i,r,n,s,o,h,l){null==l&&(l=1);for(var c=(l=l>1?1:0>l?0:l)/2,u=[-.1252,.1252,-.3678,.3678,-.5873,.5873,-.7699,.7699,-.9041,.9041,-.9816,.9816],d=[.2491,.2491,.2335,.2335,.2032,.2032,.1601,.1601,.1069,.1069,.0472,.0472],f=0,p=0;12>p;p++){var g=c*u[p]+c,v=a(g,t,i,n,o),y=a(g,e,r,s,h),x=v*v+y*y;f+=d[p]*P.sqrt(x)}return c*f}function h(t,e,i,r,n,s,a,o){if(!(D(t,i)<G(n,a)||G(t,i)>D(n,a)||D(e,r)<G(s,o)||G(e,r)>D(s,o))){var h=(t-i)*(s-o)-(e-r)*(n-a);if(h){var l=((t*r-e*i)*(n-a)-(t-i)*(n*o-s*a))/h,c=((t*r-e*i)*(s-o)-(e-r)*(n*o-s*a))/h,u=+l.toFixed(2),d=+c.toFixed(2);if(!(u<+G(t,i).toFixed(2)||u>+D(t,i).toFixed(2)||u<+G(n,a).toFixed(2)||u>+D(n,a).toFixed(2)||d<+G(e,r).toFixed(2)||d>+D(e,r).toFixed(2)||d<+G(s,o).toFixed(2)||d>+D(s,o).toFixed(2)))return{x:l,y:c}}}}function l(t,i,r){var n=e.bezierBBox(t),s=e.bezierBBox(i);if(!e.isBBoxIntersect(n,s))return r?0:[];for(var a=o.apply(0,t),l=o.apply(0,i),c=D(~~(a/5),1),u=D(~~(l/5),1),d=[],f=[],p={},g=r?0:[],v=0;c+1>v;v++){var y=e.findDotsAtSegment.apply(e,t.concat(v/c));d.push({x:y.x,y:y.y,t:v/c})}for(v=0;u+1>v;v++)y=e.findDotsAtSegment.apply(e,i.concat(v/u)),f.push({x:y.x,y:y.y,t:v/u});for(v=0;c>v;v++)for(var x=0;u>x;x++){var m=d[v],b=d[v+1],w=f[x],_=f[x+1],C=R(b.x-m.x)<.001?"y":"x",k=R(_.x-w.x)<.001?"y":"x",S=h(m.x,m.y,b.x,b.y,w.x,w.y,_.x,_.y);if(S){if(p[S.x.toFixed(4)]==S.y.toFixed(4))continue;p[S.x.toFixed(4)]=S.y.toFixed(4);var T=m.t+R((S[C]-m[C])/(b[C]-m[C]))*(b.t-m.t),N=w.t+R((S[k]-w[k])/(_[k]-w[k]))*(_.t-w.t);T>=0&&1.001>=T&&N>=0&&1.001>=N&&(r?g++:g.push({x:S.x,y:S.y,t1:G(T,1),t2:G(N,1)}))}}return g}function c(t,i,r){t=e._path2curve(t),i=e._path2curve(i);for(var n,s,a,o,h,c,u,d,f,p,g=r?0:[],v=0,y=t.length;y>v;v++){var x=t[v];if("M"==x[0])n=h=x[1],s=c=x[2];else{"C"==x[0]?(f=[n,s].concat(x.slice(1)),n=f[6],s=f[7]):(f=[n,s,n,s,h,c,h,c],n=h,s=c);for(var m=0,b=i.length;b>m;m++){var w=i[m];if("M"==w[0])a=u=w[1],o=d=w[2];else{"C"==w[0]?(p=[a,o].concat(w.slice(1)),a=p[6],o=p[7]):(p=[a,o,a,o,u,d,u,d],a=u,o=d);var _=l(f,p,r);if(r)g+=_;else{for(var C=0,k=_.length;k>C;C++)_[C].segment1=v,_[C].segment2=m,_[C].bez1=f,_[C].bez2=p;g=g.concat(_)}}}}}return g}function u(t,e,i,r,n,s){null!=t?(this.a=+t,this.b=+e,this.c=+i,this.d=+r,this.e=+n,this.f=+s):(this.a=1,this.b=0,this.c=0,this.d=1,this.e=0,this.f=0)}function d(){return this.x+M+this.y+M+this.width+" × "+this.height}function f(t,e,i,r,n,s){function a(t){return((l*t+h)*t+o)*t}var o=3*e,h=3*(r-e)-o,l=1-o-h,c=3*i,u=3*(n-i)-c,d=1-c-u;return function(t,e){var i=function(t,e){var i,r,n,s,c,u;for(n=t,u=0;8>u;u++){if(s=a(n)-t,R(s)<e)return n;if(R(c=(3*l*n+2*h)*n+o)<1e-6)break;n-=s/c}if(r=1,(i=0)>(n=t))return i;if(n>r)return r;for(;r>i;){if(s=a(n),R(s-t)<e)return n;t>s?i=n:r=n,n=(r-i)/2+i}return n}(t,e);return((d*i+u)*i+c)*i}(t,1/(200*s))}function p(t,e){var i=[],r={};if(this.ms=e,this.times=1,t){for(var n in t)t[_](n)&&(r[Q(n)]=t[n],i.push(Q(n)));i.sort(ht)}this.anim=r,this.top=i[i.length-1],this.percents=i}function g(i,r,n,s,a,o){n=Q(n);var h,l,c,d,p,g,v=i.ms,y={},x={},b={};if(s)for(C=0,k=ie.length;k>C;C++){var w=ie[C];if(w.el.id==r.id&&w.anim==i){w.percent!=n?(ie.splice(C,1),c=1):l=w,r.attr(w.totalOrigin);break}}else s=+x;for(var C=0,k=i.percents.length;k>C;C++){if(i.percents[C]==n||i.percents[C]>s*i.top){n=i.percents[C],p=i.percents[C-1]||0,v=v/i.top*(n-p),d=i.percents[C+1],h=i.anim[n];break}s&&r.attr(i.anim[i.percents[C]])}if(h){if(l)l.initstatus=s,l.start=new Date-l.ms*s;else{for(var S in h)if(h[_](S)&&(tt[_](S)||r.paper.customAttributes[_](S)))switch(y[S]=r.attr(S),null==y[S]&&(y[S]=K[S]),x[S]=h[S],tt[S]){case H:b[S]=(x[S]-y[S])/v;break;case"colour":y[S]=e.getRGB(y[S]);var T=e.getRGB(x[S]);b[S]={r:(T.r-y[S].r)/v,g:(T.g-y[S].g)/v,b:(T.b-y[S].b)/v};break;case"path":var B=It(y[S],x[S]),O=B[1];for(y[S]=B[0],b[S]=[],C=0,k=y[S].length;k>C;C++){b[S][C]=[0];for(var M=1,F=y[S][C].length;F>M;M++)b[S][C][M]=(O[C][M]-y[S][C][M])/v}break;case"transform":var L=r._,E=Dt(L[S],x[S]);if(E)for(y[S]=E.from,x[S]=E.to,b[S]=[],b[S].real=!0,C=0,k=y[S].length;k>C;C++)for(b[S][C]=[y[S][C][0]],M=1,F=y[S][C].length;F>M;M++)b[S][C][M]=(x[S][C][M]-y[S][C][M])/v;else{var P=r.matrix||new u,D={_:{transform:L.transform},getBBox:function(){return r.getBBox(1)}};y[S]=[P.a,P.b,P.c,P.d,P.e,P.f],Et(D,x[S]),x[S]=D._.transform,b[S]=[(D.matrix.a-P.a)/v,(D.matrix.b-P.b)/v,(D.matrix.c-P.c)/v,(D.matrix.d-P.d)/v,(D.matrix.e-P.e)/v,(D.matrix.f-P.f)/v]}break;case"csv":var G=A(h[S])[I](m),R=A(y[S])[I](m);if("clip-rect"==S)for(y[S]=R,b[S]=[],C=R.length;C--;)b[S][C]=(G[C]-y[S][C])/v;x[S]=G;break;default:for(G=[][N](h[S]),R=[][N](y[S]),b[S]=[],C=r.paper.customAttributes[S].length;C--;)b[S][C]=((G[C]||0)-(R[C]||0))/v}var z=h.easing,j=e.easing_formulas[z];if(!j)if((j=A(z).match(U))&&5==j.length){var W=j;j=function(t){return f(t,+W[1],+W[2],+W[3],+W[4],v)}}else j=lt;if(w={anim:i,percent:n,timestamp:g=h.start||i.start||+new Date,start:g+(i.del||0),status:0,initstatus:s||0,stop:!1,ms:v,easing:j,from:y,diff:b,to:x,el:r,callback:h.callback,prev:p,next:d,repeat:o||i.times,origin:r.attr(),totalOrigin:a},ie.push(w),s&&!l&&!c&&(w.stop=!0,w.start=new Date-v*s,1==ie.length))return ne();c&&(w.start=new Date-w.ms*s),1==ie.length&&re(ne)}t("raphael.anim.start."+r.id,r,i)}}function v(t){for(var e=0;e<ie.length;e++)ie[e].el.paper==t&&ie.splice(e--,1)}e.version="2.1.4",e.eve=t;var y,x,m=/[, ]+/,b={circle:1,rect:1,path:1,ellipse:1,text:1,image:1},w=/\{(\d+)\}/g,_="hasOwnProperty",C={doc:document,win:window},k={was:Object.prototype[_].call(C.win,"Raphael"),is:C.win.Raphael},S=function(){this.ca=this.customAttributes={}},T="apply",N="concat",B="ontouchstart"in C.win||C.win.DocumentTouch&&C.doc instanceof DocumentTouch,O="",M=" ",A=String,I="split",F="click dblclick mousedown mousemove mouseout mouseover mouseup touchstart touchmove touchend touchcancel"[I](M),L={mousedown:"touchstart",mousemove:"touchmove",mouseup:"touchend"},E=A.prototype.toLowerCase,P=Math,D=P.max,G=P.min,R=P.abs,z=P.pow,j=P.PI,H="number",W="string",q="array",Y=Object.prototype.toString,X=(e._ISURL=/^url\(['"]?(.+?)['"]?\)$/i,/^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\))\s*$/i),V={NaN:1,Infinity:1,"-Infinity":1},U=/^(?:cubic-)?bezier\(([^,]+),([^,]+),([^,]+),([^\)]+)\)/,$=P.round,Q=parseFloat,Z=parseInt,J=A.prototype.toUpperCase,K=e._availableAttrs={"arrow-end":"none","arrow-start":"none",blur:0,"clip-rect":"0 0 1e9 1e9",cursor:"default",cx:0,cy:0,fill:"#fff","fill-opacity":1,font:'10px "Arial"',"font-family":'"Arial"',"font-size":"10","font-style":"normal","font-weight":400,gradient:0,height:0,href:"http://raphaeljs.com/","letter-spacing":0,opacity:1,path:"M0,0",r:0,rx:0,ry:0,src:"",stroke:"#000","stroke-dasharray":"","stroke-linecap":"butt","stroke-linejoin":"butt","stroke-miterlimit":0,"stroke-opacity":1,"stroke-width":1,target:"_blank","text-anchor":"middle",title:"Raphael",transform:"",width:0,x:0,y:0},tt=e._availableAnimAttrs={blur:H,"clip-rect":"csv",cx:H,cy:H,fill:"colour","fill-opacity":H,"font-size":H,height:H,opacity:H,path:"path",r:H,rx:H,ry:H,stroke:"colour","stroke-opacity":H,"stroke-width":H,transform:"transform",width:H,x:H,y:H},et=/[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/,it={hs:1,rg:1},rt=/,?([achlmqrstvxz]),?/gi,nt=/([achlmrqstvz])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/gi,st=/([rstm])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/gi,at=/(-?\d*\.?\d*(?:e[\-+]?\d+)?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/gi,ot=(e._radial_gradient=/^r(?:\(([^,]+?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*([^\)]+?)\))?/,{}),ht=function(t,e){return Q(t)-Q(e)},lt=function(t){return t},ct=e._rectPath=function(t,e,i,r,n){return n?[["M",t+n,e],["l",i-2*n,0],["a",n,n,0,0,1,n,n],["l",0,r-2*n],["a",n,n,0,0,1,-n,n],["l",2*n-i,0],["a",n,n,0,0,1,-n,-n],["l",0,2*n-r],["a",n,n,0,0,1,n,-n],["z"]]:[["M",t,e],["l",i,0],["l",0,r],["l",-i,0],["z"]]},ut=function(t,e,i,r){return null==r&&(r=i),[["M",t,e],["m",0,-r],["a",i,r,0,1,1,0,2*r],["a",i,r,0,1,1,0,-2*r],["z"]]},dt=e._getPath={path:function(t){return t.attr("path")},circle:function(t){var e=t.attrs;return ut(e.cx,e.cy,e.r)},ellipse:function(t){var e=t.attrs;return ut(e.cx,e.cy,e.rx,e.ry)},rect:function(t){var e=t.attrs;return ct(e.x,e.y,e.width,e.height,e.r)},image:function(t){var e=t.attrs;return ct(e.x,e.y,e.width,e.height)},text:function(t){var e=t._getBBox();return ct(e.x,e.y,e.width,e.height)},set:function(t){var e=t._getBBox();return ct(e.x,e.y,e.width,e.height)}},ft=e.mapPath=function(t,e){if(!e)return t;var i,r,n,s,a,o,h;for(n=0,a=(t=It(t)).length;a>n;n++)for(s=1,o=(h=t[n]).length;o>s;s+=2)i=e.x(h[s],h[s+1]),r=e.y(h[s],h[s+1]),h[s]=i,h[s+1]=r;return t};if(e._g=C,e.type=C.win.SVGAngle||C.doc.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1")?"SVG":"VML","VML"==e.type){var pt,gt=C.doc.createElement("div");if(gt.innerHTML='<v:shape adj="1"/>',(pt=gt.firstChild).style.behavior="url(#default#VML)",!pt||"object"!=typeof pt.adj)return e.type=O;gt=null}e.svg=!(e.vml="VML"==e.type),e._Paper=S,e.fn=x=S.prototype=e.prototype,e._id=0,e._oid=0,e.is=function(t,e){return"finite"==(e=E.call(e))?!V[_](+t):"array"==e?t instanceof Array:"null"==e&&null===t||e==typeof t&&null!==t||"object"==e&&t===Object(t)||"array"==e&&Array.isArray&&Array.isArray(t)||Y.call(t).slice(8,-1).toLowerCase()==e},e.angle=function(t,i,r,n,s,a){if(null==s){var o=t-r,h=i-n;return o||h?(180+180*P.atan2(-h,-o)/j+360)%360:0}return e.angle(t,i,s,a)-e.angle(r,n,s,a)},e.rad=function(t){return t%360*j/180},e.deg=function(t){return Math.round(180*t/j%360*1e3)/1e3},e.snapTo=function(t,i,r){if(r=e.is(r,"finite")?r:10,e.is(t,q)){for(var n=t.length;n--;)if(R(t[n]-i)<=r)return t[n]}else{var s=i%(t=+t);if(r>s)return i-s;if(s>t-r)return i-s+t}return i},e.createUUID=function(t,e){return function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(t,e).toUpperCase()}}(/[xy]/g,function(t){var e=16*P.random()|0;return("x"==t?e:3&e|8).toString(16)}),e.setWindow=function(i){t("raphael.setWindow",e,C.win,i),C.win=i,C.doc=C.win.document,e._engine.initWin&&e._engine.initWin(C.win)};var vt=function(t){if(e.vml){var i,n=/^\s+|\s+$/g;try{var s=new ActiveXObject("htmlfile");s.write("<body>"),s.close(),i=s.body}catch(t){i=createPopup().document.body}var a=i.createTextRange();vt=r(function(t){try{i.style.color=A(t).replace(n,O);var e=a.queryCommandValue("ForeColor");return"#"+("000000"+(e=(255&e)<<16|65280&e|(16711680&e)>>>16).toString(16)).slice(-6)}catch(t){return"none"}})}else{var o=C.doc.createElement("i");o.title="Raphaël Colour Picker",o.style.display="none",C.doc.body.appendChild(o),vt=r(function(t){return o.style.color=t,C.doc.defaultView.getComputedStyle(o,O).getPropertyValue("color")})}return vt(t)},yt=function(){return"hsb("+[this.h,this.s,this.b]+")"},xt=function(){return"hsl("+[this.h,this.s,this.l]+")"},mt=function(){return this.hex},bt=function(t,i,r){if(null==i&&e.is(t,"object")&&"r"in t&&"g"in t&&"b"in t&&(r=t.b,i=t.g,t=t.r),null==i&&e.is(t,W)){var n=e.getRGB(t);t=n.r,i=n.g,r=n.b}return(t>1||i>1||r>1)&&(t/=255,i/=255,r/=255),[t,i,r]},wt=function(t,i,r,n){var s={r:t*=255,g:i*=255,b:r*=255,hex:e.rgb(t,i,r),toString:mt};return e.is(n,"finite")&&(s.opacity=n),s};e.color=function(t){var i;return e.is(t,"object")&&"h"in t&&"s"in t&&"b"in t?(i=e.hsb2rgb(t),t.r=i.r,t.g=i.g,t.b=i.b,t.hex=i.hex):e.is(t,"object")&&"h"in t&&"s"in t&&"l"in t?(i=e.hsl2rgb(t),t.r=i.r,t.g=i.g,t.b=i.b,t.hex=i.hex):(e.is(t,"string")&&(t=e.getRGB(t)),e.is(t,"object")&&"r"in t&&"g"in t&&"b"in t?(i=e.rgb2hsl(t),t.h=i.h,t.s=i.s,t.l=i.l,i=e.rgb2hsb(t),t.v=i.b):(t={hex:"none"}).r=t.g=t.b=t.h=t.s=t.v=t.l=-1),t.toString=mt,t},e.hsb2rgb=function(t,e,i,r){var n,s,a,o,h;return this.is(t,"object")&&"h"in t&&"s"in t&&"b"in t&&(i=t.b,e=t.s,r=t.o,t=t.h),o=(h=i*e)*(1-R((t=(t*=360)%360/60)%2-1)),n=s=a=i-h,wt(n+=[h,o,0,0,o,h][t=~~t],s+=[o,h,h,o,0,0][t],a+=[0,0,o,h,h,o][t],r)},e.hsl2rgb=function(t,e,i,r){var n,s,a,o,h;return this.is(t,"object")&&"h"in t&&"s"in t&&"l"in t&&(i=t.l,e=t.s,t=t.h),(t>1||e>1||i>1)&&(t/=360,e/=100,i/=100),o=(h=2*e*(.5>i?i:1-i))*(1-R((t=(t*=360)%360/60)%2-1)),n=s=a=i-h/2,wt(n+=[h,o,0,0,o,h][t=~~t],s+=[o,h,h,o,0,0][t],a+=[0,0,o,h,h,o][t],r)},e.rgb2hsb=function(t,e,i){var r,n;return t=(i=bt(t,e,i))[0],e=i[1],i=i[2],{h:((0==(n=(r=D(t,e,i))-G(t,e,i))?null:r==t?(e-i)/n:r==e?(i-t)/n+2:(t-e)/n+4)+360)%6*60/360,s:0==n?0:n/r,b:r,toString:yt}},e.rgb2hsl=function(t,e,i){var r,n,s,a;return t=(i=bt(t,e,i))[0],e=i[1],i=i[2],r=((n=D(t,e,i))+(s=G(t,e,i)))/2,{h:((0==(a=n-s)?null:n==t?(e-i)/a:n==e?(i-t)/a+2:(t-e)/a+4)+360)%6*60/360,s:0==a?0:.5>r?a/(2*r):a/(2-2*r),l:r,toString:xt}},e._path2string=function(){return this.join(",").replace(rt,"$1")},e._preload=function(t,e){var i=C.doc.createElement("img");i.style.cssText="position:absolute;left:-9999em;top:-9999em",i.onload=function(){e.call(this),this.onload=null,C.doc.body.removeChild(this)},i.onerror=function(){C.doc.body.removeChild(this)},C.doc.body.appendChild(i),i.src=t},e.getRGB=r(function(t){if(!t||(t=A(t)).indexOf("-")+1)return{r:-1,g:-1,b:-1,hex:"none",error:1,toString:n};if("none"==t)return{r:-1,g:-1,b:-1,hex:"none",toString:n};!it[_](t.toLowerCase().substring(0,2))&&"#"!=t.charAt()&&(t=vt(t));var i,r,s,a,o,h,l=t.match(X);return l?(l[2]&&(s=Z(l[2].substring(5),16),r=Z(l[2].substring(3,5),16),i=Z(l[2].substring(1,3),16)),l[3]&&(s=Z((o=l[3].charAt(3))+o,16),r=Z((o=l[3].charAt(2))+o,16),i=Z((o=l[3].charAt(1))+o,16)),l[4]&&(h=l[4][I](et),i=Q(h[0]),"%"==h[0].slice(-1)&&(i*=2.55),r=Q(h[1]),"%"==h[1].slice(-1)&&(r*=2.55),s=Q(h[2]),"%"==h[2].slice(-1)&&(s*=2.55),"rgba"==l[1].toLowerCase().slice(0,4)&&(a=Q(h[3])),h[3]&&"%"==h[3].slice(-1)&&(a/=100)),l[5]?(h=l[5][I](et),i=Q(h[0]),"%"==h[0].slice(-1)&&(i*=2.55),r=Q(h[1]),"%"==h[1].slice(-1)&&(r*=2.55),s=Q(h[2]),"%"==h[2].slice(-1)&&(s*=2.55),("deg"==h[0].slice(-3)||"°"==h[0].slice(-1))&&(i/=360),"hsba"==l[1].toLowerCase().slice(0,4)&&(a=Q(h[3])),h[3]&&"%"==h[3].slice(-1)&&(a/=100),e.hsb2rgb(i,r,s,a)):l[6]?(h=l[6][I](et),i=Q(h[0]),"%"==h[0].slice(-1)&&(i*=2.55),r=Q(h[1]),"%"==h[1].slice(-1)&&(r*=2.55),s=Q(h[2]),"%"==h[2].slice(-1)&&(s*=2.55),("deg"==h[0].slice(-3)||"°"==h[0].slice(-1))&&(i/=360),"hsla"==l[1].toLowerCase().slice(0,4)&&(a=Q(h[3])),h[3]&&"%"==h[3].slice(-1)&&(a/=100),e.hsl2rgb(i,r,s,a)):((l={r:i,g:r,b:s,toString:n}).hex="#"+(16777216|s|r<<8|i<<16).toString(16).slice(1),e.is(a,"finite")&&(l.opacity=a),l)):{r:-1,g:-1,b:-1,hex:"none",error:1,toString:n}},e),e.hsb=r(function(t,i,r){return e.hsb2rgb(t,i,r).hex}),e.hsl=r(function(t,i,r){return e.hsl2rgb(t,i,r).hex}),e.rgb=r(function(t,e,i){function r(t){return t+.5|0}return"#"+(16777216|r(i)|r(e)<<8|r(t)<<16).toString(16).slice(1)}),e.getColor=function(t){var e=this.getColor.start=this.getColor.start||{h:0,s:1,b:t||.75},i=this.hsb2rgb(e.h,e.s,e.b);return e.h+=.075,e.h>1&&(e.h=0,e.s-=.2,e.s<=0&&(this.getColor.start={h:0,s:1,b:e.b})),i.hex},e.getColor.reset=function(){delete this.start},e.parsePathString=function(t){if(!t)return null;var i=_t(t);if(i.arr)return kt(i.arr);var r={a:7,c:6,h:1,l:2,m:2,r:4,q:4,s:4,t:2,v:1,z:0},n=[];return e.is(t,q)&&e.is(t[0],q)&&(n=kt(t)),n.length||A(t).replace(nt,function(t,e,i){var s=[],a=e.toLowerCase();if(i.replace(at,function(t,e){e&&s.push(+e)}),"m"==a&&s.length>2&&(n.push([e][N](s.splice(0,2))),a="l",e="m"==e?"l":"L"),"r"==a)n.push([e][N](s));else for(;s.length>=r[a]&&(n.push([e][N](s.splice(0,r[a]))),r[a]););}),n.toString=e._path2string,i.arr=kt(n),n},e.parseTransformString=r(function(t){if(!t)return null;var i=[];return e.is(t,q)&&e.is(t[0],q)&&(i=kt(t)),i.length||A(t).replace(st,function(t,e,r){var n=[];E.call(e),r.replace(at,function(t,e){e&&n.push(+e)}),i.push([e][N](n))}),i.toString=e._path2string,i});var _t=function(t){var e=_t.ps=_t.ps||{};return e[t]?e[t].sleep=100:e[t]={sleep:100},setTimeout(function(){for(var i in e)e[_](i)&&i!=t&&(e[i].sleep--,!e[i].sleep&&delete e[i])}),e[t]};e.findDotsAtSegment=function(t,e,i,r,n,s,a,o,h){var l=1-h,c=z(l,3),u=z(l,2),d=h*h,f=d*h,p=c*t+3*u*h*i+3*l*h*h*n+f*a,g=c*e+3*u*h*r+3*l*h*h*s+f*o,v=t+2*h*(i-t)+d*(n-2*i+t),y=e+2*h*(r-e)+d*(s-2*r+e),x=i+2*h*(n-i)+d*(a-2*n+i),m=r+2*h*(s-r)+d*(o-2*s+r),b=l*t+h*i,w=l*e+h*r,_=l*n+h*a,C=l*s+h*o,k=90-180*P.atan2(v-x,y-m)/j;return(v>x||m>y)&&(k+=180),{x:p,y:g,m:{x:v,y:y},n:{x:x,y:m},start:{x:b,y:w},end:{x:_,y:C},alpha:k}},e.bezierBBox=function(t,i,r,n,s,a,o,h){e.is(t,"array")||(t=[t,i,r,n,s,a,o,h]);var l=At.apply(null,t);return{x:l.min.x,y:l.min.y,x2:l.max.x,y2:l.max.y,width:l.max.x-l.min.x,height:l.max.y-l.min.y}},e.isPointInsideBBox=function(t,e,i){return e>=t.x&&e<=t.x2&&i>=t.y&&i<=t.y2},e.isBBoxIntersect=function(t,i){var r=e.isPointInsideBBox;return r(i,t.x,t.y)||r(i,t.x2,t.y)||r(i,t.x,t.y2)||r(i,t.x2,t.y2)||r(t,i.x,i.y)||r(t,i.x2,i.y)||r(t,i.x,i.y2)||r(t,i.x2,i.y2)||(t.x<i.x2&&t.x>i.x||i.x<t.x2&&i.x>t.x)&&(t.y<i.y2&&t.y>i.y||i.y<t.y2&&i.y>t.y)},e.pathIntersection=function(t,e){return c(t,e)},e.pathIntersectionNumber=function(t,e){return c(t,e,1)},e.isPointInsidePath=function(t,i,r){var n=e.pathBBox(t);return e.isPointInsideBBox(n,i,r)&&c(t,[["M",i,r],["H",n.x2+10]],1)%2==1},e._removedFactory=function(e){return function(){t("raphael.log",null,"Raphaël: you are calling to method “"+e+"” of removed object",e)}};var Ct=e.pathBBox=function(t){var e=_t(t);if(e.bbox)return i(e.bbox);if(!t)return{x:0,y:0,width:0,height:0,x2:0,y2:0};for(var r,n=0,s=0,a=[],o=[],h=0,l=(t=It(t)).length;l>h;h++)if("M"==(r=t[h])[0])n=r[1],s=r[2],a.push(n),o.push(s);else{var c=At(n,s,r[1],r[2],r[3],r[4],r[5],r[6]);a=a[N](c.min.x,c.max.x),o=o[N](c.min.y,c.max.y),n=r[5],s=r[6]}var u=G[T](0,a),d=G[T](0,o),f=D[T](0,a),p=D[T](0,o),g=f-u,v=p-d,y={x:u,y:d,x2:f,y2:p,width:g,height:v,cx:u+g/2,cy:d+v/2};return e.bbox=i(y),y},kt=function(t){var r=i(t);return r.toString=e._path2string,r},St=e._pathToRelative=function(t){var i=_t(t);if(i.rel)return kt(i.rel);e.is(t,q)&&e.is(t&&t[0],q)||(t=e.parsePathString(t));var r=[],n=0,s=0,a=0,o=0,h=0;"M"==t[0][0]&&(a=n=t[0][1],o=s=t[0][2],h++,r.push(["M",n,s]));for(var l=h,c=t.length;c>l;l++){var u=r[l]=[],d=t[l];if(d[0]!=E.call(d[0]))switch(u[0]=E.call(d[0]),u[0]){case"a":u[1]=d[1],u[2]=d[2],u[3]=d[3],u[4]=d[4],u[5]=d[5],u[6]=+(d[6]-n).toFixed(3),u[7]=+(d[7]-s).toFixed(3);break;case"v":u[1]=+(d[1]-s).toFixed(3);break;case"m":a=d[1],o=d[2];default:for(var f=1,p=d.length;p>f;f++)u[f]=+(d[f]-(f%2?n:s)).toFixed(3)}else{u=r[l]=[],"m"==d[0]&&(a=d[1]+n,o=d[2]+s);for(var g=0,v=d.length;v>g;g++)r[l][g]=d[g]}var y=r[l].length;switch(r[l][0]){case"z":n=a,s=o;break;case"h":n+=+r[l][y-1];break;case"v":s+=+r[l][y-1];break;default:n+=+r[l][y-2],s+=+r[l][y-1]}}return r.toString=e._path2string,i.rel=kt(r),r},Tt=e._pathToAbsolute=function(t){var i=_t(t);if(i.abs)return kt(i.abs);if(e.is(t,q)&&e.is(t&&t[0],q)||(t=e.parsePathString(t)),!t||!t.length)return[["M",0,0]];var r=[],n=0,a=0,o=0,h=0,l=0;"M"==t[0][0]&&(o=n=+t[0][1],h=a=+t[0][2],l++,r[0]=["M",n,a]);for(var c,u,d=3==t.length&&"M"==t[0][0]&&"R"==t[1][0].toUpperCase()&&"Z"==t[2][0].toUpperCase(),f=l,p=t.length;p>f;f++){if(r.push(c=[]),(u=t[f])[0]!=J.call(u[0]))switch(c[0]=J.call(u[0]),c[0]){case"A":c[1]=u[1],c[2]=u[2],c[3]=u[3],c[4]=u[4],c[5]=u[5],c[6]=+(u[6]+n),c[7]=+(u[7]+a);break;case"V":c[1]=+u[1]+a;break;case"H":c[1]=+u[1]+n;break;case"R":for(var g=[n,a][N](u.slice(1)),v=2,y=g.length;y>v;v++)g[v]=+g[v]+n,g[++v]=+g[v]+a;r.pop(),r=r[N](s(g,d));break;case"M":o=+u[1]+n,h=+u[2]+a;default:for(v=1,y=u.length;y>v;v++)c[v]=+u[v]+(v%2?n:a)}else if("R"==u[0])g=[n,a][N](u.slice(1)),r.pop(),r=r[N](s(g,d)),c=["R"][N](u.slice(-2));else for(var x=0,m=u.length;m>x;x++)c[x]=u[x];switch(c[0]){case"Z":n=o,a=h;break;case"H":n=c[1];break;case"V":a=c[1];break;case"M":o=c[c.length-2],h=c[c.length-1];default:n=c[c.length-2],a=c[c.length-1]}}return r.toString=e._path2string,i.abs=kt(r),r},Nt=function(t,e,i,r){return[t,e,i,r,i,r]},Bt=function(t,e,i,r,n,s){var a=1/3,o=2/3;return[a*t+o*i,a*e+o*r,a*n+o*i,a*s+o*r,n,s]},Ot=function(t,e,i,n,s,a,o,h,l,c){var u,d=120*j/180,f=j/180*(+s||0),p=[],g=r(function(t,e,i){return{x:t*P.cos(i)-e*P.sin(i),y:t*P.sin(i)+e*P.cos(i)}});if(c)k=c[0],S=c[1],_=c[2],C=c[3];else{t=(u=g(t,e,-f)).x,e=u.y,h=(u=g(h,l,-f)).x,l=u.y;var v=(P.cos(j/180*s),P.sin(j/180*s),(t-h)/2),y=(e-l)/2,x=v*v/(i*i)+y*y/(n*n);x>1&&(i*=x=P.sqrt(x),n*=x);var m=i*i,b=n*n,w=(a==o?-1:1)*P.sqrt(R((m*b-m*y*y-b*v*v)/(m*y*y+b*v*v))),_=w*i*y/n+(t+h)/2,C=w*-n*v/i+(e+l)/2,k=P.asin(((e-C)/n).toFixed(9)),S=P.asin(((l-C)/n).toFixed(9));0>(k=_>t?j-k:k)&&(k=2*j+k),0>(S=_>h?j-S:S)&&(S=2*j+S),o&&k>S&&(k-=2*j),!o&&S>k&&(S-=2*j)}var T=S-k;if(R(T)>d){var B=S,O=h,M=l;S=k+d*(o&&S>k?1:-1),h=_+i*P.cos(S),l=C+n*P.sin(S),p=Ot(h,l,i,n,s,0,o,O,M,[S,B,_,C])}T=S-k;var A=P.cos(k),F=P.sin(k),L=P.cos(S),E=P.sin(S),D=P.tan(T/4),G=4/3*i*D,z=4/3*n*D,H=[t,e],W=[t+G*F,e-z*A],q=[h+G*E,l-z*L],Y=[h,l];if(W[0]=2*H[0]-W[0],W[1]=2*H[1]-W[1],c)return[W,q,Y][N](p);for(var X=[],V=0,U=(p=[W,q,Y][N](p).join()[I](",")).length;U>V;V++)X[V]=V%2?g(p[V-1],p[V],f).y:g(p[V],p[V+1],f).x;return X},Mt=function(t,e,i,r,n,s,a,o,h){var l=1-h;return{x:z(l,3)*t+3*z(l,2)*h*i+3*l*h*h*n+z(h,3)*a,y:z(l,3)*e+3*z(l,2)*h*r+3*l*h*h*s+z(h,3)*o}},At=r(function(t,e,i,r,n,s,a,o){var h,l=n-2*i+t-(a-2*n+i),c=2*(i-t)-2*(n-i),u=t-i,d=(-c+P.sqrt(c*c-4*l*u))/2/l,f=(-c-P.sqrt(c*c-4*l*u))/2/l,p=[e,o],g=[t,a];return R(d)>"1e12"&&(d=.5),R(f)>"1e12"&&(f=.5),d>0&&1>d&&(h=Mt(t,e,i,r,n,s,a,o,d),g.push(h.x),p.push(h.y)),f>0&&1>f&&(h=Mt(t,e,i,r,n,s,a,o,f),g.push(h.x),p.push(h.y)),l=s-2*r+e-(o-2*s+r),u=e-r,d=(-(c=2*(r-e)-2*(s-r))+P.sqrt(c*c-4*l*u))/2/l,f=(-c-P.sqrt(c*c-4*l*u))/2/l,R(d)>"1e12"&&(d=.5),R(f)>"1e12"&&(f=.5),d>0&&1>d&&(h=Mt(t,e,i,r,n,s,a,o,d),g.push(h.x),p.push(h.y)),f>0&&1>f&&(h=Mt(t,e,i,r,n,s,a,o,f),g.push(h.x),p.push(h.y)),{min:{x:G[T](0,g),y:G[T](0,p)},max:{x:D[T](0,g),y:D[T](0,p)}}}),It=e._path2curve=r(function(t,e){var i=!e&&_t(t);if(!e&&i.curve)return kt(i.curve);for(var r=Tt(t),n=e&&Tt(e),s={x:0,y:0,bx:0,by:0,X:0,Y:0,qx:null,qy:null},a={x:0,y:0,bx:0,by:0,X:0,Y:0,qx:null,qy:null},o=function(t,e,i){var r,n;if(!t)return["C",e.x,e.y,e.x,e.y,e.x,e.y];switch(!(t[0]in{T:1,Q:1})&&(e.qx=e.qy=null),t[0]){case"M":e.X=t[1],e.Y=t[2];break;case"A":t=["C"][N](Ot[T](0,[e.x,e.y][N](t.slice(1))));break;case"S":"C"==i||"S"==i?(r=2*e.x-e.bx,n=2*e.y-e.by):(r=e.x,n=e.y),t=["C",r,n][N](t.slice(1));break;case"T":"Q"==i||"T"==i?(e.qx=2*e.x-e.qx,e.qy=2*e.y-e.qy):(e.qx=e.x,e.qy=e.y),t=["C"][N](Bt(e.x,e.y,e.qx,e.qy,t[1],t[2]));break;case"Q":e.qx=t[1],e.qy=t[2],t=["C"][N](Bt(e.x,e.y,t[1],t[2],t[3],t[4]));break;case"L":t=["C"][N](Nt(e.x,e.y,t[1],t[2]));break;case"H":t=["C"][N](Nt(e.x,e.y,t[1],e.y));break;case"V":t=["C"][N](Nt(e.x,e.y,e.x,t[1]));break;case"Z":t=["C"][N](Nt(e.x,e.y,e.X,e.Y))}return t},h=function(t,e){if(t[e].length>7){t[e].shift();for(var i=t[e];i.length;)c[e]="A",n&&(u[e]="A"),t.splice(e++,0,["C"][N](i.splice(0,6)));t.splice(e,1),g=D(r.length,n&&n.length||0)}},l=function(t,e,i,s,a){t&&e&&"M"==t[a][0]&&"M"!=e[a][0]&&(e.splice(a,0,["M",s.x,s.y]),i.bx=0,i.by=0,i.x=t[a][1],i.y=t[a][2],g=D(r.length,n&&n.length||0))},c=[],u=[],d="",f="",p=0,g=D(r.length,n&&n.length||0);g>p;p++){r[p]&&(d=r[p][0]),"C"!=d&&(c[p]=d,p&&(f=c[p-1])),r[p]=o(r[p],s,f),"A"!=c[p]&&"C"==d&&(c[p]="C"),h(r,p),n&&(n[p]&&(d=n[p][0]),"C"!=d&&(u[p]=d,p&&(f=u[p-1])),n[p]=o(n[p],a,f),"A"!=u[p]&&"C"==d&&(u[p]="C"),h(n,p)),l(r,n,s,a,p),l(n,r,a,s,p);var v=r[p],y=n&&n[p],x=v.length,m=n&&y.length;s.x=v[x-2],s.y=v[x-1],s.bx=Q(v[x-4])||s.x,s.by=Q(v[x-3])||s.y,a.bx=n&&(Q(y[m-4])||a.x),a.by=n&&(Q(y[m-3])||a.y),a.x=n&&y[m-2],a.y=n&&y[m-1]}return n||(i.curve=kt(r)),n?[r,n]:r},null,kt),Ft=(e._parseDots=r(function(t){for(var i=[],r=0,n=t.length;n>r;r++){var s={},a=t[r].match(/^([^:]*):?([\d\.]*)/);if(s.color=e.getRGB(a[1]),s.color.error)return null;s.opacity=s.color.opacity,s.color=s.color.hex,a[2]&&(s.offset=a[2]+"%"),i.push(s)}for(r=1,n=i.length-1;n>r;r++)if(!i[r].offset){for(var o=Q(i[r-1].offset||0),h=0,l=r+1;n>l;l++)if(i[l].offset){h=i[l].offset;break}h||(h=100,l=n);for(var c=((h=Q(h))-o)/(l-r+1);l>r;r++)o+=c,i[r].offset=o+"%"}return i}),e._tear=function(t,e){t==e.top&&(e.top=t.prev),t==e.bottom&&(e.bottom=t.next),t.next&&(t.next.prev=t.prev),t.prev&&(t.prev.next=t.next)}),Lt=(e._tofront=function(t,e){e.top!==t&&(Ft(t,e),t.next=null,t.prev=e.top,e.top.next=t,e.top=t)},e._toback=function(t,e){e.bottom!==t&&(Ft(t,e),t.next=e.bottom,t.prev=null,e.bottom.prev=t,e.bottom=t)},e._insertafter=function(t,e,i){Ft(t,i),e==i.top&&(i.top=t),e.next&&(e.next.prev=t),t.next=e.next,t.prev=e,e.next=t},e._insertbefore=function(t,e,i){Ft(t,i),e==i.bottom&&(i.bottom=t),e.prev&&(e.prev.next=t),t.prev=e.prev,e.prev=t,t.next=e},e.toMatrix=function(t,e){var i=Ct(t),r={_:{transform:O},getBBox:function(){return i}};return Et(r,e),r.matrix}),Et=(e.transformPath=function(t,e){return ft(t,Lt(t,e))},e._extractTransform=function(t,i){if(null==i)return t._.transform;i=A(i).replace(/\.{3}|\u2026/g,t._.transform||O);var r,n,s=e.parseTransformString(i),a=0,o=1,h=1,l=t._,c=new u;if(l.transform=s||[],s)for(var d=0,f=s.length;f>d;d++){var p,g,v,y,x,m=s[d],b=m.length,w=A(m[0]).toLowerCase(),_=m[0]!=w,C=_?c.invert():0;"t"==w&&3==b?_?(p=C.x(0,0),g=C.y(0,0),v=C.x(m[1],m[2]),y=C.y(m[1],m[2]),c.translate(v-p,y-g)):c.translate(m[1],m[2]):"r"==w?2==b?(x=x||t.getBBox(1),c.rotate(m[1],x.x+x.width/2,x.y+x.height/2),a+=m[1]):4==b&&(_?(v=C.x(m[2],m[3]),y=C.y(m[2],m[3]),c.rotate(m[1],v,y)):c.rotate(m[1],m[2],m[3]),a+=m[1]):"s"==w?2==b||3==b?(x=x||t.getBBox(1),c.scale(m[1],m[b-1],x.x+x.width/2,x.y+x.height/2),o*=m[1],h*=m[b-1]):5==b&&(_?(v=C.x(m[3],m[4]),y=C.y(m[3],m[4]),c.scale(m[1],m[2],v,y)):c.scale(m[1],m[2],m[3],m[4]),o*=m[1],h*=m[2]):"m"==w&&7==b&&c.add(m[1],m[2],m[3],m[4],m[5],m[6]),l.dirtyT=1,t.matrix=c}t.matrix=c,l.sx=o,l.sy=h,l.deg=a,l.dx=r=c.e,l.dy=n=c.f,1==o&&1==h&&!a&&l.bbox?(l.bbox.x+=+r,l.bbox.y+=+n):l.dirtyT=1}),Pt=function(t){var e=t[0];switch(e.toLowerCase()){case"t":return[e,0,0];case"m":return[e,1,0,0,1,0,0];case"r":return 4==t.length?[e,0,t[2],t[3]]:[e,0];case"s":return 5==t.length?[e,1,1,t[3],t[4]]:3==t.length?[e,1,1]:[e,1]}},Dt=e._equaliseTransform=function(t,i){i=A(i).replace(/\.{3}|\u2026/g,t),t=e.parseTransformString(t)||[],i=e.parseTransformString(i)||[];for(var r,n,s,a,o=D(t.length,i.length),h=[],l=[],c=0;o>c;c++){if(s=t[c]||Pt(i[c]),a=i[c]||Pt(s),s[0]!=a[0]||"r"==s[0].toLowerCase()&&(s[2]!=a[2]||s[3]!=a[3])||"s"==s[0].toLowerCase()&&(s[3]!=a[3]||s[4]!=a[4]))return;for(h[c]=[],l[c]=[],r=0,n=D(s.length,a.length);n>r;r++)r in s&&(h[c][r]=s[r]),r in a&&(l[c][r]=a[r])}return{from:h,to:l}};e._getContainer=function(t,i,r,n){var s;return null!=(s=null!=n||e.is(t,"object")?t:C.doc.getElementById(t))?s.tagName?null==i?{container:s,width:s.style.pixelWidth||s.offsetWidth,height:s.style.pixelHeight||s.offsetHeight}:{container:s,width:i,height:r}:{container:1,x:t,y:i,width:r,height:n}:void 0},e.pathToRelative=St,e._engine={},e.path2curve=It,e.matrix=function(t,e,i,r,n,s){return new u(t,e,i,r,n,s)},function(t){function i(t){return t[0]*t[0]+t[1]*t[1]}function r(t){var e=P.sqrt(i(t));t[0]&&(t[0]/=e),t[1]&&(t[1]/=e)}t.add=function(t,e,i,r,n,s){var a,o,h,l,c=[[],[],[]],d=[[this.a,this.c,this.e],[this.b,this.d,this.f],[0,0,1]],f=[[t,i,n],[e,r,s],[0,0,1]];for(t&&t instanceof u&&(f=[[t.a,t.c,t.e],[t.b,t.d,t.f],[0,0,1]]),a=0;3>a;a++)for(o=0;3>o;o++){for(l=0,h=0;3>h;h++)l+=d[a][h]*f[h][o];c[a][o]=l}this.a=c[0][0],this.b=c[1][0],this.c=c[0][1],this.d=c[1][1],this.e=c[0][2],this.f=c[1][2]},t.invert=function(){var t=this,e=t.a*t.d-t.b*t.c;return new u(t.d/e,-t.b/e,-t.c/e,t.a/e,(t.c*t.f-t.d*t.e)/e,(t.b*t.e-t.a*t.f)/e)},t.clone=function(){return new u(this.a,this.b,this.c,this.d,this.e,this.f)},t.translate=function(t,e){this.add(1,0,0,1,t,e)},t.scale=function(t,e,i,r){null==e&&(e=t),(i||r)&&this.add(1,0,0,1,i,r),this.add(t,0,0,e,0,0),(i||r)&&this.add(1,0,0,1,-i,-r)},t.rotate=function(t,i,r){t=e.rad(t),i=i||0,r=r||0;var n=+P.cos(t).toFixed(9),s=+P.sin(t).toFixed(9);this.add(n,s,-s,n,i,r),this.add(1,0,0,1,-i,-r)},t.x=function(t,e){return t*this.a+e*this.c+this.e},t.y=function(t,e){return t*this.b+e*this.d+this.f},t.get=function(t){return+this[A.fromCharCode(97+t)].toFixed(4)},t.toString=function(){return e.svg?"matrix("+[this.get(0),this.get(1),this.get(2),this.get(3),this.get(4),this.get(5)].join()+")":[this.get(0),this.get(2),this.get(1),this.get(3),0,0].join()},t.toFilter=function(){return"progid:DXImageTransform.Microsoft.Matrix(M11="+this.get(0)+", M12="+this.get(2)+", M21="+this.get(1)+", M22="+this.get(3)+", Dx="+this.get(4)+", Dy="+this.get(5)+", sizingmethod='auto expand')"},t.offset=function(){return[this.e.toFixed(4),this.f.toFixed(4)]},t.split=function(){var t={};t.dx=this.e,t.dy=this.f;var n=[[this.a,this.c],[this.b,this.d]];t.scalex=P.sqrt(i(n[0])),r(n[0]),t.shear=n[0][0]*n[1][0]+n[0][1]*n[1][1],n[1]=[n[1][0]-n[0][0]*t.shear,n[1][1]-n[0][1]*t.shear],t.scaley=P.sqrt(i(n[1])),r(n[1]),t.shear/=t.scaley;var s=-n[0][1],a=n[1][1];return 0>a?(t.rotate=e.deg(P.acos(a)),0>s&&(t.rotate=360-t.rotate)):t.rotate=e.deg(P.asin(s)),t.isSimple=!(+t.shear.toFixed(9)||t.scalex.toFixed(9)!=t.scaley.toFixed(9)&&t.rotate),t.isSuperSimple=!+t.shear.toFixed(9)&&t.scalex.toFixed(9)==t.scaley.toFixed(9)&&!t.rotate,t.noRotation=!+t.shear.toFixed(9)&&!t.rotate,t},t.toTransformString=function(t){var e=t||this[I]();return e.isSimple?(e.scalex=+e.scalex.toFixed(4),e.scaley=+e.scaley.toFixed(4),e.rotate=+e.rotate.toFixed(4),(e.dx||e.dy?"t"+[e.dx,e.dy]:O)+(1!=e.scalex||1!=e.scaley?"s"+[e.scalex,e.scaley,0,0]:O)+(e.rotate?"r"+[e.rotate,0,0]:O)):"m"+[this.get(0),this.get(1),this.get(2),this.get(3),this.get(4),this.get(5)]}}(u.prototype);for(var Gt=function(){this.returnValue=!1},Rt=function(){return this.originalEvent.preventDefault()},zt=function(){this.cancelBubble=!0},jt=function(){return this.originalEvent.stopPropagation()},Ht=function(t){var e=C.doc.documentElement.scrollTop||C.doc.body.scrollTop,i=C.doc.documentElement.scrollLeft||C.doc.body.scrollLeft;return{x:t.clientX+i,y:t.clientY+e}},Wt=C.doc.addEventListener?function(t,e,i,r){var n=function(t){var e=Ht(t);return i.call(r,t,e.x,e.y)};if(t.addEventListener(e,n,!1),B&&L[e]){var s=function(e){for(var n=Ht(e),s=e,a=0,o=e.targetTouches&&e.targetTouches.length;o>a;a++)if(e.targetTouches[a].target==t){(e=e.targetTouches[a]).originalEvent=s,e.preventDefault=Rt,e.stopPropagation=jt;break}return i.call(r,e,n.x,n.y)};t.addEventListener(L[e],s,!1)}return function(){return t.removeEventListener(e,n,!1),B&&L[e]&&t.removeEventListener(L[e],s,!1),!0}}:C.doc.attachEvent?function(t,e,i,r){var n=function(t){t=t||C.win.event;var e=C.doc.documentElement.scrollTop||C.doc.body.scrollTop,n=C.doc.documentElement.scrollLeft||C.doc.body.scrollLeft,s=t.clientX+n,a=t.clientY+e;return t.preventDefault=t.preventDefault||Gt,t.stopPropagation=t.stopPropagation||zt,i.call(r,t,s,a)};return t.attachEvent("on"+e,n),function(){return t.detachEvent("on"+e,n),!0}}:void 0,qt=[],Yt=function(e){for(var i,r=e.clientX,n=e.clientY,s=C.doc.documentElement.scrollTop||C.doc.body.scrollTop,a=C.doc.documentElement.scrollLeft||C.doc.body.scrollLeft,o=qt.length;o--;){if(i=qt[o],B&&e.touches){for(var h,l=e.touches.length;l--;)if((h=e.touches[l]).identifier==i.el._drag.id){r=h.clientX,n=h.clientY,(e.originalEvent?e.originalEvent:e).preventDefault();break}}else e.preventDefault();var c,u=i.el.node,d=u.nextSibling,f=u.parentNode,p=u.style.display;C.win.opera&&f.removeChild(u),u.style.display="none",c=i.el.paper.getElementByPoint(r,n),u.style.display=p,C.win.opera&&(d?f.insertBefore(u,d):f.appendChild(u)),c&&t("raphael.drag.over."+i.el.id,i.el,c),r+=a,n+=s,t("raphael.drag.move."+i.el.id,i.move_scope||i.el,r-i.el._drag.x,n-i.el._drag.y,r,n,e)}},Xt=function(i){e.unmousemove(Yt).unmouseup(Xt);for(var r,n=qt.length;n--;)(r=qt[n]).el._drag={},t("raphael.drag.end."+r.el.id,r.end_scope||r.start_scope||r.move_scope||r.el,i);qt=[]},Vt=e.el={},Ut=F.length;Ut--;)!function(t){e[t]=Vt[t]=function(i,r){return e.is(i,"function")&&(this.events=this.events||[],this.events.push({name:t,f:i,unbind:Wt(this.shape||this.node||C.doc,t,i,r||this)})),this},e["un"+t]=Vt["un"+t]=function(i){for(var r=this.events||[],n=r.length;n--;)r[n].name!=t||!e.is(i,"undefined")&&r[n].f!=i||(r[n].unbind(),r.splice(n,1),!r.length&&delete this.events);return this}}(F[Ut]);Vt.data=function(i,r){var n=ot[this.id]=ot[this.id]||{};if(0==arguments.length)return n;if(1==arguments.length){if(e.is(i,"object")){for(var s in i)i[_](s)&&this.data(s,i[s]);return this}return t("raphael.data.get."+this.id,this,n[i],i),n[i]}return n[i]=r,t("raphael.data.set."+this.id,this,r,i),this},Vt.removeData=function(t){return null==t?ot[this.id]={}:ot[this.id]&&delete ot[this.id][t],this},Vt.getData=function(){return i(ot[this.id]||{})},Vt.hover=function(t,e,i,r){return this.mouseover(t,i).mouseout(e,r||i)},Vt.unhover=function(t,e){return this.unmouseover(t).unmouseout(e)};var $t=[];Vt.drag=function(i,r,n,s,a,o){function h(h){(h.originalEvent||h).preventDefault();var l=h.clientX,c=h.clientY,u=C.doc.documentElement.scrollTop||C.doc.body.scrollTop,d=C.doc.documentElement.scrollLeft||C.doc.body.scrollLeft;if(this._drag.id=h.identifier,B&&h.touches)for(var f,p=h.touches.length;p--;)if(f=h.touches[p],this._drag.id=f.identifier,f.identifier==this._drag.id){l=f.clientX,c=f.clientY;break}this._drag.x=l+d,this._drag.y=c+u,!qt.length&&e.mousemove(Yt).mouseup(Xt),qt.push({el:this,move_scope:s,start_scope:a,end_scope:o}),r&&t.on("raphael.drag.start."+this.id,r),i&&t.on("raphael.drag.move."+this.id,i),n&&t.on("raphael.drag.end."+this.id,n),t("raphael.drag.start."+this.id,a||s||this,h.clientX+d,h.clientY+u,h)}return this._drag={},$t.push({el:this,start:h}),this.mousedown(h),this},Vt.onDragOver=function(e){e?t.on("raphael.drag.over."+this.id,e):t.unbind("raphael.drag.over."+this.id)},Vt.undrag=function(){for(var i=$t.length;i--;)$t[i].el==this&&(this.unmousedown($t[i].start),$t.splice(i,1),t.unbind("raphael.drag.*."+this.id));!$t.length&&e.unmousemove(Yt).unmouseup(Xt),qt=[]},x.circle=function(t,i,r){var n=e._engine.circle(this,t||0,i||0,r||0);return this.__set__&&this.__set__.push(n),n},x.rect=function(t,i,r,n,s){var a=e._engine.rect(this,t||0,i||0,r||0,n||0,s||0);return this.__set__&&this.__set__.push(a),a},x.ellipse=function(t,i,r,n){var s=e._engine.ellipse(this,t||0,i||0,r||0,n||0);return this.__set__&&this.__set__.push(s),s},x.path=function(t){t&&!e.is(t,W)&&!e.is(t[0],q)&&(t+=O);var i=e._engine.path(e.format[T](e,arguments),this);return this.__set__&&this.__set__.push(i),i},x.image=function(t,i,r,n,s){var a=e._engine.image(this,t||"about:blank",i||0,r||0,n||0,s||0);return this.__set__&&this.__set__.push(a),a},x.text=function(t,i,r){var n=e._engine.text(this,t||0,i||0,A(r));return this.__set__&&this.__set__.push(n),n},x.set=function(t){!e.is(t,"array")&&(t=Array.prototype.splice.call(arguments,0,arguments.length));var i=new ae(t);return this.__set__&&this.__set__.push(i),i.paper=this,i.type="set",i},x.setStart=function(t){this.__set__=t||this.set()},x.setFinish=function(t){var e=this.__set__;return delete this.__set__,e},x.getSize=function(){var t=this.canvas.parentNode;return{width:t.offsetWidth,height:t.offsetHeight}},x.setSize=function(t,i){return e._engine.setSize.call(this,t,i)},x.setViewBox=function(t,i,r,n,s){return e._engine.setViewBox.call(this,t,i,r,n,s)},x.top=x.bottom=null,x.raphael=e;x.getElementByPoint=function(t,e){var i=this,r=i.canvas,n=C.doc.elementFromPoint(t,e);if(C.win.opera&&"svg"==n.tagName){var s=function(t){var e=t.getBoundingClientRect(),i=t.ownerDocument,r=i.body,n=i.documentElement,s=n.clientTop||r.clientTop||0,a=n.clientLeft||r.clientLeft||0;return{y:e.top+(C.win.pageYOffset||n.scrollTop||r.scrollTop)-s,x:e.left+(C.win.pageXOffset||n.scrollLeft||r.scrollLeft)-a}}(r),a=r.createSVGRect();a.x=t-s.x,a.y=e-s.y,a.width=a.height=1;var o=r.getIntersectionList(a,null);o.length&&(n=o[o.length-1])}if(!n)return null;for(;n.parentNode&&n!=r.parentNode&&!n.raphael;)n=n.parentNode;return n==i.canvas.parentNode&&(n=r),n&&n.raphael?i.getById(n.raphaelid):null},x.getElementsByBBox=function(t){var i=this.set();return this.forEach(function(r){e.isBBoxIntersect(r.getBBox(),t)&&i.push(r)}),i},x.getById=function(t){for(var e=this.bottom;e;){if(e.id==t)return e;e=e.next}return null},x.forEach=function(t,e){for(var i=this.bottom;i;){if(!1===t.call(e,i))return this;i=i.next}return this},x.getElementsByPoint=function(t,e){var i=this.set();return this.forEach(function(r){r.isPointInside(t,e)&&i.push(r)}),i},Vt.isPointInside=function(t,i){var r=this.realPath=dt[this.type](this);return this.attr("transform")&&this.attr("transform").length&&(r=e.transformPath(r,this.attr("transform"))),e.isPointInsidePath(r,t,i)},Vt.getBBox=function(t){if(this.removed)return{};var e=this._;return t?((e.dirty||!e.bboxwt)&&(this.realPath=dt[this.type](this),e.bboxwt=Ct(this.realPath),e.bboxwt.toString=d,e.dirty=0),e.bboxwt):((e.dirty||e.dirtyT||!e.bbox)&&((e.dirty||!this.realPath)&&(e.bboxwt=0,this.realPath=dt[this.type](this)),e.bbox=Ct(ft(this.realPath,this.matrix)),e.bbox.toString=d,e.dirty=e.dirtyT=0),e.bbox)},Vt.clone=function(){if(this.removed)return null;var t=this.paper[this.type]().attr(this.attr());return this.__set__&&this.__set__.push(t),t},Vt.glow=function(t){if("text"==this.type)return null;var e={width:((t=t||{}).width||10)+(+this.attr("stroke-width")||1),fill:t.fill||!1,opacity:null==t.opacity?.5:t.opacity,offsetx:t.offsetx||0,offsety:t.offsety||0,color:t.color||"#000"},i=e.width/2,r=this.paper,n=r.set(),s=this.realPath||dt[this.type](this);s=this.matrix?ft(s,this.matrix):s;for(var a=1;i+1>a;a++)n.push(r.path(s).attr({stroke:e.color,fill:e.fill?e.color:"none","stroke-linejoin":"round","stroke-linecap":"round","stroke-width":+(e.width/i*a).toFixed(3),opacity:+(e.opacity/i).toFixed(3)}));return n.insertBefore(this).translate(e.offsetx,e.offsety)};var Qt=function(t,i,r,n,s,a,h,l,c){return null==c?o(t,i,r,n,s,a,h,l):e.findDotsAtSegment(t,i,r,n,s,a,h,l,function(t,e,i,r,n,s,a,h,l){if(!(0>l||o(t,e,i,r,n,s,a,h)<l)){var c,u=.5,d=1-u;for(c=o(t,e,i,r,n,s,a,h,d);R(c-l)>.01;)c=o(t,e,i,r,n,s,a,h,d+=(l>c?1:-1)*(u/=2));return d}}(t,i,r,n,s,a,h,l,c))},Zt=function(t,i){return function(r,n,s){for(var a,o,h,l,c,u="",d={},f=0,p=0,g=(r=It(r)).length;g>p;p++){if("M"==(h=r[p])[0])a=+h[1],o=+h[2];else{if(f+(l=Qt(a,o,h[1],h[2],h[3],h[4],h[5],h[6]))>n){if(i&&!d.start){if(u+=["C"+(c=Qt(a,o,h[1],h[2],h[3],h[4],h[5],h[6],n-f)).start.x,c.start.y,c.m.x,c.m.y,c.x,c.y],s)return u;d.start=u,u=["M"+c.x,c.y+"C"+c.n.x,c.n.y,c.end.x,c.end.y,h[5],h[6]].join(),f+=l,a=+h[5],o=+h[6];continue}if(!t&&!i)return{x:(c=Qt(a,o,h[1],h[2],h[3],h[4],h[5],h[6],n-f)).x,y:c.y,alpha:c.alpha}}f+=l,a=+h[5],o=+h[6]}u+=h.shift()+h}return d.end=u,(c=t?f:i?d:e.findDotsAtSegment(a,o,h[0],h[1],h[2],h[3],h[4],h[5],1)).alpha&&(c={x:c.x,y:c.y,alpha:c.alpha}),c}},Jt=Zt(1),Kt=Zt(),te=Zt(0,1);e.getTotalLength=Jt,e.getPointAtLength=Kt,e.getSubpath=function(t,e,i){if(this.getTotalLength(t)-i<1e-6)return te(t,e).end;var r=te(t,i,1);return e?te(r,e).end:r},Vt.getTotalLength=function(){var t=this.getPath();if(t)return this.node.getTotalLength?this.node.getTotalLength():Jt(t)},Vt.getPointAtLength=function(t){var e=this.getPath();if(e)return Kt(e,t)},Vt.getPath=function(){var t,i=e._getPath[this.type];if("text"!=this.type&&"set"!=this.type)return i&&(t=i(this)),t},Vt.getSubpath=function(t,i){var r=this.getPath();if(r)return e.getSubpath(r,t,i)};var ee=e.easing_formulas={linear:function(t){return t},"<":function(t){return z(t,1.7)},">":function(t){return z(t,.48)},"<>":function(t){var e=.48-t/1.04,i=P.sqrt(.1734+e*e),r=i-e,n=-i-e,s=z(R(r),1/3)*(0>r?-1:1)+z(R(n),1/3)*(0>n?-1:1)+.5;return 3*(1-s)*s*s+s*s*s},backIn:function(t){var e=1.70158;return t*t*((e+1)*t-e)},backOut:function(t){var e=1.70158;return(t-=1)*t*((e+1)*t+e)+1},elastic:function(t){return t==!!t?t:z(2,-10*t)*P.sin(2*(t-.075)*j/.3)+1},bounce:function(t){var e,i=7.5625,r=2.75;return 1/r>t?e=i*t*t:2/r>t?e=i*(t-=1.5/r)*t+.75:2.5/r>t?e=i*(t-=2.25/r)*t+.9375:e=i*(t-=2.625/r)*t+.984375,e}};ee.easeIn=ee["ease-in"]=ee["<"],ee.easeOut=ee["ease-out"]=ee[">"],ee.easeInOut=ee["ease-in-out"]=ee["<>"],ee["back-in"]=ee.backIn,ee["back-out"]=ee.backOut;var ie=[],re=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(t){setTimeout(t,16)},ne=function(){for(var i=+new Date,r=0;r<ie.length;r++){var n=ie[r];if(!n.el.removed&&!n.paused){var s,a,o=i-n.start,h=n.ms,l=n.easing,c=n.from,u=n.diff,d=n.to,f=(n.t,n.el),p={},v={};if(n.initstatus?(o=(n.initstatus*n.anim.top-n.prev)/(n.percent-n.prev)*h,n.status=n.initstatus,delete n.initstatus,n.stop&&ie.splice(r--,1)):n.status=(n.prev+(n.percent-n.prev)*(o/h))/n.anim.top,!(0>o))if(h>o){var y=l(o/h);for(var x in c)if(c[_](x)){switch(tt[x]){case H:s=+c[x]+y*h*u[x];break;case"colour":s="rgb("+[se($(c[x].r+y*h*u[x].r)),se($(c[x].g+y*h*u[x].g)),se($(c[x].b+y*h*u[x].b))].join(",")+")";break;case"path":s=[];for(var m=0,b=c[x].length;b>m;m++){s[m]=[c[x][m][0]];for(var w=1,C=c[x][m].length;C>w;w++)s[m][w]=+c[x][m][w]+y*h*u[x][m][w];s[m]=s[m].join(M)}s=s.join(M);break;case"transform":if(u[x].real)for(s=[],m=0,b=c[x].length;b>m;m++)for(s[m]=[c[x][m][0]],w=1,C=c[x][m].length;C>w;w++)s[m][w]=c[x][m][w]+y*h*u[x][m][w];else{var k=function(t){return+c[x][t]+y*h*u[x][t]};s=[["m",k(0),k(1),k(2),k(3),k(4),k(5)]]}break;case"csv":if("clip-rect"==x)for(s=[],m=4;m--;)s[m]=+c[x][m]+y*h*u[x][m];break;default:var S=[][N](c[x]);for(s=[],m=f.paper.customAttributes[x].length;m--;)s[m]=+S[m]+y*h*u[x][m]}p[x]=s}f.attr(p),function(e,i,r){setTimeout(function(){t("raphael.anim.frame."+e,i,r)})}(f.id,f,n.anim)}else{if(function(i,r,n){setTimeout(function(){t("raphael.anim.frame."+r.id,r,n),t("raphael.anim.finish."+r.id,r,n),e.is(i,"function")&&i.call(r)})}(n.callback,f,n.anim),f.attr(d),ie.splice(r--,1),n.repeat>1&&!n.next){for(a in d)d[_](a)&&(v[a]=n.totalOrigin[a]);n.el.attr(v),g(n.anim,n.el,n.anim.percents[0],null,n.totalOrigin,n.repeat-1)}n.next&&!n.stop&&g(n.anim,n.el,n.next,null,n.totalOrigin,n.repeat)}}}ie.length&&re(ne)},se=function(t){return t>255?255:0>t?0:t};Vt.animateWith=function(t,i,r,n,s,a){var o=this;if(o.removed)return a&&a.call(o),o;var h=r instanceof p?r:e.animation(r,n,s,a);g(h,o,h.percents[0],null,o.attr());for(var l=0,c=ie.length;c>l;l++)if(ie[l].anim==i&&ie[l].el==t){ie[c-1].start=ie[l].start;break}return o},Vt.onAnimation=function(e){return e?t.on("raphael.anim.frame."+this.id,e):t.unbind("raphael.anim.frame."+this.id),this},p.prototype.delay=function(t){var e=new p(this.anim,this.ms);return e.times=this.times,e.del=+t||0,e},p.prototype.repeat=function(t){var e=new p(this.anim,this.ms);return e.del=this.del,e.times=P.floor(D(t,0))||1,e},e.animation=function(t,i,r,n){if(t instanceof p)return t;(e.is(r,"function")||!r)&&(n=n||r||null,r=null),t=Object(t),i=+i||0;var s,a,o={};for(a in t)t[_](a)&&Q(a)!=a&&Q(a)+"%"!=a&&(s=!0,o[a]=t[a]);if(s)return r&&(o.easing=r),n&&(o.callback=n),new p({100:o},i);if(n){var h=0;for(var l in t){var c=Z(l);t[_](l)&&c>h&&(h=c)}!t[h+="%"].callback&&(t[h].callback=n)}return new p(t,i)},Vt.animate=function(t,i,r,n){var s=this;if(s.removed)return n&&n.call(s),s;var a=t instanceof p?t:e.animation(t,i,r,n);return g(a,s,a.percents[0],null,s.attr()),s},Vt.setTime=function(t,e){return t&&null!=e&&this.status(t,G(e,t.ms)/t.ms),this},Vt.status=function(t,e){var i,r,n=[],s=0;if(null!=e)return g(t,this,-1,G(e,1)),this;for(i=ie.length;i>s;s++)if((r=ie[s]).el.id==this.id&&(!t||r.anim==t)){if(t)return r.status;n.push({anim:r.anim,status:r.status})}return t?0:n},Vt.pause=function(e){for(var i=0;i<ie.length;i++)ie[i].el.id!=this.id||e&&ie[i].anim!=e||!1!==t("raphael.anim.pause."+this.id,this,ie[i].anim)&&(ie[i].paused=!0);return this},Vt.resume=function(e){for(var i=0;i<ie.length;i++)if(ie[i].el.id==this.id&&(!e||ie[i].anim==e)){var r=ie[i];!1!==t("raphael.anim.resume."+this.id,this,r.anim)&&(delete r.paused,this.status(r.anim,r.status))}return this},Vt.stop=function(e){for(var i=0;i<ie.length;i++)ie[i].el.id!=this.id||e&&ie[i].anim!=e||!1!==t("raphael.anim.stop."+this.id,this,ie[i].anim)&&ie.splice(i--,1);return this},t.on("raphael.remove",v),t.on("raphael.clear",v),Vt.toString=function(){return"Raphaël’s object"};var ae=function(t){if(this.items=[],this.length=0,this.type="set",t)for(var e=0,i=t.length;i>e;e++)!t[e]||t[e].constructor!=Vt.constructor&&t[e].constructor!=ae||(this[this.items.length]=this.items[this.items.length]=t[e],this.length++)},oe=ae.prototype;for(var he in oe.push=function(){for(var t,e,i=0,r=arguments.length;r>i;i++)!(t=arguments[i])||t.constructor!=Vt.constructor&&t.constructor!=ae||(this[e=this.items.length]=this.items[e]=t,this.length++);return this},oe.pop=function(){return this.length&&delete this[this.length--],this.items.pop()},oe.forEach=function(t,e){for(var i=0,r=this.items.length;r>i;i++)if(!1===t.call(e,this.items[i],i))return this;return this},Vt)Vt[_](he)&&(oe[he]=function(t){return function(){var e=arguments;return this.forEach(function(i){i[t][T](i,e)})}}(he));return oe.attr=function(t,i){if(t&&e.is(t,q)&&e.is(t[0],"object"))for(var r=0,n=t.length;n>r;r++)this.items[r].attr(t[r]);else for(var s=0,a=this.items.length;a>s;s++)this.items[s].attr(t,i);return this},oe.clear=function(){for(;this.length;)this.pop()},oe.splice=function(t,e,i){t=0>t?D(this.length+t,0):t,e=D(0,G(this.length-t,e));var r,n=[],s=[],a=[];for(r=2;r<arguments.length;r++)a.push(arguments[r]);for(r=0;e>r;r++)s.push(this[t+r]);for(;r<this.length-t;r++)n.push(this[t+r]);var o=a.length;for(r=0;r<o+n.length;r++)this.items[t+r]=this[t+r]=o>r?a[r]:n[r-o];for(r=this.items.length=this.length-=e-o;this[r];)delete this[r++];return new ae(s)},oe.exclude=function(t){for(var e=0,i=this.length;i>e;e++)if(this[e]==t)return this.splice(e,1),!0},oe.animate=function(t,i,r,n){(e.is(r,"function")||!r)&&(n=r||null);var s,a,o=this.items.length,h=o,l=this;if(!o)return this;n&&(a=function(){!--o&&n.call(l)}),r=e.is(r,W)?r:a;var c=e.animation(t,i,r,a);for(s=this.items[--h].animate(c);h--;)this.items[h]&&!this.items[h].removed&&this.items[h].animateWith(s,c,c),this.items[h]&&!this.items[h].removed||o--;return this},oe.insertAfter=function(t){for(var e=this.items.length;e--;)this.items[e].insertAfter(t);return this},oe.getBBox=function(){for(var t=[],e=[],i=[],r=[],n=this.items.length;n--;)if(!this.items[n].removed){var s=this.items[n].getBBox();t.push(s.x),e.push(s.y),i.push(s.x+s.width),r.push(s.y+s.height)}return{x:t=G[T](0,t),y:e=G[T](0,e),x2:i=D[T](0,i),y2:r=D[T](0,r),width:i-t,height:r-e}},oe.clone=function(t){t=this.paper.set();for(var e=0,i=this.items.length;i>e;e++)t.push(this.items[e].clone());return t},oe.toString=function(){return"Raphaël‘s set"},oe.glow=function(t){var e=this.paper.set();return this.forEach(function(i,r){var n=i.glow(t);null!=n&&n.forEach(function(t,i){e.push(t)})}),e},oe.isPointInside=function(t,e){var i=!1;return this.forEach(function(r){return r.isPointInside(t,e)?(i=!0,!1):void 0}),i},e.registerFont=function(t){if(!t.face)return t;this.fonts=this.fonts||{};var e={w:t.w,face:{},glyphs:{}},i=t.face["font-family"];for(var r in t.face)t.face[_](r)&&(e.face[r]=t.face[r]);if(this.fonts[i]?this.fonts[i].push(e):this.fonts[i]=[e],!t.svg)for(var n in e.face["units-per-em"]=Z(t.face["units-per-em"],10),t.glyphs)if(t.glyphs[_](n)){var s=t.glyphs[n];if(e.glyphs[n]={w:s.w,k:{},d:s.d&&"M"+s.d.replace(/[mlcxtrv]/g,function(t){return{l:"L",c:"C",x:"z",t:"m",r:"l",v:"c"}[t]||"M"})+"z"},s.k)for(var a in s.k)s[_](a)&&(e.glyphs[n].k[a]=s.k[a])}return t},x.getFont=function(t,i,r,n){if(n=n||"normal",r=r||"normal",i=+i||{normal:400,bold:700,lighter:300,bolder:800}[i]||400,e.fonts){var s,a=e.fonts[t];if(!a){var o=new RegExp("(^|\\s)"+t.replace(/[^\w\d\s+!~.:_-]/g,O)+"(\\s|$)","i");for(var h in e.fonts)if(e.fonts[_](h)&&o.test(h)){a=e.fonts[h];break}}if(a)for(var l=0,c=a.length;c>l&&((s=a[l]).face["font-weight"]!=i||s.face["font-style"]!=r&&s.face["font-style"]||s.face["font-stretch"]!=n);l++);return s}},x.print=function(t,i,r,n,s,a,o,h){a=a||"middle",o=D(G(o||0,1),-1),h=D(G(h||1,3),1);var l,c=A(r)[I](O),u=0,d=0,f=O;if(e.is(n,"string")&&(n=this.getFont(n)),n){l=(s||16)/n.face["units-per-em"];for(var p=n.face.bbox[I](m),g=+p[0],v=p[3]-p[1],y=0,x=+p[1]+("baseline"==a?v+ +n.face.descent:v/2),b=0,w=c.length;w>b;b++){if("\n"==c[b])u=0,C=0,d=0,y+=v*h;else{var _=d&&n.glyphs[c[b-1]]||{},C=n.glyphs[c[b]];u+=d?(_.w||n.w)+(_.k&&_.k[c[b]]||0)+n.w*o:0,d=1}C&&C.d&&(f+=e.transformPath(C.d,["t",u*l,y*l,"s",l,l,g,x,"t",(t-g)/l,(i-x)/l]))}}return this.path(f).attr({fill:"#000",stroke:"none"})},x.add=function(t){if(e.is(t,"array"))for(var i,r=this.set(),n=0,s=t.length;s>n;n++)i=t[n]||{},b[_](i.type)&&r.push(this[i.type]().attr(i));return r},e.format=function(t,i){var r=e.is(i,q)?[0][N](i):arguments;return t&&e.is(t,W)&&r.length-1&&(t=t.replace(w,function(t,e){return null==r[++e]?O:r[e]})),t||O},e.fullfill=function(){var t=/\{([^\}]+)\}/g,e=/(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g,i=function(t,i,r){var n=r;return i.replace(e,function(t,e,i,r,s){e=e||r,n&&(e in n&&(n=n[e]),"function"==typeof n&&s&&(n=n()))}),n=(null==n||n==r?t:n)+""};return function(e,r){return String(e).replace(t,function(t,e){return i(t,e,r)})}}(),e.ninja=function(){return k.was?C.win.Raphael=k.is:delete Raphael,e},e.st=oe,t.on("raphael.DOMload",function(){y=!0}),function(t,i,r){null==t.readyState&&t.addEventListener&&(t.addEventListener(i,r=function(){t.removeEventListener(i,r,!1),t.readyState="complete"},!1),t.readyState="loading"),function i(){/in/.test(t.readyState)?setTimeout(i,9):e.eve("raphael.DOMload")}()}(document,"DOMContentLoaded"),e}),function(t,e){"function"==typeof define&&define.amd?define("raphael.svg",["raphael.core"],function(t){return e(t)}):e("object"==typeof exports?require("./raphael.core"):t.Raphael)}(this,function(t){if(!t||t.svg){var e="hasOwnProperty",i=String,r=parseFloat,n=parseInt,s=Math,a=s.max,o=s.abs,h=s.pow,l=/[, ]+/,c=t.eve,u="",d=" ",f="http://www.w3.org/1999/xlink",p={block:"M5,0 0,2.5 5,5z",classic:"M5,0 0,2.5 5,5 3.5,3 3.5,2z",diamond:"M2.5,0 5,2.5 2.5,5 0,2.5z",open:"M6,1 1,3.5 6,6",oval:"M2.5,0A2.5,2.5,0,0,1,2.5,5 2.5,2.5,0,0,1,2.5,0z"},g={};t.toString=function(){return"Your browser supports SVG.\nYou are running Raphaël "+this.version};var v=function(r,n){if(n)for(var s in"string"==typeof r&&(r=v(r)),n)n[e](s)&&("xlink:"==s.substring(0,6)?r.setAttributeNS(f,s.substring(6),i(n[s])):r.setAttribute(s,i(n[s])));else(r=t._g.doc.createElementNS("http://www.w3.org/2000/svg",r)).style&&(r.style.webkitTapHighlightColor="rgba(0,0,0,0)");return r},y=function(e,n){var l="linear",c=e.id+n,d=.5,f=.5,p=e.node,g=e.paper,y=p.style,x=t._g.doc.getElementById(c);if(!x){if(n=(n=i(n).replace(t._radial_gradient,function(t,e,i){if(l="radial",e&&i){d=r(e);var n=2*((f=r(i))>.5)-1;h(d-.5,2)+h(f-.5,2)>.25&&(f=s.sqrt(.25-h(d-.5,2))*n+.5)&&.5!=f&&(f=f.toFixed(5)-1e-5*n)}return u})).split(/\s*\-\s*/),"linear"==l){var m=n.shift();if(m=-r(m),isNaN(m))return null;var b=[0,0,s.cos(t.rad(m)),s.sin(t.rad(m))],w=1/(a(o(b[2]),o(b[3]))||1);b[2]*=w,b[3]*=w,b[2]<0&&(b[0]=-b[2],b[2]=0),b[3]<0&&(b[1]=-b[3],b[3]=0)}var _=t._parseDots(n);if(!_)return null;if(c=c.replace(/[\(\)\s,\xb0#]/g,"_"),e.gradient&&c!=e.gradient.id&&(g.defs.removeChild(e.gradient),delete e.gradient),!e.gradient){x=v(l+"Gradient",{id:c}),e.gradient=x,v(x,"radial"==l?{fx:d,fy:f}:{x1:b[0],y1:b[1],x2:b[2],y2:b[3],gradientTransform:e.matrix.invert()}),g.defs.appendChild(x);for(var C=0,k=_.length;k>C;C++)x.appendChild(v("stop",{offset:_[C].offset?_[C].offset:C?"100%":"0%","stop-color":_[C].color||"#fff","stop-opacity":isFinite(_[C].opacity)?_[C].opacity:1}))}}return v(p,{fill:"url('"+document.location.origin+document.location.pathname+"#"+c+"')",opacity:1,"fill-opacity":1}),y.fill=u,y.opacity=1,y.fillOpacity=1,1},x=function(t){var e=t.getBBox(1);v(t.pattern,{patternTransform:t.matrix.invert()+" translate("+e.x+","+e.y+")"})},m=function(r,n,s){if("path"==r.type){for(var a,o,h,l,c,d=i(n).toLowerCase().split("-"),f=r.paper,y=s?"end":"start",x=r.node,m=r.attrs,b=m["stroke-width"],w=d.length,_="classic",C=3,k=3,S=5;w--;)switch(d[w]){case"block":case"classic":case"oval":case"diamond":case"open":case"none":_=d[w];break;case"wide":k=5;break;case"narrow":k=2;break;case"long":C=5;break;case"short":C=2}if("open"==_?(C+=2,k+=2,S+=2,h=1,l=s?4:1,c={fill:"none",stroke:m.stroke}):(l=h=C/2,c={fill:m.stroke,stroke:"none"}),r._.arrows?s?(r._.arrows.endPath&&g[r._.arrows.endPath]--,r._.arrows.endMarker&&g[r._.arrows.endMarker]--):(r._.arrows.startPath&&g[r._.arrows.startPath]--,r._.arrows.startMarker&&g[r._.arrows.startMarker]--):r._.arrows={},"none"!=_){var T="raphael-marker-"+_,N="raphael-marker-"+y+_+C+k+"-obj"+r.id;t._g.doc.getElementById(T)?g[T]++:(f.defs.appendChild(v(v("path"),{"stroke-linecap":"round",d:p[_],id:T})),g[T]=1);var B,O=t._g.doc.getElementById(N);O?(g[N]++,B=O.getElementsByTagName("use")[0]):(O=v(v("marker"),{id:N,markerHeight:k,markerWidth:C,orient:"auto",refX:l,refY:k/2}),B=v(v("use"),{"xlink:href":"#"+T,transform:(s?"rotate(180 "+C/2+" "+k/2+") ":u)+"scale("+C/S+","+k/S+")","stroke-width":(1/((C/S+k/S)/2)).toFixed(4)}),O.appendChild(B),f.defs.appendChild(O),g[N]=1),v(B,c);var M=h*("diamond"!=_&&"oval"!=_);s?(a=r._.arrows.startdx*b||0,o=t.getTotalLength(m.path)-M*b):(a=M*b,o=t.getTotalLength(m.path)-(r._.arrows.enddx*b||0)),(c={})["marker-"+y]="url(#"+N+")",(o||a)&&(c.d=t.getSubpath(m.path,a,o)),v(x,c),r._.arrows[y+"Path"]=T,r._.arrows[y+"Marker"]=N,r._.arrows[y+"dx"]=M,r._.arrows[y+"Type"]=_,r._.arrows[y+"String"]=n}else s?(a=r._.arrows.startdx*b||0,o=t.getTotalLength(m.path)-a):(a=0,o=t.getTotalLength(m.path)-(r._.arrows.enddx*b||0)),r._.arrows[y+"Path"]&&v(x,{d:t.getSubpath(m.path,a,o)}),delete r._.arrows[y+"Path"],delete r._.arrows[y+"Marker"],delete r._.arrows[y+"dx"],delete r._.arrows[y+"Type"],delete r._.arrows[y+"String"];for(c in g)if(g[e](c)&&!g[c]){var A=t._g.doc.getElementById(c);A&&A.parentNode.removeChild(A)}}},b={"-":[3,1],".":[1,1],"-.":[3,1,1,1],"-..":[3,1,1,1,1,1],". ":[1,3],"- ":[4,3],"--":[8,3],"- .":[4,3,1,3],"--.":[8,3,1,3],"--..":[8,3,1,3,1,3]},w=function(t,e,r){if(e=b[i(e).toLowerCase()]){for(var n=t.attrs["stroke-width"]||"1",s={round:n,square:n,butt:0}[t.attrs["stroke-linecap"]||r["stroke-linecap"]]||0,a=[],o=e.length;o--;)a[o]=e[o]*n+(o%2?1:-1)*s;v(t.node,{"stroke-dasharray":a.join(",")})}else v(t.node,{"stroke-dasharray":"none"})},_=function(r,s){var h=r.node,c=r.attrs,d=h.style.visibility;for(var p in h.style.visibility="hidden",s)if(s[e](p)){if(!t._availableAttrs[e](p))continue;var g=s[p];switch(c[p]=g,p){case"blur":r.blur(g);break;case"title":var b=h.getElementsByTagName("title");if(b.length&&(b=b[0]))b.firstChild.nodeValue=g;else{b=v("title");var _=t._g.doc.createTextNode(g);b.appendChild(_),h.appendChild(b)}break;case"href":case"target":var k=h.parentNode;if("a"!=k.tagName.toLowerCase()){var S=v("a");k.insertBefore(S,h),S.appendChild(h),k=S}"target"==p?k.setAttributeNS(f,"show","blank"==g?"new":g):k.setAttributeNS(f,p,g);break;case"cursor":h.style.cursor=g;break;case"transform":r.transform(g);break;case"arrow-start":m(r,g);break;case"arrow-end":m(r,g,1);break;case"clip-rect":var T=i(g).split(l);if(4==T.length){r.clip&&r.clip.parentNode.parentNode.removeChild(r.clip.parentNode);var N=v("clipPath"),B=v("rect");N.id=t.createUUID(),v(B,{x:T[0],y:T[1],width:T[2],height:T[3]}),N.appendChild(B),r.paper.defs.appendChild(N),v(h,{"clip-path":"url(#"+N.id+")"}),r.clip=B}if(!g){var O=h.getAttribute("clip-path");if(O){var M=t._g.doc.getElementById(O.replace(/(^url\(#|\)$)/g,u));M&&M.parentNode.removeChild(M),v(h,{"clip-path":u}),delete r.clip}}break;case"path":"path"==r.type&&(v(h,{d:g?c.path=t._pathToAbsolute(g):"M0,0"}),r._.dirty=1,r._.arrows&&("startString"in r._.arrows&&m(r,r._.arrows.startString),"endString"in r._.arrows&&m(r,r._.arrows.endString,1)));break;case"width":if(h.setAttribute(p,g),r._.dirty=1,!c.fx)break;p="x",g=c.x;case"x":c.fx&&(g=-c.x-(c.width||0));case"rx":if("rx"==p&&"rect"==r.type)break;case"cx":h.setAttribute(p,g),r.pattern&&x(r),r._.dirty=1;break;case"height":if(h.setAttribute(p,g),r._.dirty=1,!c.fy)break;p="y",g=c.y;case"y":c.fy&&(g=-c.y-(c.height||0));case"ry":if("ry"==p&&"rect"==r.type)break;case"cy":h.setAttribute(p,g),r.pattern&&x(r),r._.dirty=1;break;case"r":"rect"==r.type?v(h,{rx:g,ry:g}):h.setAttribute(p,g),r._.dirty=1;break;case"src":"image"==r.type&&h.setAttributeNS(f,"href",g);break;case"stroke-width":(1!=r._.sx||1!=r._.sy)&&(g/=a(o(r._.sx),o(r._.sy))||1),h.setAttribute(p,g),c["stroke-dasharray"]&&w(r,c["stroke-dasharray"],s),r._.arrows&&("startString"in r._.arrows&&m(r,r._.arrows.startString),"endString"in r._.arrows&&m(r,r._.arrows.endString,1));break;case"stroke-dasharray":w(r,g,s);break;case"fill":var A=i(g).match(t._ISURL);if(A){N=v("pattern");var I=v("image");N.id=t.createUUID(),v(N,{x:0,y:0,patternUnits:"userSpaceOnUse",height:1,width:1}),v(I,{x:0,y:0,"xlink:href":A[1]}),N.appendChild(I),function(e){t._preload(A[1],function(){var t=this.offsetWidth,i=this.offsetHeight;v(e,{width:t,height:i}),v(I,{width:t,height:i})})}(N),r.paper.defs.appendChild(N),v(h,{fill:"url(#"+N.id+")"}),r.pattern=N,r.pattern&&x(r);break}var F=t.getRGB(g);if(F.error){if(("circle"==r.type||"ellipse"==r.type||"r"!=i(g).charAt())&&y(r,g)){if("opacity"in c||"fill-opacity"in c){var L=t._g.doc.getElementById(h.getAttribute("fill").replace(/^url\(#|\)$/g,u));if(L){var E=L.getElementsByTagName("stop");v(E[E.length-1],{"stop-opacity":("opacity"in c?c.opacity:1)*("fill-opacity"in c?c["fill-opacity"]:1)})}}c.gradient=g,c.fill="none";break}}else delete s.gradient,delete c.gradient,!t.is(c.opacity,"undefined")&&t.is(s.opacity,"undefined")&&v(h,{opacity:c.opacity}),!t.is(c["fill-opacity"],"undefined")&&t.is(s["fill-opacity"],"undefined")&&v(h,{"fill-opacity":c["fill-opacity"]});F[e]("opacity")&&v(h,{"fill-opacity":F.opacity>1?F.opacity/100:F.opacity});case"stroke":F=t.getRGB(g),h.setAttribute(p,F.hex),"stroke"==p&&F[e]("opacity")&&v(h,{"stroke-opacity":F.opacity>1?F.opacity/100:F.opacity}),"stroke"==p&&r._.arrows&&("startString"in r._.arrows&&m(r,r._.arrows.startString),"endString"in r._.arrows&&m(r,r._.arrows.endString,1));break;case"gradient":("circle"==r.type||"ellipse"==r.type||"r"!=i(g).charAt())&&y(r,g);break;case"opacity":c.gradient&&!c[e]("stroke-opacity")&&v(h,{"stroke-opacity":g>1?g/100:g});case"fill-opacity":if(c.gradient){(L=t._g.doc.getElementById(h.getAttribute("fill").replace(/^url\(#|\)$/g,u)))&&(E=L.getElementsByTagName("stop"),v(E[E.length-1],{"stop-opacity":g}));break}default:"font-size"==p&&(g=n(g,10)+"px");var P=p.replace(/(\-.)/g,function(t){return t.substring(1).toUpperCase()});h.style[P]=g,r._.dirty=1,h.setAttribute(p,g)}}C(r,s),h.style.visibility=d},C=function(r,s){if("text"==r.type&&(s[e]("text")||s[e]("font")||s[e]("font-size")||s[e]("x")||s[e]("y"))){var a=r.attrs,o=r.node,h=o.firstChild?n(t._g.doc.defaultView.getComputedStyle(o.firstChild,u).getPropertyValue("font-size"),10):10;if(s[e]("text")){for(a.text=s.text;o.firstChild;)o.removeChild(o.firstChild);for(var l,c=i(s.text).split("\n"),d=[],f=0,p=c.length;p>f;f++)l=v("tspan"),f&&v(l,{dy:1.2*h,x:a.x}),l.appendChild(t._g.doc.createTextNode(c[f])),o.appendChild(l),d[f]=l}else for(f=0,p=(d=o.getElementsByTagName("tspan")).length;p>f;f++)f?v(d[f],{dy:1.2*h,x:a.x}):v(d[0],{dy:0});v(o,{x:a.x,y:a.y}),r._.dirty=1;var g=r._getBBox(),y=a.y-(g.y+g.height/2);y&&t.is(y,"finite")&&v(d[0],{dy:y})}},k=function(t){return t.parentNode&&"a"===t.parentNode.tagName.toLowerCase()?t.parentNode:t},S=function(e,i){this[0]=this.node=e,e.raphael=!0,this.id=t._oid++,e.raphaelid=this.id,this.matrix=t.matrix(),this.realPath=null,this.paper=i,this.attrs=this.attrs||{},this._={transform:[],sx:1,sy:1,deg:0,dx:0,dy:0,dirty:1},!i.bottom&&(i.bottom=this),this.prev=i.top,i.top&&(i.top.next=this),i.top=this,this.next=null},T=t.el;S.prototype=T,T.constructor=S,t._engine.path=function(t,e){var i=v("path");e.canvas&&e.canvas.appendChild(i);var r=new S(i,e);return r.type="path",_(r,{fill:"none",stroke:"#000",path:t}),r},T.rotate=function(t,e,n){if(this.removed)return this;if((t=i(t).split(l)).length-1&&(e=r(t[1]),n=r(t[2])),t=r(t[0]),null==n&&(e=n),null==e||null==n){var s=this.getBBox(1);e=s.x+s.width/2,n=s.y+s.height/2}return this.transform(this._.transform.concat([["r",t,e,n]])),this},T.scale=function(t,e,n,s){if(this.removed)return this;if((t=i(t).split(l)).length-1&&(e=r(t[1]),n=r(t[2]),s=r(t[3])),t=r(t[0]),null==e&&(e=t),null==s&&(n=s),null==n||null==s)var a=this.getBBox(1);return n=null==n?a.x+a.width/2:n,s=null==s?a.y+a.height/2:s,this.transform(this._.transform.concat([["s",t,e,n,s]])),this},T.translate=function(t,e){return this.removed?this:((t=i(t).split(l)).length-1&&(e=r(t[1])),t=r(t[0])||0,e=+e||0,this.transform(this._.transform.concat([["t",t,e]])),this)},T.transform=function(i){var r=this._;if(null==i)return r.transform;if(t._extractTransform(this,i),this.clip&&v(this.clip,{transform:this.matrix.invert()}),this.pattern&&x(this),this.node&&v(this.node,{transform:this.matrix}),1!=r.sx||1!=r.sy){var n=this.attrs[e]("stroke-width")?this.attrs["stroke-width"]:1;this.attr({"stroke-width":n})}return r.transform=this.matrix.toTransformString(),this},T.hide=function(){return this.removed||(this.node.style.display="none"),this},T.show=function(){return this.removed||(this.node.style.display=""),this},T.remove=function(){var e=k(this.node);if(!this.removed&&e.parentNode){var i=this.paper;for(var r in i.__set__&&i.__set__.exclude(this),c.unbind("raphael.*.*."+this.id),this.gradient&&i.defs.removeChild(this.gradient),t._tear(this,i),e.parentNode.removeChild(e),this.removeData(),this)this[r]="function"==typeof this[r]?t._removedFactory(r):null;this.removed=!0}},T._getBBox=function(){if("none"==this.node.style.display){this.show();var t=!0}var e,i=!1;this.paper.canvas.parentElement?e=this.paper.canvas.parentElement.style:this.paper.canvas.parentNode&&(e=this.paper.canvas.parentNode.style),e&&"none"==e.display&&(i=!0,e.display="");var r={};try{r=this.node.getBBox()}catch(t){r={x:this.node.clientLeft,y:this.node.clientTop,width:this.node.clientWidth,height:this.node.clientHeight}}finally{r=r||{},i&&(e.display="none")}return t&&this.hide(),r},T.attr=function(i,r){if(this.removed)return this;if(null==i){var n={};for(var s in this.attrs)this.attrs[e](s)&&(n[s]=this.attrs[s]);return n.gradient&&"none"==n.fill&&(n.fill=n.gradient)&&delete n.gradient,n.transform=this._.transform,n}if(null==r&&t.is(i,"string")){if("fill"==i&&"none"==this.attrs.fill&&this.attrs.gradient)return this.attrs.gradient;if("transform"==i)return this._.transform;for(var a=i.split(l),o={},h=0,u=a.length;u>h;h++)(i=a[h])in this.attrs?o[i]=this.attrs[i]:t.is(this.paper.customAttributes[i],"function")?o[i]=this.paper.customAttributes[i].def:o[i]=t._availableAttrs[i];return u-1?o:o[a[0]]}if(null==r&&t.is(i,"array")){for(o={},h=0,u=i.length;u>h;h++)o[i[h]]=this.attr(i[h]);return o}if(null!=r){var d={};d[i]=r}else null!=i&&t.is(i,"object")&&(d=i);for(var f in d)c("raphael.attr."+f+"."+this.id,this,d[f]);for(f in this.paper.customAttributes)if(this.paper.customAttributes[e](f)&&d[e](f)&&t.is(this.paper.customAttributes[f],"function")){var p=this.paper.customAttributes[f].apply(this,[].concat(d[f]));for(var g in this.attrs[f]=d[f],p)p[e](g)&&(d[g]=p[g])}return _(this,d),this},T.toFront=function(){if(this.removed)return this;var e=k(this.node);e.parentNode.appendChild(e);var i=this.paper;return i.top!=this&&t._tofront(this,i),this},T.toBack=function(){if(this.removed)return this;var e=k(this.node),i=e.parentNode;return i.insertBefore(e,i.firstChild),t._toback(this,this.paper),this.paper,this},T.insertAfter=function(e){if(this.removed||!e)return this;var i=k(this.node),r=k(e.node||e[e.length-1].node);return r.nextSibling?r.parentNode.insertBefore(i,r.nextSibling):r.parentNode.appendChild(i),t._insertafter(this,e,this.paper),this},T.insertBefore=function(e){if(this.removed||!e)return this;var i=k(this.node),r=k(e.node||e[0].node);return r.parentNode.insertBefore(i,r),t._insertbefore(this,e,this.paper),this},T.blur=function(e){var i=this;if(0!=+e){var r=v("filter"),n=v("feGaussianBlur");i.attrs.blur=e,r.id=t.createUUID(),v(n,{stdDeviation:+e||1.5}),r.appendChild(n),i.paper.defs.appendChild(r),i._blur=r,v(i.node,{filter:"url(#"+r.id+")"})}else i._blur&&(i._blur.parentNode.removeChild(i._blur),delete i._blur,delete i.attrs.blur),i.node.removeAttribute("filter");return i},t._engine.circle=function(t,e,i,r){var n=v("circle");t.canvas&&t.canvas.appendChild(n);var s=new S(n,t);return s.attrs={cx:e,cy:i,r:r,fill:"none",stroke:"#000"},s.type="circle",v(n,s.attrs),s},t._engine.rect=function(t,e,i,r,n,s){var a=v("rect");t.canvas&&t.canvas.appendChild(a);var o=new S(a,t);return o.attrs={x:e,y:i,width:r,height:n,rx:s||0,ry:s||0,fill:"none",stroke:"#000"},o.type="rect",v(a,o.attrs),o},t._engine.ellipse=function(t,e,i,r,n){var s=v("ellipse");t.canvas&&t.canvas.appendChild(s);var a=new S(s,t);return a.attrs={cx:e,cy:i,rx:r,ry:n,fill:"none",stroke:"#000"},a.type="ellipse",v(s,a.attrs),a},t._engine.image=function(t,e,i,r,n,s){var a=v("image");v(a,{x:i,y:r,width:n,height:s,preserveAspectRatio:"none"}),a.setAttributeNS(f,"href",e),t.canvas&&t.canvas.appendChild(a);var o=new S(a,t);return o.attrs={x:i,y:r,width:n,height:s,src:e},o.type="image",o},t._engine.text=function(e,i,r,n){var s=v("text");e.canvas&&e.canvas.appendChild(s);var a=new S(s,e);return a.attrs={x:i,y:r,"text-anchor":"middle",text:n,"font-family":t._availableAttrs["font-family"],"font-size":t._availableAttrs["font-size"],stroke:"none",fill:"#000"},a.type="text",_(a,a.attrs),a},t._engine.setSize=function(t,e){return this.width=t||this.width,this.height=e||this.height,this.canvas.setAttribute("width",this.width),this.canvas.setAttribute("height",this.height),this._viewBox&&this.setViewBox.apply(this,this._viewBox),this},t._engine.create=function(){var e=t._getContainer.apply(0,arguments),i=e&&e.container,r=e.x,n=e.y,s=e.width,a=e.height;if(!i)throw new Error("SVG container not found.");var o,h=v("svg"),l="overflow:hidden;";return r=r||0,n=n||0,v(h,{height:a=a||342,version:1.1,width:s=s||512,xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}),1==i?(h.style.cssText=l+"position:absolute;left:"+r+"px;top:"+n+"px",t._g.doc.body.appendChild(h),o=1):(h.style.cssText=l+"position:relative",i.firstChild?i.insertBefore(h,i.firstChild):i.appendChild(h)),(i=new t._Paper).width=s,i.height=a,i.canvas=h,i.clear(),i._left=i._top=0,o&&(i.renderfix=function(){}),i.renderfix(),i},t._engine.setViewBox=function(t,e,i,r,n){c("raphael.setViewBox",this,this._viewBox,[t,e,i,r,n]);var s,o,h=this.getSize(),l=a(i/h.width,r/h.height),u=this.top,f=n?"xMidYMid meet":"xMinYMin";for(null==t?(this._vbSize&&(l=1),delete this._vbSize,s="0 0 "+this.width+d+this.height):(this._vbSize=l,s=t+d+e+d+i+d+r),v(this.canvas,{viewBox:s,preserveAspectRatio:f});l&&u;)o="stroke-width"in u.attrs?u.attrs["stroke-width"]:1,u.attr({"stroke-width":o}),u._.dirty=1,u._.dirtyT=1,u=u.prev;return this._viewBox=[t,e,i,r,!!n],this},t.prototype.renderfix=function(){var t,e=this.canvas,i=e.style;try{t=e.getScreenCTM()||e.createSVGMatrix()}catch(i){t=e.createSVGMatrix()}var r=-t.e%1,n=-t.f%1;(r||n)&&(r&&(this._left=(this._left+r)%1,i.left=this._left+"px"),n&&(this._top=(this._top+n)%1,i.top=this._top+"px"))},t.prototype.clear=function(){t.eve("raphael.clear",this);for(var e=this.canvas;e.firstChild;)e.removeChild(e.firstChild);this.bottom=this.top=null,(this.desc=v("desc")).appendChild(t._g.doc.createTextNode("Created with Raphaël "+t.version)),e.appendChild(this.desc),e.appendChild(this.defs=v("defs"))},t.prototype.remove=function(){for(var e in c("raphael.remove",this),this.canvas.parentNode&&this.canvas.parentNode.removeChild(this.canvas),this)this[e]="function"==typeof this[e]?t._removedFactory(e):null};var N=t.st;for(var B in T)T[e](B)&&!N[e](B)&&(N[B]=function(t){return function(){var e=arguments;return this.forEach(function(i){i[t].apply(i,e)})}}(B))}}),function(t,e){"function"==typeof define&&define.amd?define("raphael.vml",["raphael.core"],function(t){return e(t)}):e("object"==typeof exports?require("./raphael.core"):t.Raphael)}(this,function(t){if(!t||t.vml){var e="hasOwnProperty",i=String,r=parseFloat,n=Math,s=n.round,a=n.max,o=n.min,h=n.abs,l="fill",c=/[, ]+/,u=t.eve,d=" ",f="",p={M:"m",L:"l",C:"c",Z:"x",m:"t",l:"r",c:"v",z:"x"},g=/([clmz]),?([^clmz]*)/gi,v=/ progid:\S+Blur\([^\)]+\)/g,y=/-?[^,\s-]+/g,x="position:absolute;left:0;top:0;width:1px;height:1px;behavior:url(#default#VML)",m=21600,b={path:1,rect:1,image:1},w={circle:1,ellipse:1},_=function(e){var r=/[ahqstv]/gi,n=t._pathToAbsolute;if(i(e).match(r)&&(n=t._path2curve),r=/[clmz]/g,n==t._pathToAbsolute&&!i(e).match(r)){var a=i(e).replace(g,function(t,e,i){var r=[],n="m"==e.toLowerCase(),a=p[e];return i.replace(y,function(t){n&&2==r.length&&(a+=r+p["m"==e?"l":"L"],r=[]),r.push(s(t*m))}),a+r});return a}var o,h,l=n(e);a=[];for(var c=0,u=l.length;u>c;c++){o=l[c],"z"==(h=l[c][0].toLowerCase())&&(h="x");for(var v=1,x=o.length;x>v;v++)h+=s(o[v]*m)+(v!=x-1?",":f);a.push(h)}return a.join(d)},C=function(e,i,r){var n=t.matrix();return n.rotate(-e,.5,.5),{dx:n.x(i,r),dy:n.y(i,r)}},k=function(t,e,i,r,n,s){var a=t._,o=t.matrix,c=a.fillpos,u=t.node,f=u.style,p=1,g="",v=m/e,y=m/i;if(f.visibility="hidden",e&&i){if(u.coordsize=h(v)+d+h(y),f.rotation=s*(0>e*i?-1:1),s){var x=C(s,r,n);r=x.dx,n=x.dy}if(0>e&&(g+="x"),0>i&&(g+=" y")&&(p=-1),f.flip=g,u.coordorigin=r*-v+d+n*-y,c||a.fillsize){var b=u.getElementsByTagName(l);b=b&&b[0],u.removeChild(b),c&&(x=C(s,o.x(c[0],c[1]),o.y(c[0],c[1])),b.position=x.dx*p+d+x.dy*p),a.fillsize&&(b.size=a.fillsize[0]*h(e)+d+a.fillsize[1]*h(i)),u.appendChild(b)}f.visibility="visible"}};t.toString=function(){return"Your browser doesn’t support SVG. Falling down to VML.\nYou are running Raphaël "+this.version};var S,T=function(t,e,r){for(var n=i(e).toLowerCase().split("-"),s=r?"end":"start",a=n.length,o="classic",h="medium",l="medium";a--;)switch(n[a]){case"block":case"classic":case"oval":case"diamond":case"open":case"none":o=n[a];break;case"wide":case"narrow":l=n[a];break;case"long":case"short":h=n[a]}var c=t.node.getElementsByTagName("stroke")[0];c[s+"arrow"]=o,c[s+"arrowlength"]=h,c[s+"arrowwidth"]=l},N=function(n,h){n.attrs=n.attrs||{};var u=n.node,p=n.attrs,g=u.style,v=b[n.type]&&(h.x!=p.x||h.y!=p.y||h.width!=p.width||h.height!=p.height||h.cx!=p.cx||h.cy!=p.cy||h.rx!=p.rx||h.ry!=p.ry||h.r!=p.r),y=w[n.type]&&(p.cx!=h.cx||p.cy!=h.cy||p.r!=h.r||p.rx!=h.rx||p.ry!=h.ry),x=n;for(var C in h)h[e](C)&&(p[C]=h[C]);if(v&&(p.path=t._getPath[n.type](n),n._.dirty=1),h.href&&(u.href=h.href),h.title&&(u.title=h.title),h.target&&(u.target=h.target),h.cursor&&(g.cursor=h.cursor),"blur"in h&&n.blur(h.blur),(h.path&&"path"==n.type||v)&&(u.path=_(~i(p.path).toLowerCase().indexOf("r")?t._pathToAbsolute(p.path):p.path),n._.dirty=1,"image"==n.type&&(n._.fillpos=[p.x,p.y],n._.fillsize=[p.width,p.height],k(n,1,1,0,0,0))),"transform"in h&&n.transform(h.transform),y){var N=+p.cx,O=+p.cy,M=+p.rx||+p.r||0,A=+p.ry||+p.r||0;u.path=t.format("ar{0},{1},{2},{3},{4},{1},{4},{1}x",s((N-M)*m),s((O-A)*m),s((N+M)*m),s((O+A)*m),s(N*m)),n._.dirty=1}if("clip-rect"in h){var I=i(h["clip-rect"]).split(c);if(4==I.length){I[2]=+I[2]+ +I[0],I[3]=+I[3]+ +I[1];var F=u.clipRect||t._g.doc.createElement("div"),L=F.style;L.clip=t.format("rect({1}px {2}px {3}px {0}px)",I),u.clipRect||(L.position="absolute",L.top=0,L.left=0,L.width=n.paper.width+"px",L.height=n.paper.height+"px",u.parentNode.insertBefore(F,u),F.appendChild(u),u.clipRect=F)}h["clip-rect"]||u.clipRect&&(u.clipRect.style.clip="auto")}if(n.textpath){var E=n.textpath.style;h.font&&(E.font=h.font),h["font-family"]&&(E.fontFamily='"'+h["font-family"].split(",")[0].replace(/^['"]+|['"]+$/g,f)+'"'),h["font-size"]&&(E.fontSize=h["font-size"]),h["font-weight"]&&(E.fontWeight=h["font-weight"]),h["font-style"]&&(E.fontStyle=h["font-style"])}if("arrow-start"in h&&T(x,h["arrow-start"]),"arrow-end"in h&&T(x,h["arrow-end"],1),null!=h.opacity||null!=h["stroke-width"]||null!=h.fill||null!=h.src||null!=h.stroke||null!=h["stroke-width"]||null!=h["stroke-opacity"]||null!=h["fill-opacity"]||null!=h["stroke-dasharray"]||null!=h["stroke-miterlimit"]||null!=h["stroke-linejoin"]||null!=h["stroke-linecap"]){var P=u.getElementsByTagName(l);if(!(P=P&&P[0])&&(P=S(l)),"image"==n.type&&h.src&&(P.src=h.src),h.fill&&(P.on=!0),(null==P.on||"none"==h.fill||null===h.fill)&&(P.on=!1),P.on&&h.fill){var D=i(h.fill).match(t._ISURL);if(D){P.parentNode==u&&u.removeChild(P),P.rotate=!0,P.src=D[1],P.type="tile";var G=n.getBBox(1);P.position=G.x+d+G.y,n._.fillpos=[G.x,G.y],t._preload(D[1],function(){n._.fillsize=[this.offsetWidth,this.offsetHeight]})}else P.color=t.getRGB(h.fill).hex,P.src=f,P.type="solid",t.getRGB(h.fill).error&&(x.type in{circle:1,ellipse:1}||"r"!=i(h.fill).charAt())&&B(x,h.fill,P)&&(p.fill="none",p.gradient=h.fill,P.rotate=!1)}if("fill-opacity"in h||"opacity"in h){var R=((+p["fill-opacity"]+1||2)-1)*((+p.opacity+1||2)-1)*((+t.getRGB(h.fill).o+1||2)-1);R=o(a(R,0),1),P.opacity=R,P.src&&(P.color="none")}u.appendChild(P);var z=u.getElementsByTagName("stroke")&&u.getElementsByTagName("stroke")[0],j=!1;!z&&(j=z=S("stroke")),(h.stroke&&"none"!=h.stroke||h["stroke-width"]||null!=h["stroke-opacity"]||h["stroke-dasharray"]||h["stroke-miterlimit"]||h["stroke-linejoin"]||h["stroke-linecap"])&&(z.on=!0),("none"==h.stroke||null===h.stroke||null==z.on||0==h.stroke||0==h["stroke-width"])&&(z.on=!1);var H=t.getRGB(h.stroke);z.on&&h.stroke&&(z.color=H.hex),R=((+p["stroke-opacity"]+1||2)-1)*((+p.opacity+1||2)-1)*((+H.o+1||2)-1);var W=.75*(r(h["stroke-width"])||1);if(R=o(a(R,0),1),null==h["stroke-width"]&&(W=p["stroke-width"]),h["stroke-width"]&&(z.weight=W),W&&1>W&&(R*=W)&&(z.weight=1),z.opacity=R,h["stroke-linejoin"]&&(z.joinstyle=h["stroke-linejoin"]||"miter"),z.miterlimit=h["stroke-miterlimit"]||8,h["stroke-linecap"]&&(z.endcap="butt"==h["stroke-linecap"]?"flat":"square"==h["stroke-linecap"]?"square":"round"),"stroke-dasharray"in h){var q={"-":"shortdash",".":"shortdot","-.":"shortdashdot","-..":"shortdashdotdot",". ":"dot","- ":"dash","--":"longdash","- .":"dashdot","--.":"longdashdot","--..":"longdashdotdot"};z.dashstyle=q[e](h["stroke-dasharray"])?q[h["stroke-dasharray"]]:f}j&&u.appendChild(z)}if("text"==x.type){x.paper.canvas.style.display=f;var Y=x.paper.span,X=p.font&&p.font.match(/\d+(?:\.\d*)?(?=px)/);g=Y.style,p.font&&(g.font=p.font),p["font-family"]&&(g.fontFamily=p["font-family"]),p["font-weight"]&&(g.fontWeight=p["font-weight"]),p["font-style"]&&(g.fontStyle=p["font-style"]),X=r(p["font-size"]||X&&X[0])||10,g.fontSize=100*X+"px",x.textpath.string&&(Y.innerHTML=i(x.textpath.string).replace(/</g,"&#60;").replace(/&/g,"&#38;").replace(/\n/g,"<br>"));var V=Y.getBoundingClientRect();x.W=p.w=(V.right-V.left)/100,x.H=p.h=(V.bottom-V.top)/100,x.X=p.x,x.Y=p.y+x.H/2,("x"in h||"y"in h)&&(x.path.v=t.format("m{0},{1}l{2},{1}",s(p.x*m),s(p.y*m),s(p.x*m)+1));for(var U=["x","y","text","font","font-family","font-weight","font-style","font-size"],$=0,Q=U.length;Q>$;$++)if(U[$]in h){x._.dirty=1;break}switch(p["text-anchor"]){case"start":x.textpath.style["v-text-align"]="left",x.bbx=x.W/2;break;case"end":x.textpath.style["v-text-align"]="right",x.bbx=-x.W/2;break;default:x.textpath.style["v-text-align"]="center",x.bbx=0}x.textpath.style["v-text-kern"]=!0}},B=function(e,s,a){e.attrs=e.attrs||{};var o=(e.attrs,Math.pow),h="linear",l=".5 .5";if(e.attrs.gradient=s,s=(s=i(s).replace(t._radial_gradient,function(t,e,i){return h="radial",e&&i&&(e=r(e),i=r(i),o(e-.5,2)+o(i-.5,2)>.25&&(i=n.sqrt(.25-o(e-.5,2))*(2*(i>.5)-1)+.5),l=e+d+i),f})).split(/\s*\-\s*/),"linear"==h){var c=s.shift();if(c=-r(c),isNaN(c))return null}var u=t._parseDots(s);if(!u)return null;if(e=e.shape||e.node,u.length){e.removeChild(a),a.on=!0,a.method="none",a.color=u[0].color,a.color2=u[u.length-1].color;for(var p=[],g=0,v=u.length;v>g;g++)u[g].offset&&p.push(u[g].offset+d+u[g].color);a.colors=p.length?p.join():"0% "+a.color,"radial"==h?(a.type="gradientTitle",a.focus="100%",a.focussize="0 0",a.focusposition=l,a.angle=0):(a.type="gradient",a.angle=(270-c)%360),e.appendChild(a)}return 1},O=function(e,i){this[0]=this.node=e,e.raphael=!0,this.id=t._oid++,e.raphaelid=this.id,this.X=0,this.Y=0,this.attrs={},this.paper=i,this.matrix=t.matrix(),this._={transform:[],sx:1,sy:1,dx:0,dy:0,deg:0,dirty:1,dirtyT:1},!i.bottom&&(i.bottom=this),this.prev=i.top,i.top&&(i.top.next=this),i.top=this,this.next=null},M=t.el;O.prototype=M,M.constructor=O,M.transform=function(e){if(null==e)return this._.transform;var r,n=this.paper._viewBoxShift,s=n?"s"+[n.scale,n.scale]+"-1-1t"+[n.dx,n.dy]:f;n&&(r=e=i(e).replace(/\.{3}|\u2026/g,this._.transform||f)),t._extractTransform(this,s+e);var a,o=this.matrix.clone(),h=this.skew,l=this.node,c=~i(this.attrs.fill).indexOf("-"),u=!i(this.attrs.fill).indexOf("url(");if(o.translate(1,1),u||c||"image"==this.type)if(h.matrix="1 0 0 1",h.offset="0 0",a=o.split(),c&&a.noRotation||!a.isSimple){l.style.filter=o.toFilter();var p=this.getBBox(),g=this.getBBox(1),v=p.x-g.x,y=p.y-g.y;l.coordorigin=v*-m+d+y*-m,k(this,1,1,v,y,0)}else l.style.filter=f,k(this,a.scalex,a.scaley,a.dx,a.dy,a.rotate);else l.style.filter=f,h.matrix=i(o),h.offset=o.offset();return null!==r&&(this._.transform=r,t._extractTransform(this,r)),this},M.rotate=function(t,e,n){if(this.removed)return this;if(null!=t){if((t=i(t).split(c)).length-1&&(e=r(t[1]),n=r(t[2])),t=r(t[0]),null==n&&(e=n),null==e||null==n){var s=this.getBBox(1);e=s.x+s.width/2,n=s.y+s.height/2}return this._.dirtyT=1,this.transform(this._.transform.concat([["r",t,e,n]])),this}},M.translate=function(t,e){return this.removed?this:((t=i(t).split(c)).length-1&&(e=r(t[1])),t=r(t[0])||0,e=+e||0,this._.bbox&&(this._.bbox.x+=t,this._.bbox.y+=e),this.transform(this._.transform.concat([["t",t,e]])),this)},M.scale=function(t,e,n,s){if(this.removed)return this;if((t=i(t).split(c)).length-1&&(e=r(t[1]),n=r(t[2]),s=r(t[3]),isNaN(n)&&(n=null),isNaN(s)&&(s=null)),t=r(t[0]),null==e&&(e=t),null==s&&(n=s),null==n||null==s)var a=this.getBBox(1);return n=null==n?a.x+a.width/2:n,s=null==s?a.y+a.height/2:s,this.transform(this._.transform.concat([["s",t,e,n,s]])),this._.dirtyT=1,this},M.hide=function(){return!this.removed&&(this.node.style.display="none"),this},M.show=function(){return!this.removed&&(this.node.style.display=f),this},M.auxGetBBox=t.el.getBBox,M.getBBox=function(){var t=this.auxGetBBox();if(this.paper&&this.paper._viewBoxShift){var e={},i=1/this.paper._viewBoxShift.scale;return e.x=t.x-this.paper._viewBoxShift.dx,e.x*=i,e.y=t.y-this.paper._viewBoxShift.dy,e.y*=i,e.width=t.width*i,e.height=t.height*i,e.x2=e.x+e.width,e.y2=e.y+e.height,e}return t},M._getBBox=function(){return this.removed?{}:{x:this.X+(this.bbx||0)-this.W/2,y:this.Y-this.H,width:this.W,height:this.H}},M.remove=function(){if(!this.removed&&this.node.parentNode){for(var e in this.paper.__set__&&this.paper.__set__.exclude(this),t.eve.unbind("raphael.*.*."+this.id),t._tear(this,this.paper),this.node.parentNode.removeChild(this.node),this.shape&&this.shape.parentNode.removeChild(this.shape),this)this[e]="function"==typeof this[e]?t._removedFactory(e):null;this.removed=!0}},M.attr=function(i,r){if(this.removed)return this;if(null==i){var n={};for(var s in this.attrs)this.attrs[e](s)&&(n[s]=this.attrs[s]);return n.gradient&&"none"==n.fill&&(n.fill=n.gradient)&&delete n.gradient,n.transform=this._.transform,n}if(null==r&&t.is(i,"string")){if(i==l&&"none"==this.attrs.fill&&this.attrs.gradient)return this.attrs.gradient;for(var a=i.split(c),o={},h=0,d=a.length;d>h;h++)(i=a[h])in this.attrs?o[i]=this.attrs[i]:t.is(this.paper.customAttributes[i],"function")?o[i]=this.paper.customAttributes[i].def:o[i]=t._availableAttrs[i];return d-1?o:o[a[0]]}if(this.attrs&&null==r&&t.is(i,"array")){for(o={},h=0,d=i.length;d>h;h++)o[i[h]]=this.attr(i[h]);return o}var f;for(var p in null!=r&&((f={})[i]=r),null==r&&t.is(i,"object")&&(f=i),f)u("raphael.attr."+p+"."+this.id,this,f[p]);if(f){for(p in this.paper.customAttributes)if(this.paper.customAttributes[e](p)&&f[e](p)&&t.is(this.paper.customAttributes[p],"function")){var g=this.paper.customAttributes[p].apply(this,[].concat(f[p]));for(var v in this.attrs[p]=f[p],g)g[e](v)&&(f[v]=g[v])}f.text&&"text"==this.type&&(this.textpath.string=f.text),N(this,f)}return this},M.toFront=function(){return!this.removed&&this.node.parentNode.appendChild(this.node),this.paper&&this.paper.top!=this&&t._tofront(this,this.paper),this},M.toBack=function(){return this.removed?this:(this.node.parentNode.firstChild!=this.node&&(this.node.parentNode.insertBefore(this.node,this.node.parentNode.firstChild),t._toback(this,this.paper)),this)},M.insertAfter=function(e){return this.removed?this:(e.constructor==t.st.constructor&&(e=e[e.length-1]),e.node.nextSibling?e.node.parentNode.insertBefore(this.node,e.node.nextSibling):e.node.parentNode.appendChild(this.node),t._insertafter(this,e,this.paper),this)},M.insertBefore=function(e){return this.removed?this:(e.constructor==t.st.constructor&&(e=e[0]),e.node.parentNode.insertBefore(this.node,e.node),t._insertbefore(this,e,this.paper),this)},M.blur=function(e){var i=this.node.runtimeStyle,r=i.filter;return r=r.replace(v,f),0!=+e?(this.attrs.blur=e,i.filter=r+d+" progid:DXImageTransform.Microsoft.Blur(pixelradius="+(+e||1.5)+")",i.margin=t.format("-{0}px 0 0 -{0}px",s(+e||1.5))):(i.filter=r,i.margin=0,delete this.attrs.blur),this},t._engine.path=function(t,e){var i=S("shape");i.style.cssText=x,i.coordsize=m+d+m,i.coordorigin=e.coordorigin;var r=new O(i,e),n={fill:"none",stroke:"#000"};t&&(n.path=t),r.type="path",r.path=[],r.Path=f,N(r,n),e.canvas.appendChild(i);var s=S("skew");return s.on=!0,i.appendChild(s),r.skew=s,r.transform(f),r},t._engine.rect=function(e,i,r,n,s,a){var o=t._rectPath(i,r,n,s,a),h=e.path(o),l=h.attrs;return h.X=l.x=i,h.Y=l.y=r,h.W=l.width=n,h.H=l.height=s,l.r=a,l.path=o,h.type="rect",h},t._engine.ellipse=function(t,e,i,r,n){var s=t.path();return s.attrs,s.X=e-r,s.Y=i-n,s.W=2*r,s.H=2*n,s.type="ellipse",N(s,{cx:e,cy:i,rx:r,ry:n}),s},t._engine.circle=function(t,e,i,r){var n=t.path();return n.attrs,n.X=e-r,n.Y=i-r,n.W=n.H=2*r,n.type="circle",N(n,{cx:e,cy:i,r:r}),n},t._engine.image=function(e,i,r,n,s,a){var o=t._rectPath(r,n,s,a),h=e.path(o).attr({stroke:"none"}),c=h.attrs,u=h.node,d=u.getElementsByTagName(l)[0];return c.src=i,h.X=c.x=r,h.Y=c.y=n,h.W=c.width=s,h.H=c.height=a,c.path=o,h.type="image",d.parentNode==u&&u.removeChild(d),d.rotate=!0,d.src=i,d.type="tile",h._.fillpos=[r,n],h._.fillsize=[s,a],u.appendChild(d),k(h,1,1,0,0,0),h},t._engine.text=function(e,r,n,a){var o=S("shape"),h=S("path"),l=S("textpath");r=r||0,n=n||0,a=a||"",h.v=t.format("m{0},{1}l{2},{1}",s(r*m),s(n*m),s(r*m)+1),h.textpathok=!0,l.string=i(a),l.on=!0,o.style.cssText=x,o.coordsize=m+d+m,o.coordorigin="0 0";var c=new O(o,e),u={fill:"#000",stroke:"none",font:t._availableAttrs.font,text:a};c.shape=o,c.path=h,c.textpath=l,c.type="text",c.attrs.text=i(a),c.attrs.x=r,c.attrs.y=n,c.attrs.w=1,c.attrs.h=1,N(c,u),o.appendChild(l),o.appendChild(h),e.canvas.appendChild(o);var p=S("skew");return p.on=!0,o.appendChild(p),c.skew=p,c.transform(f),c},t._engine.setSize=function(e,i){var r=this.canvas.style;return this.width=e,this.height=i,e==+e&&(e+="px"),i==+i&&(i+="px"),r.width=e,r.height=i,r.clip="rect(0 "+e+" "+i+" 0)",this._viewBox&&t._engine.setViewBox.apply(this,this._viewBox),this},t._engine.setViewBox=function(e,i,r,n,s){t.eve("raphael.setViewBox",this,this._viewBox,[e,i,r,n,s]);var a,o,h=this.getSize(),l=h.width,c=h.height;return s&&(l>r*(a=c/n)&&(e-=(l-r*a)/2/a),c>n*(o=l/r)&&(i-=(c-n*o)/2/o)),this._viewBox=[e,i,r,n,!!s],this._viewBoxShift={dx:-e,dy:-i,scale:h},this.forEach(function(t){t.transform("...")}),this},t._engine.initWin=function(t){var e=t.document;e.styleSheets.length<31?e.createStyleSheet().addRule(".rvml","behavior:url(#default#VML)"):e.styleSheets[0].addRule(".rvml","behavior:url(#default#VML)");try{!e.namespaces.rvml&&e.namespaces.add("rvml","urn:schemas-microsoft-com:vml"),S=function(t){return e.createElement("<rvml:"+t+' class="rvml">')}}catch(t){S=function(t){return e.createElement("<"+t+' xmlns="urn:schemas-microsoft.com:vml" class="rvml">')}}},t._engine.initWin(t._g.win),t._engine.create=function(){var e=t._getContainer.apply(0,arguments),i=e.container,r=e.height,n=e.width,s=e.x,a=e.y;if(!i)throw new Error("VML container not found.");var o=new t._Paper,h=o.canvas=t._g.doc.createElement("div"),l=h.style;return s=s||0,a=a||0,n=n||512,r=r||342,o.width=n,o.height=r,n==+n&&(n+="px"),r==+r&&(r+="px"),o.coordsize=216e5+d+216e5,o.coordorigin="0 0",o.span=t._g.doc.createElement("span"),o.span.style.cssText="position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;",h.appendChild(o.span),l.cssText=t.format("top:0;left:0;width:{0};height:{1};display:inline-block;position:relative;clip:rect(0 {0} {1} 0);overflow:hidden",n,r),1==i?(t._g.doc.body.appendChild(h),l.left=s+"px",l.top=a+"px",l.position="absolute"):i.firstChild?i.insertBefore(h,i.firstChild):i.appendChild(h),o.renderfix=function(){},o},t.prototype.clear=function(){t.eve("raphael.clear",this),this.canvas.innerHTML=f,this.span=t._g.doc.createElement("span"),this.span.style.cssText="position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;display:inline;",this.canvas.appendChild(this.span),this.bottom=this.top=null},t.prototype.remove=function(){for(var e in t.eve("raphael.remove",this),this.canvas.parentNode.removeChild(this.canvas),this)this[e]="function"==typeof this[e]?t._removedFactory(e):null;return!0};var A=t.st;for(var I in M)M[e](I)&&!A[e](I)&&(A[I]=function(t){return function(){var e=arguments;return this.forEach(function(i){i[t].apply(i,e)})}}(I))}}),function(t,e){if("function"==typeof define&&define.amd)define("raphael",["raphael.core","raphael.svg","raphael.vml"],function(i){return t.Raphael=e(i)});else if("object"==typeof exports){var i=require("raphael.core");require("raphael.svg"),require("raphael.vml"),module.exports=e(i)}else t.Raphael=e(t.Raphael)}(this,function(t){return t.ninja()}),function(){String.prototype.startsWith||(String.prototype.startsWith=function(t,e){return this.substr(e||0,t.length)===t});var t=null,e={inheritAttrs:function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]instanceof Object&&e[i]instanceof Object&&"function"!=typeof e[i]?this.inheritAttrs(t[i],e[i]):t[i]=e[i]);return t},createMerge:function(t,e){var i={};return t&&this.inheritAttrs(i,this.cloneObj(t)),e&&this.inheritAttrs(i,e),i},extend:function(){return t?(Array.prototype.unshift.apply(arguments,[!0,{}]),t.extend.apply(t,arguments)):e.createMerge.apply(this,arguments)},cloneObj:function(t){if(Object(t)!==t)return t;var e=new t.constructor;for(var i in t)t.hasOwnProperty(i)&&(e[i]=this.cloneObj(t[i]));return e},addEvent:function(e,i,r){t?t(e).on(i+".treant",r):e.addEventListener?e.addEventListener(i,r,!1):e.attachEvent?e.attachEvent("on"+i,r):e["on"+i]=r},findEl:function(e,i,r){if(r=r||document,t){var n=t(e,r);return i?n.get(0):n}if("#"===e.charAt(0))return r.getElementById(e.substring(1));if("."===e.charAt(0)){var s=r.getElementsByClassName(e.substring(1));return s.length?s[0]:null}throw new Error("Unknown container element")},getOuterHeight:function(i){return"function"==typeof i.getBoundingClientRect?i.getBoundingClientRect().height:t?Math.ceil(t(i).outerHeight())+1:Math.ceil(i.clientHeight+e.getStyle(i,"border-top-width",!0)+e.getStyle(i,"border-bottom-width",!0)+e.getStyle(i,"padding-top",!0)+e.getStyle(i,"padding-bottom",!0)+1)},getOuterWidth:function(i){return"function"==typeof i.getBoundingClientRect?i.getBoundingClientRect().width:t?Math.ceil(t(i).outerWidth())+1:Math.ceil(i.clientWidth+e.getStyle(i,"border-left-width",!0)+e.getStyle(i,"border-right-width",!0)+e.getStyle(i,"padding-left",!0)+e.getStyle(i,"padding-right",!0)+1)},getStyle:function(t,e,i){var r="";return document.defaultView&&document.defaultView.getComputedStyle?r=document.defaultView.getComputedStyle(t,"").getPropertyValue(e):t.currentStyle&&(e=e.replace(/\-(\w)/g,function(t,e){return e.toUpperCase()}),r=t.currentStyle[e]),i?parseFloat(r):r},addClass:function(i,r){t?t(i).addClass(r):e.hasClass(i,r)||(i.classList?i.classList.add(r):i.className+=" "+r)},hasClass:function(t,e){return(" "+t.className+" ").replace(/[\n\t]/g," ").indexOf(" "+e+" ")>-1},toggleClass:function(e,i,r){t?t(e).toggleClass(i,r):r?e.classList.add(i):e.classList.remove(i)},setDimensions:function(e,i,r){t?t(e).width(i).height(r):(e.style.width=i+"px",e.style.height=r+"px")},isjQueryAvailable:function(){return void 0!==t&&t}},i=function(){this.reset()};i.prototype={reset:function(){return this.loading=[],this},processNode:function(t){for(var e=t.nodeDOM.getElementsByTagName("img"),i=e.length;i--;)this.create(t,e[i]);return this},removeAll:function(t){for(var e=this.loading.length;e--;)this.loading[e]===t&&this.loading.splice(e,1);return this},create:function(t,i){var r=this,n=i.src;function s(){r.removeAll(n),t.width=t.nodeDOM.offsetWidth,t.height=t.nodeDOM.offsetHeight}if(0!==i.src.indexOf("data:")){if(this.loading.push(n),i.complete)return s();e.addEvent(i,"load",s),e.addEvent(i,"error",s),i.src+=(i.src.indexOf("?")>0?"&":"?")+(new Date).getTime()}else s()},isNotLoading:function(){return 0===this.loading.length}};var r={store:[],createTree:function(t){var e=this.store.length;return this.store.push(new n(t,e)),this.get(e)},get:function(t){return this.store[t]},destroy:function(t){var e=this.get(t);if(e){e._R.remove();for(var i=e.drawArea;i.firstChild;)i.removeChild(i.firstChild);for(var r=i.className.split(" "),n=[],s=0;s<r.length;s++){var a=r[s];"Treant"!==a&&"Treant-loaded"!==a&&n.push(a)}i.style.overflowY="",i.style.overflowX="",i.className=n.join(" "),this.store[t]=null}return this}},n=function(t,r){this.reset=function(t,r){if(this.initJsonConfig=t,this.initTreeId=r,this.id=r,this.CONFIG=e.extend(n.CONFIG,t.chart),this.drawArea=e.findEl(this.CONFIG.container,!0),!this.drawArea)throw new Error('Failed to find element by selector "'+this.CONFIG.container+'"');return e.addClass(this.drawArea,"Treant"),this.drawArea.innerHTML="",this.imageLoader=new i,this.nodeDB=new s(t.nodeStructure,this),this.connectionStore={},this.loaded=!1,this._R=new Raphael(this.drawArea,100,100),this},this.reload=function(){return this.reset(this.initJsonConfig,this.initTreeId).redraw(),this},this.reset(t,r)};n.prototype={getNodeDb:function(){return this.nodeDB},addNode:function(t,e){this.nodeDB.get(t.id);this.CONFIG.callback.onBeforeAddNode.apply(this,[t,e]);var i=this.nodeDB.createNode(e,t.id,this);return i.createGeometry(this),i.parent().createSwitchGeometry(this),this.positionTree(),this.CONFIG.callback.onAfterAddNode.apply(this,[i,t,e]),i},redraw:function(){return this.positionTree(),this},positionTree:function(t){var i=this;if(this.imageLoader.isNotLoading()){var r=this.root();this.CONFIG.rootOrientation;this.resetLevelData(),this.firstWalk(r,0),this.secondWalk(r,0,0,0),this.positionNodes(),this.CONFIG.animateOnInit&&setTimeout(function(){r.toggleCollapse()},this.CONFIG.animateOnInitDelay),this.loaded||(e.addClass(this.drawArea,"Treant-loaded"),"[object Function]"===Object.prototype.toString.call(t)&&t(i),i.CONFIG.callback.onTreeLoaded.apply(i,[r]),this.loaded=!0)}else setTimeout(function(){i.positionTree(t)},10);return this},firstWalk:function(t,e){t.prelim=null,t.modifier=null,this.setNeighbors(t,e),this.calcLevelDim(t,e);var i=t.leftSibling();if(0===t.childrenCount()||e==this.CONFIG.maxDepth)t.prelim=i?i.prelim+i.size()+this.CONFIG.siblingSeparation:0;else{for(var r=0,n=t.childrenCount();r<n;r++)this.firstWalk(t.childAt(r),e+1);var s=t.childrenCenter()-t.size()/2;i?(t.prelim=i.prelim+i.size()+this.CONFIG.siblingSeparation,t.modifier=t.prelim-s,this.apportion(t,e)):t.prelim=s,t.stackParent?t.modifier+=this.nodeDB.get(t.stackChildren[0]).size()/2+t.connStyle.stackIndent:t.stackParentId&&(t.prelim=0)}return this},apportion:function(t,e){for(var i=t.firstChild(),r=i.leftNeighbor(),n=1,s=this.CONFIG.maxDepth-e;i&&r&&n<=s;){for(var a=0,o=0,h=r,l=i,c=0;c<n;c++)h=h.parent(),l=l.parent(),o+=h.modifier,a+=l.modifier,void 0!==l.stackParent&&(a+=l.size()/2);var u=r.prelim+o+r.size()+this.CONFIG.subTeeSeparation-(i.prelim+a);if(u>0){for(var d=t,f=0;d&&d.id!==h.id;)d=d.leftSibling(),f++;if(d)for(var p=t,g=u/f;p.id!==h.id;)p.prelim+=u,p.modifier+=u,u-=g,p=p.leftSibling()}n++,(i=0===i.childrenCount()?t.leftMost(0,n):i=i.firstChild())&&(r=i.leftNeighbor())}},secondWalk:function(t,e,i,r){if(e<=this.CONFIG.maxDepth){var n,s,a=t.prelim+i,o=r,h=this.CONFIG.nodeAlign,l=this.CONFIG.rootOrientation;if("NORTH"===l||"SOUTH"===l?(n=this.levelMaxDim[e].height,s=t.height,t.pseudo&&(t.height=n)):"WEST"!==l&&"EAST"!==l||(n=this.levelMaxDim[e].width,s=t.width,t.pseudo&&(t.width=n)),t.X=a,t.pseudo?"NORTH"===l||"WEST"===l?t.Y=o:"SOUTH"!==l&&"EAST"!==l||(t.Y=o+(n-s)):t.Y="CENTER"===h?o+(n-s)/2:"TOP"===h?o+(n-s):o,"WEST"===l||"EAST"===l){var c=t.X;t.X=t.Y,t.Y=c}"SOUTH"===l?t.Y=-t.Y-s:"EAST"===l&&(t.X=-t.X-s),0!==t.childrenCount()&&(0===t.id&&this.CONFIG.hideRootNode?this.secondWalk(t.firstChild(),e+1,i+t.modifier,r):this.secondWalk(t.firstChild(),e+1,i+t.modifier,r+n+this.CONFIG.levelSeparation)),t.rightSibling()&&this.secondWalk(t.rightSibling(),e,i,r)}},positionNodes:function(){var t={x:this.nodeDB.getMinMaxCoord("X",null,null),y:this.nodeDB.getMinMaxCoord("Y",null,null)},e=t.x.max-t.x.min,i=t.y.max-t.y.min,r={x:t.x.max-e/2,y:t.y.max-i/2};this.handleOverflow(e,i);var n,s,a,o={x:this.drawArea.clientWidth/2,y:this.drawArea.clientHeight/2},h=o.x-r.x,l=o.y-r.y,c=t.x.min+h<=0?Math.abs(t.x.min):0,u=t.y.min+l<=0?Math.abs(t.y.min):0;for(n=0,s=this.nodeDB.db.length;n<s;n++)if(a=this.nodeDB.get(n),this.CONFIG.callback.onBeforePositionNode.apply(this,[a,n,o,r]),0===a.id&&this.CONFIG.hideRootNode)this.CONFIG.callback.onAfterPositionNode.apply(this,[a,n,o,r]);else{a.X+=c+(e<this.drawArea.clientWidth?h:this.CONFIG.padding),a.Y+=u+(i<this.drawArea.clientHeight?l:this.CONFIG.padding);var d=a.collapsedParent(),f=null;d?(f=d.connectorPoint(!0),a.hide(f)):a.positioned?a.show():(a.nodeDOM.style.left=a.X+"px",a.nodeDOM.style.top=a.Y+"px",a.positioned=!0),0===a.id||0===a.parent().id&&this.CONFIG.hideRootNode?!this.CONFIG.hideRootNode&&a.drawLineThrough&&a.drawLineThroughMe():this.setConnectionToParent(a,f),this.CONFIG.callback.onAfterPositionNode.apply(this,[a,n,o,r])}return this},handleOverflow:function(i,r){var n=i<this.drawArea.clientWidth?this.drawArea.clientWidth:i+2*this.CONFIG.padding,s=r<this.drawArea.clientHeight?this.drawArea.clientHeight:r+2*this.CONFIG.padding;if(this._R.setSize(n,s),"resize"===this.CONFIG.scrollbar)e.setDimensions(this.drawArea,n,s);else if(e.isjQueryAvailable()&&"native"!==this.CONFIG.scrollbar){if("fancy"===this.CONFIG.scrollbar){var a=t(this.drawArea);if(a.hasClass("ps-container"))a.find(".Treant").css({width:n,height:s}),a.perfectScrollbar("update");else{var o=a.wrapInner('<div class="Treant"/>');o.find(".Treant").css({width:n,height:s}),o.perfectScrollbar()}}}else this.drawArea.clientWidth<i&&(this.drawArea.style.overflowX="auto"),this.drawArea.clientHeight<r&&(this.drawArea.style.overflowY="auto");return this},setConnectionToParent:function(t,e){var i,r=t.stackParentId,n=r?this.nodeDB.get(r):t.parent(),s=e?this.getPointPathString(e):this.getPathString(n,t,r);return this.connectionStore[t.id]?(i=this.connectionStore[t.id],this.animatePath(i,s)):(i=this._R.path(s),this.connectionStore[t.id]=i,t.pseudo&&delete n.connStyle.style["arrow-end"],n.pseudo&&delete n.connStyle.style["arrow-start"],i.attr(n.connStyle.style),(t.drawLineThrough||t.pseudo)&&t.drawLineThroughMe(e)),t.connector=i,this},getPointPathString:function(t){return["_M",t.x,",",t.y,"L",t.x,",",t.y,t.x,",",t.y].join(" ")},animatePath:function(t,e){return t.hidden&&"_"!==e.charAt(0)&&(t.show(),t.hidden=!1),t.animate({path:"_"===e.charAt(0)?e.substring(1):e},this.CONFIG.animation.connectorsSpeed,this.CONFIG.animation.connectorsAnimation,function(){"_"===e.charAt(0)&&(t.hide(),t.hidden=!0)}),this},getPathString:function(t,e,i){var r=t.connectorPoint(!0),n=e.connectorPoint(!1),s=this.CONFIG.rootOrientation,a=t.connStyle.type,o={},h={};"NORTH"===s||"SOUTH"===s?(o.y=h.y=(r.y+n.y)/2,o.x=r.x,h.x=n.x):"EAST"!==s&&"WEST"!==s||(o.x=h.x=(r.x+n.x)/2,o.y=r.y,h.y=n.y);var l,c,u=r.x+","+r.y,d=o.x+","+o.y,f=h.x+","+h.y,p=n.x+","+n.y,g=(o.x+h.x)/2+","+(o.y+h.y)/2;if(i){if(c="EAST"===s||"WEST"===s?n.x+","+r.y:r.x+","+n.y,"step"===a||"straight"===a)l=["M",u,"L",c,"L",p];else if("curve"===a||"bCurve"===a){var v,y=t.connStyle.stackIndent;"NORTH"===s?v=n.x-y+","+(n.y-y):"SOUTH"===s?v=n.x-y+","+(n.y+y):"EAST"===s?v=n.x+y+","+r.y:"WEST"===s&&(v=n.x-y+","+r.y),l=["M",u,"L",v,"S",c,p]}}else"step"===a?l=["M",u,"L",d,"L",f,"L",p]:"curve"===a?l=["M",u,"C",d,f,p]:"bCurve"===a?l=["M",u,"Q",d,g,"T",p]:"straight"===a&&(l=["M",u,"L",u,p]);return l.join(" ")},setNeighbors:function(t,e){return t.leftNeighborId=this.lastNodeOnLevel[e],t.leftNeighborId&&(t.leftNeighbor().rightNeighborId=t.id),this.lastNodeOnLevel[e]=t.id,this},calcLevelDim:function(t,e){return this.levelMaxDim[e]={width:Math.max(this.levelMaxDim[e]?this.levelMaxDim[e].width:0,t.width),height:Math.max(this.levelMaxDim[e]?this.levelMaxDim[e].height:0,t.height)},this},resetLevelData:function(){return this.lastNodeOnLevel=[],this.levelMaxDim=[],this},root:function(){return this.nodeDB.get(0)}};var s=function(t,e){this.reset(t,e)};s.prototype={reset:function(t,i){this.db=[];var r=this;return i.CONFIG.animateOnInit&&(t.collapsed=!0),function t(n,s){var a=r.createNode(n,s,i,null);if(n.children){if(n.childrenDropLevel&&n.childrenDropLevel>0)for(;n.childrenDropLevel--;){var o=e.cloneObj(a.connStyle);(a=r.createNode("pseudo",a.id,i,null)).connStyle=o,a.children=[]}var h=n.stackChildren&&!r.hasGrandChildren(n)?a.id:null;null!==h&&(a.stackChildren=[]);for(var l=0,c=n.children.length;l<c;l++)null!==h?(a=r.createNode(n.children[l],a.id,i,h),l+1<c&&(a.children=[])):t(n.children[l],a.id)}}(t,-1),this.createGeometries(i),this},createGeometries:function(t){for(var e=this.db.length;e--;)this.get(e).createGeometry(t);return this},get:function(t){return this.db[t]},walk:function(t){for(var e=this.db.length;e--;)t.apply(this,[this.get(e)]);return this},createNode:function(t,e,i,r){var n=new a(t,this.db.length,e,i,r);if(this.db.push(n),e>=0){var s=this.get(e);if(t.position)if("left"===t.position)s.children.push(n.id);else if("right"===t.position)s.children.splice(0,0,n.id);else if("center"===t.position)s.children.splice(Math.floor(s.children.length/2),0,n.id);else{var o=parseInt(t.position);1===s.children.length&&o>0?s.children.splice(0,0,n.id):s.children.splice(Math.max(o,s.children.length-1),0,n.id)}else s.children.push(n.id)}return r&&(this.get(r).stackParent=!0,this.get(r).stackChildren.push(n.id)),n},getMinMaxCoord:function(t,e,i){e=e||this.get(0),i=i||{min:e[t],max:e[t]+("X"===t?e.width:e.height)};for(var r=e.childrenCount();r--;){var n=e.childAt(r),s=n[t]+("X"===t?n.width:n.height),a=n[t];s>i.max&&(i.max=s),a<i.min&&(i.min=a),this.getMinMaxCoord(t,n,i)}return i},hasGrandChildren:function(t){for(var e=t.children.length;e--;)if(t.children[e].children)return!0;return!1}};var a=function(t,e,i,r,n){this.reset(t,e,i,r,n)};a.prototype={reset:function(t,i,r,n,s){return this.id=i,this.parentId=r,this.treeId=n.id,this.prelim=0,this.modifier=0,this.leftNeighborId=null,this.stackParentId=s,this.pseudo="pseudo"===t||t.pseudo,this.meta=t.meta||{},this.image=t.image||null,this.link=e.createMerge(n.CONFIG.node.link,t.link),this.connStyle=e.createMerge(n.CONFIG.connectors,t.connectors),this.connector=null,this.drawLineThrough=!1!==t.drawLineThrough&&(t.drawLineThrough||n.CONFIG.node.drawLineThrough),this.collapsable=!1!==t.collapsable&&(t.collapsable||n.CONFIG.node.collapsable),this.collapsed=t.collapsed,this.text=t.text,this.nodeInnerHTML=t.innerHTML,this.nodeHTMLclass=(n.CONFIG.node.HTMLclass?n.CONFIG.node.HTMLclass:"")+(t.HTMLclass?" "+t.HTMLclass:""),this.nodeHTMLid=t.HTMLid,this.children=[],this},getTree:function(){return r.get(this.treeId)},getTreeConfig:function(){return this.getTree().CONFIG},getTreeNodeDb:function(){return this.getTree().getNodeDb()},lookupNode:function(t){return this.getTreeNodeDb().get(t)},Tree:function(){return r.get(this.treeId)},dbGet:function(t){return this.getTreeNodeDb().get(t)},size:function(){var t=this.getTreeConfig().rootOrientation;return this.pseudo?-this.getTreeConfig().subTeeSeparation:"NORTH"===t||"SOUTH"===t?this.width:"WEST"===t||"EAST"===t?this.height:void 0},childrenCount:function(){return this.collapsed||!this.children?0:this.children.length},childAt:function(t){return this.dbGet(this.children[t])},firstChild:function(){return this.childAt(0)},lastChild:function(){return this.childAt(this.children.length-1)},parent:function(){return this.lookupNode(this.parentId)},leftNeighbor:function(){if(this.leftNeighborId)return this.lookupNode(this.leftNeighborId)},rightNeighbor:function(){if(this.rightNeighborId)return this.lookupNode(this.rightNeighborId)},leftSibling:function(){var t=this.leftNeighbor();if(t&&t.parentId===this.parentId)return t},rightSibling:function(){var t=this.rightNeighbor();if(t&&t.parentId===this.parentId)return t},childrenCenter:function(){var t=this.firstChild(),e=this.lastChild();return t.prelim+(e.prelim-t.prelim+e.size())/2},collapsedParent:function(){var t=this.parent();return!!t&&(t.collapsed?t:t.collapsedParent())},leftMost:function(t,e){if(t>=e)return this;if(0!==this.childrenCount())for(var i=0,r=this.childrenCount();i<r;i++){var n=this.childAt(i).leftMost(t+1,e);if(n)return n}},connectorPoint:function(t){var e=this.Tree().CONFIG.rootOrientation,i={};return this.stackParentId&&("NORTH"===e||"SOUTH"===e?e="WEST":"EAST"!==e&&"WEST"!==e||(e="NORTH")),"NORTH"===e?(i.x=this.pseudo?this.X-this.Tree().CONFIG.subTeeSeparation/2:this.X+this.width/2,i.y=t?this.Y+this.height:this.Y):"SOUTH"===e?(i.x=this.pseudo?this.X-this.Tree().CONFIG.subTeeSeparation/2:this.X+this.width/2,i.y=t?this.Y:this.Y+this.height):"EAST"===e?(i.x=t?this.X:this.X+this.width,i.y=this.pseudo?this.Y-this.Tree().CONFIG.subTeeSeparation/2:this.Y+this.height/2):"WEST"===e&&(i.x=t?this.X+this.width:this.X,i.y=this.pseudo?this.Y-this.Tree().CONFIG.subTeeSeparation/2:this.Y+this.height/2),i},pathStringThrough:function(){var t=this.connectorPoint(!0),e=this.connectorPoint(!1);return["M",t.x+","+t.y,"L",e.x+","+e.y].join(" ")},drawLineThroughMe:function(t){var i=t?this.Tree().getPointPathString(t):this.pathStringThrough();this.lineThroughMe=this.lineThroughMe||this.Tree()._R.path(i);var r=e.cloneObj(this.connStyle.style);delete r["arrow-start"],delete r["arrow-end"],this.lineThroughMe.attr(r),t&&(this.lineThroughMe.hide(),this.lineThroughMe.hidden=!0)},addSwitchEvent:function(t){var i=this;e.addEvent(t,"click",function(e){if(e.preventDefault(),!1===i.getTreeConfig().callback.onBeforeClickCollapseSwitch.apply(i,[t,e]))return!1;i.toggleCollapse(),i.getTreeConfig().callback.onAfterClickCollapseSwitch.apply(i,[t,e])})},collapse:function(){return this.collapsed||this.toggleCollapse(),this},expand:function(){return this.collapsed&&this.toggleCollapse(),this},toggleCollapse:function(){var t=this.getTree();if(!t.inAnimation){t.inAnimation=!0,this.collapsed=!this.collapsed,e.toggleClass(this.nodeDOM,"collapsed",this.collapsed),t.positionTree();var i=this;setTimeout(function(){t.inAnimation=!1,t.CONFIG.callback.onToggleCollapseFinished.apply(t,[i,i.collapsed])},t.CONFIG.animation.nodeSpeed>t.CONFIG.animation.connectorsSpeed?t.CONFIG.animation.nodeSpeed:t.CONFIG.animation.connectorsSpeed)}return this},hide:function(e){e=e||!1;var i=this.hidden;this.hidden=!0,this.nodeDOM.style.overflow="hidden";var r=this.getTree(),n=this.getTreeConfig(),s={opacity:0};if(e&&(s.left=e.x,s.top=e.y),!this.positioned||i?(this.nodeDOM.style.visibility="hidden",t?t(this.nodeDOM).css(s):(this.nodeDOM.style.left=s.left+"px",this.nodeDOM.style.top=s.top+"px"),this.positioned=!0):t?t(this.nodeDOM).animate(s,n.animation.nodeSpeed,n.animation.nodeAnimation,function(){this.style.visibility="hidden"}):(this.nodeDOM.style.transition="all "+n.animation.nodeSpeed+"ms ease",this.nodeDOM.style.transitionProperty="opacity, left, top",this.nodeDOM.style.opacity=s.opacity,this.nodeDOM.style.left=s.left+"px",this.nodeDOM.style.top=s.top+"px",this.nodeDOM.style.visibility="hidden"),this.lineThroughMe){var a=r.getPointPathString(e);i?this.lineThroughMe.attr({path:a}):r.animatePath(this.lineThroughMe,r.getPointPathString(e))}return this},hideConnector:function(){var t=this.Tree(),e=t.connectionStore[this.id];return e&&e.animate({opacity:0},t.CONFIG.animation.connectorsSpeed,t.CONFIG.animation.connectorsAnimation),this},show:function(){this.hidden;this.hidden=!1,this.nodeDOM.style.visibility="visible";this.Tree();var e={left:this.X,top:this.Y,opacity:1},i=this.getTreeConfig();return t?t(this.nodeDOM).animate(e,i.animation.nodeSpeed,i.animation.nodeAnimation,function(){this.style.overflow=""}):(this.nodeDOM.style.transition="all "+i.animation.nodeSpeed+"ms ease",this.nodeDOM.style.transitionProperty="opacity, left, top",this.nodeDOM.style.left=e.left+"px",this.nodeDOM.style.top=e.top+"px",this.nodeDOM.style.opacity=e.opacity,this.nodeDOM.style.overflow=""),this.lineThroughMe&&this.getTree().animatePath(this.lineThroughMe,this.pathStringThrough()),this},showConnector:function(){var t=this.Tree(),e=t.connectionStore[this.id];return e&&e.animate({opacity:1},t.CONFIG.animation.connectorsSpeed,t.CONFIG.animation.connectorsAnimation),this}},a.prototype.buildNodeFromText=function(t){if(this.image&&(image=document.createElement("img"),image.src=this.image,t.appendChild(image)),this.text)for(var e in this.text)if(e.startsWith("data-"))t.setAttribute(e,this.text[e]);else{var i=document.createElement(this.text[e].href?"a":"p");this.text[e].href&&(i.href=this.text[e].href,this.text[e].target&&(i.target=this.text[e].target)),i.className="node-"+e,i.appendChild(document.createTextNode(this.text[e].val?this.text[e].val:this.text[e]instanceof Object?"'val' param missing!":this.text[e])),t.appendChild(i)}return t},a.prototype.buildNodeFromHtml=function(t){if("#"===this.nodeInnerHTML.charAt(0)){var e=document.getElementById(this.nodeInnerHTML.substring(1));e?((t=e.cloneNode(!0)).id+="-clone",t.className+=" node"):t.innerHTML="<b> Wrong ID selector </b>"}else t.innerHTML=this.nodeInnerHTML;return t},a.prototype.createGeometry=function(e){if(0===this.id&&e.CONFIG.hideRootNode)return this.width=0,void(this.height=0);var i=e.drawArea,r=document.createElement(this.link.href?"a":"div");r.className=this.pseudo?"pseudo":a.CONFIG.nodeHTMLclass,this.nodeHTMLclass&&!this.pseudo&&(r.className+=" "+this.nodeHTMLclass),this.nodeHTMLid&&(r.id=this.nodeHTMLid),this.link.href&&(r.href=this.link.href,r.target=this.link.target),t?t(r).data("treenode",this):r.data={treenode:this},this.pseudo||(r=this.nodeInnerHTML?this.buildNodeFromHtml(r):this.buildNodeFromText(r),(this.collapsed||this.collapsable&&this.childrenCount()&&!this.stackParentId)&&this.createSwitchGeometry(e,r)),e.CONFIG.callback.onCreateNode.apply(e,[this,r]),i.appendChild(r),this.width=r.offsetWidth,this.height=r.offsetHeight,this.nodeDOM=r,e.imageLoader.processNode(this)},a.prototype.createSwitchGeometry=function(t,i){i=i||this.nodeDOM;var r=e.findEl(".collapse-switch",!0,i);return r||((r=document.createElement("a")).className="collapse-switch",i.appendChild(r),this.addSwitchEvent(r),this.collapsed&&(i.className+=" collapsed"),t.CONFIG.callback.onCreateNodeCollapseSwitch.apply(t,[this,i,r])),r},n.CONFIG={maxDepth:100,rootOrientation:"NORTH",nodeAlign:"CENTER",levelSeparation:30,siblingSeparation:30,subTeeSeparation:30,hideRootNode:!1,animateOnInit:!1,animateOnInitDelay:500,padding:15,scrollbar:"native",connectors:{type:"curve",style:{stroke:"black"},stackIndent:15},node:{link:{target:"_self"}},animation:{nodeSpeed:450,nodeAnimation:"linear",connectorsSpeed:450,connectorsAnimation:"linear"},callback:{onCreateNode:function(t,e){},onCreateNodeCollapseSwitch:function(t,e,i){},onAfterAddNode:function(t,e,i){},onBeforeAddNode:function(t,e){},onAfterPositionNode:function(t,e,i,r){},onBeforePositionNode:function(t,e,i,r){},onToggleCollapseFinished:function(t,e){},onAfterClickCollapseSwitch:function(t,e){},onBeforeClickCollapseSwitch:function(t,e){},onTreeLoaded:function(t){}}},a.CONFIG={nodeHTMLclass:"node"};var o,h={make:function(t){var e,i=t.length;for(this.jsonStructure={chart:null,nodeStructure:null};i--;)(e=t[i]).hasOwnProperty("container")?this.jsonStructure.chart=e:e.hasOwnProperty("parent")||e.hasOwnProperty("container")||(this.jsonStructure.nodeStructure=e,e._json_id=0);return this.findChildren(t),this.jsonStructure},findChildren:function(t){for(var e=[0];e.length;){for(var i=e.pop(),r=this.findNode(this.jsonStructure.nodeStructure,i),n=0,s=t.length,a=[];n<s;n++){var o=t[n];o.parent&&o.parent._json_id===i&&(o._json_id=this.getID(),delete o.parent,a.push(o),e.push(o._json_id))}a.length&&(r.children=a)}},findNode:function(t,e){var i,r;if(t._json_id===e)return t;if(t.children)for(i=t.children.length;i--;)if(r=this.findNode(t.children[i],e))return r},getID:(o=1,function(){return o++})},l=function(e,i,n){e instanceof Array&&(e=h.make(e)),n&&(t=n),this.tree=r.createTree(e),this.tree.positionTree(i)};l.prototype.destroy=function(){r.destroy(this.tree.id)},window.Treant=l}();
(function($) {
    $.belowthefold = function(element, settings) {
        var fold = $(window).height() + $(window).scrollTop();
        return fold <= $(element).offset().top - settings.threshold;
    };
    $.abovethetop = function(element, settings) {
        var top = $(window).scrollTop();
        return top >= $(element).offset().top + $(element).height() - settings.threshold;
    };
    $.rightofscreen = function(element, settings) {
        var fold = $(window).width() + $(window).scrollLeft();
        return fold <= $(element).offset().left - settings.threshold;
    };
    $.leftofscreen = function(element, settings) {
        var left = $(window).scrollLeft();
        return left >= $(element).offset().left + $(element).width() - settings.threshold;
    };
    $.inviewport = function(element, settings) {
        return !$.rightofscreen(element, settings) && !$.leftofscreen(element, settings) && !$.belowthefold(element, settings) && !$.abovethetop(element, settings);
    };
    $.extend($.expr[':'], {
        "below-the-fold": function(a, i, m) {
            return $.belowthefold(a, {
                threshold: 0
            });
        },
        "above-the-top": function(a, i, m) {
            return $.abovethetop(a, {
                threshold: 0
            });
        },
        "left-of-screen": function(a, i, m) {
            return $.leftofscreen(a, {
                threshold: 0
            });
        },
        "right-of-screen": function(a, i, m) {
            return $.rightofscreen(a, {
                threshold: 0
            });
        },
        "in-viewport": function(a, i, m) {
            return $.inviewport(a, {
                threshold: 0
            });
        }
    });
})(jQuery);

(function($) {

    /**
     * Copyright 2012, Digital Fusion
     * Licensed under the MIT license.
     * http://teamdf.com/jquery-plugins/license/
     *
     * @author Sam Sehnert
     * @desc A small plugin that checks whether elements are within
     *       the user visible viewport of a web browser.
     *       only accounts for vertical position, not horizontal.
     */
    var $w = $(window);
    $.fn.visible = function(partial, hidden, direction) {

        if (this.length < 1)
            return;

        var $t = this.length > 1 ? this.eq(0) : this,
            t = $t.get(0),
            vpWidth = $w.width(),
            vpHeight = $w.height(),
            direction = (direction) ? direction : 'both',
            clientSize = hidden === true ? t.offsetWidth * t.offsetHeight : true;

        if (typeof t.getBoundingClientRect === 'function') {

            // Use this native browser method, if available.
            var rec = t.getBoundingClientRect(),
                tViz = rec.top >= 0 && rec.top < vpHeight,
                bViz = rec.bottom > 0 && rec.bottom <= vpHeight,
                lViz = rec.left >= 0 && rec.left < vpWidth,
                rViz = rec.right > 0 && rec.right <= vpWidth,
                vVisible = partial ? tViz || bViz : tViz && bViz,
                hVisible = partial ? lViz || rViz : lViz && rViz;

            if (direction === 'both')
                return clientSize && vVisible && hVisible;
            else if (direction === 'vertical')
                return clientSize && vVisible;
            else if (direction === 'horizontal')
                return clientSize && hVisible;
        } else {

            var viewTop = $w.scrollTop(),
                viewBottom = viewTop + vpHeight,
                viewLeft = $w.scrollLeft(),
                viewRight = viewLeft + vpWidth,
                offset = $t.offset(),
                _top = offset.top,
                _bottom = _top + $t.height(),
                _left = offset.left,
                _right = _left + $t.width(),
                compareTop = partial === true ? _bottom : _top,
                compareBottom = partial === true ? _top : _bottom,
                compareLeft = partial === true ? _right : _left,
                compareRight = partial === true ? _left : _right;

            if (direction === 'both')
                return !!clientSize && ((compareBottom <= viewBottom) && (compareTop >= viewTop)) && ((compareRight <= viewRight) && (compareLeft >= viewLeft));
            else if (direction === 'vertical')
                return !!clientSize && ((compareBottom <= viewBottom) && (compareTop >= viewTop));
            else if (direction === 'horizontal')
                return !!clientSize && ((compareRight <= viewRight) && (compareLeft >= viewLeft));
        }
    };

})(jQuery);

/*! lightgallery - v1.6.12 - 2019-02-19
* http://sachinchoolur.github.io/lightGallery/
* Copyright (c) 2019 Sachin N; Licensed GPLv3 */
!function(a,b){"function"==typeof define&&define.amd?define(["jquery"],function(a){return b(a)}):"object"==typeof module&&module.exports?module.exports=b(require("jquery")):b(a.jQuery)}(this,function(a){!function(){"use strict";function b(b,d){if(this.el=b,this.$el=a(b),this.s=a.extend({},c,d),this.s.dynamic&&"undefined"!==this.s.dynamicEl&&this.s.dynamicEl.constructor===Array&&!this.s.dynamicEl.length)throw"When using dynamic mode, you must also define dynamicEl as an Array.";return this.modules={},this.lGalleryOn=!1,this.lgBusy=!1,this.hideBartimeout=!1,this.isTouch="ontouchstart"in document.documentElement,this.s.slideEndAnimatoin&&(this.s.hideControlOnEnd=!1),this.s.dynamic?this.$items=this.s.dynamicEl:"this"===this.s.selector?this.$items=this.$el:""!==this.s.selector?this.s.selectWithin?this.$items=a(this.s.selectWithin).find(this.s.selector):this.$items=this.$el.find(a(this.s.selector)):this.$items=this.$el.children(),this.$slide="",this.$outer="",this.init(),this}var c={mode:"lg-slide",cssEasing:"ease",easing:"linear",speed:600,height:"100%",width:"100%",addClass:"",startClass:"lg-start-zoom",backdropDuration:150,hideBarsDelay:6e3,useLeft:!1,closable:!0,loop:!0,escKey:!0,keyPress:!0,controls:!0,slideEndAnimatoin:!0,hideControlOnEnd:!1,mousewheel:!0,getCaptionFromTitleOrAlt:!0,appendSubHtmlTo:".lg-sub-html",subHtmlSelectorRelative:!1,preload:1,showAfterLoad:!0,selector:"",selectWithin:"",nextHtml:"",prevHtml:"",index:!1,iframeMaxWidth:"100%",download:!0,counter:!0,appendCounterTo:".lg-toolbar",swipeThreshold:50,enableSwipe:!0,enableDrag:!0,dynamic:!1,dynamicEl:[],galleryId:1};b.prototype.init=function(){var b=this;b.s.preload>b.$items.length&&(b.s.preload=b.$items.length);var c=window.location.hash;c.indexOf("lg="+this.s.galleryId)>0&&(b.index=parseInt(c.split("&slide=")[1],10),a("body").addClass("lg-from-hash"),a("body").hasClass("lg-on")||(setTimeout(function(){b.build(b.index)}),a("body").addClass("lg-on"))),b.s.dynamic?(b.$el.trigger("onBeforeOpen.lg"),b.index=b.s.index||0,a("body").hasClass("lg-on")||setTimeout(function(){b.build(b.index),a("body").addClass("lg-on")})):b.$items.on("click.lgcustom",function(c){try{c.preventDefault(),c.preventDefault()}catch(a){c.returnValue=!1}b.$el.trigger("onBeforeOpen.lg"),b.index=b.s.index||b.$items.index(this),a("body").hasClass("lg-on")||(b.build(b.index),a("body").addClass("lg-on"))})},b.prototype.build=function(b){var c=this;c.structure(),a.each(a.fn.lightGallery.modules,function(b){c.modules[b]=new a.fn.lightGallery.modules[b](c.el)}),c.slide(b,!1,!1,!1),c.s.keyPress&&c.keyPress(),c.$items.length>1?(c.arrow(),setTimeout(function(){c.enableDrag(),c.enableSwipe()},50),c.s.mousewheel&&c.mousewheel()):c.$slide.on("click.lg",function(){c.$el.trigger("onSlideClick.lg")}),c.counter(),c.closeGallery(),c.$el.trigger("onAfterOpen.lg"),c.$outer.on("mousemove.lg click.lg touchstart.lg",function(){c.$outer.removeClass("lg-hide-items"),clearTimeout(c.hideBartimeout),c.hideBartimeout=setTimeout(function(){c.$outer.addClass("lg-hide-items")},c.s.hideBarsDelay)}),c.$outer.trigger("mousemove.lg")},b.prototype.structure=function(){var b,c="",d="",e=0,f="",g=this;for(a("body").append('<div class="lg-backdrop"></div>'),a(".lg-backdrop").css("transition-duration",this.s.backdropDuration+"ms"),e=0;e<this.$items.length;e++)c+='<div class="lg-item"></div>';if(this.s.controls&&this.$items.length>1&&(d='<div class="lg-actions"><button class="lg-prev lg-icon">'+this.s.prevHtml+'</button><button class="lg-next lg-icon">'+this.s.nextHtml+"</button></div>"),".lg-sub-html"===this.s.appendSubHtmlTo&&(f='<div class="lg-sub-html"></div>'),b='<div class="lg-outer '+this.s.addClass+" "+this.s.startClass+'"><div class="lg" style="width:'+this.s.width+"; height:"+this.s.height+'"><div class="lg-inner">'+c+'</div><div class="lg-toolbar lg-group"><span class="lg-close lg-icon"></span></div>'+d+f+"</div></div>",a("body").append(b),this.$outer=a(".lg-outer"),this.$slide=this.$outer.find(".lg-item"),this.s.useLeft?(this.$outer.addClass("lg-use-left"),this.s.mode="lg-slide"):this.$outer.addClass("lg-use-css3"),g.setTop(),a(window).on("resize.lg orientationchange.lg",function(){setTimeout(function(){g.setTop()},100)}),this.$slide.eq(this.index).addClass("lg-current"),this.doCss()?this.$outer.addClass("lg-css3"):(this.$outer.addClass("lg-css"),this.s.speed=0),this.$outer.addClass(this.s.mode),this.s.enableDrag&&this.$items.length>1&&this.$outer.addClass("lg-grab"),this.s.showAfterLoad&&this.$outer.addClass("lg-show-after-load"),this.doCss()){var h=this.$outer.find(".lg-inner");h.css("transition-timing-function",this.s.cssEasing),h.css("transition-duration",this.s.speed+"ms")}setTimeout(function(){a(".lg-backdrop").addClass("in")}),setTimeout(function(){g.$outer.addClass("lg-visible")},this.s.backdropDuration),this.s.download&&this.$outer.find(".lg-toolbar").append('<a id="lg-download" target="_blank" download class="lg-download lg-icon"></a>'),this.prevScrollTop=a(window).scrollTop()},b.prototype.setTop=function(){if("100%"!==this.s.height){var b=a(window).height(),c=(b-parseInt(this.s.height,10))/2,d=this.$outer.find(".lg");b>=parseInt(this.s.height,10)?d.css("top",c+"px"):d.css("top","0px")}},b.prototype.doCss=function(){return!!function(){var a=["transition","MozTransition","WebkitTransition","OTransition","msTransition","KhtmlTransition"],b=document.documentElement,c=0;for(c=0;c<a.length;c++)if(a[c]in b.style)return!0}()},b.prototype.isVideo=function(a,b){var c;if(c=this.s.dynamic?this.s.dynamicEl[b].html:this.$items.eq(b).attr("data-html"),!a)return c?{html5:!0}:(console.error("lightGallery :- data-src is not pvovided on slide item "+(b+1)+". Please make sure the selector property is properly configured. More info - http://sachinchoolur.github.io/lightGallery/demos/html-markup.html"),!1);var d=a.match(/\/\/(?:www\.)?youtu(?:\.be|be\.com|be-nocookie\.com)\/(?:watch\?v=|embed\/)?([a-z0-9\-\_\%]+)/i),e=a.match(/\/\/(?:www\.)?vimeo.com\/([0-9a-z\-_]+)/i),f=a.match(/\/\/(?:www\.)?dai.ly\/([0-9a-z\-_]+)/i),g=a.match(/\/\/(?:www\.)?(?:vk\.com|vkontakte\.ru)\/(?:video_ext\.php\?)(.*)/i);return d?{youtube:d}:e?{vimeo:e}:f?{dailymotion:f}:g?{vk:g}:void 0},b.prototype.counter=function(){this.s.counter&&a(this.s.appendCounterTo).append('<div id="lg-counter"><span id="lg-counter-current">'+(parseInt(this.index,10)+1)+'</span> / <span id="lg-counter-all">'+this.$items.length+"</span></div>")},b.prototype.addHtml=function(b){var c,d,e=null;if(this.s.dynamic?this.s.dynamicEl[b].subHtmlUrl?c=this.s.dynamicEl[b].subHtmlUrl:e=this.s.dynamicEl[b].subHtml:(d=this.$items.eq(b),d.attr("data-sub-html-url")?c=d.attr("data-sub-html-url"):(e=d.attr("data-sub-html"),this.s.getCaptionFromTitleOrAlt&&!e&&(e=d.attr("title")||d.find("img").first().attr("alt")))),!c)if(void 0!==e&&null!==e){var f=e.substring(0,1);"."!==f&&"#"!==f||(e=this.s.subHtmlSelectorRelative&&!this.s.dynamic?d.find(e).html():a(e).html())}else e="";".lg-sub-html"===this.s.appendSubHtmlTo?c?this.$outer.find(this.s.appendSubHtmlTo).load(c):this.$outer.find(this.s.appendSubHtmlTo).html(e):c?this.$slide.eq(b).load(c):this.$slide.eq(b).append(e),void 0!==e&&null!==e&&(""===e?this.$outer.find(this.s.appendSubHtmlTo).addClass("lg-empty-html"):this.$outer.find(this.s.appendSubHtmlTo).removeClass("lg-empty-html")),this.$el.trigger("onAfterAppendSubHtml.lg",[b])},b.prototype.preload=function(a){var b=1,c=1;for(b=1;b<=this.s.preload&&!(b>=this.$items.length-a);b++)this.loadContent(a+b,!1,0);for(c=1;c<=this.s.preload&&!(a-c<0);c++)this.loadContent(a-c,!1,0)},b.prototype.loadContent=function(b,c,d){var e,f,g,h,i,j,k=this,l=!1,m=function(b){for(var c=[],d=[],e=0;e<b.length;e++){var g=b[e].split(" ");""===g[0]&&g.splice(0,1),d.push(g[0]),c.push(g[1])}for(var h=a(window).width(),i=0;i<c.length;i++)if(parseInt(c[i],10)>h){f=d[i];break}};if(k.s.dynamic){if(k.s.dynamicEl[b].poster&&(l=!0,g=k.s.dynamicEl[b].poster),j=k.s.dynamicEl[b].html,f=k.s.dynamicEl[b].src,k.s.dynamicEl[b].responsive){m(k.s.dynamicEl[b].responsive.split(","))}h=k.s.dynamicEl[b].srcset,i=k.s.dynamicEl[b].sizes}else{if(k.$items.eq(b).attr("data-poster")&&(l=!0,g=k.$items.eq(b).attr("data-poster")),j=k.$items.eq(b).attr("data-html"),f=k.$items.eq(b).attr("href")||k.$items.eq(b).attr("data-src"),k.$items.eq(b).attr("data-responsive")){m(k.$items.eq(b).attr("data-responsive").split(","))}h=k.$items.eq(b).attr("data-srcset"),i=k.$items.eq(b).attr("data-sizes")}var n=!1;k.s.dynamic?k.s.dynamicEl[b].iframe&&(n=!0):"true"===k.$items.eq(b).attr("data-iframe")&&(n=!0);var o=k.isVideo(f,b);if(!k.$slide.eq(b).hasClass("lg-loaded")){if(n)k.$slide.eq(b).prepend('<div class="lg-video-cont lg-has-iframe" style="max-width:'+k.s.iframeMaxWidth+'"><div class="lg-video"><iframe class="lg-object" frameborder="0" src="'+f+'"  allowfullscreen="true"></iframe></div></div>');else if(l){var p="";p=o&&o.youtube?"lg-has-youtube":o&&o.vimeo?"lg-has-vimeo":"lg-has-html5",k.$slide.eq(b).prepend('<div class="lg-video-cont '+p+' "><div class="lg-video"><span class="lg-video-play"></span><img class="lg-object lg-has-poster" src="'+g+'" /></div></div>')}else o?(k.$slide.eq(b).prepend('<div class="lg-video-cont "><div class="lg-video"></div></div>'),k.$el.trigger("hasVideo.lg",[b,f,j])):k.$slide.eq(b).prepend('<div class="lg-img-wrap"><img class="lg-object lg-image" src="'+f+'" /></div>');if(k.$el.trigger("onAferAppendSlide.lg",[b]),e=k.$slide.eq(b).find(".lg-object"),i&&e.attr("sizes",i),h){e.attr("srcset",h);try{picturefill({elements:[e[0]]})}catch(a){console.warn("lightGallery :- If you want srcset to be supported for older browser please include picturefil version 2 javascript library in your document.")}}".lg-sub-html"!==this.s.appendSubHtmlTo&&k.addHtml(b),k.$slide.eq(b).addClass("lg-loaded")}k.$slide.eq(b).find(".lg-object").on("load.lg error.lg",function(){var c=0;d&&!a("body").hasClass("lg-from-hash")&&(c=d),setTimeout(function(){k.$slide.eq(b).addClass("lg-complete"),k.$el.trigger("onSlideItemLoad.lg",[b,d||0])},c)}),o&&o.html5&&!l&&k.$slide.eq(b).addClass("lg-complete"),!0===c&&(k.$slide.eq(b).hasClass("lg-complete")?k.preload(b):k.$slide.eq(b).find(".lg-object").on("load.lg error.lg",function(){k.preload(b)}))},b.prototype.slide=function(b,c,d,e){var f=this.$outer.find(".lg-current").index(),g=this;if(!g.lGalleryOn||f!==b){var h=this.$slide.length,i=g.lGalleryOn?this.s.speed:0;if(!g.lgBusy){if(this.s.download){var j;j=g.s.dynamic?!1!==g.s.dynamicEl[b].downloadUrl&&(g.s.dynamicEl[b].downloadUrl||g.s.dynamicEl[b].src):"false"!==g.$items.eq(b).attr("data-download-url")&&(g.$items.eq(b).attr("data-download-url")||g.$items.eq(b).attr("href")||g.$items.eq(b).attr("data-src")),j?(a("#lg-download").attr("href",j),g.$outer.removeClass("lg-hide-download")):g.$outer.addClass("lg-hide-download")}if(this.$el.trigger("onBeforeSlide.lg",[f,b,c,d]),g.lgBusy=!0,clearTimeout(g.hideBartimeout),".lg-sub-html"===this.s.appendSubHtmlTo&&setTimeout(function(){g.addHtml(b)},i),this.arrowDisable(b),e||(b<f?e="prev":b>f&&(e="next")),c){this.$slide.removeClass("lg-prev-slide lg-current lg-next-slide");var k,l;h>2?(k=b-1,l=b+1,0===b&&f===h-1?(l=0,k=h-1):b===h-1&&0===f&&(l=0,k=h-1)):(k=0,l=1),"prev"===e?g.$slide.eq(l).addClass("lg-next-slide"):g.$slide.eq(k).addClass("lg-prev-slide"),g.$slide.eq(b).addClass("lg-current")}else g.$outer.addClass("lg-no-trans"),this.$slide.removeClass("lg-prev-slide lg-next-slide"),"prev"===e?(this.$slide.eq(b).addClass("lg-prev-slide"),this.$slide.eq(f).addClass("lg-next-slide")):(this.$slide.eq(b).addClass("lg-next-slide"),this.$slide.eq(f).addClass("lg-prev-slide")),setTimeout(function(){g.$slide.removeClass("lg-current"),g.$slide.eq(b).addClass("lg-current"),g.$outer.removeClass("lg-no-trans")},50);g.lGalleryOn?(setTimeout(function(){g.loadContent(b,!0,0)},this.s.speed+50),setTimeout(function(){g.lgBusy=!1,g.$el.trigger("onAfterSlide.lg",[f,b,c,d])},this.s.speed)):(g.loadContent(b,!0,g.s.backdropDuration),g.lgBusy=!1,g.$el.trigger("onAfterSlide.lg",[f,b,c,d])),g.lGalleryOn=!0,this.s.counter&&a("#lg-counter-current").text(b+1)}g.index=b}},b.prototype.goToNextSlide=function(a){var b=this,c=b.s.loop;a&&b.$slide.length<3&&(c=!1),b.lgBusy||(b.index+1<b.$slide.length?(b.index++,b.$el.trigger("onBeforeNextSlide.lg",[b.index]),b.slide(b.index,a,!1,"next")):c?(b.index=0,b.$el.trigger("onBeforeNextSlide.lg",[b.index]),b.slide(b.index,a,!1,"next")):b.s.slideEndAnimatoin&&!a&&(b.$outer.addClass("lg-right-end"),setTimeout(function(){b.$outer.removeClass("lg-right-end")},400)))},b.prototype.goToPrevSlide=function(a){var b=this,c=b.s.loop;a&&b.$slide.length<3&&(c=!1),b.lgBusy||(b.index>0?(b.index--,b.$el.trigger("onBeforePrevSlide.lg",[b.index,a]),b.slide(b.index,a,!1,"prev")):c?(b.index=b.$items.length-1,b.$el.trigger("onBeforePrevSlide.lg",[b.index,a]),b.slide(b.index,a,!1,"prev")):b.s.slideEndAnimatoin&&!a&&(b.$outer.addClass("lg-left-end"),setTimeout(function(){b.$outer.removeClass("lg-left-end")},400)))},b.prototype.keyPress=function(){var b=this;this.$items.length>1&&a(window).on("keyup.lg",function(a){b.$items.length>1&&(37===a.keyCode&&(a.preventDefault(),b.goToPrevSlide()),39===a.keyCode&&(a.preventDefault(),b.goToNextSlide()))}),a(window).on("keydown.lg",function(a){!0===b.s.escKey&&27===a.keyCode&&(a.preventDefault(),b.$outer.hasClass("lg-thumb-open")?b.$outer.removeClass("lg-thumb-open"):b.destroy())})},b.prototype.arrow=function(){var a=this;this.$outer.find(".lg-prev").on("click.lg",function(){a.goToPrevSlide()}),this.$outer.find(".lg-next").on("click.lg",function(){a.goToNextSlide()})},b.prototype.arrowDisable=function(a){!this.s.loop&&this.s.hideControlOnEnd&&(a+1<this.$slide.length?this.$outer.find(".lg-next").removeAttr("disabled").removeClass("disabled"):this.$outer.find(".lg-next").attr("disabled","disabled").addClass("disabled"),a>0?this.$outer.find(".lg-prev").removeAttr("disabled").removeClass("disabled"):this.$outer.find(".lg-prev").attr("disabled","disabled").addClass("disabled"))},b.prototype.setTranslate=function(a,b,c){this.s.useLeft?a.css("left",b):a.css({transform:"translate3d("+b+"px, "+c+"px, 0px)"})},b.prototype.touchMove=function(b,c){var d=c-b;Math.abs(d)>15&&(this.$outer.addClass("lg-dragging"),this.setTranslate(this.$slide.eq(this.index),d,0),this.setTranslate(a(".lg-prev-slide"),-this.$slide.eq(this.index).width()+d,0),this.setTranslate(a(".lg-next-slide"),this.$slide.eq(this.index).width()+d,0))},b.prototype.touchEnd=function(a){var b=this;"lg-slide"!==b.s.mode&&b.$outer.addClass("lg-slide"),this.$slide.not(".lg-current, .lg-prev-slide, .lg-next-slide").css("opacity","0"),setTimeout(function(){b.$outer.removeClass("lg-dragging"),a<0&&Math.abs(a)>b.s.swipeThreshold?b.goToNextSlide(!0):a>0&&Math.abs(a)>b.s.swipeThreshold?b.goToPrevSlide(!0):Math.abs(a)<5&&b.$el.trigger("onSlideClick.lg"),b.$slide.removeAttr("style")}),setTimeout(function(){b.$outer.hasClass("lg-dragging")||"lg-slide"===b.s.mode||b.$outer.removeClass("lg-slide")},b.s.speed+100)},b.prototype.enableSwipe=function(){var a=this,b=0,c=0,d=!1;a.s.enableSwipe&&a.doCss()&&(a.$slide.on("touchstart.lg",function(c){a.$outer.hasClass("lg-zoomed")||a.lgBusy||(c.preventDefault(),a.manageSwipeClass(),b=c.originalEvent.targetTouches[0].pageX)}),a.$slide.on("touchmove.lg",function(e){a.$outer.hasClass("lg-zoomed")||(e.preventDefault(),c=e.originalEvent.targetTouches[0].pageX,a.touchMove(b,c),d=!0)}),a.$slide.on("touchend.lg",function(){a.$outer.hasClass("lg-zoomed")||(d?(d=!1,a.touchEnd(c-b)):a.$el.trigger("onSlideClick.lg"))}))},b.prototype.enableDrag=function(){var b=this,c=0,d=0,e=!1,f=!1;b.s.enableDrag&&b.doCss()&&(b.$slide.on("mousedown.lg",function(d){b.$outer.hasClass("lg-zoomed")||b.lgBusy||a(d.target).text().trim()||(d.preventDefault(),b.manageSwipeClass(),c=d.pageX,e=!0,b.$outer.scrollLeft+=1,b.$outer.scrollLeft-=1,b.$outer.removeClass("lg-grab").addClass("lg-grabbing"),b.$el.trigger("onDragstart.lg"))}),a(window).on("mousemove.lg",function(a){e&&(f=!0,d=a.pageX,b.touchMove(c,d),b.$el.trigger("onDragmove.lg"))}),a(window).on("mouseup.lg",function(g){f?(f=!1,b.touchEnd(d-c),b.$el.trigger("onDragend.lg")):(a(g.target).hasClass("lg-object")||a(g.target).hasClass("lg-video-play"))&&b.$el.trigger("onSlideClick.lg"),e&&(e=!1,b.$outer.removeClass("lg-grabbing").addClass("lg-grab"))}))},b.prototype.manageSwipeClass=function(){var a=this.index+1,b=this.index-1;this.s.loop&&this.$slide.length>2&&(0===this.index?b=this.$slide.length-1:this.index===this.$slide.length-1&&(a=0)),this.$slide.removeClass("lg-next-slide lg-prev-slide"),b>-1&&this.$slide.eq(b).addClass("lg-prev-slide"),this.$slide.eq(a).addClass("lg-next-slide")},b.prototype.mousewheel=function(){var a=this;a.$outer.on("mousewheel.lg",function(b){b.deltaY&&(b.deltaY>0?a.goToPrevSlide():a.goToNextSlide(),b.preventDefault())})},b.prototype.closeGallery=function(){var b=this,c=!1;this.$outer.find(".lg-close").on("click.lg",function(){b.destroy()}),b.s.closable&&(b.$outer.on("mousedown.lg",function(b){c=!!(a(b.target).is(".lg-outer")||a(b.target).is(".lg-item ")||a(b.target).is(".lg-img-wrap"))}),b.$outer.on("mousemove.lg",function(){c=!1}),b.$outer.on("mouseup.lg",function(d){(a(d.target).is(".lg-outer")||a(d.target).is(".lg-item ")||a(d.target).is(".lg-img-wrap")&&c)&&(b.$outer.hasClass("lg-dragging")||b.destroy())}))},b.prototype.destroy=function(b){var c=this;b||(c.$el.trigger("onBeforeClose.lg"),a(window).scrollTop(c.prevScrollTop)),b&&(c.s.dynamic||this.$items.off("click.lg click.lgcustom"),a.removeData(c.el,"lightGallery")),this.$el.off(".lg.tm"),a.each(a.fn.lightGallery.modules,function(a){c.modules[a]&&c.modules[a].destroy()}),this.lGalleryOn=!1,clearTimeout(c.hideBartimeout),this.hideBartimeout=!1,a(window).off(".lg"),a("body").removeClass("lg-on lg-from-hash"),c.$outer&&c.$outer.removeClass("lg-visible"),a(".lg-backdrop").removeClass("in"),setTimeout(function(){c.$outer&&c.$outer.remove(),a(".lg-backdrop").remove(),b||c.$el.trigger("onCloseAfter.lg")},c.s.backdropDuration+50)},a.fn.lightGallery=function(c){return this.each(function(){if(a.data(this,"lightGallery"))try{a(this).data("lightGallery").init()}catch(a){console.error("lightGallery has not initiated properly")}else a.data(this,"lightGallery",new b(this,c))})},a.fn.lightGallery.modules={}}()});