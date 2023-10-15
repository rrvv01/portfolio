'use client'

import { Typewriter } from 'react-simple-typewriter';

import styles from './TopText.module.css';

export default function TopText() {
    return (
        <>
            <div className={styles.topTitleContainer}>
                <div className={styles.topTitle}>
                    <Typewriter
                        words={[`Geunsoo Kim Page`]}
                        typeSpeed={50}
                    />

                </div>
            </div>

        </>
    )
}