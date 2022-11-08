declare module "*.module.scss" {
  const styles: { readonly [key: string]: string };
  export default styles;
}

declare const self: Window & ServiceWorkerGlobalScope;
