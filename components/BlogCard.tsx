import Link from 'next/link'
import React from 'react'
import styles from '../styles/BlogCard.module.css'
import Image from 'next/image'

function BlogCard({title, datePublished, author, slug, coverPhoto}: any) {
  return (
    <div className={styles.card}>
        <Link href={`/posts/${slug}`}>
            <div className={styles.imgContainer}>
                <Image layout="fill" src={coverPhoto.url} />
            </div>
        </Link>
        <div className={styles.text}>
            <h2>{title}</h2>
            <div className={styles.details}>
                <div className={styles.author}>
                    <img src={author.avatar.url} alt="" />
                    <h3>{author.name}</h3>
                </div>
                <div className={styles.date}>
                    <h3>{datePublished}</h3>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BlogCard