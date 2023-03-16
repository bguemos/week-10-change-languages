import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import { useRouter } from 'next/router'
import { FormattedMessage, useIntl } from 'react-intl'
import Link from 'next/link'
import NavBar from '@/components/navbar/navbar'
import TopBar from '@/components/topbar/topbar'


export default function Home({dir}) {

  const { locales } = useRouter();
  const intl = useIntl();

  const title = intl.formatMessage({ id: "page.home.head.title" })
  const description = intl.formatMessage({id: "page.home.head.meta.description"})

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" href="/favicon.ico"  hrefLang='x-default'/>
        <link rel="icon" href="/favicon.ico"  hrefLang='en'/>
        <link rel="icon" href="/favicon.ico"  hrefLang='fr'/>
      </Head>
      <header className={styles.header}>
        <div>
          {[...locales].sort().map((locale) => (
            <Link key={locale} href="/" locale={locale}>
              <div>{locale}</div>
            </Link>
          ))}
        </div>
      </header>
      <TopBar/>
      <NavBar/>
      <div className={styles.bottombar}>
        <h3 className={styles.media}>STUDY</h3>
        <h3 className={styles.media}>BUSINESS AND MEDIA</h3>
        <h3 className={styles.media}> DIGITAL DESIGN AND DEVELOPMENT PROGRAM</h3> </div>
    <main dir={dir} className={styles.main}>
        <Image
        src="/background.jpeg"
        alt=''
        width={800}
        height={533}
        layout="responsive"
        objectFit="cover"


        />
        <h1>
          <FormattedMessage id="page.home.title" values={{ b: (info) => <b>{info}</b>}}/>
        </h1>
        <p className={styles.description}>
          <FormattedMessage id="page.home.description"/>
        </p>
        <h3>
          <FormattedMessage id="page.home.descrip"/>
        </h3>
         
        
  
      </main>
    </>
  )
}
