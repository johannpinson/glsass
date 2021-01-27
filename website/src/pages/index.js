import React from 'react'
import clsx from 'clsx'
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import useBaseUrl from '@docusaurus/useBaseUrl'
import styles from './styles.module.css'

const features = [
  {
    title: 'Common components',
    imageUrl: 'img/undraw_design_components.svg',
    description: (
      <>
        Glsass give access to common components to start easily your next
        styling project following the <strong>exitCSS</strong> convention.
      </>
    ),
  },
  {
    title: 'Focus on Responsive',
    imageUrl: 'img/undraw_responsive.svg',
    description: (
      <>
        Thinking with mobile-first logic, take the advantage of utilities
        classes to fastly build your custom layout
      </>
    ),
  },
  {
    title: 'Great for building websites',
    imageUrl: 'img/undraw_building_websites.svg',
    description: (
      <>
        Customize the <code>Sass</code> variables and make your website layout
        looking to the design expected. You can extend it with your own concepts
        and reuse internals mixins and functions.
      </>
    ),
  },
]

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl)
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}

function Home() {
  const context = useDocusaurusContext()
  const { siteConfig = {} } = context
  return (
    <Layout title={`Hello from ${siteConfig.title}`}>
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  )
}

export default Home
