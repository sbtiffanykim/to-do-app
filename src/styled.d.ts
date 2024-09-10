import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    bgColor: string;
    textColor: string;
    accentColor: string;
    buttonBgColor: string;
    buttonHoverBgColor: string;
    buttonTextColor: string;
    borderColor: string;
  }
}
