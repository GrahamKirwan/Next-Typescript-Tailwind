import Link from 'next/link'
import React from 'react'
import styles from '../styles/BlogCard.module.css'

function BlogCard({title, datePublished, author, slug, coverPhoto}: any) {
  return (
    <div className={styles.card}>
        <Link href={''}>
            <div className={styles.imgContainer}>
                <img src={coverPhoto.url}></img>
                <p>{title}</p>
                <p>{datePublished}</p>
            </div>
        </Link>
    </div>
  )
}

export default BlogCard