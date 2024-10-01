import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import { Button, Input } from 'adroit-ui';
import { ArrowRight } from 'lucide-react';
import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Docusaurus Tutorial - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Adroit UI - Tailwind Components Library with its Own Design System">
      {/* <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main> */}
      <div className='flex justify-center my-10'>
        <div className='flex flex-col w-[40%] gap-4'>
      <div className=' text-5xl font-bold landing-tagline'>Adroit UI - Tailwind Components Library with its Own Design System</div>
      <div className='text-neutral-11 text-2xl font-medium'>Build your React apps faster with beautifully designed, accessible & responsive components. </div>
      <div className='flex gap-4'>
        <Button size='xl' variant='neutral-primary' label={<div className='flex gap-[10px]'>Get Started <ArrowRight/></div>} radius={'sm'}/>
        <Button size='xl' variant='outline-neutral' label={'Explore Components'} radius={'sm'}/>
      </div>
      </div>
      <div className='relative h-100 w-100'>
        <Input size='lg' placeholder={'Search for components...'} label={'Search'} className={''}/>
        <div className='flex gap-16'>
          <Button size='xl' variant='solid-primary' label={'Get Started'} radius={'sm'}/>
          <Button size='xl' variant='outline-neutral' label={'Explore Components'} radius={'sm'}/>
          <Button size='xl' variant='neutral-primary' label={'Get Started'} radius={'sm'}/>
        </div>
      </div>
      </div>
    </Layout>
  );
}
