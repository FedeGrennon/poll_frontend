import React, { FunctionComponent } from 'react';
import styles from './tag.module.css';

interface Props {
	text: string;
	href: string;
}

export const Tag: FunctionComponent<Props> = ({ text, href }) => {
	return (
		<a href={href} className={styles.tag}>
			#{text}
		</a>
	);
};
