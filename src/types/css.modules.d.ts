interface TypeOptions {
  allowMultiple?: boolean;
  handleNotFoundStyleName?: 'throw' | 'log' | 'ignore';
}

type StylesObject = any;

interface CSSModules {
  (defaultStyles: StylesObject, options?: TypeOptions): <C extends Function>(
    Component: C
  ) => C;
  <C extends Function>(
    Component: C,
    defaultStyles: StylesObject,
    options?: TypeOptions
  ): C;
}

declare module CSSModules {
  interface InjectedCSSModuleProps {
    styles?: StylesObject;
  }
}

declare let CSSModules: CSSModules;

export = CSSModules;

declare module 'react' {
  interface HTMLAttributes<T = string> {
    styleName?: T | string;
  }
  interface SVGAttributes<T = string> {
    styleName?: T | string;
  }
}
