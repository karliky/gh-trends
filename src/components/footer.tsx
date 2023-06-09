import Image from 'next/image';

import styles from '@/styles/home.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            Built with love
            <Image src="/heart.svg" height={16} width={16} alt='Love' /> by <a href="http://www.karliky.com/" target='_blanket'>Karliky</a>
            <div className={styles.top}>
                <Image className={styles.zoom} src="/logo.png" height={55} width={55} alt='Octocat' />
            </div>
        </footer>
    )
}