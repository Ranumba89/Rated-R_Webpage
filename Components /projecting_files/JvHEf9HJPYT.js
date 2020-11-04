if (self.CavalryLogger) { CavalryLogger.start_js(["P\/eGs"]); }

__d("CometVideoHomeFeedAutoAdvanceManager.react",["CometVideoHomeFeedAutoAdvanceAPIContext","CometViewportMarginsContext","React","requireDeferred"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g=b("React"),h=b("requireDeferred")("cometVideoHomeScrollToRef");function a(a){var c=g.useRef(new Map()),d=g.useContext(b("CometViewportMarginsContext")),e=d.bottom,f=d.top,i=g.useRef(0),j=g.useCallback(function(a,b){c.current.set(a,{position:a,ref:b}),a>i.current&&(i.current=a)},[]),k=g.useCallback(function(a){c.current["delete"](a);if(a===i.current&&c.current.size>1){a=a-1;while(a>=0){if(c.current.has(a)){i.current=a;break}a-=1}}},[]),l=g.useCallback(function(a){a=a+1;var b=null;while(a<=i.current){if(c.current.has(a)){var d;b=(d=c.current.get(a))==null?void 0:d.ref;if(((d=b)==null?void 0:d.current)!=null)break}a++}h.onReadyImmediately(function(a){a(b,f,e)})},[e,f]);d=g.useMemo(function(){return{advance:l,register:j,unregister:k}},[l,j,k]);return g.jsx(b("CometVideoHomeFeedAutoAdvanceAPIContext").Provider,{value:d,children:a.children})}}),null);
__d("CometVideoGridCardGlimmer.react",["BaseGlimmer.react","React","stylex"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g=b("React"),h=146,i=256;function a(a){var c=a.index,d=a.height;d=d===void 0?h:d;a=a.width;a=a===void 0?i:a;return g.jsxs("div",{className:"cbu4d94t j83agx80",children:[g.jsx(b("BaseGlimmer.react"),{className:"kzx2olss aot14ch1 p86d2i9g beltcj47",index:c,children:g.jsx("div",{style:{paddingTop:"calc("+d+" / "+a+" * 100%)"}})}),g.jsxs("div",{className:"tr9rh885",children:[g.jsx(b("BaseGlimmer.react"),{className:"g14fb8az oud54xpy cyypbtt7 kzx2olss aot14ch1 p86d2i9g beltcj47",index:c}),g.jsx(b("BaseGlimmer.react"),{className:"pnicyljo bsodd3zb kzx2olss aot14ch1 p86d2i9g beltcj47",index:c})]})]})}}),null);
__d("CometVideoHomeBlueDesignFeedUnitGlimmer.react",["BaseGlimmer.react","CometVideoProfileInfoGlimmer.react","React","stylex"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g=b("React"),h=820,i=461;function a(a){a=a.index;return g.jsxs("div",{className:"k4urcfbm fpuqyqaw c9zspvje l82x9zwi uo3d90p7 pw54ja7n ue3kfks5 cwj9ozl2",style:{maxWidth:h},children:[g.jsx("div",{className:"pybr56ya f10w8fjw dhix69tm wkznzc2l",children:g.jsx(b("CometVideoProfileInfoGlimmer.react"),{index:a})}),g.jsx(b("BaseGlimmer.react"),{index:a,children:g.jsx("div",{style:{height:i}})}),g.jsx("div",{className:"lbh82i0l"})]})}}),null);
__d("CometVideoHomeFeedUnitGlimmer.react",["CometVideoHomeBlueDesignFeedUnitGlimmer.react","React"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g=b("React");function a(){return g.jsx(b("CometVideoHomeBlueDesignFeedUnitGlimmer.react"),{index:0})}}),null);
__d("CometVideoHomeFeedPlaceholder.react",["BaseGlimmer.react","CometVideoHomeFeedUnitGlimmer.react","React","gkx","stylex"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g=b("React"),h=820;function a(a){a=a.collapseHorizontalMargins;a=a===void 0?!1:a;var c=b("gkx")("708253"),d=c?{maxWidth:h}:{width:h};return g.jsx("div",{className:"cbu4d94t j83agx80 bp9cbjyn"+(c&&!a?" t7yuvbsa nhadk0th":""),children:g.jsxs("div",{className:"k4urcfbm jei6r52m cbu4d94t j83agx80",style:d,children:[g.jsx(b("BaseGlimmer.react"),{className:"b654a4as sjgh65i0 jnigpg78 j83agx80 ns4ygwem fykbt5ly hgaippwi fni8adji hybvsw6c nqmvxvec",index:0}),g.jsx(b("CometVideoHomeFeedUnitGlimmer.react"),{})]})})}}),null);
__d("CometVideoHomeRowGlimmer.react",["BaseGlimmer.react","CometFlexibleRow.react","CometVideoGridCardGlimmer.react","React","stylex"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h=b("React"),i=4,j=2,k={card:{backgroundColor:"cwj9ozl2",borderTopStartRadius:"jk6sbkaj",borderTopEndRadius:"kdgqqoy6",borderBottomEndRadius:"ihh4hy1g",borderBottomStartRadius:"qttc61fc",paddingTop:"discj3wi",paddingEnd:"hv4rvrfc",paddingBottom:"ihqw7lf3",paddingStart:"dati1w0a"},header:{borderTopStartRadius:"jk6sbkaj",borderTopEndRadius:"kdgqqoy6",borderBottomEndRadius:"ihh4hy1g",borderBottomStartRadius:"qttc61fc",height:"rgmg9uty",marginBottom:"sjgh65i0",width:"qio8uep8"},root:{marginTop:"jei6r52m"}};function a(a){var c=a.hideHeader,d=a.maxItems;d=d===void 0?i:d;var e=a.numRows;e=e===void 0?1:e;var f=a.useTransparentBackground;f=f===void 0?!1:f;a=a.xstyles;a=a===void 0?[]:a;var l=[],m=[];for(var n=0;n<d;n++)l.push(h.jsx(b("CometVideoGridCardGlimmer.react"),{index:0},n));for(var n=0;n<e;n++)m.push(h.jsxs("div",{className:(g||(g=b("stylex")))([!f&&k.card,k.root].concat(a)),children:[c!==!0&&h.jsx(b("BaseGlimmer.react"),{className:(g||(g=b("stylex")))(k.header),index:0}),h.jsx(b("CometFlexibleRow.react"),{columnMaxWidth:350,columnMinWidth:250,maxItems:d,minItems:j,children:l})]},n));return h.jsx(h.Fragment,{children:m})}}),null);
__d("useComponentDidMount",["React"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g=b("React");function a(a){g.useEffect(a,[])}}),null);
__d("useComponentWillMount",["React","useComponentDidMount"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g=b("React");function a(a){var c=g.useRef(!0);c.current&&a();b("useComponentDidMount")(function(){c.current=!1})}}),null);
__d("CometVideoHomeLiveTabExperiments",["gkx"],(function(a,b,c,d,e,f){"use strict";a=function(){return b("gkx")("1429886")||b("gkx")("976093")&&b("gkx")("1351276")};f.hotswapEnabled=a;var g=function(){return!0};f.injectionEnabled=g;var h=function(){return b("gkx")("1663447")};f.liveInWatchGroup1Destination=h;c=function(){return b("gkx")("1663448")};f.liveInWatchGroup2Watchfeed=c;d=function(){return b("gkx")("1663449")};f.liveInWatchGroup3Pathing=d;e=function(){return b("gkx")("1663450")};f.liveInWatchGroup4Overall=e;var i=function(){return h()||b("gkx")("976093")&&b("gkx")("1399700")};f.liveEnabled=i;var j=function(){return!0};a=function(){return!0};f.dedupEnabled=a;c=function(){return!j()&&g()&&i()};f.thumbnailsInjectEnabled=c}),null);
__d("CometVideoHomeLiveGridConstants",["stylex"],(function(a,b,c,d,e,f){"use strict";a=3;f.VIDEOS_PER_ROW=a;b=250;f.MIN_COLUMN_WIDTH=b;c=300;f.MAX_COLUMN_WIDTH=c;d=8;e=(c+d)*a-d;f.MAX_WIDTH=e;b={gridWidth:{maxWidth:"cl7tx4kc"}};c=b.gridWidth;f.GRID_WIDTH_XSTYLE=c}),null);
__d("XVideoHomeLiveController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/watch/live/",{extid:{type:"String"},v:{type:"FBID"},ref:{type:"String"},external_log_id:{type:"String"}})}),null);
__d("CometVideoHomeLiveUtils",["CometVideoHomeLiveTabExperiments","XCometVideoHomeLiveControllerRouteBuilder","XVideoHomeLiveController"],(function(a,b,c,d,e,f){"use strict";f.getBlueInjectionURI=a;f.getCometInjectionURI=c;f.convertToFeedModule=d;f.getTimeSpent=e;f.videoIsDupe=h;f.calculateTotalVisible=i;function a(a,c){return b("XVideoHomeLiveController").getURIBuilder().setFBID("v",a).setString("ref",c).getURI()}function c(a,c){var d={};a!=null&&(d.v=a);c!=null&&(d.ref=c);return b("XCometVideoHomeLiveControllerRouteBuilder").buildURL(d)}function d(a){switch(a){case"WWW_LIVE_NEWS":return"news";case"WWW_LIVE_PAGES_YOU_FOLLOW":return"pages_you_follow";case"WWW_LIVE_SPORTS":return"sports";case"WWW_LIVE_TOP_LIVE_GAMING":return"gaming";case"WWW_LIVE_TOP_LIVE_MUSIC":return"music";case"WWW_LIVE_SHOPPING":return"shopping";case"WWW_LIVE_TOP_LIVES":return"top_lives";case"WWW_LIVE_UPCOMING_LIVES":return"upcoming_lives";case"WWW_LIVE_WAS_LIVES":return"was_lives";case"WWW_LIVE_NEAR_YOU":return"near_you";case"WWW_LIVE_SCHEDULED_HERO":return"scheduled_hero";case"WWW_LIVE_SCHEDULED_STARTING_SOON":return"scheduled_starting_soon";case"WWW_LIVE_SCHEDULED_SUBSCRIBED":return"scheduled_subscribed";case"WWW_LIVE_SCHEDULED_PAGES_YOU_FOLLOW":return"scheduled_pages_you_follow";case"WWW_LIVE_SCHEDULED_RECOMMENDED":return"scheduled_recommended";case"WWW_LIVE_SCHEDULED_BEAUTY":return"scheduled_beauty";case"WWW_LIVE_SCHEDULED_ENTERTAINMENT":return"scheduled_entertainment";case"WWW_LIVE_SCHEDULED_NEWS":return"scheduled_news";case"WWW_LIVE_SCHEDULED_SPORTS":return"scheduled_sports";case"WWW_LIVE_SPOTLIGHT_PARTNERS":return"spotlight_partners"}return"unknown"}function e(a){return a==null?null:Date.now()-a}a=["WWW_LIVE_SCHEDULED_SUBSCRIBED","WWW_LIVE_SCHEDULED_STARTING_SOON","WWW_LIVE_SCHEDULED_PAGES_YOU_FOLLOW","WWW_LIVE_SCHEDULED_RECOMMENDED","WWW_LIVE_SCHEDULED_BEAUTY","WWW_LIVE_SCHEDULED_ENTERTAINMENT","WWW_LIVE_SCHEDULED_NEWS","WWW_LIVE_SCHEDULED_SPORTS"];c=["WWW_LIVE_MAP_HEATMAP","WWW_LIVE_PAGES_YOU_FOLLOW","WWW_LIVE_TOP_LIVES","WWW_LIVE_UPCOMING_LIVES","WWW_LIVE_NEWS","WWW_LIVE_NEAR_YOU","WWW_LIVE_TOP_LIVE_MUSIC","WWW_LIVE_SHOPPING","WWW_LIVE_TOP_LIVE_GAMING","WWW_LIVE_SPORTS","WWW_LIVE_WAS_LIVES"];var g=a.concat(c);f.DUPE_PRIORITY=g;function h(a,c,d){if(!b("CometVideoHomeLiveTabExperiments").dedupEnabled())return!1;for(var e=0;e<g.length;e++){var f=g[e];if(f===c)return!1;f=d[f];if(f&&f.includes(a))return!0}return!1}function i(a){return g.reduce(function(b,c){return b+(a[c]?a[c].length:0)},0)}}),null);
__d("LiveVideoDestinationTypedLoggerLite",["generateLiteTypedLogger"],(function(a,b,c,d,e,f){"use strict";e.exports=b("generateLiteTypedLogger")("logger:LiveVideoDestinationLoggerConfig")}),null);