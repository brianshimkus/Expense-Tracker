'use server'

import { db } from '@/lib/db'
import { auth } from '@clerk/nextjs/server'
import { revalidatePath } from 'next/cache'

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

	// Get logged in user
	const { userId } = auth()

	// Check for user
	if (!userId) {
		return { err: 'User not found' }
	}

	try {
		const transactionData: TransactionData = await db.transaction.create({
			data: {
				text,
				amount,
				userId,
			},
		})

		revalidatePath('/')

		return { data: transactionData }
	} catch (error) {
		return { err: 'Transaction not added' }
	}
}
