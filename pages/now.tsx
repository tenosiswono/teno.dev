import LayoutWrapper from '@/components/LayoutWrapper'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'

export default function Now() {
  return (
    <LayoutWrapper>
      <PageSEO title={`Now - ${siteMetadata.author}`} description="What I'm working on now" />
      <div>
        <div className="my-2">
          <h3>Where am I and what am I doing?</h3>
          <div className="mt-3 mb-4 text-sm">Last updated: 27 May 2023</div>
        </div>
        <p className="mb-6">
          I currently work in the Merchant Platform team at GoTo (Gojek Tokopedia Hold Co), where we
          are focused on building an analytics platform for the entire GoTo ecosystem. Our goal is
          to create a no-code analytics platform using Grafana as the foundation. We have extended
          Grafana's capabilities, including customizing dashboard styles, internalizing dashboard
          configurations, implementing dynamic custom role-based dashboards, and integrating it with
          our identity platform.
        </p>
        <p className="mb-6">The technology stack we are using for this project includes:</p>
        <ol className="mb-6 list-decimal pl-8">
          <li>React</li>
          <li>TypeScript</li>
          <li>Grafana framework</li>
          <li>Jest for testing</li>
          <li>Microfrontend architecture</li>
          <li>Golang</li>
          <li>React hooks</li>
          <li>React Router</li>
          <li>i18n for internationalization</li>
        </ol>
      </div>
    </LayoutWrapper>
  )
}
