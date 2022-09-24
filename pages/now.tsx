import LayoutWrapper from '@/components/LayoutWrapper'
import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'

export default function Now() {
  return (
    <LayoutWrapper>
      <PageSEO title={`Now - ${siteMetadata.author}`} description="What I'm working on now" />
      <div>
        <div className="my-2">
          <h3>Where am I and what am I doing?</h3>
          <div className="mt-3 mb-4 text-sm">Last updated: 24 September 2022</div>
        </div>
        {/* Misc */}
        Nothing
      </div>
    </LayoutWrapper>
  )
}
