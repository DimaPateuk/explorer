import{j as r}from"./jsx-runtime-CcwWnNjF.js";import{a as t}from"./IdlDoc--6UL0EhZ.js";function d({fieldType:e}){switch(e.kind){case"struct":return r.jsx(a,{fields:e.fields});case"enum":return r.jsx(i,{variants:e.variants});case"type":case"unknown":return r.jsx(l,{docs:e.docs,name:e.name,type:e.type});default:return r.jsx(r.Fragment,{})}}function a({fields:e}){return e?r.jsx("div",{className:"d-flex gap-2 flex-column align-items-start justify-start flex-wrap",children:e.map((n,s)=>r.jsx(t,{docs:n.docs,children:r.jsxs("div",{className:"d-inline-flex gap-2 align-items-center",children:[n.name&&r.jsxs("span",{children:[n.name,":"]}),r.jsx("span",{className:"badge bg-success-soft",children:n.type})]})},s))}):null}function i({variants:e}){return e!=null&&e.length?r.jsx("div",{className:"d-flex gap-2 flex-column align-items-start flex-wrap",children:e.map((n,s)=>r.jsx("span",{className:"badge bg-secondary-soft",children:n},s))}):null}function l({docs:e,name:n,type:s}){return r.jsx(t,{docs:e,children:r.jsxs("div",{className:"d-inline-flex gap-2 align-items-center",children:[!!n&&r.jsxs("span",{children:[n,":"]}),r.jsx("span",{className:"badge bg-success-soft",children:s})]})})}d.__docgenInfo={description:"",methods:[],displayName:"IdlFieldsView",props:{fieldType:{required:!0,tsType:{name:"union",raw:"StructFieldType | EnumFieldType | TypeFieldType | UnknownFieldType",elements:[{name:"signature",type:"object",raw:`{
    kind: 'struct';
    docs?: string[];
    fields?: Array<StructField>;
}`,signature:{properties:[{key:"kind",value:{name:"literal",value:"'struct'",required:!0}},{key:"docs",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"fields",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
    name?: string;
    docs?: string[];
    type: string; // type of the field, e.g. "u64", "string", "publicKey", etc.
}`,signature:{properties:[{key:"name",value:{name:"string",required:!1}},{key:"docs",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"type",value:{name:"string",required:!0}}]}}],raw:"Array<StructField>",required:!1}}]}},{name:"signature",type:"object",raw:`{
    kind: 'enum';
    docs?: string[];
    variants: string[];
}`,signature:{properties:[{key:"kind",value:{name:"literal",value:"'enum'",required:!0}},{key:"docs",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"variants",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}},{name:"signature",type:"object",raw:`{
    kind: 'type';
    docs?: string[];
    name?: string;
    type: string;
}`,signature:{properties:[{key:"kind",value:{name:"literal",value:"'type'",required:!0}},{key:"docs",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"name",value:{name:"string",required:!1}},{key:"type",value:{name:"string",required:!0}}]}},{name:"signature",type:"object",raw:`{
    kind: 'unknown';
    docs?: string[];
    name?: string;
    type: string;
}`,signature:{properties:[{key:"kind",value:{name:"literal",value:"'unknown'",required:!0}},{key:"docs",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"name",value:{name:"string",required:!1}},{key:"type",value:{name:"string",required:!0}}]}}]},description:""}}};a.__docgenInfo={description:"",methods:[],displayName:"IdlStructFieldsView",props:{fields:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
    name?: string;
    docs?: string[];
    type: string; // type of the field, e.g. "u64", "string", "publicKey", etc.
}`,signature:{properties:[{key:"name",value:{name:"string",required:!1}},{key:"docs",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"type",value:{name:"string",required:!0}}]}}],raw:"StructField[]"},description:""}}};i.__docgenInfo={description:"",methods:[],displayName:"IdlEnumFieldsView",props:{variants:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""}}};l.__docgenInfo={description:"",methods:[],displayName:"IdlTypeFieldView",props:{docs:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},name:{required:!1,tsType:{name:"string"},description:""},type:{required:!0,tsType:{name:"string"},description:""}}};export{d as I,a};
