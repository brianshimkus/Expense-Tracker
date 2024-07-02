export default function AddTransaction() {
	const clientAction = async (formData: FormData) => {
		console.log(formData.get('text'), formData.get('amount'))
	}

	return (
		<>
			<h3>Add transaction</h3>
			<form action={clientAction}></form>
		</>
	)
}
