import{j as r}from"./jsx-runtime-CcwWnNjF.js";import{I as b}from"./IdlTypes-uqZOPDyB.js";import"./jsx-runtime-BmFMsc7C.js";import"./index-AMtxXvLu.js";import"./IdlDoc--6UL0EhZ.js";import"./tooltip-DwQQOJxn.js";import"./index-OXkWkTkr.js";import"./index-YXZ437_b.js";import"./index-DyBjyqqP.js";import"./utils-jAU0Cazi.js";import"./IdlFields-DLaSUfZJ.js";const U={component:b,decorators:[I=>r.jsx("div",{children:r.jsx(I,{})})],parameters:{nextjs:{appDirectory:!0}},tags:["autodocs"],title:"Components/Account/idl/components/IdlTypes"},e={args:{data:[{docs:["Complete market state"],fieldType:{fields:[{name:"id",type:"u64"},{name:"owner",type:"publicKey"},{docs:["Market configuration"],name:"config",type:"MarketConfig"},{docs:["Current market status"],name:"status",type:"MarketStatus"},{docs:["Supported tokens"],name:"tokens",type:"vec<TokenInfo>"},{docs:["Market statistics"],name:"stats",type:"MarketStats"}],kind:"struct"},name:"MarketState"},{docs:["Trading position"],fieldType:{fields:[{name:"id",type:"u64"},{name:"owner",type:"publicKey"},{docs:["Long or Short"],name:"side",type:"PositionSide"},{docs:["Leverage multiplier"],name:"leverage",type:"u8"},{name:"collateral",type:"TokenAmount"},{name:"entryPrice",type:"u64"},{name:"liquidationPrice",type:"u64"}],kind:"struct"},name:"Position"}]}},n={args:{data:[{docs:["Type of order in the system"],fieldType:{kind:"enum",variants:["Buy","Sell","Swap"]},name:"OrderType"},{docs:["Result of an action with data"],fieldType:{kind:"enum",variants:['Success {"txId":"string","timestamp":"i64"}','Failure {"errorCode":"u16","message":"string"}','Pending {"id":"u64"}']},name:"ActionResult"}]}},a={args:{data:[{docs:["Alias for balance amount"],fieldType:{kind:"type",name:"Balance",type:"u64"},name:"Balance"},{docs:["Token identifier"],fieldType:{kind:"type",name:"TokenId",type:"array(u8, 32)"},name:"TokenId"},{docs:["Collection of price points"],fieldType:{kind:"type",name:"Prices",type:"vec<u64>"},name:"Prices"}]}},t={args:{data:[{docs:["Token information"],fieldType:{fields:[{name:"mint",type:"publicKey"},{name:"decimals",type:"u8"},{docs:["Price oracle"],name:"oracle",type:"publicKey"}],kind:"struct"},name:"TokenInfo"},{docs:["Type of asset"],fieldType:{kind:"enum",variants:["Token","NFT",'LP {"poolId":"publicKey"}']},name:"AssetType"},{docs:["Unix timestamp in seconds"],fieldType:{kind:"type",name:"Timestamp",type:"i64"},name:"Timestamp"},{docs:["Wallet address"],fieldType:{kind:"type",name:"Address",type:"publicKey"},name:"Address"}]}},s={args:{data:[{docs:["Type with unknown format"],fieldType:{kind:"unknown",type:"custom<ExternalType>(param1, param2)"},name:"ComplexType"}]}},o={args:{data:[]}};var i,p,d;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    data: [{
      docs: ['Complete market state'],
      fieldType: {
        fields: [{
          name: 'id',
          type: 'u64'
        }, {
          name: 'owner',
          type: 'publicKey'
        }, {
          docs: ['Market configuration'],
          name: 'config',
          type: 'MarketConfig'
        }, {
          docs: ['Current market status'],
          name: 'status',
          type: 'MarketStatus'
        }, {
          docs: ['Supported tokens'],
          name: 'tokens',
          type: 'vec<TokenInfo>'
        }, {
          docs: ['Market statistics'],
          name: 'stats',
          type: 'MarketStats'
        }],
        kind: 'struct'
      },
      name: 'MarketState'
    }, {
      docs: ['Trading position'],
      fieldType: {
        fields: [{
          name: 'id',
          type: 'u64'
        }, {
          name: 'owner',
          type: 'publicKey'
        }, {
          docs: ['Long or Short'],
          name: 'side',
          type: 'PositionSide'
        }, {
          docs: ['Leverage multiplier'],
          name: 'leverage',
          type: 'u8'
        }, {
          name: 'collateral',
          type: 'TokenAmount'
        }, {
          name: 'entryPrice',
          type: 'u64'
        }, {
          name: 'liquidationPrice',
          type: 'u64'
        }],
        kind: 'struct'
      },
      name: 'Position'
    }]
  }
}`,...(d=(p=e.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var m,c,y;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    data: [{
      docs: ['Type of order in the system'],
      fieldType: {
        kind: 'enum',
        variants: ['Buy', 'Sell', 'Swap']
      },
      name: 'OrderType'
    }, {
      docs: ['Result of an action with data'],
      fieldType: {
        kind: 'enum',
        variants: ['Success {"txId":"string","timestamp":"i64"}', 'Failure {"errorCode":"u16","message":"string"}', 'Pending {"id":"u64"}']
      },
      name: 'ActionResult'
    }]
  }
}`,...(y=(c=n.parameters)==null?void 0:c.docs)==null?void 0:y.source}}};var l,u,T;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    data: [{
      docs: ['Alias for balance amount'],
      fieldType: {
        kind: 'type',
        name: 'Balance',
        type: 'u64'
      },
      name: 'Balance'
    }, {
      docs: ['Token identifier'],
      fieldType: {
        kind: 'type',
        name: 'TokenId',
        type: 'array(u8, 32)'
      },
      name: 'TokenId'
    }, {
      docs: ['Collection of price points'],
      fieldType: {
        kind: 'type',
        name: 'Prices',
        type: 'vec<u64>'
      },
      name: 'Prices'
    }]
  }
}`,...(T=(u=a.parameters)==null?void 0:u.docs)==null?void 0:T.source}}};var k,f,g;t.parameters={...t.parameters,docs:{...(k=t.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    data: [{
      docs: ['Token information'],
      fieldType: {
        fields: [{
          name: 'mint',
          type: 'publicKey'
        }, {
          name: 'decimals',
          type: 'u8'
        }, {
          docs: ['Price oracle'],
          name: 'oracle',
          type: 'publicKey'
        }],
        kind: 'struct'
      },
      name: 'TokenInfo'
    }, {
      docs: ['Type of asset'],
      fieldType: {
        kind: 'enum',
        variants: ['Token', 'NFT', 'LP {"poolId":"publicKey"}']
      },
      name: 'AssetType'
    }, {
      docs: ['Unix timestamp in seconds'],
      fieldType: {
        kind: 'type',
        name: 'Timestamp',
        type: 'i64'
      },
      name: 'Timestamp'
    }, {
      docs: ['Wallet address'],
      fieldType: {
        kind: 'type',
        name: 'Address',
        type: 'publicKey'
      },
      name: 'Address'
    }]
  }
}`,...(g=(f=t.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var S,P,w;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    data: [{
      docs: ['Type with unknown format'],
      fieldType: {
        kind: 'unknown',
        type: 'custom<ExternalType>(param1, param2)'
      },
      name: 'ComplexType'
    }]
  }
}`,...(w=(P=s.parameters)==null?void 0:P.docs)==null?void 0:w.source}}};var x,v,A;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    data: []
  }
}`,...(A=(v=o.parameters)==null?void 0:v.docs)==null?void 0:A.source}}};const O=["StructTypes","EnumTypes","TypeAliases","MixedTypes","UnknownTypes","NoTypes"];export{n as EnumTypes,t as MixedTypes,o as NoTypes,e as StructTypes,a as TypeAliases,s as UnknownTypes,O as __namedExportsOrder,U as default};
