import { ThemeProvider, DEFAULT_THEME } from '@zendeskgarden/react-theming'
import { LG, XXL, Blockquote, Code } from '@zendeskgarden/react-typography'
import CustomThemedBlock from 'apps/test-app/components/zendesk/CustomThemedBlock'
import { Combobox, Field, Label, Option } from '@zendeskgarden/react-dropdowns.next'
import { ClientOnly } from 'remix-utils'
import { json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { Skeleton } from '@zendeskgarden/react-loaders'

export const loader = async () => {
  return json({
    items: ['apple', 'banana', 'orange'],
  })
}

export default function Index() {
  const { items } = useLoaderData<typeof loader>()

  return (
    <ThemeProvider theme={DEFAULT_THEME}>
      <LG>Hi</LG>
      <Blockquote>I am text</Blockquote>
      <CustomThemedBlock>Custom Component</CustomThemedBlock>
      <Code hue="green">Test Code</Code>

      <ClientOnly fallback={<XXL><Skeleton /></XXL>}>
        {() => (
          <Field>
            <Label>Choose a fruit</Label>
            <Combobox isEditable={false}>
              {items.map((item, index) => (
                <Option value={item} key={item} isSelected={index === 0} />
              ))}
            </Combobox>
          </Field>
        )}
      </ClientOnly>
    </ThemeProvider>
  )
}
