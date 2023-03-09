import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from './page.module.css';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export default async function Home() {
	const todosRes = await fetch('https://jsonplaceholder.typicode.com/todos');
	const todos: Array<{ id: string; title: string }> = await todosRes.json();

	return (
		<main className={styles.main}>
			<div className={styles.description}>
				<ul>
					{todos.map((t) => (
						<li key={t.id}>
							<Link href={`/todos/${t.id}`}>{t.title}</Link>
						</li>
					))}
				</ul>
			</div>
		</main>
	);
}
