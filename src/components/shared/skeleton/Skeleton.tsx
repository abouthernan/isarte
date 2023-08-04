import type { FC } from 'react'
import styles from './skeleton.module.css'
export interface SkeletonProps {
}

export const Skeleton: FC<SkeletonProps> = () => {
  return (
    <>
      <div className={`${styles.skeleton}`} />
      <div className={`${styles.skeleton}`} />
    </>
  )
}

export default Skeleton