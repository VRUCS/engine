import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

function Home() {
  return (
    <Layout
      noFooter={true}
      title="صفحه اصلی"
      description="وبسایت دیتاگیت برای این راه اندازی شده که شاید کمک کوچکی باشه برای کسانی که دوست دارند برنامه نویسی رو یاد بگیرن ولی همیشه فکر میکنن که کار سختیه! توی این وبسایت به هم کمک میکنیم تا مسیر یادگیری رو برای همدیگه آسان تر کنیم."
      keywords={['انجمن علوم کامپیوتر دانشگاه ولی‌عصر']}>
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className={styles.hero__title}>انجمن علوم‌کامپیوتر دانشگاه ولی‌عصر(عج)</h1>
          <Link
            className={clsx(
              'button button--outline button--secondary button--lg',
              styles.getStarted,
            )}
            to={useBaseUrl('blog/')}>
            وبلاگ
            </Link>
            <Link
            className={clsx(
              'button button--outline button--secondary button--lg',
              styles.getStarted,
            )}
            to={useBaseUrl('board/')}>
            بورد
            </Link>
            <Link
            className={clsx(
              'button button--outline button--secondary button--lg',
              styles.getStarted,
            )}
            to={useBaseUrl('docs/')}>
            مستندات
            </Link>
            <Link
            className={clsx(
              'button button--outline button--secondary button--lg',
              styles.getStarted,
            )}
            to={useBaseUrl('element-web/')}>
            المنت - ماتریکس
            </Link>
            <Link
            className={clsx(
              'button button--outline button--secondary button--lg',
              styles.getStarted,
            )}
            to={useBaseUrl('element-web/')}>
            المنت - ماتریکس
            </Link>
        </div>
      </header>
      <footer className={clsx('hero hero--primary', styles.heroFooter)}>
        <div className="container">
          <p className={styles.customHero__subtitle}>VRUCS - 2023</p>
        </div>
      </footer>
    </Layout>
  );
}

export default Home;
