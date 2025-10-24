import{j as n}from"./jsx-runtime-CcwWnNjF.js";import{c as i}from"./utils-jAU0Cazi.js";import{T as o}from"./TokenExtensionBadge-BwhcwOGm.js";function l({className:t,extensions:r,onClick:s}){return n.jsx("div",{className:i("e-flex e-flex-wrap e-gap-2",t),children:r.map((e,a)=>n.jsx(o,{extension:e,label:e.extension,onClick:s},`token-extension-${e.extension}-${a}`))})}l.__docgenInfo={description:"",methods:[],displayName:"TokenExtensionBadges",props:{className:{required:!1,tsType:{name:"string"},description:""},extensions:{required:!0,tsType:{name:"Array",elements:[{name:"intersection",raw:`Pick<TokenExtension, 'extension'> & {
    name: string;
    tooltip?: string;
    description?: string;
    status: StatusType;
    externalLinks: { label: string; url: string }[];
    parsed?: TokenExtension['state'];
}`,elements:[{name:"Pick",elements:[{name:"Infer",elements:[{name:"TokenExtension"}],raw:"Infer<typeof TokenExtension>"},{name:"literal",value:"'extension'"}],raw:"Pick<TokenExtension, 'extension'>"},{name:"signature",type:"object",raw:`{
    name: string;
    tooltip?: string;
    description?: string;
    status: StatusType;
    externalLinks: { label: string; url: string }[];
    parsed?: TokenExtension['state'];
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"tooltip",value:{name:"string",required:!1}},{key:"description",value:{name:"string",required:!1}},{key:"status",value:{name:"union",raw:"'active' | 'inactive'",elements:[{name:"literal",value:"'active'"},{name:"literal",value:"'inactive'"}],required:!0}},{key:"externalLinks",value:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ label: string; url: string }",signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"url",value:{name:"string",required:!0}}]}}],raw:"{ label: string; url: string }[]",required:!0}},{key:"parsed",value:{name:"Infer['state']",raw:"TokenExtension['state']",required:!1}}]}}]}],raw:"ParsedTokenExtension[]"},description:""},onClick:{required:!1,tsType:{name:"ComponentProps['onClick']",raw:"ComponentProps<typeof TokenExtensionBadge>['onClick']"},description:""}}};export{l as T};
