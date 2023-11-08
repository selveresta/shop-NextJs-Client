/* eslint-disable @next/next/no-img-element */
import { useStore } from 'effector-react'
import { $mode } from '@/context/mode'
import styles from '@/styles/about/index.module.scss'

const AboutPage = () => {
  const mode = useStore($mode)
  const darkModeClass = mode === 'dark' ? `${styles.dark_mode}` : ''

  return (
    <section className={styles.about}>
      <div className="container">
        <h2 className={`${styles.about__title} ${darkModeClass}`}>
          Про компанію
        </h2>
        <div className={styles.about__inner}>
          <div className={`${styles.about__info} ${darkModeClass}`}>
            <p>
              Компанія &quot;АкваТермікс&quot; пропонує Вам запасні частини для
              європейських, корейських та вітчизняних газових та електричних
              казанів. 99% запчастин представлених на сайті постійно
              підтримуються у наявності на нашому складі.
            </p>
            <p>
              Асортимент інтернет-магазину &quot;АкваТермікс&quot; включає в
              запасні частини для котлів Arderia, Ariston, Baxi, Beretta, Bosch,
              Buderus, Chaffoteaux, De Dietrich, Demrad, Electrolux, Ferroli,
              Fondital, Immergas, Junkers, Koreastar, Nova Florida, Saunier
              Duval, Sime, Tiberis, Vaillant, Viessmann, Westen.
            </p>
          </div>
          <div className={`${styles.about__img} ${styles.about__img__top}`}>
            <img src="/img/about-img.png" alt="image-1" />
          </div>
          <div className={`${styles.about__img} ${styles.about__img__bottom}`}>
            <img src="/img/about-img-2.png" alt="image-2" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutPage
