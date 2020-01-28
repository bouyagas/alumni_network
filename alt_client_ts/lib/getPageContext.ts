import green from '@material-ui/core/colors/green';
import purple from '@material-ui/core/colors/purple';
import { createMuiTheme, Theme } from '@material-ui/core/styles';
// @ts-ignore
import { MuiThemeProviderProps } from '@material-ui/core/styles/MuiThemeProvider';
import { createGenerateClassName } from '@material-ui/styles';
//@ts-ignore
import { GenerateClassName, SheetsRegistry } from 'jss';

// A theme with custom primary and secondary color.
// It's optional.
const theme: Theme = createMuiTheme({
  palette: {
    primary: {
      light: purple[300],
      main: purple[500],
      dark: purple[700]
    },
    secondary: {
      light: green[300],
      main: green[500],
      dark: green[700]
    }
  },
  typography: {
    // @ts-ignore
    useNextVariants: true
  }
});

export interface PageContext extends MuiThemeProviderProps {
  sheetsManager: {} | undefined;
  theme: Theme;
  generateClassName: GenerateClassName<string>; // not sure what goes here
  sheetsRegistry: SheetsRegistry;
}

export const getPageContext = (): PageContext => {
  return {
    // @ts-ignore
    theme,
    // This is needed in order to deduplicate the injection of CSS in the page.
    sheetsManager: new Map(),
    // This is needed in order to inject the critical CSS.
    sheetsRegistry: new SheetsRegistry(),
    // The standard class name generator.
    generateClassName: createGenerateClassName()
  };
};
