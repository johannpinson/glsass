import React, { useEffect } from 'react'

import styles from './styles.module.scss'

export default ({ children, flex, elements }) => {
  useEffect(() => {
    Array.prototype.forEach.call(
      document.querySelectorAll('.markdown [class*="js-debug-"]'),
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

    if (document.querySelector('input[type=file]')) {
      const getNextSibling = (el, selector) => {
        let sibling = el.nextElementSibling

        // If there's no selector, return the first sibling
        if (!selector) return sibling

        // If the sibling matches our selector, use it
        // If not, jump to the next sibling and continue the loop
        while (sibling) {
          if (sibling.matches(selector)) return sibling

          sibling = sibling.nextElementSibling
        }

        return sibling
      }

      Array.prototype.forEach.call(
        document.querySelectorAll('input[type=file]'),
        (input) => {
          const label = getNextSibling(input, 'label')

          input.addEventListener('change', (e) => {
            label.querySelector('span').innerHTML = 'Loading...'

            if (e.target) {
              let text = ''
              const { files } = input
              const multipleText =
                input.getAttribute('data-multiple-caption') ||
                '{count} files selected'

              if (files && files.length > 1) {
                text = multipleText.replace('{count}', files.length.toString())
              } else {
                text = e.target.value.split('\\').pop()
              }

              if (text) {
                label.querySelector('span').innerHTML = text
              }
            }
          })
        },
      )
    }
  }, [])

  return (
    <div
      className={`${styles['m-example']} ${
        elements && styles['m-example--elements']
      }`}
      style={{ display: !!flex ? 'flex' : '' }}
    >
      {children}
    </div>
  )
}
