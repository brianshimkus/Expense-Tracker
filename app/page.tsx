import AddTransaction from '@/components/AddTransaction'
import Balance from '@/components/Balance'
import Guest from '@/components/Guest'
import { currentUser } from '@clerk/nextjs/server'

export default async function HomePage() {
	const user = await currentUser()

	if (!user) {
		return <Guest />
	}

	return (
		<main>
			<h1>Welcome, {user.firstName}</h1>
			<Balance />
			<AddTransaction />
		</main>
	)
}
