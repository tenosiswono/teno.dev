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
        <p className="mb-6">
          In addition to my main responsibilities, I am also exploring full-stack JavaScript
          development. As part of this exploration, I have built a project called "auction" which
          can be found at{' '}
          <a
            href="https://github.com/tenosiswono/auction"
            className="text-primary-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://github.com/tenosiswono/auction
          </a>
          . This exercise project is built using the following technologies:
        </p>
        <ol className="mb-6 list-decimal pl-8">
          <li>Next.js as the base framework</li>
          <li>NextAuth.js for authentication</li>
          <li>Prisma as the database ORM</li>
          <li>Tailwind CSS as the CSS framework</li>
          <li>tRPC for end-to-end typesafe APIs</li>
          <li>Supabase for image uploading and Postgres server</li>
          <li>Inngest for handling background jobs, crons, webhooks, and workflows</li>
          <li>Vitest as the test framework</li>
          <li>Pusher for WebSocket communication to handle real-time data</li>
        </ol>
        <p className="mb-6">
          For my next exercise project, I plan to build a no-code platform. Drawing from my
          experience in modifying and extending Grafana, I want to create a more universal platform
          that allows users to build custom websites without writing code. I intend to leverage
          t3stacks, similar to my previous exercise project, to streamline the development process
          and maintain consistency across projects.
        </p>
      </div>
    </LayoutWrapper>
  )
}
