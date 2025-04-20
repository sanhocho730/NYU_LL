'use client';
import { useRouter } from 'next/navigation';
import styles from './BackButton.module.css'

export default function BackButton(){
    const router = useRouter()

    return <button className={styles.main} onClick = {()=>router.back()}>
        &lt; Back
    </button>
}