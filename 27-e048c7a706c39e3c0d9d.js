webpackJsonp([27],{1559:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}function p(n){return y.default.createElement(n.tag,(0,u.default)({},n.attributes,{dangerouslySetInnerHTML:{__html:n.html}}))}function e(n){return y.default.createElement(p,{tag:"section",html:n.html,attributes:{className:"zandoc-react-markdown"}})}function o(n){return y.default.createElement(p,{tag:"style",html:n.style})}function c(n,a){for(;n;)return n.offsetTop&&"static"!==getComputedStyle(n).position&&(a+=n.offsetTop),c(n.parentNode,a);return a}Object.defineProperty(a,"__esModule",{value:!0});var l=s(7),u=t(l),i=s(1),k=t(i),r=s(4),d=t(r),m=s(2),g=t(m),f=s(3),h=t(f),v=s(0),y=t(v),w=s(232),S=t(w),b=s(358),C=function(){var n=[{value:1,text:"red"},{value:2,text:"blue"},{value:3,text:"green"}],a=function(a){function s(){var n,a,t,p;(0,k.default)(this,s);for(var e=arguments.length,o=Array(e),c=0;c<e;c++)o[c]=arguments[c];return a=t=(0,g.default)(this,(n=s.__proto__||Object.getPrototypeOf(s)).call.apply(n,[this].concat(o))),t.handleSelect=function(n){b.Notify.success(n)},t.handleClick=function(){b.Notify.success("666")},p=a,(0,g.default)(t,p)}return(0,h.default)(s,a),(0,d.default)(s,[{key:"render",value:function(){return y.default.createElement("div",null,y.default.createElement(b.SplitButton,{type:"primary",dropdownData:n,onClick:this.handleClick,onSelect:this.handleSelect},"primary"),y.default.createElement(b.SplitButton,{disabled:!0,type:"primary",dropdownData:n,onClick:this.handleClick,onSelect:this.handleSelect},"primary"),y.default.createElement(b.SplitButton,{loading:!0,type:"primary",dropdownData:n,onClick:this.handleClick,onSelect:this.handleSelect},"primary"),y.default.createElement(b.SplitButton,{type:"danger",size:"large",dropdownData:n},"danger big"),y.default.createElement(b.SplitButton,{type:"success",size:"small",dropdownData:n},"success small"))}}]),s}(y.default.Component);return y.default.createElement(a,null)},_=function(){var n=[{id:1,value:"red"},{id:2,value:"green"},{id:3,value:"blue"}],a=function(a){function s(){var n,a,t,p;(0,k.default)(this,s);for(var e=arguments.length,o=Array(e),c=0;c<e;c++)o[c]=arguments[c];return a=t=(0,g.default)(this,(n=s.__proto__||Object.getPrototypeOf(s)).call.apply(n,[this].concat(o))),t.handleSelect=function(n){b.Notify.success(n)},t.handleClick=function(){b.Notify.success("666")},p=a,(0,g.default)(t,p)}return(0,h.default)(s,a),(0,d.default)(s,[{key:"render",value:function(){return y.default.createElement("div",null,y.default.createElement(b.SplitButton,{type:"primary",dropdownData:n,dropdownTrigger:"hover",dropdownValue:"id",dropdownText:"value",onClick:this.handleClick,onSelect:this.handleSelect},"primary"),y.default.createElement(b.SplitButton,{type:"danger",disabled:!0,dropdownData:n,dropdownTrigger:"hover",dropdownValue:"id",dropdownText:"value",onClick:this.handleClick,onSelect:this.handleSelect},"danger"))}}]),s}(y.default.Component);return y.default.createElement(a,null)},E=function(){var n=[{id:1,value:"red"},{id:2,value:"green"},{id:3,value:"blue"}],a=function(a){function s(){var n,a,t,p;(0,k.default)(this,s);for(var e=arguments.length,o=Array(e),c=0;c<e;c++)o[c]=arguments[c];return a=t=(0,g.default)(this,(n=s.__proto__||Object.getPrototypeOf(s)).call.apply(n,[this].concat(o))),t.handleSelect=function(n){b.Notify.success(n)},t.handleClick=function(){b.Notify.success("666")},p=a,(0,g.default)(t,p)}return(0,h.default)(s,a),(0,d.default)(s,[{key:"render",value:function(){return y.default.createElement("div",null,y.default.createElement(b.SplitButton,{type:"primary",dropdownData:n,dropdownTrigger:"hover",dropdownValue:"id",dropdownText:"value",dropdownPosition:"top-left",onClick:this.handleClick,onSelect:this.handleSelect},"primary"),y.default.createElement(b.SplitButton,{type:"danger",dropdownData:n,dropdownValue:"id",dropdownText:"value",dropdownPosition:"bottom-right",onClick:this.handleClick,onSelect:this.handleSelect},"danger"))}}]),s}(y.default.Component);return y.default.createElement(a,null)},j=function(n){function a(){var n,s,t,p;(0,k.default)(this,a);for(var e=arguments.length,o=Array(e),c=0;c<e;c++)o[c]=arguments[c];return s=t=(0,g.default)(this,(n=a.__proto__||Object.getPrototypeOf(a)).call.apply(n,[this].concat(o))),t.state={showCode:!1},t.toggle=function(){t.setState({showCode:!t.state.showCode})},p=s,(0,g.default)(t,p)}return(0,h.default)(a,n),(0,d.default)(a,[{key:"render",value:function(){var n=this.state.showCode,a=this.props,s=a.title,t=a.src,e=a.children;return y.default.createElement("div",{className:"zandoc-react-demo"},y.default.createElement("div",{className:"zandoc-react-demo__preview"},e),y.default.createElement("div",{className:"zandoc-react-demo__bottom",onClick:this.toggle},y.default.createElement("div",{className:"zandoc-react-demo__title"},y.default.createElement("p",null,s||"")),y.default.createElement("i",{className:"zenticon zenticon-caret-up zandoc-react-demo__toggle "+(n?"zandoc-react-demo__toggle-on":"zandoc-react-demo__toggle-off")})),n&&y.default.createElement("pre",{className:"zandoc-react-demo__code"},y.default.createElement(p,{tag:"code",html:t,attributes:{className:"language-jsx"}})))}}]),a}(v.Component),B=function(n){function a(){return(0,k.default)(this,a),(0,g.default)(this,(a.__proto__||Object.getPrototypeOf(a)).apply(this,arguments))}return(0,h.default)(a,n),(0,d.default)(a,[{key:"componentDidMount",value:function(){var n=location.hash;if(n){var a=document.querySelector('a[href="'+n+'"]');a&&(0,S.default)(document.documentElement,0,c(a,-9))}}},{key:"render",value:function(){return y.default.createElement("div",{className:"zandoc-react-container",key:null},y.default.createElement(o,{style:""}),y.default.createElement(e,{html:'<h2 class="anchor-heading"><a href="#splitbutton-xia-la-an-niu">¶</a><a href="javascript:void(0)" id="splitbutton-xia-la-an-niu" class="anchor-point"></a>SplitButton 下拉按钮</h2>\n<p>SplitButton 带有下拉菜单功能的按钮</p>\n<h3 class="anchor-heading"><a href="#dai-ma-yan-shi">¶</a><a href="javascript:void(0)" id="dai-ma-yan-shi" class="anchor-point"></a>代码演示</h3>'}),y.default.createElement(j,{title:"基础用法",id:"Demobasic",src:'<span class="token keyword">const</span> list <span class="token operator">=</span> <span class="token punctuation">[</span>\n  <span class="token punctuation">{</span>\n    value<span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span>\n    text<span class="token punctuation">:</span> <span class="token string">\'red\'</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>\n    value<span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">,</span>\n    text<span class="token punctuation">:</span> <span class="token string">\'blue\'</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>\n    value<span class="token punctuation">:</span> <span class="token number">3</span><span class="token punctuation">,</span>\n    text<span class="token punctuation">:</span> <span class="token string">\'green\'</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">]</span>\n\n<span class="token keyword">import</span> <span class="token punctuation">{</span> SplitButton<span class="token punctuation">,</span> Notify <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Simple</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function-variable function">handleSelect</span> <span class="token operator">=</span> <span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    Notify<span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function-variable function">handleClick</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    Notify<span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token string">\'666\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SplitButton</span>\n          <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span>\n          <span class="token attr-name">dropdownData</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>list<span class="token punctuation">}</span></span>\n          <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleClick<span class="token punctuation">}</span></span>\n          <span class="token attr-name">onSelect</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleSelect<span class="token punctuation">}</span></span>\n        <span class="token punctuation">></span></span>\n          primary\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>SplitButton</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SplitButton</span>\n          <span class="token attr-name">disabled</span>\n          <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span>\n          <span class="token attr-name">dropdownData</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>list<span class="token punctuation">}</span></span>\n          <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleClick<span class="token punctuation">}</span></span>\n          <span class="token attr-name">onSelect</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleSelect<span class="token punctuation">}</span></span>\n        <span class="token punctuation">></span></span>\n          primary\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>SplitButton</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SplitButton</span>\n          <span class="token attr-name">loading</span>\n          <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span>\n          <span class="token attr-name">dropdownData</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>list<span class="token punctuation">}</span></span>\n          <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleClick<span class="token punctuation">}</span></span>\n          <span class="token attr-name">onSelect</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleSelect<span class="token punctuation">}</span></span>\n        <span class="token punctuation">></span></span>\n          primary\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>SplitButton</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SplitButton</span>\n          <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>danger<span class="token punctuation">"</span></span>\n          <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>large<span class="token punctuation">"</span></span>\n          <span class="token attr-name">dropdownData</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>list<span class="token punctuation">}</span></span>\n        <span class="token punctuation">></span></span>\n          danger big\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>SplitButton</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SplitButton</span>\n          <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>success<span class="token punctuation">"</span></span>\n          <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>small<span class="token punctuation">"</span></span>\n          <span class="token attr-name">dropdownData</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>list<span class="token punctuation">}</span></span>\n        <span class="token punctuation">></span></span>\n          success small\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>SplitButton</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Simple</span> <span class="token punctuation">/></span></span>\n  <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},y.default.createElement(C)),y.default.createElement(j,{title:"dropdown设置",id:"Demodropdown",src:'<span class="token keyword">const</span> list <span class="token operator">=</span> <span class="token punctuation">[</span>\n  <span class="token punctuation">{</span>\n    id<span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span>\n    value<span class="token punctuation">:</span> <span class="token string">\'red\'</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>\n    id<span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">,</span>\n    value<span class="token punctuation">:</span> <span class="token string">\'green\'</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>\n    id<span class="token punctuation">:</span> <span class="token number">3</span><span class="token punctuation">,</span>\n    value<span class="token punctuation">:</span> <span class="token string">\'blue\'</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">]</span>\n\n<span class="token keyword">import</span> <span class="token punctuation">{</span> SplitButton<span class="token punctuation">,</span> Notify <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Simple</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function-variable function">handleSelect</span> <span class="token operator">=</span> <span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    Notify<span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function-variable function">handleClick</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    Notify<span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token string">\'666\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SplitButton</span>\n          <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span>\n          <span class="token attr-name">dropdownData</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>list<span class="token punctuation">}</span></span>\n          <span class="token attr-name">dropdownTrigger</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>hover<span class="token punctuation">"</span></span>\n          <span class="token attr-name">dropdownValue</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>id<span class="token punctuation">"</span></span>\n          <span class="token attr-name">dropdownText</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>value<span class="token punctuation">"</span></span>\n          <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleClick<span class="token punctuation">}</span></span>\n          <span class="token attr-name">onSelect</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleSelect<span class="token punctuation">}</span></span>\n        <span class="token punctuation">></span></span>\n          primary\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>SplitButton</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SplitButton</span>\n          <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>danger<span class="token punctuation">"</span></span>\n          <span class="token attr-name">disabled</span>\n          <span class="token attr-name">dropdownData</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>list<span class="token punctuation">}</span></span>\n          <span class="token attr-name">dropdownTrigger</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>hover<span class="token punctuation">"</span></span>\n          <span class="token attr-name">dropdownValue</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>id<span class="token punctuation">"</span></span>\n          <span class="token attr-name">dropdownText</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>value<span class="token punctuation">"</span></span>\n          <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleClick<span class="token punctuation">}</span></span>\n          <span class="token attr-name">onSelect</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleSelect<span class="token punctuation">}</span></span>\n        <span class="token punctuation">></span></span>\n          danger\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>SplitButton</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Simple</span> <span class="token punctuation">/></span></span>\n  <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},y.default.createElement(_)),y.default.createElement(j,{title:"dropdown位置设置",id:"Demodropdownposition",src:'<span class="token keyword">const</span> list <span class="token operator">=</span> <span class="token punctuation">[</span>\n  <span class="token punctuation">{</span>\n    id<span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span>\n    value<span class="token punctuation">:</span> <span class="token string">\'red\'</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>\n    id<span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">,</span>\n    value<span class="token punctuation">:</span> <span class="token string">\'green\'</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>\n    id<span class="token punctuation">:</span> <span class="token number">3</span><span class="token punctuation">,</span>\n    value<span class="token punctuation">:</span> <span class="token string">\'blue\'</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">]</span>\n\n<span class="token keyword">import</span> <span class="token punctuation">{</span> SplitButton<span class="token punctuation">,</span> Notify <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Simple</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function-variable function">handleSelect</span> <span class="token operator">=</span> <span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    Notify<span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function-variable function">handleClick</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    Notify<span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token string">\'666\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SplitButton</span>\n          <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span>\n          <span class="token attr-name">dropdownData</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>list<span class="token punctuation">}</span></span>\n          <span class="token attr-name">dropdownTrigger</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>hover<span class="token punctuation">"</span></span>\n          <span class="token attr-name">dropdownValue</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>id<span class="token punctuation">"</span></span>\n          <span class="token attr-name">dropdownText</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>value<span class="token punctuation">"</span></span>\n          <span class="token attr-name">dropdownPosition</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>top-left<span class="token punctuation">"</span></span>\n          <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleClick<span class="token punctuation">}</span></span>\n          <span class="token attr-name">onSelect</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleSelect<span class="token punctuation">}</span></span>\n        <span class="token punctuation">></span></span>\n          primary\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>SplitButton</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SplitButton</span>\n          <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>danger<span class="token punctuation">"</span></span>\n          <span class="token attr-name">dropdownData</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>list<span class="token punctuation">}</span></span>\n          <span class="token attr-name">dropdownValue</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>id<span class="token punctuation">"</span></span>\n          <span class="token attr-name">dropdownText</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>value<span class="token punctuation">"</span></span>\n          <span class="token attr-name">dropdownPosition</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>bottom-right<span class="token punctuation">"</span></span>\n          <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleClick<span class="token punctuation">}</span></span>\n          <span class="token attr-name">onSelect</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleSelect<span class="token punctuation">}</span></span>\n        <span class="token punctuation">></span></span>\n          danger\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>SplitButton</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Simple</span> <span class="token punctuation">/></span></span>\n  <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},y.default.createElement(E)),y.default.createElement(e,{html:"<h3 class=\"anchor-heading\"><a href=\"#api\">¶</a><a href=\"javascript:void(0)\" id=\"api\" class=\"anchor-point\"></a>API</h3>\n<table class=\"table\">\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n<th>备选值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>type</td>\n<td>按钮风格</td>\n<td>string</td>\n<td><code>'default'</code></td>\n<td><code>'primary'</code>\n、\n<code>'danger'</code>\n、\n<code>'success'</code></td>\n</tr>\n<tr>\n<td>disabled</td>\n<td>按钮是否禁用</td>\n<td>bool</td>\n<td><code>false</code></td>\n<td><code>true</code>\n、\n<code>false</code></td>\n</tr>\n<tr>\n<td>loading</td>\n<td>是否显示loading图标</td>\n<td>bool</td>\n<td><code>false</code></td>\n<td><code>true</code>\n, \n<code>false</code></td>\n</tr>\n<tr>\n<td>size</td>\n<td>按钮尺寸</td>\n<td>string</td>\n<td><code>'medium'</code></td>\n<td><code>'large'</code>\n、\n<code>'medium'</code>\n、\n<code>'small'</code></td>\n</tr>\n<tr>\n<td>dropdownTrigger</td>\n<td>下拉菜单触发方式</td>\n<td>string</td>\n<td><code>'click'</code></td>\n<td><code>'click'</code>\n、\n<code>'hover'</code></td>\n</tr>\n<tr>\n<td>dropdownData</td>\n<td>下拉菜单数据</td>\n<td>array</td>\n<td>[]</td>\n<td></td>\n</tr>\n<tr>\n<td>dropdownValue</td>\n<td>自定义选项的值对应的key, 如{ id: 1, name: '文案' }, dropdownValue=\"id\"</td>\n<td>string</td>\n<td><code>'value'</code></td>\n<td></td>\n</tr>\n<tr>\n<td>dropdownText</td>\n<td>自定义选项显示文案对应的key, 如{ id: 1, name: '文案' }, dropdownText=\"name\"</td>\n<td>string</td>\n<td><code>'text'</code></td>\n<td></td>\n</tr>\n<tr>\n<td>dropdownPosition</td>\n<td>下拉菜单位置</td>\n<td>string</td>\n<td><code>'auto-bottom-left'</code></td>\n<td>同Pop中的position</td>\n</tr>\n<tr>\n<td>onClick</td>\n<td>左侧按钮点击时的回调函数</td>\n<td>func</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>onSelect</td>\n<td>右侧下拉菜单选择时的回调函数</td>\n<td>func</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>className</td>\n<td>自定义额外类名</td>\n<td>string</td>\n<td><code>''</code></td>\n<td></td>\n</tr>\n<tr>\n<td>prefix</td>\n<td>自定义前缀</td>\n<td>string</td>\n<td><code>'zent'</code></td>\n<td></td>\n</tr>\n</tbody>\n</table>\n<h3 class=\"anchor-heading\"><a href=\"#onselect\">¶</a><a href=\"javascript:void(0)\" id=\"onselect\" class=\"anchor-point\"></a>onSelect</h3>\n<p>回调函数内参数为dropdownValue</p>"}))}}]),a}(v.Component);a.default=B}});