import{j as s}from"./jsx-runtime-CcwWnNjF.js";import{I as N}from"./IdlInstructions-CVQ3VQLc.js";import"./jsx-runtime-BmFMsc7C.js";import"./index-AMtxXvLu.js";import"./IdlDoc--6UL0EhZ.js";import"./tooltip-DwQQOJxn.js";import"./index-OXkWkTkr.js";import"./index-YXZ437_b.js";import"./index-DyBjyqqP.js";import"./utils-jAU0Cazi.js";import"./IdlFields-DLaSUfZJ.js";const j={component:N,decorators:[k=>s.jsx("div",{children:s.jsx(k,{})})],parameters:{nextjs:{appDirectory:!0}},tags:["autodocs"],title:"Components/Account/idl/components/IdlInstructions"},n={args:{data:[{accounts:[{docs:["Account that can update the data"],name:"authority",signer:!0,writable:!1},{docs:["Account to initialize"],name:"newAccount",signer:!1,writable:!0}],args:[{docs:["Initial value"],name:"data",type:"u64"}],docs:["Initialize a new account"],name:"initialize"},{accounts:[{docs:["Account that can update the data"],name:"authority",signer:!0,writable:!1},{docs:["Account to update"],name:"account",signer:!1,writable:!0}],args:[{docs:["New value to store"],name:"newValue",type:"u64"}],docs:["Update the stored value"],name:"updateValue"}]}},e={args:{data:[{accounts:[{accounts:[{docs:["Admin account"],name:"admin",signer:!0,writable:!1},{docs:["New marketplace account"],name:"marketplaceAccount",signer:!1,writable:!0},{docs:["Treasury account"],name:"treasuryAccount",signer:!1,writable:!0},{docs:["System program"],name:"systemProgram",signer:!1,writable:!1}],name:"Context"},{docs:["Mint authority"],name:"mintAuthority",optional:!0,signer:!0,writable:!0},{docs:["Token program"],name:"tokenProgram",signer:!1,writable:!1}],args:[{docs:["Fee percentage in basis points"],name:"feePercentage",type:"u16"},{docs:["Marketplace name"],name:"name",type:"string"}],docs:["Create a new marketplace"],name:"createMarketplace"}]}},a={args:{data:[{accounts:[{docs:["Seller account"],name:"seller",signer:!0,writable:!1},{docs:["NFT token account"],name:"nftAccount",signer:!1,writable:!0},{docs:["NFT mint"],name:"nftMint",signer:!1,writable:!1},{docs:["Listing account"],name:"listingAccount",pda:!0,signer:!1,writable:!0},{docs:["Metadata account (optional)"],name:"metadataAccount",optional:!0,signer:!1,writable:!1},{docs:["Collection account (optional)"],name:"collectionAccount",optional:!0,signer:!1,writable:!1}],args:[{docs:["Listing price"],name:"price",type:"u64"},{docs:["Listing duration in seconds"],name:"duration",type:"u64"}],docs:["Create a new listing in the marketplace"],name:"createListing"}]}},t={args:{data:[{accounts:[{docs:["Account authority"],name:"authority",signer:!0,writable:!1},{docs:["Account to close"],name:"account",signer:!1,writable:!0},{docs:["Destination for reclaimed rent"],name:"destination",signer:!1,writable:!0}],args:[],docs:["Close an account and reclaim rent"],name:"closeAccount"}]}},r={args:{data:[]}};var o,c,i;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    data: [{
      accounts: [{
        docs: ['Account that can update the data'],
        name: 'authority',
        signer: true,
        writable: false
      }, {
        docs: ['Account to initialize'],
        name: 'newAccount',
        signer: false,
        writable: true
      }],
      args: [{
        docs: ['Initial value'],
        name: 'data',
        type: 'u64'
      }],
      docs: ['Initialize a new account'],
      name: 'initialize'
    }, {
      accounts: [{
        docs: ['Account that can update the data'],
        name: 'authority',
        signer: true,
        writable: false
      }, {
        docs: ['Account to update'],
        name: 'account',
        signer: false,
        writable: true
      }],
      args: [{
        docs: ['New value to store'],
        name: 'newValue',
        type: 'u64'
      }],
      docs: ['Update the stored value'],
      name: 'updateValue'
    }]
  }
}`,...(i=(c=n.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};var u,l,m;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    data: [{
      accounts: [{
        accounts: [{
          docs: ['Admin account'],
          name: 'admin',
          signer: true,
          writable: false
        }, {
          docs: ['New marketplace account'],
          name: 'marketplaceAccount',
          signer: false,
          writable: true
        }, {
          docs: ['Treasury account'],
          name: 'treasuryAccount',
          signer: false,
          writable: true
        }, {
          docs: ['System program'],
          name: 'systemProgram',
          signer: false,
          writable: false
        }],
        name: 'Context'
      }, {
        docs: ['Mint authority'],
        name: 'mintAuthority',
        optional: true,
        signer: true,
        writable: true
      }, {
        docs: ['Token program'],
        name: 'tokenProgram',
        signer: false,
        writable: false
      }],
      args: [{
        docs: ['Fee percentage in basis points'],
        name: 'feePercentage',
        type: 'u16'
      }, {
        docs: ['Marketplace name'],
        name: 'name',
        type: 'string'
      }],
      docs: ['Create a new marketplace'],
      name: 'createMarketplace'
    }]
  }
}`,...(m=(l=e.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var d,p,g;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    data: [{
      accounts: [{
        docs: ['Seller account'],
        name: 'seller',
        signer: true,
        writable: false
      }, {
        docs: ['NFT token account'],
        name: 'nftAccount',
        signer: false,
        writable: true
      }, {
        docs: ['NFT mint'],
        name: 'nftMint',
        signer: false,
        writable: false
      }, {
        docs: ['Listing account'],
        name: 'listingAccount',
        pda: true,
        signer: false,
        writable: true
      }, {
        docs: ['Metadata account (optional)'],
        name: 'metadataAccount',
        optional: true,
        signer: false,
        writable: false
      }, {
        docs: ['Collection account (optional)'],
        name: 'collectionAccount',
        optional: true,
        signer: false,
        writable: false
      }],
      args: [{
        docs: ['Listing price'],
        name: 'price',
        type: 'u64'
      }, {
        docs: ['Listing duration in seconds'],
        name: 'duration',
        type: 'u64'
      }],
      docs: ['Create a new listing in the marketplace'],
      name: 'createListing'
    }]
  }
}`,...(g=(p=a.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var f,w,A;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    data: [{
      accounts: [{
        docs: ['Account authority'],
        name: 'authority',
        signer: true,
        writable: false
      }, {
        docs: ['Account to close'],
        name: 'account',
        signer: false,
        writable: true
      }, {
        docs: ['Destination for reclaimed rent'],
        name: 'destination',
        signer: false,
        writable: true
      }],
      args: [],
      docs: ['Close an account and reclaim rent'],
      name: 'closeAccount'
    }]
  }
}`,...(A=(w=t.parameters)==null?void 0:w.docs)==null?void 0:A.source}}};var b,y,h;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    data: []
  }
}`,...(h=(y=r.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};const V=["SimpleInstructions","NestedAccounts","WithOptionalAndPdaAccounts","NoArguments","NoInstructions"];export{e as NestedAccounts,t as NoArguments,r as NoInstructions,n as SimpleInstructions,a as WithOptionalAndPdaAccounts,V as __namedExportsOrder,j as default};
