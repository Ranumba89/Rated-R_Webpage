if (self.CavalryLogger) { CavalryLogger.start_js(["1LQOV"]); }

__d("CometTahoeSidepaneRenderer_video.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[{kind:"RootArgument",name:"chainingSeedVideoId"}],kind:"Fragment",metadata:null,name:"CometTahoeSidepaneRenderer_video",selections:[{alias:null,args:[{kind:"Variable",name:"chaining_seed_video_id",variableName:"chainingSeedVideoId"},{kind:"Literal",name:"supported",value:["DefaultTahoeSidepaneRenderer","GamingVideoTahoeSidepaneRenderer","LiveTahoeSidepaneRenderer"]}],concreteType:null,kind:"LinkedField",name:"tahoe_sidepane_renderer",plural:!1,selections:[{kind:"InlineFragment",selections:[{documentName:"CometTahoeSidepaneRenderer_video",fragmentName:"CometTahoeSidePane_tahoeSidepaneRenderer",fragmentPropName:"tahoeSidepaneRenderer",kind:"ModuleImport"}],type:"DefaultTahoeSidepaneRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"CometTahoeSidepaneRenderer_video",fragmentName:"CometGamingTahoeSidepane_tahoeSidepaneRenderer",fragmentPropName:"tahoeSidepaneRenderer",kind:"ModuleImport"}],type:"GamingVideoTahoeSidepaneRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"CometTahoeSidepaneRenderer_video",fragmentName:"CometLiveTahoeSidepane_tahoeSidepaneRenderer",fragmentPropName:"tahoeSidepaneRenderer",kind:"ModuleImport"}],type:"LiveTahoeSidepaneRenderer",abstractKey:null}],storageKey:null}],type:"Video",abstractKey:null};e.exports=a}),null);
__d("MWChatForceCollapseTabs.bs",["bs_block","React","MWChatMultitabContext.bs","MWChatMultitabDispatcher.bs","useCometFeedNoRoutingNavigationEventLogger"],(function(a,b,c,d,e,f){"use strict";var g=b("React");function a(a){var c=b("useCometFeedNoRoutingNavigationEventLogger")(),d=g.useContext(b("MWChatMultitabContext.bs").context);return g.useCallback(function(a){c(Date.now(),"","messenger");if(d!==void 0)return b("MWChatMultitabDispatcher.bs").dispatch(void 0,d,b("bs_block").__(5,[a]));else return 0},[d,c])}f.useHook=a}),null);
__d("MWChatForceCollapseTabs.re",["MWChatForceCollapseTabs.bs"],(function(a,b,c,d,e,f){a=b("MWChatForceCollapseTabs.bs").useHook;f.useHook=a}),null);
__d("MWChatUndoForceCollapseTabs.bs",["bs_block","React","MWChatMultitabContext.bs","MWChatMultitabDispatcher.bs","useCometFeedNoRoutingNavigationEventLogger"],(function(a,b,c,d,e,f){"use strict";var g=b("React");function a(a){var c=b("useCometFeedNoRoutingNavigationEventLogger")(),d=g.useContext(b("MWChatMultitabContext.bs").context);return g.useCallback(function(a){c(Date.now(),"","messenger");if(d!==void 0)return b("MWChatMultitabDispatcher.bs").dispatch(void 0,d,b("bs_block").__(6,[a]));else return 0},[d,c])}f.useHook=a}),null);
__d("MWChatUndoForceCollapseTabs.re",["MWChatUndoForceCollapseTabs.bs"],(function(a,b,c,d,e,f){a=b("MWChatUndoForceCollapseTabs.bs").useHook;f.useHook=a}),null);
__d("useToggleChatTabsOnMountUnmount",["CometRouteRenderType","MWChatForceCollapseTabs.re","MWChatUndoForceCollapseTabs.re","React","useShouldShowMessagingEntrypointOnCurrentRoute"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g=b("React");function a(){var a=b("useShouldShowMessagingEntrypointOnCurrentRoute")("CHAT"),c=b("CometRouteRenderType").useIsPushView(),d=b("MWChatForceCollapseTabs.re").useHook(),e=b("MWChatUndoForceCollapseTabs.re").useHook();g.useEffect(function(){a&&d(c);return function(){a&&e(c)}},[a,c,d,e])}}),null);
__d("CometRightRailContentArea.react",["CometRouteRenderType","CometScrollView.react","CometSection.react","HiddenSubtreeContextProvider.react","React","gkx","stylex","useShouldShowMessagingEntrypointOnCurrentRoute"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h=b("React"),i=b("gkx")("708253"),j={alignContentCenter:{alignItems:"bp9cbjyn"},alignContentStretch:{alignItems:"gs1a9yip"},chatSliver:{backgroundColor:"cwj9ozl2",boxShadow:"r28pvxcy",display:"j83agx80",end:"n7fi1qx3",height:"datstx6m",position:"poy2od1o",top:"be9z9djy",width:"etr7akla"},content:{display:"j83agx80",flexDirection:"cbu4d94t",flexGrow:"buofh1pr",minWidth:"nnvw5wor"},contentArea:{display:"j83agx80",minHeight:"dp1hu0rb"},contentCentered:{justifyContent:"taijpn5t"},contentContainer:{display:"j83agx80",flexDirection:"cbu4d94t",maxWidth:"d2edcug0"},rightRail:{backgroundColor:"hybvsw6c",display:"j83agx80",flexShrink:"pfnyh3mw",minHeight:"dp1hu0rb",position:"l9j0dhe7"},rightRailContainer:{backgroundColor:"hybvsw6c",display:"j83agx80",end:"n7fi1qx3",flexDirection:"cbu4d94t",maxHeight:"pad24vr5",position:"poy2od1o",width:"iyyx5f41","@media (max-width: 719px)":{position:"ap132fyt"}},rightRailContainerHeight:{minHeight:"pphwfc2g",top:"be9z9djy"},rightRailContainerHeightBlue:{minHeight:"svhzetay",top:"t38bcc6f"},rightRailContainerPushViewHeader:{boxShadow:"roauwr9f",end:"n7fi1qx3",height:"byvelhso",pointerEvents:"hzruof5a",position:"pmk7jnqg",start:"j9ispegn",top:"kr520xx4"},rightRailContainerWithShadow:{boxSizing:"cjfnh4rs",paddingStart:"e9o6kcyi"},rightRailHidden:{display:"mkhogb32"},rightRailShadow:{backgroundColor:"qsy8amke",backgroundImage:"l50q4up1",backgroundRepeat:"sl8jk4me",backgroundSize:"hvce7xua",bottom:"i09qtzwb",pointerEvents:"hzruof5a",position:"pmk7jnqg",start:"j9ispegn",top:"kr520xx4",width:"m7io0qpo"}},k={360:{width:"o36gj0jk"},400:{width:"gwi2wbwd"},440:{width:"a5uo0l2v"},480:{width:"g8tomnu4"},520:{width:"rl6uu45y"}};function a(a){var c=a.alignContent;c=c===void 0?"center":c;var d=a.children,e=a.hasShadow;e=e===void 0?!0:e;var f=a.rightRail,l=a.rightRailHidden;l=l===void 0?!1:l;var m=a.rightRailWidth;m=m===void 0?360:m;var n=a.showsVerticalScrollIndicator;n=n===void 0?!0:n;a=a.verticalAlign;a=a===void 0?"top":a;var o=b("CometRouteRenderType").useIsPushView(),p=b("useShouldShowMessagingEntrypointOnCurrentRoute")("CHAT");p=p;return h.jsxs("div",{className:(g||(g=b("stylex")))(j.contentArea),children:[h.jsx(b("CometSection.react"),{className:g(j.content,c==="center"?j.alignContentCenter:null,c==="stretch"?j.alignContentStretch:null,a==="middle"?j.contentCentered:null),role:"main",children:h.jsx("div",{className:g(j.contentContainer),children:d})}),h.jsxs(b("CometSection.react"),{className:g(j.rightRail,k[p?String(Number(m)+80):m],l&&j.rightRailHidden),role:"complementary",children:[h.jsx(b("HiddenSubtreeContextProvider.react"),{isHidden:l,children:h.jsxs("div",{className:g(j.rightRailContainer,i?j.rightRailContainerHeight:null,i?null:j.rightRailContainerHeightBlue,e?j.rightRailContainerWithShadow:null),children:[h.jsx(b("CometScrollView.react"),{showsHorizontalScrollIndicator:!1,showsVerticalScrollIndicator:n,xstyle:k[m],children:f}),e&&h.jsx("div",{className:(g||(g=b("stylex")))(j.rightRailShadow)})]})}),p?h.jsx("div",{className:(g||(g=b("stylex")))(j.chatSliver)}):null,o&&h.jsx("div",{className:(g||(g=b("stylex")))(j.rightRailContainerPushViewHeader),children:e&&h.jsx("div",{className:(g||(g=b("stylex")))(j.rightRailShadow)})})]})]})}}),null);
__d("LongtaskObserver",["performanceNow"],(function(a,b,c,d,e,f){"use strict";f.getCurrentLongtaskAPI=a;f.observeLongtask=c;var g,h=200,i=new Set(),j=typeof ((d=window.PerformanceObserver)==null?void 0:(e=d.supportedEntryTypes)==null?void 0:e.includes)==="function"&&window.PerformanceObserver.supportedEntryTypes.includes("longtask");function a(){return{addLongtask:function(a,b){i.forEach(function(c){c.addLongtask({duration:a,startTime:b})})}}}function c(a){a===void 0&&(a=(g||(g=b("performanceNow")))());if(!j)return null;var c=[],d={annotation:{},annotationInt:{longtaskCount:0},endTime:null,list:[],markerPoints:{},startTime:a},e=new window.PerformanceObserver(function(a){a=a.getEntries();a.forEach(function(a){f.addLongtask({duration:a.duration,startTime:a.startTime})})}),f={addAnnotation:function(a,b){d.annotation[a]=b},addAnnotationInt:function(a,b){d.annotationInt[a]=b},addLongtask:function(a){d.list.push(a)},addMarkerPoint:function(a,b){d.markerPoints[a]=b},endMeasure:function(){d.endTime=(g||(g=b("performanceNow")))();e.disconnect();f.addAnnotationInt("longtaskCount",d.list.length);if(d.list.length>0){var a=0,j=0,k=0;d.list.forEach(function(b){b.duration>=h&&k++,a+=b.duration,b.duration>j&&(j=b.duration)});f.addAnnotationInt("largeLongtaskCount",k);f.addAnnotationInt("maxLongtaskDuration",j);f.addAnnotationInt("avgLongtaskDuration",a/d.list.length)}c.forEach(function(a){a(d)});i["delete"](f);return d},getReport:function(){return d},onComplete:function(a){c.push(a)}};i.add(f);e.observe({entryTypes:["longtask"]});return f}}),null);
__d("CometLongtaskLogger",["LongtaskObserver","QuickPerformanceLogger","SiteData","performanceNavigationStart","performanceNow"],(function(a,b,c,d,e,f){"use strict";f.getCurrentLongtaskAPI=a;f.observeLongtask=c;var g,h=1,i=b("performanceNavigationStart")();function j(a){var c=h++;b("QuickPerformanceLogger").markerStart(101652143,c,a.startTime+i);for(var d in a.annotationInt){var e;b("QuickPerformanceLogger").markerAnnotate(101652143,{"int":(e={},e[d]=a.annotationInt[d],e)},{instanceKey:c})}for(var f in a.annotation){b("QuickPerformanceLogger").markerAnnotate(101652143,{string:(e={},e[f]=a.annotation[f],e)},{instanceKey:c})}for(var j in a.markerPoints)b("QuickPerformanceLogger").markerPoint(101652143,j,{instanceKey:c,timestamp:a.markerPoints[j]+i});b("QuickPerformanceLogger").markerEnd(101652143,2,c,((e=a.endTime)!=null?e:(g||(g=b("performanceNow")))())+i)}function a(){return b("LongtaskObserver").getCurrentLongtaskAPI()}function c(a){a===void 0&&(a=(g||(g=b("performanceNow")))());a=b("LongtaskObserver").observeLongtask(a);a&&(a.addAnnotationInt("client_revision",b("SiteData").client_revision),a.addAnnotation("client_push_phase",b("SiteData").push_phase),a.onComplete(function(a){j(a)}));return a}}),null);
__d("CometScrollPerfTracker",["CometEventListener","CometLongtaskLogger","CometNavigationTracing","clearTimeout","performanceNow","setTimeoutCometLoggingPri"],(function(a,b,c,d,e,f){"use strict";f.getReport=a;f.reportPaintDelayAfterScroll=c;f.init=d;var g,h=500,i=0,j=0,k=0,l=0,m=!1,n=0,o=0,p=0,q=0,r=null,s=null,t=null,u=0;function a(){return r}function v(){var a=(g||(g=b("performanceNow")))();t=null;m=!1;if(s==null)return;k=window.scrollX;l=window.scrollY;s.addAnnotationInt("finalScrollX",k);s.addAnnotationInt("finalScrollY",l);s.addAnnotationInt("initialScrollX",i);s.addAnnotationInt("initialScrollY",j);s.addAnnotationInt("scrollDuration",a-n);s.addAnnotationInt("scrollEventCount",q);s.addAnnotationInt("viewportHeight",window.innerHeight);s.addAnnotationInt("viewportWidth",window.viewportWidth);s.addMarkerPoint("firstScrollEvent",o);s.addMarkerPoint("lastScrollEvent",p);r=s.endMeasure();s=null;u=0}function c(a,b,c){s!=null&&a-p>100&&a-p>u&&(u=a-p,s.addMarkerPoint("delayedPaint",a),s.addAnnotationInt("paintDelay",u),s.addAnnotation("delayedPaintPagelet",b+"_"+c))}function d(){var a=function(a){if(a.target!==window.document)return;p=a.timeStamp;var c=b("CometNavigationTracing").getLastNavigation();if(!m&&c){var d=(g||(g=b("performanceNow")))();o=p;n=Math.min(a.timeStamp,d);q=0;m=!0;i=k;j=l;s=b("CometLongtaskLogger").observeLongtask(n);d-a.timeStamp>=50&&b("CometLongtaskLogger").getCurrentLongtaskAPI().addLongtask(d-a.timeStamp,a.timeStamp);s&&(s.addMarkerPoint("handlerStart",d),s.addAnnotation("traceType","SCROLL"),typeof c.metadata.tracePolicy==="string"&&s.addAnnotation("tracePolicy",c.metadata.tracePolicy),c.completed!=null&&s.addAnnotationInt("timeSinceLastNavigation",n-c.completed))}s&&(q++,t!=null&&b("clearTimeout")(t),t=b("setTimeoutCometLoggingPri")(v,h))};b("CometEventListener").captureWithPassiveFlag(window,"scroll",a,!0)}}),null);
__d("useLiveVideoCometInstreamRewardAlertDisplay",["createVideoStateHook"],(function(a,b,c,d,e,f){"use strict";a=b("createVideoStateHook").createVideoStateHook(null);c=a.setterHook;d=a.valueHook;e=c;f.useInstreamRewardAlertDisplayStateSetter=e;b=d;f.useInstreamRewardAlertDisplayStateValue=b}),null);
__d("validateTrackingCode",[],(function(a,b,c,d,e,f){"use strict";e.exports=a;function a(a){return a!=null&&typeof a==="object"&&a.click_tracking_linkshim_cb!=null&&a.encrypted_click_tracking!=null&&a.encrypted_tracking!=null?a:null}}),null);
__d("validateAggregatedStoryTrackingNodeIndex",[],(function(a,b,c,d,e,f){"use strict";e.exports=a;function a(a){return a!=null&&typeof a==="number"?a:0}}),null);
__d("validatePlayerSuborigin",[],(function(a,b,c,d,e,f){"use strict";e.exports=a;function a(a){return typeof a==="string"?a:null}}),null);
__d("CometTahoeSidepaneRenderer.react",["CometRelay","React","CometTahoeSidepaneRenderer_video.graphql"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h=b("React"),i=g!==void 0?g:g=b("CometTahoeSidepaneRenderer_video.graphql");function a(a){var c=a.replyCommentID;a=a.video;a=b("CometRelay").useFragment(i,a);a=a.tahoe_sidepane_renderer;return h.jsx(b("CometRelay").MatchContainer,{match:a,props:{replyCommentID:c}})}}),null);
__d("CometTahoeSidepaneRendererDeferred.react",["React","deferredLoadComponent","requireDeferredForDisplay"],(function(a,b,c,d,e,f){"use strict";b("React");a=b("deferredLoadComponent")(b("requireDeferredForDisplay")("CometTahoeSidepaneRenderer.react"));e.exports=a}),null);
__d("VideoSharingOptionClickedFalcoEvent",["FalcoLoggerInternal","getSamplingPolicyConfig_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getSamplingPolicyConfig_DO_NOT_USE")("falco","video_sharing_option_clicked");c=b("FalcoLoggerInternal").create(a);e.exports=c}),null);
__d("VideoSharingOptionImpressionFalcoEvent",["FalcoLoggerInternal","getSamplingPolicyConfig_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getSamplingPolicyConfig_DO_NOT_USE")("falco","video_sharing_option_impression");c=b("FalcoLoggerInternal").create(a);e.exports=c}),null);
__d("VideoHomeShareUtils",["VideoSharingOptionClickedFalcoEvent","VideoSharingOptionImpressionFalcoEvent"],(function(a,b,c,d,e,f){"use strict";a=function(a){var c=a.player_origin,d=a.reaction_video_channel_type,e=a.video_player_format,f=babelHelpers["extends"]({},a,{player_origin:c==null?void 0:c.toString(),reaction_video_channel_type:d==null?void 0:d.toString(),video_player_format:e==null?void 0:e.toString()});b("VideoSharingOptionImpressionFalcoEvent").log(function(){return f})};f.logExternalShareOptionImpression=a;c=function(a){var c=a.player_origin,d=a.reaction_video_channel_type,e=a.video_player_format,f=babelHelpers["extends"]({},a,{player_origin:c==null?void 0:c.toString(),reaction_video_channel_type:d==null?void 0:d.toString(),video_player_format:e==null?void 0:e.toString()});b("VideoSharingOptionClickedFalcoEvent").log(function(){return f})};f.logExternalShareOptionClick=c}),null);
__d("VideoSharingPermalinkLandingFalcoEvent",["FalcoLoggerInternal","getSamplingPolicyConfig_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getSamplingPolicyConfig_DO_NOT_USE")("falco","video_sharing_permalink_landing");c=b("FalcoLoggerInternal").create(a);e.exports=c}),null);
__d("CometVideoHomeShareUtils",["ConstUriUtils","VideoHomeShareUtils","VideoSharingPermalinkLandingFalcoEvent"],(function(a,b,c,d,e,f){"use strict";var g="extid";a=function(a){var c=b("ConstUriUtils").getUri(window.location.href),d=(c==null?void 0:c.getQueryParam(g))!=null;c!=null&&d&&h(babelHelpers["extends"]({},a,{url:c.toString()}))};var h=function(a){b("VideoSharingPermalinkLandingFalcoEvent").log(function(){return a})};e.exports={logExternalShareOptionClick:b("VideoHomeShareUtils").logExternalShareOptionClick,logExternalShareOptionImpression:b("VideoHomeShareUtils").logExternalShareOptionImpression,logPermalinkLandingFromSharing:h,logPermalinkLandingFromSharingIfQueryParamExists:a,sharingTrackingParam:g}}),null);