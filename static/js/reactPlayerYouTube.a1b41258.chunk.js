(self.webpackChunkDosyDos=self.webpackChunkDosyDos||[]).push([[439],{8322:(e,t,a)=>{var s,o=Object.create,l=Object.defineProperty,r=Object.getOwnPropertyDescriptor,n=Object.getOwnPropertyNames,i=Object.getPrototypeOf,y=Object.prototype.hasOwnProperty,p=(e,t,a,s)=>{if(t&&"object"===typeof t||"function"===typeof t)for(let o of n(t))y.call(e,o)||o===a||l(e,o,{get:()=>t[o],enumerable:!(s=r(t,o))||s.enumerable});return e},c=(e,t,a)=>(((e,t,a)=>{t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a})(e,"symbol"!==typeof t?t+"":t,a),a),u={};((e,t)=>{for(var a in t)l(e,a,{get:t[a],enumerable:!0})})(u,{default:()=>b}),e.exports=(s=u,p(l({},"__esModule",{value:!0}),s));var h=((e,t,a)=>(a=null!=e?o(i(e)):{},p(!t&&e&&e.__esModule?a:l(a,"default",{value:e,enumerable:!0}),e)))(a(2791)),d=a(135),P=a(365);const g=/[?&](?:list|channel)=([a-zA-Z0-9_-]+)/,m=/user\/([a-zA-Z0-9_-]+)\/?/,f=/youtube-nocookie\.com/;class b extends h.Component{constructor(){super(...arguments),c(this,"callPlayer",d.callPlayer),c(this,"parsePlaylist",(e=>{if(e instanceof Array)return{listType:"playlist",playlist:e.map(this.getID).join(",")};if(g.test(e)){const[,t]=e.match(g);return{listType:"playlist",list:t.replace(/^UC/,"UU")}}if(m.test(e)){const[,t]=e.match(m);return{listType:"user_uploads",list:t}}return{}})),c(this,"onStateChange",(e=>{const{data:t}=e,{onPlay:a,onPause:s,onBuffer:o,onBufferEnd:l,onEnded:r,onReady:n,loop:i,config:{playerVars:y,onUnstarted:p}}=this.props,{UNSTARTED:c,PLAYING:u,PAUSED:h,BUFFERING:d,ENDED:P,CUED:g}=window.YT.PlayerState;if(t===c&&p(),t===u&&(a(),l()),t===h&&s(),t===d&&o(),t===P){const e=!!this.callPlayer("getPlaylist");i&&!e&&(y.start?this.seekTo(y.start):this.play()),r()}t===g&&n()})),c(this,"mute",(()=>{this.callPlayer("mute")})),c(this,"unmute",(()=>{this.callPlayer("unMute")})),c(this,"ref",(e=>{this.container=e}))}componentDidMount(){this.props.onMount&&this.props.onMount(this)}getID(e){return!e||e instanceof Array||g.test(e)?null:e.match(P.MATCH_URL_YOUTUBE)[1]}load(e,t){const{playing:a,muted:s,playsinline:o,controls:l,loop:r,config:n,onError:i}=this.props,{playerVars:y,embedOptions:p}=n,c=this.getID(e);if(t)return g.test(e)||m.test(e)||e instanceof Array?void this.player.loadPlaylist(this.parsePlaylist(e)):void this.player.cueVideoById({videoId:c,startSeconds:(0,d.parseStartTime)(e)||y.start,endSeconds:(0,d.parseEndTime)(e)||y.end});(0,d.getSDK)("https://www.youtube.com/iframe_api","YT","onYouTubeIframeAPIReady",(e=>e.loaded)).then((t=>{this.container&&(this.player=new t.Player(this.container,{width:"100%",height:"100%",videoId:c,playerVars:{autoplay:a?1:0,mute:s?1:0,controls:l?1:0,start:(0,d.parseStartTime)(e),end:(0,d.parseEndTime)(e),origin:window.location.origin,playsinline:o?1:0,...this.parsePlaylist(e),...y},events:{onReady:()=>{r&&this.player.setLoop(!0),this.props.onReady()},onPlaybackRateChange:e=>this.props.onPlaybackRateChange(e.data),onPlaybackQualityChange:e=>this.props.onPlaybackQualityChange(e),onStateChange:this.onStateChange,onError:e=>i(e.data)},host:f.test(e)?"https://www.youtube-nocookie.com":void 0,...p}))}),i),p.events&&console.warn("Using `embedOptions.events` will likely break things. Use ReactPlayer\u2019s callback props instead, eg onReady, onPlay, onPause")}play(){this.callPlayer("playVideo")}pause(){this.callPlayer("pauseVideo")}stop(){document.body.contains(this.callPlayer("getIframe"))&&this.callPlayer("stopVideo")}seekTo(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];this.callPlayer("seekTo",e),t||this.props.playing||this.pause()}setVolume(e){this.callPlayer("setVolume",100*e)}setPlaybackRate(e){this.callPlayer("setPlaybackRate",e)}setLoop(e){this.callPlayer("setLoop",e)}getDuration(){return this.callPlayer("getDuration")}getCurrentTime(){return this.callPlayer("getCurrentTime")}getSecondsLoaded(){return this.callPlayer("getVideoLoadedFraction")*this.getDuration()}render(){const{display:e}=this.props,t={width:"100%",height:"100%",display:e};return h.default.createElement("div",{style:t},h.default.createElement("div",{ref:this.ref}))}}c(b,"displayName","YouTube"),c(b,"canPlay",P.canPlay.youtube)}}]);
//# sourceMappingURL=reactPlayerYouTube.a1b41258.chunk.js.map