import React from 'react'

import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Layout from '@theme/Layout'
import {
  useVersions,
  useLatestVersion,
} from '@docusaurus/plugin-content-docs/client'

export default () => {
  const { siteConfig } = useDocusaurusContext()
  const versions = useVersions()
  const latestVersion = useLatestVersion()
  const currentVersion = versions.find((version) => version.name === 'current')
  const pastVersions = versions.filter(
    (version) => version !== latestVersion && version.name !== 'current',
  )
  const repoUrl = `https://github.com/${siteConfig.organizationName}/${siteConfig.projectName}`

  console.log(latestVersion)

  return (
    <Layout
      title="Versions"
      permalink="/versions"
      description="Glsass Versions page listing all documented site versions"
    >
      <main className="container margin-vert--lg">
        <h1>Glsass documentation versions</h1>

        {latestVersion && (
          <div className="margin-bottom--lg">
            <h3 id="next">Current version (Stable)</h3>
            <p>
              Here you can find the documentation for current released version.
            </p>
            <table>
              <tbody>
                <tr>
                  <th>{latestVersion.label}</th>
                  <td>
                    <Link to={latestVersion.path}>Documentation</Link>
                  </td>
                  <td>
                    <a
                      href={`${repoUrl}/releases/tag/v${latestVersion.name}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Release Notes
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

        <div className="margin-bottom--lg">
          <h3 id="latest">Next version (Unreleased)</h3>
          <p>
            Here you can find the documentation for work-in-process unreleased
            version.
          </p>
          <table>
            <tbody>
              <tr>
                <th>{currentVersion.label}</th>
                <td>
                  <Link to={currentVersion.path}>Documentation</Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {pastVersions.length > 0 && (
          <div className="margin-bottom--lg">
            <h3 id="archive">Past versions (Not maintained anymore)</h3>
            <p>
              Here you can find documentation for previous versions of Glsass.
            </p>
            <table>
              <tbody>
                {pastVersions.map((version) => (
                  <tr key={version.name}>
                    <th>{version.label}</th>
                    <td>
                      <Link to={version.path}>Documentation</Link>
                    </td>
                    <td>
                      <a
                        href={`${repoUrl}/releases/tag/v${version.name}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Release Notes
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </main>
    </Layout>
  )
}
