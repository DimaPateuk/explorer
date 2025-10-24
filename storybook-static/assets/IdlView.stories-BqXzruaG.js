import{j as r}from"./jsx-runtime-CcwWnNjF.js";import{F as h}from"./IdlView-BN7Bk8Fa.js";import"./jsx-runtime-BmFMsc7C.js";import"./index-AMtxXvLu.js";import"./index-OXkWkTkr.js";import"./sha256-DLE-WUMe.js";import"./IdlAccounts-DzKC6m6v.js";import"./IdlDoc--6UL0EhZ.js";import"./tooltip-DwQQOJxn.js";import"./index-YXZ437_b.js";import"./index-DyBjyqqP.js";import"./utils-jAU0Cazi.js";import"./IdlFields-DLaSUfZJ.js";import"./IdlConstants-CQhIpJQM.js";import"./IdlErrors-j0cr7NOT.js";import"./IdlEvents-CEBo1Ykv.js";import"./IdlInstructions-CVQ3VQLc.js";import"./IdlPdas-BV3nTi6o.js";import"./IdlTypes-uqZOPDyB.js";const L={component:h,decorators:[S=>r.jsx("div",{children:r.jsx(S,{})})],parameters:{nextjs:{appDirectory:!0}},tags:["autodocs"],title:"Components/Account/idl/FormattedIdlView"},e={args:{idl:{instructions:[{accounts:[{docs:["Account authority"],name:"authority",signer:!0,writable:!1},{docs:["New account"],name:"newAccount",signer:!1,writable:!0}],args:[{docs:["Initial data value"],name:"data",type:"u64"}],docs:["Initialize a new account"],name:"initialize"},{accounts:[{docs:["Account authority"],name:"authority",signer:!0,writable:!1},{docs:["Account to update"],name:"account",signer:!1,writable:!0}],args:[{docs:["New data value"],name:"newData",type:"u64"}],docs:["Update an account"],name:"update"}]}}},n={args:{idl:{accounts:[{docs:["Main system configuration account"],fieldType:{fields:[{name:"admin",type:"publicKey"},{name:"settings",type:"Settings"},{name:"initialized",type:"bool"}],kind:"struct"},name:"SystemAccount"}],instructions:[{accounts:[{docs:["Admin account"],name:"admin",signer:!0,writable:!1},{docs:["System account"],name:"systemAccount",signer:!1,writable:!0}],args:[],docs:["Initialize the program"],name:"initialize"}],types:[{docs:["System settings"],fieldType:{fields:[{name:"maxUsers",type:"u32"},{name:"feeBps",type:"u16"},{name:"allowListEnabled",type:"bool"}],kind:"struct"},name:"Settings"}]}}},t={args:{idl:{accounts:[{docs:["Marketplace state account"],fieldType:{fields:[{name:"authority",type:"publicKey"},{name:"name",type:"string"},{name:"feeBps",type:"u16"},{name:"status",type:"MarketStatus"}],kind:"struct"},name:"Marketplace"}],constants:[{docs:["Maximum length for marketplace name"],name:"MAX_NAME_LENGTH",type:"u32",value:"50"},{docs:["Maximum fee in basis points (100%)"],name:"MAX_FEE_BPS",type:"u16",value:"10000"}],errors:[{code:"6000",message:"You are not authorized to perform this action",name:"Unauthorized"},{code:"6001",message:"Fee basis points must be between 0 and 10000",name:"InvalidFeeBps"}],events:[{docs:["Emitted when a new marketplace is created"],fieldType:{fields:[{name:"marketplaceId",type:"publicKey"},{name:"creator",type:"publicKey"},{name:"name",type:"string"},{name:"timestamp",type:"i64"}],kind:"struct"},name:"MarketplaceCreated"}],instructions:[{accounts:[{docs:["Marketplace creator"],name:"creator",signer:!0,writable:!0},{docs:["New marketplace account"],name:"marketplaceAccount",pda:!0,signer:!1,writable:!0}],args:[{docs:["Marketplace name"],name:"name",type:"string"},{docs:["Fee in basis points"],name:"feeBps",type:"u16"}],docs:["Create a new marketplace"],name:"createMarketplace"}],pdas:[{docs:["PDA for marketplace account"],name:"MarketplaceAccount",seeds:[{kind:"type",name:"creator",type:"publicKey"},{kind:"type",name:"name",type:"string"}]}],types:[{docs:["Status of the marketplace"],fieldType:{kind:"enum",variants:["Active","Paused","Shutdown"]},name:"MarketStatus"}]}}},a={args:{idl:{accounts:[],constants:[{docs:["Program version"],name:"VERSION",type:"string",value:'"1.0.0"'}],errors:[],events:[],instructions:[{accounts:[{docs:["User account"],name:"user",signer:!0,writable:!1}],args:[],docs:["A simple instruction"],name:"simpleInstruction"}],pdas:[],types:[{docs:["A simple type"],fieldType:{kind:"type",name:"SimpleType",type:"string"},name:"SimpleType"}]}}},s={args:{idl:null}};var c,i,o;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    idl: {
      instructions: [{
        accounts: [{
          docs: ['Account authority'],
          name: 'authority',
          signer: true,
          writable: false
        }, {
          docs: ['New account'],
          name: 'newAccount',
          signer: false,
          writable: true
        }],
        args: [{
          docs: ['Initial data value'],
          name: 'data',
          type: 'u64'
        }],
        docs: ['Initialize a new account'],
        name: 'initialize'
      }, {
        accounts: [{
          docs: ['Account authority'],
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
          docs: ['New data value'],
          name: 'newData',
          type: 'u64'
        }],
        docs: ['Update an account'],
        name: 'update'
      }]
    }
  }
}`,...(o=(i=e.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};var m,p,u;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    idl: {
      accounts: [{
        docs: ['Main system configuration account'],
        fieldType: {
          fields: [{
            name: 'admin',
            type: 'publicKey'
          }, {
            name: 'settings',
            type: 'Settings'
          }, {
            name: 'initialized',
            type: 'bool'
          }],
          kind: 'struct'
        },
        name: 'SystemAccount'
      }],
      instructions: [{
        accounts: [{
          docs: ['Admin account'],
          name: 'admin',
          signer: true,
          writable: false
        }, {
          docs: ['System account'],
          name: 'systemAccount',
          signer: false,
          writable: true
        }],
        args: [],
        docs: ['Initialize the program'],
        name: 'initialize'
      }],
      types: [{
        docs: ['System settings'],
        fieldType: {
          fields: [{
            name: 'maxUsers',
            type: 'u32'
          }, {
            name: 'feeBps',
            type: 'u16'
          }, {
            name: 'allowListEnabled',
            type: 'bool'
          }],
          kind: 'struct'
        },
        name: 'Settings'
      }]
    }
  }
}`,...(u=(p=n.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var d,l,y;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    idl: {
      accounts: [{
        docs: ['Marketplace state account'],
        fieldType: {
          fields: [{
            name: 'authority',
            type: 'publicKey'
          }, {
            name: 'name',
            type: 'string'
          }, {
            name: 'feeBps',
            type: 'u16'
          }, {
            name: 'status',
            type: 'MarketStatus'
          }],
          kind: 'struct'
        },
        name: 'Marketplace'
      }],
      constants: [{
        docs: ['Maximum length for marketplace name'],
        name: 'MAX_NAME_LENGTH',
        type: 'u32',
        value: '50'
      }, {
        docs: ['Maximum fee in basis points (100%)'],
        name: 'MAX_FEE_BPS',
        type: 'u16',
        value: '10000'
      }],
      errors: [{
        code: '6000',
        message: 'You are not authorized to perform this action',
        name: 'Unauthorized'
      }, {
        code: '6001',
        message: 'Fee basis points must be between 0 and 10000',
        name: 'InvalidFeeBps'
      }],
      events: [{
        docs: ['Emitted when a new marketplace is created'],
        fieldType: {
          fields: [{
            name: 'marketplaceId',
            type: 'publicKey'
          }, {
            name: 'creator',
            type: 'publicKey'
          }, {
            name: 'name',
            type: 'string'
          }, {
            name: 'timestamp',
            type: 'i64'
          }],
          kind: 'struct'
        },
        name: 'MarketplaceCreated'
      }],
      instructions: [{
        accounts: [{
          docs: ['Marketplace creator'],
          name: 'creator',
          signer: true,
          writable: true
        }, {
          docs: ['New marketplace account'],
          name: 'marketplaceAccount',
          pda: true,
          signer: false,
          writable: true
        }],
        args: [{
          docs: ['Marketplace name'],
          name: 'name',
          type: 'string'
        }, {
          docs: ['Fee in basis points'],
          name: 'feeBps',
          type: 'u16'
        }],
        docs: ['Create a new marketplace'],
        name: 'createMarketplace'
      }],
      pdas: [{
        docs: ['PDA for marketplace account'],
        name: 'MarketplaceAccount',
        seeds: [{
          kind: 'type',
          name: 'creator',
          type: 'publicKey'
        }, {
          kind: 'type',
          name: 'name',
          type: 'string'
        }]
      }],
      types: [{
        docs: ['Status of the marketplace'],
        fieldType: {
          kind: 'enum',
          variants: ['Active', 'Paused', 'Shutdown']
        },
        name: 'MarketStatus'
      }]
    }
  }
}`,...(y=(l=t.parameters)==null?void 0:l.docs)==null?void 0:y.source}}};var g,f,k;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    idl: {
      accounts: [],
      constants: [{
        docs: ['Program version'],
        name: 'VERSION',
        type: 'string',
        value: '"1.0.0"'
      }],
      errors: [],
      events: [],
      instructions: [{
        accounts: [{
          docs: ['User account'],
          name: 'user',
          signer: true,
          writable: false
        }],
        args: [],
        docs: ['A simple instruction'],
        name: 'simpleInstruction'
      }],
      pdas: [],
      types: [{
        docs: ['A simple type'],
        fieldType: {
          kind: 'type',
          name: 'SimpleType',
          type: 'string'
        },
        name: 'SimpleType'
      }]
    }
  }
}`,...(k=(f=a.parameters)==null?void 0:f.docs)==null?void 0:k.source}}};var b,w,A;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    idl: null
  }
}`,...(A=(w=s.parameters)==null?void 0:w.docs)==null?void 0:A.source}}};const V=["InstructionsOnly","WithAccountsAndTypes","WithAllSections","WithSomeSectionsEmpty","EmptyIdl"];export{s as EmptyIdl,e as InstructionsOnly,n as WithAccountsAndTypes,t as WithAllSections,a as WithSomeSectionsEmpty,V as __namedExportsOrder,L as default};
