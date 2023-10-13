import { ThemeProvider, DEFAULT_THEME } from '@zendeskgarden/react-theming'
import { LG, Blockquote, Code } from '@zendeskgarden/react-typography'
import CustomThemedBlock from 'apps/test-app/components/zendesk/CustomThemedBlock'

export default function Index() {
  return (
    <ThemeProvider theme={DEFAULT_THEME}>
      {/* <Text>Hello World</Text> */}
      <LG>Hi</LG>
      <Blockquote>I am text</Blockquote>
      <CustomThemedBlock>Custom Component</CustomThemedBlock>
      <Code hue="green">Test Code</Code>
    </ThemeProvider>
  )
}
