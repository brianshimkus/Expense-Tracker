import getUserBalance from '@/app/actions/getUserBalance'

export default async function Balance() {
	const { balance } = await getUserBalance()

	return (
		<>
			<h4>Your Balance</h4>
			<h1>${balance ?? 0}</h1>
		</>
	)
}
