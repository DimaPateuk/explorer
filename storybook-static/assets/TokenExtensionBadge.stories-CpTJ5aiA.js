import{f as i,w as p,e as m,u as c}from"./index-B7hcRlps.js";import{T as l,p as u,t as o}from"./TokenExtensionBadge-BwhcwOGm.js";import"./iframe-BSe92rBq.js";import"./index-BAMY2Nnw.js";import"./index-DX4OZ1-D.js";import"./index-OXkWkTkr.js";import"./index-AMtxXvLu.js";import"./sha256-DLE-WUMe.js";import"./jsx-runtime-CcwWnNjF.js";import"./jsx-runtime-BmFMsc7C.js";import"./index-DZZQifJx.js";import"./utils-jAU0Cazi.js";import"./tooltip-DwQQOJxn.js";import"./index-YXZ437_b.js";import"./index-DyBjyqqP.js";const R={args:{onClick:i()},component:l,tags:["autodocs"],title:"Components/Common/TokenExtensionBadge"},g={extension:o.extension,parsed:o,...u(o.extension)},t={args:{extension:g},async play({canvasElement:s}){const n=p(s).getByRole("button");m(n).toHaveAttribute("data-slot","tooltip-trigger"),await c.hover(n)}};var e,a,r;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
  args: {
    extension
  },
  async play({
    canvasElement
  }) {
    const canvas = within(canvasElement);
    const tooltipButton = canvas.getByRole('button');
    expect(tooltipButton).toHaveAttribute('data-slot', 'tooltip-trigger');
    await userEvent.hover(tooltipButton);
  }
}`,...(r=(a=t.parameters)==null?void 0:a.docs)==null?void 0:r.source}}};const _=["Primary"];export{t as Primary,_ as __namedExportsOrder,R as default};
