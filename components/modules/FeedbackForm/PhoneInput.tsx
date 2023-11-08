import { IFeedbackInput } from '@/types/feedbackForm'
import styles from '@/styles/feedbackForm/index.module.scss'

const PhoneInput = ({ register, errors, darkModeClass }: IFeedbackInput) => (
  <label className={`${styles.feedback_form__form__label} ${darkModeClass}`}>
    <span>Телефон *</span>
    <input
      className={styles.feedback_form__form__input}
      placeholder="+390 68 702 8385"
      type="tel"
      {...register('phone', {
        required: 'Введіть телефон!',
        pattern: {
          value: /^\d*[1-9]\d*$/,
          message: 'Некоректне значення',
        },
        minLength: 11,
        maxLength: 11,
      })}
    />
    {errors.phone && (
      <span className={styles.error_alert}>{errors.phone?.message}</span>
    )}
    {errors.phone && errors.phone.type === 'minLength' && (
      <span className={styles.error_alert}>Мінімум 11 цифр!</span>
    )}
    {errors.phone && errors.phone.type === 'maxLength' && (
      <span className={styles.error_alert}>Не більше ніж 11 цифр!</span>
    )}
  </label>
)

export default PhoneInput
