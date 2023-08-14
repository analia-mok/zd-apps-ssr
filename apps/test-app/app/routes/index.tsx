import { Components } from '@zd-apps-ssr/components'

export default function Index() {
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.4' }}>
      <h1>Test App</h1>
      <p>Example import from component library</p>
      <Components />
    </div>
  );
}
