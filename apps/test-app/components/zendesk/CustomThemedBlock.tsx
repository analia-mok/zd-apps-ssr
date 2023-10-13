import { withTheme, IGardenTheme } from '@zendeskgarden/react-theming';

type ThemeWrapperProps = {
    theme: IGardenTheme
    children: any
}

const Div = ({ theme, children }: ThemeWrapperProps) => (
  <div>
    {children}
    {theme.colors.foreground}
</div>
);

const CustomThemedBlock = withTheme(Div)

export default CustomThemedBlock
