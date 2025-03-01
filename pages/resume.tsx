'use client'

import { PageSEO } from '@/components/SEO'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faMapMarkerAlt,
  faGlobe,
  faPhone,
  faEnvelope,
  faDownload,
} from '@fortawesome/free-solid-svg-icons'
import siteMetadata from '@/data/siteMetadata'
import LayoutWrapper from '@/components/LayoutWrapper'

export default function ResumePage() {
  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = '/static/pdf/CV - TENO SISWONO.pdf'
    link.download = 'CV - TENO SISWONO.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <LayoutWrapper>
      <PageSEO
        title={`Resume - ${siteMetadata.author}`}
        description={'Professional resume of Teno Siswono'}
      />
      <div>
        <div className="mx-auto overflow-hidden rounded-lg bg-white shadow-lg print:shadow-none">
          {/* Header Section */}
          <header className="bg-gray-800 px-6 py-8 text-white">
            <div className="flex flex-col items-start justify-between md:flex-row md:items-center">
              <div>
                <h1 className="text-3xl font-bold tracking-wide">TENO SISWONO</h1>
                <p className="mt-2 text-gray-300">Senior Frontend Engineer</p>
              </div>
              <div className="mt-4 md:mt-0">
                <div className="flex flex-col space-y-1">
                  <div className="flex items-center">
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="w-5 text-gray-300" />
                    <span className="ml-2">Jakarta, Indonesia</span>
                  </div>
                  <div className="flex items-center">
                    <FontAwesomeIcon icon={faGlobe} className="w-5 text-gray-300" />
                    <a href="https://teno.dev" className="ml-2 transition hover:text-blue-300">
                      https://teno.dev
                    </a>
                  </div>
                  <div className="flex items-center">
                    <FontAwesomeIcon icon={faPhone} className="w-5 text-gray-300" />
                    <span className="ml-2">(62) 85725329039</span>
                  </div>
                  <div className="flex items-center">
                    <FontAwesomeIcon icon={faEnvelope} className="w-5 text-gray-300" />
                    <a
                      href="mailto:tenosiswono@gmail.com"
                      className="ml-2 transition hover:text-blue-300"
                    >
                      tenosiswono@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </header>

          {/* Main Content */}
          <main className="p-6">
            {/* Summary Section */}
            <section className="mb-8">
              <h2 className="mb-4 border-b-2 border-gray-800 pb-2 text-xl font-bold text-gray-800">
                SUMMARY
              </h2>
              <p className="leading-relaxed text-gray-700">
                I am a Senior Frontend Engineer with 10+ years of experience, specializing in React,
                TypeScript, and micro-front-end architecture. At GoTo Gojek Tokopedia, I have led
                major projects like GoFood Merchant Rebranding, Gopay Merchant Onboarding, and
                Merchant Analytics using Grafana, driving front-end modernization and scalability.
                Previously, at Bukalapak, I designed and maintained the Seller Bukalapak Web,
                implemented TDD, and mentored engineers. I am passionate about building
                high-performance web applications and solving complex engineering challenges. In my
                latest performance review, I was rated 4/5 for Significant Impact, recognizing my
                contributions to technical leadership, scalability, and system improvements.
              </p>
            </section>

            {/* Experience Section */}
            <section className="mb-8">
              <h2 className="mb-4 border-b-2 border-gray-800 pb-2 text-xl font-bold text-gray-800">
                EXPERIENCE
              </h2>

              {/* GoTo */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-800">
                  GoTo Gojek Tokopedia, Jakarta — Senior Frontend Engineer
                </h3>
                <p className="font-medium text-gray-600">July 2021 - Present (3 yrs 8 mos)</p>
                <p className="mt-1 mb-2 italic text-gray-600">
                  A unicorn startup and Indonesia's leading technology company in ride-hailing, food
                  delivery, e-commerce, and financial technology.
                </p>
                <ul className="ml-5 list-outside list-disc space-y-1 text-gray-700">
                  <li>
                    Led the GoFood Merchant Dashboard Rebranding project using the latest UI
                    library.
                  </li>
                  <li>Upgraded a 5-year-old codebase to the latest React & TypeScript versions.</li>
                  <li>
                    Built Gocorp Onboarding (B2B) with DocuSign Integration and Harmonia Flow
                    Engine.
                  </li>
                  <li>Delivered Gopay Merchant Onboarding under tight deadlines.</li>
                  <li>
                    Improved Micro-frontend implementation in Gobiz Zeus Portal and Gobiz Dashboard.
                  </li>
                  <li>
                    Led and architected Merchant Analytics view using Customized Grafana and Grafana
                    Plugin.
                  </li>
                  <li>Wrote clean, tested code using React, TypeScript, and React Hooks.</li>
                </ul>
                <p className="mt-3 text-gray-700">
                  <span className="font-medium">Technologies:</span> React, React Hooks, TypeScript,
                  Micro-frontend, Module Federation, ESModule, Webpack, Vite, D3, Chart.js, Uplot,
                  Grafana, Node.js, MobX, React Testing Library, Jest, DocuSign.
                </p>
              </div>

              {/* Bukalapak */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-800">
                  Bukalapak.com, Jakarta — Senior Frontend Developer
                </h3>
                <p className="font-medium text-gray-600">March 2018 - July 2021 (3 yrs 5 mos)</p>
                <p className="mt-1 mb-2 italic text-gray-600">
                  One of Indonesia's largest e-commerce platforms, empowering small and medium
                  businesses.
                </p>
                <ul className="ml-5 list-outside list-disc space-y-1 text-gray-700">
                  <li>
                    Architected and maintained Seller Bukalapak Web using Express, Vue, Nuxt, Vuex,
                    and Jest.
                  </li>
                  <li>
                    Migrated features from Ruby on Rails Monolith to a modernized codebase in Vue.
                  </li>
                  <li>
                    Implemented TDD practices and coached engineers on best testing strategies.
                  </li>
                  <li>Provided technical leadership and mentorship to junior developers.</li>
                </ul>
                <p className="mt-3 text-gray-700">
                  <span className="font-medium">Technologies:</span> Vue, Vuex, Nuxt, TypeScript,
                  JavaScript, Ruby on Rails, Webpack, SASS, Micro-frontend, Express, Node.js, Vue
                  Testing Library, Jest, Cypress (E2E Testing).
                </p>
              </div>

              {/* Xcidic */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-800">
                  PT Xcidic Teknologi Indonesia, Jakarta — Head of Engineering
                </h3>
                <p className="font-medium text-gray-600">August 2016 - March 2018 (1 yr 8 mos)</p>
                <p className="mt-1 mb-2 italic text-gray-600">
                  A software development firm specializing in custom IT solutions.
                </p>
                <ul className="ml-5 list-outside list-disc space-y-1 text-gray-700">
                  <li>
                    Led front-end architecture decisions and improved application performance.
                  </li>
                  <li>Introduced a component-based UI library for client applications.</li>
                  <li>Architected CI/CD pipelines to automate deployments.</li>
                  <li>Hired and mentored new engineers.</li>
                </ul>
                <p className="mt-3 text-gray-700">
                  <span className="font-medium">Technologies:</span> React, Angular, Redux, MongoDB,
                  PostgreSQL, Express, Node.js, Figma, Next.js, Ansible, Bitbucket Pipeline.
                </p>
              </div>

              {/* Astra International */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-800">
                  PT Astra International Tbk, Jakarta — .NET Developer
                </h3>
                <p className="font-medium text-gray-600">August 2014 - August 2016 (2 yrs 1 mo)</p>
                <p className="mt-1 mb-2 italic text-gray-600">
                  A major Indonesian company with an IT division that develops and maintains
                  enterprise software, ERP systems, and IT infrastructure.
                </p>
                <ul className="ml-5 list-outside list-disc space-y-1 text-gray-700">
                  <li>
                    Developed ERP applications using C#, ASP.NET, MVC, WebAPI, jQuery, and
                    AngularJS.
                  </li>
                  <li>
                    Designed CI pipelines for QA/Staging environments using Jenkins, Cruise Control,
                    and PowerShell.
                  </li>
                  <li>Managed script validation and deployment to production servers.</li>
                </ul>
                <p className="mt-3 text-gray-700">
                  <span className="font-medium">Technologies:</span> C#, ASP.NET, MVC.NET, Angular,
                  jQuery, MSSQL, Jenkins.
                </p>
              </div>

              {/* UPT PUSKOM */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-800">
                  UPT PUSKOM Universitas Sebelas Maret Surakarta — Junior Software Developer
                  (part-time)
                </h3>
                <p className="font-medium text-gray-600">March 2012 - August 2014 (2 yrs 6 mos)</p>
                <p className="mt-1 mb-2 italic text-gray-600">
                  The university's IT business unit, responsible for managing and developing its
                  digital infrastructure.
                </p>
                <ul className="ml-5 list-outside list-disc space-y-1 text-gray-700">
                  <li>
                    Developed internal applications using PHP, Yii Framework, MySQL, PostgreSQL, and
                    jQuery.
                  </li>
                  <li>
                    Integrated Google for Education services and implemented Google Single Sign-On
                    (SSO).
                  </li>
                  <li>Provided IT training for new students.</li>
                  <li>
                    Designed and built an online student admission system for educational
                    institutions.
                  </li>
                </ul>
                <p className="mt-3 text-gray-700">
                  <span className="font-medium">Technologies:</span> PHP, Yii Framework, MySQL,
                  PostgreSQL, jQuery, Google Suite, IT Training, System Development.
                </p>
              </div>
            </section>

            {/* Education Section */}
            <section className="mb-8">
              <h2 className="mb-4 border-b-2 border-gray-800 pb-2 text-xl font-bold text-gray-800">
                EDUCATION
              </h2>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Universitas Sebelas Maret, Surakarta, Indonesia
                </h3>
                <p className="text-gray-700">Bachelor's Degree in Computer Science (2009 - 2014)</p>
                <p className="text-gray-700">GPA: 3.66/4.00</p>
              </div>
            </section>

            {/* Volunteering Section */}
            <section className="mb-8">
              <h2 className="mb-4 border-b-2 border-gray-800 pb-2 text-xl font-bold text-gray-800">
                VOLUNTEERING
              </h2>

              {/* GoTo Impact Foundation */}
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  GoTo Impact Foundation — Engineering Mentor
                </h3>
                <p className="font-medium text-gray-600">May 2022 - August 2022</p>
                <ul className="ml-5 list-outside list-disc text-gray-700">
                  <li>Mentored Frontend Engineers during their Generasi Gigih 2022 internship.</li>
                </ul>
              </div>

              {/* Universitas Sebelas Maret */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Universitas Sebelas Maret — Engineering Mentor
                </h3>
                <p className="font-medium text-gray-600">June 2021 - November 2023</p>
                <ul className="ml-5 list-outside list-disc text-gray-700">
                  <li>
                    Mentored students on the ERP Education System Project at Universitas Sebelas
                    Maret.
                  </li>
                  <li>Provided React lessons to students.</li>
                </ul>
              </div>
            </section>
          </main>

          {/* Footer */}
          <footer className="bg-gray-100 px-6 py-4 text-center text-sm text-gray-600">
            <p>Teno Siswono - Senior Frontend Engineer</p>
          </footer>
          {/* Print button - visible only on screen */}
          <div className="mt-6 mb-6 text-center print:hidden">
            <button
              onClick={handleDownload}
              className="mx-auto flex flex-col justify-between rounded bg-gray-800 px-6 py-2 text-white transition hover:bg-gray-700 md:flex-row"
            >
              <FontAwesomeIcon icon={faDownload} className="mr-2 w-5" /> Download Resume
            </button>
          </div>
        </div>
      </div>
    </LayoutWrapper>
  )
}
