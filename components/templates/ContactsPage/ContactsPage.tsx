import { useStore } from 'effector-react'
import { $mode } from '@/context/mode'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import styles from '@/styles/contacts/index.module.scss'
import MailSvg from '@/components/elements/MailSvg/MailSvg'
import FeedbackForm from '@/components/modules/FeedbackForm/FeedbackForm'

const ContactsPage = ({ isWholesaleBuyersPage = false }) => {
  const mode = useStore($mode)
  const isMobile560 = useMediaQuery(560)
  const darkModeClass = mode === 'dark' ? `${styles.dark_mode}` : ''

  return (
    <section className={styles.contacts}>
      <div className="container">
        <h2 className={`${styles.contacts__title} ${darkModeClass}`}>
          {isWholesaleBuyersPage ? 'Оптовым покупателям' : 'Контакты'}
        </h2>
        <div className={styles.contacts__inner}>
          {isWholesaleBuyersPage ? (
            <div className={`${styles.contacts__list} ${darkModeClass}`}>
              <p>
                <span>
                  Умови оптових замовлень вирішуються індивідуально за
                  телефоном:{' '}
                </span>
                <span>+380 68 702 8385</span>
              </p>
              <p>
                Або опишіть суть замовлення у формі зворотного зв&apos;язку і ми
                зв&apos;яжемося з вами.
              </p>
            </div>
          ) : (
            <ul className={`${styles.contacts__list} ${darkModeClass}`}>
              <li className={styles.contacts__list__title}>
                <h3 className={darkModeClass}>
                  Магазин деталей для газових котлів
                </h3>
              </li>
              <li className={`${styles.contacts__list__item} ${darkModeClass}`}>
                <span>Офис:</span>
                <span> м. Київ, ул. ... д....</span>
              </li>
              <li className={`${styles.contacts__list__item} ${darkModeClass}`}>
                <span>Склад:</span>
                <span> м. Київ, ул. ... д....</span>
              </li>
              <li className={`${styles.contacts__list__item} ${darkModeClass}`}>
                <span>Графік работи офіса:</span>
                <span> пн-пн: с 8:00 до 22:00</span>
              </li>
              <li className={`${styles.contacts__list__item} ${darkModeClass}`}>
                <span>Наш контактний телефон:</span>
                <span> +380 68 702 8385</span>
              </li>
              <li className={`${styles.contacts__list__item} ${darkModeClass}`}>
                <span>Время приемок завок:</span>
                <span> Пн-Вс: с 8:00 до 22:00</span>
              </li>
              <li className={`${styles.contacts__list__item} ${darkModeClass}`}>
                <span>Прийом замовлень електронним способом на сайті:</span>
                <span> цілодобово</span>
              </li>
              <li className={`${styles.contacts__list__item} ${darkModeClass}`}>
                <span>E-mail:</span>
                <span className={styles.contacts__list__item__mail}>
                  {!isMobile560 && <MailSvg />}{' '}
                  <span>info@zapchasti.com.ua</span>
                </span>
              </li>
            </ul>
          )}
          <FeedbackForm />
        </div>
      </div>
    </section>
  )
}

export default ContactsPage
