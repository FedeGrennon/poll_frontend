import type { NextPage } from 'next';
import styles from '../styles/home.module.css';
import { Header } from '../components';

const CreatePoll: NextPage = () => {
	return (
		<div className={styles.container}>
			<Header />

			<main className={styles.main}>Test</main>
		</div>
	);
};

export default CreatePoll;
