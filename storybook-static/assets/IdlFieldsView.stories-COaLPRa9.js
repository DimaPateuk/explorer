import{j as o}from"./jsx-runtime-CcwWnNjF.js";import{I as T}from"./IdlFields-DLaSUfZJ.js";import"./jsx-runtime-BmFMsc7C.js";import"./index-AMtxXvLu.js";import"./IdlDoc--6UL0EhZ.js";import"./tooltip-DwQQOJxn.js";import"./index-OXkWkTkr.js";import"./index-YXZ437_b.js";import"./index-DyBjyqqP.js";import"./utils-jAU0Cazi.js";const C={component:T,decorators:[g=>o.jsx("div",{children:o.jsx(g,{})})],parameters:{nextjs:{appDirectory:!0}},tags:["autodocs"],title:"Components/Account/idl/components/IdlFields"},e={args:{fieldType:{fields:[{name:"id",type:"u64"},{name:"name",type:"string"},{name:"balance",type:"u128"},{docs:["User address"],name:"address",type:"pubkey"}],kind:"struct"}}},n={args:{fieldType:{kind:"enum",variants:["Option1","Option2","Option3 [u64, string]",'Option4 {"field1":"u8","field2":"bool"}']}}},s={args:{fieldType:{docs:["Hello docs!"],kind:"type",name:"customType",type:"array(u8, 32)"}}},r={args:{fieldType:{docs:["Some unknown field"],kind:"unknown",name:"someCustomType",type:'{"mint":"pubkey","amount":"u64"}'}}};var t,a,i;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    fieldType: {
      fields: [{
        name: 'id',
        type: 'u64'
      }, {
        name: 'name',
        type: 'string'
      }, {
        name: 'balance',
        type: 'u128'
      }, {
        docs: ['User address'],
        name: 'address',
        type: 'pubkey'
      }],
      kind: 'struct'
    }
  }
}`,...(i=(a=e.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};var p,d,m;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    fieldType: {
      kind: 'enum',
      variants: ['Option1', 'Option2', 'Option3 [u64, string]', 'Option4 {"field1":"u8","field2":"bool"}']
    }
  }
}`,...(m=(d=n.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var c,u,l;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    fieldType: {
      docs: ['Hello docs!'],
      kind: 'type',
      name: 'customType',
      type: 'array(u8, 32)'
    }
  }
}`,...(l=(u=s.parameters)==null?void 0:u.docs)==null?void 0:l.source}}};var y,f,k;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    fieldType: {
      docs: ['Some unknown field'],
      kind: 'unknown',
      name: 'someCustomType',
      type: '{"mint":"pubkey","amount":"u64"}'
    }
  }
}`,...(k=(f=r.parameters)==null?void 0:f.docs)==null?void 0:k.source}}};const I=["StructFields","EnumFields","TypeField","UnknownField"];export{n as EnumFields,e as StructFields,s as TypeField,r as UnknownField,I as __namedExportsOrder,C as default};
