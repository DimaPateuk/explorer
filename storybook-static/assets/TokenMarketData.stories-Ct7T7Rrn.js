import{e as c,w as j}from"./index-B7hcRlps.js";import{a as u}from"./index-DX4OZ1-D.js";import{r as y,R as l}from"./index-OXkWkTkr.js";import{a as _}from"./index-KBMYkkwx.js";import{j as a}from"./jsx-runtime-CcwWnNjF.js";import{c as E}from"./utils-jAU0Cazi.js";import{c as N}from"./index-DZZQifJx.js";import"./iframe-BSe92rBq.js";import"./index-BAMY2Nnw.js";import"./sha256-DLE-WUMe.js";import"./index-AMtxXvLu.js";import"./index-oXqYZ8t2.js";import"./jsx-runtime-BmFMsc7C.js";function f(){return f=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},f.apply(this,arguments)}function U(e,n){if(e==null)return{};var r=S(e,n),t,s;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(s=0;s<i.length;s++)t=i[s],!(n.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}function S(e,n){if(e==null)return{};var r={},t=Object.keys(e),s,i;for(i=0;i<t.length;i++)s=t[i],!(n.indexOf(s)>=0)&&(r[s]=e[s]);return r}var v=y.forwardRef(function(e,n){var r=e.color,t=r===void 0?"currentColor":r,s=e.size,i=s===void 0?24:s,D=U(e,["color","size"]);return l.createElement("svg",f({ref:n,xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},D),l.createElement("circle",{cx:"12",cy:"12",r:"10"}),l.createElement("path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}),l.createElement("line",{x1:"12",y1:"17",x2:"12.01",y2:"17"}))});v.propTypes={color:u.string,size:u.oneOfType([u.string,u.number])};v.displayName="HelpCircle";const L=()=>({last_updated:new Date,market_cap:60882034328,market_cap_rank:7,price:.999908,price_change_percentage_24h:51e-5,volume_24:3613399003}),I=()=>({address:"EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",chainId:101,decimals:6,extensions:{coingeckoId:"usd-coin",serumV3Usdt:"77quYg4MGneUdjgXCunt9GgM1usmrxKY31twEy3WHwcS",website:"https://www.centre.io/"},logoURI:"https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v/logo.png",name:"USD Coin",symbol:"USDC",tags:["community","strict","verified","jupiter"],verified:!0});var o;(function(e){e[e.Success=0]="Success",e[e.FetchFailed=1]="FetchFailed",e[e.Loading=2]="Loading"})(o||(o={}));function T({className:e,message:n}){return a.jsx("div",{className:E("e-card",e),children:a.jsxs("div",{className:"e-card-body e-p-1 e-text-center",children:[a.jsx("span",{className:"e-spinner-grow e-spinner-grow-sm e-me-2 e-align-text-top"}),n||"Loading"]})})}T.__docgenInfo={description:"",methods:[],displayName:"LoadingCard",props:{message:{required:!1,tsType:{name:"string"},description:""}}};function p(e,n=!0){const r=new Date(e);return new Intl.DateTimeFormat("en-US",{hour:"numeric",hourCycle:"h23",minute:"numeric",second:"numeric",timeZoneName:n?"short":"long"}).format(r)}const F=N("e-text-[10px] e-ml-[3px] e-flex e-items-center e-gap-[0.1rem] e-relative e-top-[-1px]",{defaultVariants:{trend:"neutral"},variants:{trend:{down:"e-text-[#F958FC]",neutral:"e-text-gray-400",up:"e-text-green-500"}}});function g({label:e,lastUpdatedAt:n,value:r,rank:t}){const s="trend"in r?P(r.trend):void 0;return a.jsxs("div",{"aria-label":"market-data",className:"e-w-[160px] e-rounded e-border e-border-solid e-border-black e-bg-[#1C2120] e-px-3 e-py-2 e-text-sm",children:[a.jsxs("div",{className:"e-mb-1 e-flex e-items-center e-gap-2",children:[a.jsx("span",{title:n?`Updated at ${p(n.getTime())}`:e,className:"e-overflow-hidden e-text-ellipsis e-whitespace-nowrap",children:e}),(t??0)>0&&a.jsxs("span",{className:"e-whitespace-nowrap e-rounded e-bg-[#1ED190] e-px-[5px] e-text-xs e-text-[#1C2120]",children:["Rank #",t]}),n&&a.jsx("span",{title:`Updated at ${p(n.getTime())}`,className:"e-inline-flex",children:a.jsx(v,{size:12,className:"e-text-gray-400"})})]}),a.jsx("div",{title:n?`Updated at ${p(n.getTime())}`:void 0,className:"e-flex e-items-baseline e-overflow-hidden e-text-base e-font-medium",children:"volume"in r?a.jsxs("span",{title:`${Intl.NumberFormat("en-US",{currency:"USD",style:"currency"}).format(r.volume)}`,className:"e-cursor-help",children:["$",_(r.volume)]}):a.jsxs(a.Fragment,{children:[a.jsxs("span",{title:`$${r.price}`,className:"e-cursor-help",children:["$",r.price.toFixed(r.precision)]}),a.jsx("span",{className:F({trend:s}),children:s==="up"?a.jsxs(a.Fragment,{children:[a.jsx("span",{className:"e-text-[8px]",children:"↑"})," ",r.trend.toFixed(2),"%"]}):s==="down"?a.jsxs(a.Fragment,{children:[a.jsx("span",{className:"e-text-[8px]",children:"↓"})," ",r.trend.toFixed(2),"%"]}):"0%"})]})})]})}function P(e){return e>0?"up":e<0?"down":"neutral"}g.Series=function({data:n}){return a.jsx("div",{className:"e-flex e-flex-col e-gap-1 xs:e-flex-row sm:e-gap-2",children:n.map((r,t)=>a.jsx(g,{...r},`market-data-${t}`))})};g.__docgenInfo={description:"",methods:[{name:"Series",docblock:null,modifiers:["static"],params:[{name:"{ data }: { data: MarketDataProps[] }",optional:!1,type:{name:"signature",type:"object",raw:"{ data: MarketDataProps[] }",signature:{properties:[{key:"data",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
    label: string;
    lastUpdatedAt?: Date;
    rank?: number;
    value: { price: number; trend: number; precision: number } | { volume: number };
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"lastUpdatedAt",value:{name:"Date",required:!1}},{key:"rank",value:{name:"number",required:!1}},{key:"value",value:{name:"union",raw:"{ price: number; trend: number; precision: number } | { volume: number }",elements:[{name:"signature",type:"object",raw:"{ price: number; trend: number; precision: number }",signature:{properties:[{key:"price",value:{name:"number",required:!0}},{key:"trend",value:{name:"number",required:!0}},{key:"precision",value:{name:"number",required:!0}}]}},{name:"signature",type:"object",raw:"{ volume: number }",signature:{properties:[{key:"volume",value:{name:"number",required:!0}}]}}],required:!0}}]}}],raw:"MarketDataProps[]",required:!0}}]}}}],returns:null}],displayName:"MarketData",props:{label:{required:!0,tsType:{name:"string"},description:""},lastUpdatedAt:{required:!1,tsType:{name:"Date"},description:""},rank:{required:!1,tsType:{name:"number"},description:""},value:{required:!0,tsType:{name:"union",raw:"{ price: number; trend: number; precision: number } | { volume: number }",elements:[{name:"signature",type:"object",raw:"{ price: number; trend: number; precision: number }",signature:{properties:[{key:"price",value:{name:"number",required:!0}},{key:"trend",value:{name:"number",required:!0}},{key:"precision",value:{name:"number",required:!0}}]}},{name:"signature",type:"object",raw:"{ volume: number }",signature:{properties:[{key:"volume",value:{name:"number",required:!0}}]}}]},description:""}}};function C({coinInfo:e,tokenInfo:n}){var i;const r=y.useRef(void 0),t=y.useRef(2);(e==null?void 0:e.status)===o.Success&&(r.current=e.coinInfo,r.current&&r.current.price<1&&(t.current=6));const s=!!((i=n==null?void 0:n.extensions)!=null&&i.coingeckoId)&&(e==null?void 0:e.status)===o.Loading;return a.jsxs(a.Fragment,{children:[s&&a.jsx(T,{className:"e-mb-0 e-px-3 e-py-4",message:"Loading token price data"}),!s&&r.current&&a.jsx(g.Series,{data:[{label:"Price",rank:r.current.market_cap_rank,value:{precision:t.current,price:r.current.price,trend:r.current.price_change_percentage_24h}},{label:"24 Hour Volume",value:{volume:r.current.volume_24}},{label:"Market Cap",lastUpdatedAt:r.current.last_updated,value:{volume:r.current.market_cap}}]})]})}C.__docgenInfo={description:"",methods:[],displayName:"TokenMarketData",props:{coinInfo:{required:!1,tsType:{name:"signature",type:"object",raw:`{
    coinInfo?: CoinInfo;
    status: CoingeckoStatus;
}`,signature:{properties:[{key:"coinInfo",value:{name:"CoinInfo",required:!1}},{key:"status",value:{name:"CoingeckoStatus",required:!0}}]}},description:""},tokenInfo:{required:!1,tsType:{name:"union",raw:"FullTokenInfo | FullLegacyTokenInfo",elements:[{name:"intersection",raw:`FullLegacyTokenInfo & {
    readonly verified: boolean;
}`,elements:[{name:"signature",type:"object",raw:`{
    readonly chainId: number;
    readonly address: string;
    readonly name: string;
    readonly decimals: number;
    readonly symbol: string;
    readonly logoURI?: string;
    readonly tags?: string[];
    readonly extensions?: TokenExtensions;
}`,signature:{properties:[{key:"chainId",value:{name:"number",required:!0}},{key:"address",value:{name:"string",required:!0}},{key:"name",value:{name:"string",required:!0}},{key:"decimals",value:{name:"number",required:!0}},{key:"symbol",value:{name:"string",required:!0}},{key:"logoURI",value:{name:"string",required:!1}},{key:"tags",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"extensions",value:{name:"signature",type:"object",raw:`{
    readonly website?: string;
    readonly bridgeContract?: string;
    readonly assetContract?: string;
    readonly address?: string;
    readonly explorer?: string;
    readonly twitter?: string;
    readonly github?: string;
    readonly medium?: string;
    readonly tgann?: string;
    readonly tggroup?: string;
    readonly discord?: string;
    readonly serumV3Usdt?: string;
    readonly serumV3Usdc?: string;
    readonly coingeckoId?: string;
    readonly imageUrl?: string;
    readonly description?: string;
}`,signature:{properties:[{key:"website",value:{name:"string",required:!1}},{key:"bridgeContract",value:{name:"string",required:!1}},{key:"assetContract",value:{name:"string",required:!1}},{key:"address",value:{name:"string",required:!1}},{key:"explorer",value:{name:"string",required:!1}},{key:"twitter",value:{name:"string",required:!1}},{key:"github",value:{name:"string",required:!1}},{key:"medium",value:{name:"string",required:!1}},{key:"tgann",value:{name:"string",required:!1}},{key:"tggroup",value:{name:"string",required:!1}},{key:"discord",value:{name:"string",required:!1}},{key:"serumV3Usdt",value:{name:"string",required:!1}},{key:"serumV3Usdc",value:{name:"string",required:!1}},{key:"coingeckoId",value:{name:"string",required:!1}},{key:"imageUrl",value:{name:"string",required:!1}},{key:"description",value:{name:"string",required:!1}}]},required:!1}}]}},{name:"signature",type:"object",raw:`{
    readonly verified: boolean;
}`,signature:{properties:[{key:"verified",value:{name:"boolean",required:!0}}]}}]},{name:"signature",type:"object",raw:`{
    readonly chainId: number;
    readonly address: string;
    readonly name: string;
    readonly decimals: number;
    readonly symbol: string;
    readonly logoURI?: string;
    readonly tags?: string[];
    readonly extensions?: TokenExtensions;
}`,signature:{properties:[{key:"chainId",value:{name:"number",required:!0}},{key:"address",value:{name:"string",required:!0}},{key:"name",value:{name:"string",required:!0}},{key:"decimals",value:{name:"number",required:!0}},{key:"symbol",value:{name:"string",required:!0}},{key:"logoURI",value:{name:"string",required:!1}},{key:"tags",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"extensions",value:{name:"signature",type:"object",raw:`{
    readonly website?: string;
    readonly bridgeContract?: string;
    readonly assetContract?: string;
    readonly address?: string;
    readonly explorer?: string;
    readonly twitter?: string;
    readonly github?: string;
    readonly medium?: string;
    readonly tgann?: string;
    readonly tggroup?: string;
    readonly discord?: string;
    readonly serumV3Usdt?: string;
    readonly serumV3Usdc?: string;
    readonly coingeckoId?: string;
    readonly imageUrl?: string;
    readonly description?: string;
}`,signature:{properties:[{key:"website",value:{name:"string",required:!1}},{key:"bridgeContract",value:{name:"string",required:!1}},{key:"assetContract",value:{name:"string",required:!1}},{key:"address",value:{name:"string",required:!1}},{key:"explorer",value:{name:"string",required:!1}},{key:"twitter",value:{name:"string",required:!1}},{key:"github",value:{name:"string",required:!1}},{key:"medium",value:{name:"string",required:!1}},{key:"tgann",value:{name:"string",required:!1}},{key:"tggroup",value:{name:"string",required:!1}},{key:"discord",value:{name:"string",required:!1}},{key:"serumV3Usdt",value:{name:"string",required:!1}},{key:"serumV3Usdc",value:{name:"string",required:!1}},{key:"coingeckoId",value:{name:"string",required:!1}},{key:"imageUrl",value:{name:"string",required:!1}},{key:"description",value:{name:"string",required:!1}}]},required:!1}}]}}]},description:""}}};const K={component:C,tags:["autodocs"],title:"Components/Common/TokenMarketData"},d={args:{coinInfo:{coinInfo:L(),status:o.Success},tokenInfo:I()},async play({canvasElement:e}){c.assertions(1);const r=j(e).queryAllByLabelText("market-data");c(r).toHaveLength(3)}},m={args:{coinInfo:{coinInfo:void 0,status:o.Loading},tokenInfo:I()},async play({canvasElement:e}){c.assertions(1);const r=j(e).getByText("Loading token price data");c(r).toBeInTheDocument()}};var k,b,x;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    coinInfo: {
      coinInfo: mockCoingecko.coinInfo(),
      status: CoingeckoStatus.Success
    },
    tokenInfo: mockCoingecko.tokenInfo()
  },
  async play({
    canvasElement
  }) {
    expect.assertions(1);
    const canvas = within(canvasElement);
    const tileEl = canvas.queryAllByLabelText('market-data');
    expect(tileEl).toHaveLength(3);
  }
}`,...(x=(b=d.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var q,h,w;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    coinInfo: {
      coinInfo: undefined,
      status: CoingeckoStatus.Loading
    },
    tokenInfo: mockCoingecko.tokenInfo()
  },
  async play({
    canvasElement
  }) {
    expect.assertions(1);
    const canvas = within(canvasElement);
    const loadingEl = canvas.getByText('Loading token price data');
    expect(loadingEl).toBeInTheDocument();
  }
}`,...(w=(h=m.parameters)==null?void 0:h.docs)==null?void 0:w.source}}};const X=["Primary","Loading"];export{m as Loading,d as Primary,X as __namedExportsOrder,K as default};
