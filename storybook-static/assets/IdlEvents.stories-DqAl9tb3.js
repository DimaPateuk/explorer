import{j as r}from"./jsx-runtime-CcwWnNjF.js";import{I as K}from"./IdlEvents-CEBo1Ykv.js";import"./jsx-runtime-BmFMsc7C.js";import"./index-AMtxXvLu.js";import"./IdlDoc--6UL0EhZ.js";import"./tooltip-DwQQOJxn.js";import"./index-OXkWkTkr.js";import"./index-YXZ437_b.js";import"./index-DyBjyqqP.js";import"./utils-jAU0Cazi.js";import"./IdlFields-DLaSUfZJ.js";const I={component:K,decorators:[g=>r.jsx("div",{children:r.jsx(g,{})})],tags:["autodocs"],title:"Components/Account/idl/components/IdlEvents"},e={args:{data:[{docs:["Emitted when an NFT is sold on the marketplace"],fieldType:{fields:[{docs:["NFT mint address"],name:"tokenMint",type:"publicKey"},{name:"seller",type:"publicKey"},{name:"buyer",type:"publicKey"},{docs:["Sale price in lamports"],name:"price",type:"u64"},{docs:["Royalties paid in lamports"],name:"royalties",type:"u64"},{name:"marketplace",type:"publicKey"},{name:"platformFee",type:"u64"}],kind:"struct"},name:"MarketItemSold"},{docs:[],fieldType:{fields:[{name:"auctionId",type:"u64"},{name:"tokenMint",type:"publicKey"},{name:"winner",type:"publicKey"},{name:"finalPrice",type:"u64"},{name:"participants",type:"vec(publicKey)"},{name:"endTime",type:"i64"}],kind:"struct"},name:"AuctionCompleted"}]}},n={args:{data:[{docs:["Emitted when a governance action is performed"],fieldType:{kind:"enum",variants:['ProposalCreated {"proposer":"publicKey","description":"string"}','VoteCast {"voter":"publicKey","support":"bool","power":"u64"}','ProposalExecuted {"executor":"publicKey"}','ProposalCancelled {"canceler":"publicKey","reason":"string"}']},name:"GovernanceAction"}]}},t={args:{data:[{docs:["System-level event"],fieldType:{kind:"type",type:"string"},name:"SystemMessage"}]}},a={args:{data:[]}};var s,o,p;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    data: [{
      docs: ['Emitted when an NFT is sold on the marketplace'],
      fieldType: {
        fields: [{
          docs: ['NFT mint address'],
          name: 'tokenMint',
          type: 'publicKey'
        }, {
          name: 'seller',
          type: 'publicKey'
        }, {
          name: 'buyer',
          type: 'publicKey'
        }, {
          docs: ['Sale price in lamports'],
          name: 'price',
          type: 'u64'
        }, {
          docs: ['Royalties paid in lamports'],
          name: 'royalties',
          type: 'u64'
        }, {
          name: 'marketplace',
          type: 'publicKey'
        }, {
          name: 'platformFee',
          type: 'u64'
        }],
        kind: 'struct'
      },
      name: 'MarketItemSold'
    }, {
      docs: [],
      fieldType: {
        fields: [{
          name: 'auctionId',
          type: 'u64'
        }, {
          name: 'tokenMint',
          type: 'publicKey'
        }, {
          name: 'winner',
          type: 'publicKey'
        }, {
          name: 'finalPrice',
          type: 'u64'
        }, {
          name: 'participants',
          type: 'vec(publicKey)'
        }, {
          name: 'endTime',
          type: 'i64'
        }],
        kind: 'struct'
      },
      name: 'AuctionCompleted'
    }]
  }
}`,...(p=(o=e.parameters)==null?void 0:o.docs)==null?void 0:p.source}}};var i,c,m;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    data: [{
      docs: ['Emitted when a governance action is performed'],
      fieldType: {
        kind: 'enum',
        variants: ['ProposalCreated {"proposer":"publicKey","description":"string"}', 'VoteCast {"voter":"publicKey","support":"bool","power":"u64"}', 'ProposalExecuted {"executor":"publicKey"}', 'ProposalCancelled {"canceler":"publicKey","reason":"string"}']
      },
      name: 'GovernanceAction'
    }]
  }
}`,...(m=(c=n.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var d,l,y;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    data: [{
      docs: ['System-level event'],
      fieldType: {
        kind: 'type',
        type: 'string'
      },
      name: 'SystemMessage'
    }]
  }
}`,...(y=(l=t.parameters)==null?void 0:l.docs)==null?void 0:y.source}}};var u,b,v;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    data: []
  }
}`,...(v=(b=a.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};const F=["BasicEvents","EnumEvents","TypeEvents","NoEvents"];export{e as BasicEvents,n as EnumEvents,a as NoEvents,t as TypeEvents,F as __namedExportsOrder,I as default};
