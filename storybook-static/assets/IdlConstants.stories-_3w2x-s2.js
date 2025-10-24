import{j as n}from"./jsx-runtime-CcwWnNjF.js";import{I as E}from"./IdlConstants-CQhIpJQM.js";import"./jsx-runtime-BmFMsc7C.js";import"./index-AMtxXvLu.js";const f={component:E,decorators:[A=>n.jsx("div",{children:n.jsx(A,{})})],tags:["autodocs"],title:"Components/Account/idl/components/IdlConstants"},a={args:{data:[{docs:["Maximum number of users allowed"],name:"MAX_USERS",type:"u16",value:"1000"},{docs:["Minimum deposit amount in lamports"],name:"MIN_DEPOSIT",type:"u64",value:"10000000"},{docs:["Protocol fee in basis points"],name:"PROTOCOL_FEE",type:"u16",value:"25"}]}},e={args:{data:[{docs:["Current version of the program"],name:"PROGRAM_VERSION",type:"string",value:'"1.2.3"'},{docs:["Flag indicating if program is on mainnet"],name:"IS_MAINNET",type:"bool",value:"true"},{docs:["Default admin public key"],name:"DEFAULT_ADMIN",type:"publicKey",value:'"8xyk98qMVp3S9qMACiV5PgmHn3qzPiT6SMfk3Hz6yyKz"'},{docs:["Default lock duration in seconds"],name:"LOCK_DURATION",type:"i64",value:"604800"}]}},s={args:{data:[{docs:["List of allowed token mints"],name:"ALLOWED_MINTS",type:"array(publicKey, 3)",value:'["EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v","4zMMC9srt5Ri5X14GAgXhaHii3GnPAEERYPJgZJDncDU","7vfCXTUXx5WJV5JADk17DUJ4ksgau7utNKj4b963voxs"]'}]}},o={args:{data:[]}};var t,r,i;a.parameters={...a.parameters,docs:{...(t=a.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    data: [{
      docs: ['Maximum number of users allowed'],
      name: 'MAX_USERS',
      type: 'u16',
      value: '1000'
    }, {
      docs: ['Minimum deposit amount in lamports'],
      name: 'MIN_DEPOSIT',
      type: 'u64',
      value: '10000000'
    }, {
      docs: ['Protocol fee in basis points'],
      name: 'PROTOCOL_FEE',
      type: 'u16',
      value: '25'
    }]
  }
}`,...(i=(r=a.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};var m,u,c;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    data: [{
      docs: ['Current version of the program'],
      name: 'PROGRAM_VERSION',
      type: 'string',
      value: '"1.2.3"'
    }, {
      docs: ['Flag indicating if program is on mainnet'],
      name: 'IS_MAINNET',
      type: 'bool',
      value: 'true'
    }, {
      docs: ['Default admin public key'],
      name: 'DEFAULT_ADMIN',
      type: 'publicKey',
      value: '"8xyk98qMVp3S9qMACiV5PgmHn3qzPiT6SMfk3Hz6yyKz"'
    }, {
      docs: ['Default lock duration in seconds'],
      name: 'LOCK_DURATION',
      type: 'i64',
      value: '604800'
    }]
  }
}`,...(c=(u=e.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};var d,p,l;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    data: [{
      docs: ['List of allowed token mints'],
      name: 'ALLOWED_MINTS',
      type: 'array(publicKey, 3)',
      value: '["EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v","4zMMC9srt5Ri5X14GAgXhaHii3GnPAEERYPJgZJDncDU","7vfCXTUXx5WJV5JADk17DUJ4ksgau7utNKj4b963voxs"]'
    }]
  }
}`,...(l=(p=s.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var y,g,M;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    data: []
  }
}`,...(M=(g=o.parameters)==null?void 0:g.docs)==null?void 0:M.source}}};const N=["NumericConstants","MixedTypeConstants","ArrayConstants","NoConstants"];export{s as ArrayConstants,e as MixedTypeConstants,o as NoConstants,a as NumericConstants,N as __namedExportsOrder,f as default};
