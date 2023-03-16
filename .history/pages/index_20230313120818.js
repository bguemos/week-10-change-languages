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
    <main>
        <div>

        <img className={styles.image} src="../background.jpeg"></img>
        
        </div>
        <div className={styles.side}>
          <h3>
            <FormattedMessage id="page.home.sidebar"/>
          </h3>
          <li><aFormattedMessage id="page.home.sidebara"/></a></li>
          <li><a>
            <FormattedMessage id="page.home.sidebarb"/>
          </a></li>


        </div>
     

       <div className={styles.maincontent}>
        <h1>
          <FormattedMessage id="page.home.title" values={{ b: (info) => <b>{info}</b>}}/>
        </h1>
        <p className={styles.description}>
          <FormattedMessage id="page.home.description"/>
        </p>
        <h3>
          <FormattedMessage id="page.home.descrip"/>
        </h3>
        <li>
          <FormattedMessage id="page.home.titlea"/>
        </li>
        <li>
          <FormattedMessage id="page.home.titleb"/>
        </li>
        <li>
        <FormattedMessage id="page.home.titlec"/>
        </li>
        <li>
        <FormattedMessage id="page.home.titled"/>
        </li>
        <li>
        <FormattedMessage id="page.home.titlee"/>
        </li>
         <li>
         <FormattedMessage id="page.home.titlef"/>
         </li>
         <li>
         <FormattedMessage id="page.home.titleg"/>
         </li>
         <li>
         <FormattedMessage id="page.home.titleh"/>
         </li>
         <li>
         <FormattedMessage id="page.home.titlei"/>
         </li>
         <li>
         <FormattedMessage id="page.home.titlej"/>
         </li>
         <li>
         <FormattedMessage id="page.home.titlek"/>
         </li>
         <li>
         <FormattedMessage id="page.home.titlel"/>
         </li>
         <h1>
          <FormattedMessage id="page.home.header"/>
         </h1>
         <p>
          <FormattedMessage id="page.home.descriptor"/>
         </p>
         <br></br>
         <p> 
          <FormattedMessage id="page.home.descriptora"/>
         </p>
         </div>
      
        
  
      </main>
    </>
  )
}
