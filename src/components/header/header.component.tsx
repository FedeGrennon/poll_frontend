import React, { FunctionComponent, useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './header.module.css';

export const Header: FunctionComponent = () => {
	const [position, setPosition] = useState(0);
	const [visible, setVisible] = useState(true);
	const OFFSET_TO_HIDDEN_HEAD = 160;

	useEffect(() => {
		if (!window) return;

		const handleScroll = () => {
			const moving = window.pageYOffset;

			setVisible(position < OFFSET_TO_HIDDEN_HEAD || position > moving);
			setPosition(moving);
		};
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [position]);

	return (
		<header className={styles.main} aria-hidden={!visible}>
			<nav className={styles.navbar}>
				<Link href="/">
					<a className={styles.logo}>Poll</a>
				</Link>

				<ul>
					<li>
						<Link href="/create">
							<a>
								<span>Create Poll</span>
							</a>
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};
