import React, { FunctionComponent } from 'react';
import styles from './poll-card.module.css';
import moment from 'moment';
import { Tag } from '../';
import { BiBarChart } from 'react-icons/bi';
import numeral from 'numeral';

interface Props {
	cardInfo: {
		title: string;
		user: string;
		createdAt: Date;
		tags: string[];
		description: string;
		votes: number;
	};
}

export const PollCard: FunctionComponent<Props> = ({ cardInfo }) => {
	return (
		<div className={styles['wrapper']}>
			<div className={styles.card}>
				<div className={styles['title-wrapper']}>
					<span className={styles.title}>{cardInfo.title}</span>
					<span>{moment(cardInfo.createdAt).fromNow()}</span>
				</div>
				<span className={styles.description}>{cardInfo.description}</span>
				<div className={styles.info}>
					<span className={styles['creator-name']}>
						by{' '}
						<span className={styles['creator-username']}>{cardInfo.user}</span>
					</span>
					<span className={styles['votes']}>
						<BiBarChart /> {numeral(cardInfo.votes).format('0.[0]a')}
					</span>
				</div>
			</div>

			<div className={styles.tags}>
				{cardInfo.tags.map((y, n) => (
					<Tag key={n} href="#" text={y} />
				))}
			</div>
		</div>
	);
};
