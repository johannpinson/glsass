import React, { useEffect } from 'react'

// Note: importing from "@theme/Layout" would fail due to the file importing itself
import OriginalLayout from '@theme-original/Layout'

import '../css/main.scss'

export default function Layout(props) {
  useEffect(() => {
    Array.prototype.forEach.call(
      document.querySelectorAll('.navbar [class*="js-debug-"]'),
      (el) => {
        const className = Array.prototype.find.call(el.classList, (c) =>
          c.includes('js-debug'),
        )
        const utility = className.split('-')[className.split('-').length - 1]

        el.addEventListener('click', () => {
          if (
            !document
              .querySelector('#__docusaurus')
              .className.includes(`debug:${utility}`)
          ) {
            document
              .querySelector('#__docusaurus')
              .classList.add(`debug:${utility}`)
            el.innerText = `${el.innerText} ✓`

            return
          }

          document
            .querySelector('#__docusaurus')
            .classList.remove(`debug:${utility}`)
          el.innerText = el.innerText.replace(' ✓', '')
        })
      },
    )
  }, [])

  return (
    <>
      <OriginalLayout {...props} />
    </>
  )
}
