import React, { FunctionComponent } from 'react';
import styles from './search-bar.module.css';
import { RiCloseFill } from 'react-icons/ri';

export const SearchBar: FunctionComponent = () => {
	return (
		<div className={styles['wrapper']}>
			<input
				placeholder="Search #hashtag | user | poll name | category..."
				type="text"
			/>

			<div className={styles['filter-applied-wrapper']}>
				<span className={styles['filter-applied']}>
					#Testing tag 4 <RiCloseFill className={styles.close} />
				</span>
				<span className={styles['filter-applied']}>
					Test <RiCloseFill className={styles.close} />
				</span>
			</div>
		</div>
	);
};
