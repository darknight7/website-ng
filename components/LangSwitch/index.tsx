import { useRouter } from 'next/router'
import React from 'react'
import styles from './index.module.scss'
import classnames from 'classnames'
import Link from 'next/link'

type Props = {}

const LangSwitch: React.FC<Props> = () => {
  const router = useRouter()
  const { locales, locale, route } = router

  return (
    <div className={styles.langSwitch}>
      {locales.map((lang) => {
        return (
          <Link
            key={lang}
            href={route === '/' ? `/${lang}` : route}
            locale={route === '/' ? false : lang}>
            <div
              className={classnames([
                styles.item,
                {
                  [styles.active]: lang === locale,
                },
              ])}>
              {lang}
            </div>
          </Link>
        )
      })}
    </div>
  )
}

export default LangSwitch