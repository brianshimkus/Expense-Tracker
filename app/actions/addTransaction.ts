'use server'

interface TransactionData {
	text: string
	amount: number
}

interface TransactionResult {
	data?: TransactionData
	err?: string
}

export default async function addTransaction(
	formData: FormData
): Promise<TransactionResult> {
	const textValue = formData.get('text')
	const amountValue = formData.get('amount')

	if (!textValue || textValue === '' || !amountValue) {
		return { err: 'Text or amount missing' }
	}

	const text: string = textValue.toString()
	const amount: number = parseFloat(amountValue.toString())

	const transactionData: TransactionData = {
		text,
		amount,
	}

	return { data: transactionData }
}
