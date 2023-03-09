import { PageProps } from '@/.next/types/app/page';
import Link from 'next/link';

export default async function Todo({ params }: PageProps) {
	const res = await fetch(
		`https://jsonplaceholder.typicode.com/todos/${params.id}`
	);
	const todo: { id: string; title: string } = await res.json();

	return (
		<div>
			<Link href="/">Home</Link>
			<h1>{todo.title}</h1>
		</div>
	);
}
