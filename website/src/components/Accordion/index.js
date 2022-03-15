import React from 'react'

export default ({ withCard }) => {
  return (
    <>
      {withCard ? (
        <>
          <details className="c-card c-accordion u-mb-3">
            <summary className="c-card__header c-accordion__header u-py-2">
              You have a question?
            </summary>
            <div className="c-card__body c-accordion__body">
              We have a super answer for you!
            </div>
          </details>
          <details className="c-card c-accordion">
            <summary className="c-card__header c-accordion__header u-py-2">
              Want to know more?
            </summary>
            <div className="c-card__body c-accordion__body">
              Install the package and try by yourself 😉
            </div>
          </details>
        </>
      ) : (
        <>
          <details className="c-accordion u-mb-2" open>
            <summary className="c-accordion__header">Section 1</summary>
            <div className="c-accordion__body">
              <ul className="o-list-bare u-mb-0">
                <li className="u-py-1 u-pl-3">
                  <a href="#">Subsectionn 1.1</a>
                </li>
                <li className="u-py-1 u-pl-3">
                  <a href="#">Subsectionn 1.2</a>
                </li>
                <li className="u-py-1 u-pl-3">
                  <a href="#">Subsectionn 1.3</a>
                </li>
              </ul>
            </div>
          </details>
          <details className="c-accordion u-mb-2">
            <summary className="c-accordion__header">Section 2</summary>
            <div className="c-accordion__body">
              <ul className="o-list-bare u-mb-0">
                <li className="u-py-1 u-pl-3">
                  <a href="#">Subsectionn 2.1</a>
                </li>
                <li className="u-py-1 u-pl-3">
                  <a href="#">Subsectionn 2.2</a>
                </li>
                <li className="u-py-1 u-pl-3">
                  <a href="#">Subsectionn 2.3</a>
                </li>
              </ul>
            </div>
          </details>
          <details className="c-accordion">
            <summary className="c-accordion__header">Section 3</summary>
            <div className="c-accordion__body">
              <ul className="o-list-bare u-mb-0">
                <li className="u-py-1 u-pl-3">
                  <a href="#">Subsectionn 3.1</a>
                </li>
                <li className="u-py-1 u-pl-3">
                  <a href="#">Subsectionn 3.2</a>
                </li>
                <li className="u-py-1 u-pl-3">
                  <a href="#">Subsectionn 3.3</a>
                </li>
              </ul>
            </div>
          </details>
        </>
      )}
    </>
  )
}
