import React from 'react'

export default ({ version, source }) => {
  return (
    <div className="o-row u-jc-sb u-ai-c u-mb-4">
      <div className="o-col u-6">
        {version && (
          <div className="c-badge u-bg-white u-bs">Since v{version}</div>
        )}
      </div>
      <div className="o-col u-6 u-ta-r">
        {source && (
          <a
            href={`https://github.com/johannpinson/glsass/tree/main/packages/${source}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              aria-hidden="true"
              role="img"
              viewBox="0 0 16 16"
              width="16"
              height="16"
              fill="currentColor"
              style={{
                display: 'inline-block',
                userSelect: 'none',
                verticalAlign: 'text-bottom',
                marginRight: '4px',
              }}
            >
              <path
                fillRule="evenodd"
                d="M4.72 3.22a.75.75 0 011.06 1.06L2.06 8l3.72 3.72a.75.75 0 11-1.06 1.06L.47 8.53a.75.75 0 010-1.06l4.25-4.25zm6.56 0a.75.75 0 10-1.06 1.06L13.94 8l-3.72 3.72a.75.75 0 101.06 1.06l4.25-4.25a.75.75 0 000-1.06l-4.25-4.25z"
              ></path>
            </svg>
            View source
          </a>
        )}
      </div>
    </div>
  )
}
