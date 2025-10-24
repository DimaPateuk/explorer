import{j as d}from"./jsx-runtime-CcwWnNjF.js";import{I as D}from"./IdlPdas-BV3nTi6o.js";import"./jsx-runtime-BmFMsc7C.js";import"./index-AMtxXvLu.js";import"./IdlDoc--6UL0EhZ.js";import"./tooltip-DwQQOJxn.js";import"./index-OXkWkTkr.js";import"./index-YXZ437_b.js";import"./index-DyBjyqqP.js";import"./utils-jAU0Cazi.js";import"./IdlFields-DLaSUfZJ.js";const U={component:D,decorators:[A=>d.jsx("div",{children:d.jsx(A,{})})],parameters:{nextjs:{appDirectory:!0}},tags:["autodocs"],title:"Components/Account/idl/components/IdlPdas"},e={args:{data:[{docs:["This PDA has defined seeds."],name:"SeededPDA",seeds:[{docs:["Seed for the PDA"],kind:"type",name:"seed1",type:"bytes"}]}]}},s={args:{data:[{docs:["PDA with multiple seeds."],name:"MultiSeedPDA",seeds:[{docs:["First seed"],kind:"type",name:"firstSeed",type:"u8"},{docs:[],kind:"type",name:"secondSeed",type:"publicKey"},{docs:["Bytes"],kind:"type",name:"bytesSeed",type:"bytes"}]}]}},t={args:{data:[{docs:[],name:"UnknownSeedTypePDA",seeds:[{docs:[],kind:"unknown",name:"mysterySeed",type:'{"custom":"value"}'}]}]}},n={args:{data:[]}};var a,o,r;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    data: [{
      docs: ['This PDA has defined seeds.'],
      name: 'SeededPDA',
      seeds: [{
        docs: ['Seed for the PDA'],
        kind: 'type',
        name: 'seed1',
        type: 'bytes'
      }]
    }]
  }
}`,...(r=(o=e.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};var p,c,i;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    data: [{
      docs: ['PDA with multiple seeds.'],
      name: 'MultiSeedPDA',
      seeds: [{
        docs: ['First seed'],
        kind: 'type',
        name: 'firstSeed',
        type: 'u8'
      }, {
        docs: [],
        kind: 'type',
        name: 'secondSeed',
        type: 'publicKey'
      }, {
        docs: ['Bytes'],
        kind: 'type',
        name: 'bytesSeed',
        type: 'bytes'
      }]
    }]
  }
}`,...(i=(c=s.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};var m,y,u;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    data: [{
      docs: [],
      name: 'UnknownSeedTypePDA',
      seeds: [{
        docs: [],
        kind: 'unknown',
        name: 'mysterySeed',
        type: '{"custom":"value"}'
      }]
    }]
  }
}`,...(u=(y=t.parameters)==null?void 0:y.docs)==null?void 0:u.source}}};var S,l,P;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    data: []
  }
}`,...(P=(l=n.parameters)==null?void 0:l.docs)==null?void 0:P.source}}};const v=["PdasWithSeeds","PDAWithMultipleSeeds","PDAWithUnknownSeedType","NoPdas"];export{n as NoPdas,s as PDAWithMultipleSeeds,t as PDAWithUnknownSeedType,e as PdasWithSeeds,v as __namedExportsOrder,U as default};
