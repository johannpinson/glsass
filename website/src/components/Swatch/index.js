import React from 'react'

import styles from './styles.module.scss'

const colors = [
  'gray',
  'primary',
  'secondary',
  'success',
  'danger',
  'warning',
  'info',
]
const variants = [100, 200, 300, 400, 500, 600, 700, 800, 900]

const Swatch = () => (
  <div className={` ${styles['o-row']} `}>
    {colors.map((color, i) => (
      <div
        className={`${styles['o-col']} ${styles['u-6']} ${styles['u-4@tb']}`}
        key={`c-${i}`}
      >
        {variants.map((variant, j) => (
          <p
            className={styles[`p-swatch__${color}--${variant}`]}
            style={{ padding: '1rem', marginBottom: 0 }}
            key={`v-${j}`}
          >
            {color} {variant}
            {color === 'gray' && variant === 100 && ' - light'}
            {color !== 'gray' && variant === 200 && ' - light'}
            {variant === 500 && ' - base'}
            {color !== 'gray' && variant === 700 && ' - dark'}
            {color === 'gray' && variant === 800 && ' - dark'}
          </p>
        ))}
      </div>
    ))}
    <div className={`${styles['o-col']} ${styles['u-6']} ${styles['u-4@tb']}`}>
      <p
        className={styles['p-swatch__white']}
        style={{ padding: '1rem', marginBottom: 0 }}
      >
        white - base
      </p>
      <p
        className={styles['p-swatch__black']}
        style={{ padding: '1rem', marginBottom: 0 }}
      >
        black - base
      </p>
      <p
        className={styles['p-swatch__light']}
        style={{ padding: '1rem', marginBottom: 0 }}
      >
        light - base (gray 100)
      </p>
      <p
        className={styles['p-swatch__dark']}
        style={{ padding: '1rem', marginBottom: 0 }}
      >
        dark - base (gray 800)
      </p>
      <p
        className={styles['p-swatch__text--base']}
        style={{ padding: '1rem', marginBottom: 0 }}
      >
        text - base (gray 900)
      </p>
      <p
        className={styles['p-swatch__text--muted']}
        style={{ padding: '1rem', marginBottom: 0 }}
      >
        text - muted
      </p>
      <p
        className={styles['p-swatch__link']}
        style={{ padding: '1rem', marginBottom: 0 }}
      >
        link - base
      </p>
    </div>
  </div>
)

export default Swatch
