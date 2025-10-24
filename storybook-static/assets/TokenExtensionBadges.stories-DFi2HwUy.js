import{w as i,e as p}from"./index-B7hcRlps.js";import{p as m,t as n}from"./TokenExtensionBadge-BwhcwOGm.js";import{T as c}from"./TokenExtensionBadges-CqJ4LiI6.js";import"./iframe-BSe92rBq.js";import"./index-BAMY2Nnw.js";import"./index-DX4OZ1-D.js";import"./index-OXkWkTkr.js";import"./index-AMtxXvLu.js";import"./sha256-DLE-WUMe.js";import"./jsx-runtime-CcwWnNjF.js";import"./jsx-runtime-BmFMsc7C.js";import"./index-DZZQifJx.js";import"./utils-jAU0Cazi.js";import"./tooltip-DwQQOJxn.js";import"./index-YXZ437_b.js";import"./index-DyBjyqqP.js";const H={component:c,tags:["autodocs"],title:"Components/Common/TokenExtensionBadges"},l={extension:n.extension,parsed:n,...m(n.extension)},t={args:{extensions:new Array(5).fill(null).map(()=>l)},async play({canvasElement:s}){const r=i(s).getAllByRole("button");p(r).toHaveLength(5)}};var o,e,a;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    extensions: new Array(5).fill(null).map(() => extension)
  },
  async play({
    canvasElement
  }) {
    const canvas = within(canvasElement);
    const tooltipButton = canvas.getAllByRole('button');
    expect(tooltipButton).toHaveLength(5);
  }
}`,...(a=(e=t.parameters)==null?void 0:e.docs)==null?void 0:a.source}}};const L=["Primary"];export{t as Primary,L as __namedExportsOrder,H as default};
