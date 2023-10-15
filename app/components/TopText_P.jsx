'use client'

import { Typewriter } from 'react-simple-typewriter';

import styles from './TopText.module.css';

export default function TopText_P() {
    return (
        <>
            <div className={styles.topTitleContainer}>
                <div className={styles.topTitle}>
                    <Typewriter
                        words={[`Roringpaper Project`]}
                        typeSpeed={100}
                    />
                </div>
            </div>
            <div className={styles.topTitleAdaptive}>
                <div className={styles.topTitle}>
                    <Typewriter
                        words={[`Poringpaper`]}
                        typeSpeed={100}
                    />
                    <Typewriter
                        words={[`Project`]}
                        typeSpeed={100}
                    />
                </div>
            </div>
        </>
    )
}