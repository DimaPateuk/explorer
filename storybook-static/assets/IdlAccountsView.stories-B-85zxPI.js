import{j as r}from"./jsx-runtime-CcwWnNjF.js";import{I as U}from"./IdlAccounts-DzKC6m6v.js";import"./jsx-runtime-BmFMsc7C.js";import"./index-AMtxXvLu.js";import"./IdlDoc--6UL0EhZ.js";import"./tooltip-DwQQOJxn.js";import"./index-OXkWkTkr.js";import"./index-YXZ437_b.js";import"./index-DyBjyqqP.js";import"./utils-jAU0Cazi.js";import"./IdlFields-DLaSUfZJ.js";const q={component:U,decorators:[P=>r.jsx("div",{children:r.jsx(P,{})})],parameters:{nextjs:{appDirectory:!0}},tags:["autodocs"],title:"Components/Account/idl/components/IdlAccounts"},e={args:{data:[{docs:["Stores user information and balance"],fieldType:{fields:[{name:"owner",type:"publicKey"},{name:"balance",type:"u64"},{name:"active",type:"bool"}],kind:"struct"},name:"UserAccount"},{docs:[],fieldType:{fields:[{name:"authority",type:"publicKey"},{name:"treasury",type:"publicKey"},{name:"feePercent",type:"u16"}],kind:"struct"},name:"MarketplaceAccount"}]}},n={args:{data:[{docs:["Program state account with complex fields"],fieldType:{fields:[{name:"admin",type:"publicKey"},{docs:["Configuration settings"],name:"settings",type:"SettingsType"},{docs:["Current program status"],name:"status",type:"StatusEnum"}],kind:"struct"},name:"StateAccount"},{docs:["Vault that holds assets"],fieldType:{fields:[{name:"owner",type:"publicKey"},{docs:["List of all tokens"],name:"tokens",type:"vec(TokenInfo)"},{docs:["Timestamp when assets unlock"],name:"lockedUntil",type:"i64"}],kind:"struct"},name:"VaultAccount"}]}},t={args:{data:[{docs:["Possible market states"],fieldType:{kind:"enum",variants:["Open","Closed","Suspended",'PendingApproval {"requestedBy":"publicKey","timestamp":"i64"}']},name:"MarketState"}]}},a={args:{data:[{docs:["Custom token pair definition"],fieldType:{kind:"type",name:"TokenPair",type:"array(publicKey, 2)"},name:"TokenPair"}]}},s={args:{data:[{docs:["Unknown account that is just JSON."],fieldType:{kind:"unknown",type:'{"mint":"pubkey","amount":"u64"}'},name:"UnknownType"}]}},o={args:{data:[]}};var c,i,p;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    data: [{
      docs: ['Stores user information and balance'],
      fieldType: {
        fields: [{
          name: 'owner',
          type: 'publicKey'
        }, {
          name: 'balance',
          type: 'u64'
        }, {
          name: 'active',
          type: 'bool'
        }],
        kind: 'struct'
      },
      name: 'UserAccount'
    }, {
      docs: [],
      fieldType: {
        fields: [{
          name: 'authority',
          type: 'publicKey'
        }, {
          name: 'treasury',
          type: 'publicKey'
        }, {
          name: 'feePercent',
          type: 'u16'
        }],
        kind: 'struct'
      },
      name: 'MarketplaceAccount'
    }]
  }
}`,...(p=(i=e.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var d,u,m;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    data: [{
      docs: ['Program state account with complex fields'],
      fieldType: {
        fields: [{
          name: 'admin',
          type: 'publicKey'
        }, {
          docs: ['Configuration settings'],
          name: 'settings',
          type: 'SettingsType'
        }, {
          docs: ['Current program status'],
          name: 'status',
          type: 'StatusEnum'
        }],
        kind: 'struct'
      },
      name: 'StateAccount'
    }, {
      docs: ['Vault that holds assets'],
      fieldType: {
        fields: [{
          name: 'owner',
          type: 'publicKey'
        }, {
          docs: ['List of all tokens'],
          name: 'tokens',
          type: 'vec(TokenInfo)'
        }, {
          docs: ['Timestamp when assets unlock'],
          name: 'lockedUntil',
          type: 'i64'
        }],
        kind: 'struct'
      },
      name: 'VaultAccount'
    }]
  }
}`,...(m=(u=n.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var l,y,k;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    data: [{
      docs: ['Possible market states'],
      fieldType: {
        kind: 'enum',
        variants: ['Open', 'Closed', 'Suspended', 'PendingApproval {"requestedBy":"publicKey","timestamp":"i64"}']
      },
      name: 'MarketState'
    }]
  }
}`,...(k=(y=t.parameters)==null?void 0:y.docs)==null?void 0:k.source}}};var f,g,T;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    data: [{
      docs: ['Custom token pair definition'],
      fieldType: {
        kind: 'type',
        name: 'TokenPair',
        type: 'array(publicKey, 2)'
      },
      name: 'TokenPair'
    }]
  }
}`,...(T=(g=a.parameters)==null?void 0:g.docs)==null?void 0:T.source}}};var A,b,S;s.parameters={...s.parameters,docs:{...(A=s.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    data: [{
      docs: ['Unknown account that is just JSON.'],
      fieldType: {
        kind: 'unknown',
        type: '{"mint":"pubkey","amount":"u64"}'
      },
      name: 'UnknownType'
    }]
  }
}`,...(S=(b=s.parameters)==null?void 0:b.docs)==null?void 0:S.source}}};var w,h,K;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    data: []
  }
}`,...(K=(h=o.parameters)==null?void 0:h.docs)==null?void 0:K.source}}};const B=["SimpleAccounts","AccountsWithDocs","EnumAccount","TypeAccount","UnknownTypeAccount","NoAccounts"];export{n as AccountsWithDocs,t as EnumAccount,o as NoAccounts,e as SimpleAccounts,a as TypeAccount,s as UnknownTypeAccount,B as __namedExportsOrder,q as default};
