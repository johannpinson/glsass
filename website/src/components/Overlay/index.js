import React, { useEffect } from 'react'

export default () => {
  useEffect(() => {
    function handlerClick(e, overlay) {
      overlay.classList.remove('is-visible')
      this.removeEventListener('click', handlerClick)
    }

    function handlerEscape(e, overlay) {
      if (e.keyCode === 27) {
        overlay.classList.remove('is-visible')
        this.removeEventListener('keydown', handlerEscape)
      }
    }

    if (document.querySelector('.js-overlay')) {
      document.querySelector('.js-overlay').addEventListener('click', (e) => {
        e.preventDefault()
        const overlay = e.target.nextElementSibling
        overlay.classList.toggle('is-visible')

        overlay.addEventListener('click', (e) => handlerClick(e, overlay))

        document.body.addEventListener('keydown', (e) =>
          handlerEscape(e, overlay),
        )
      })
    }
  }, [])

  return <div className="o-overlay"></div>
}
