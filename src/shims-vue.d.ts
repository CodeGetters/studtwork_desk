declare module "*.vue" {
  import type { DefineComponent } from "vue/dist/vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

declare module "*.md" {
  import type { ComponentOptions } from "vue";
  const component: ComponentOptions;
  export default component;
}
