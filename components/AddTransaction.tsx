'use client'
import addTrandsaction from '@/app/actions/addTransaction'
import { useRef } from 'react'
import { toast } from 'react-toastify'

export default function AddTransaction() {
	const formRef = useRef<HTMLFormElement>(null)

	const clientAction = async (formData: FormData) => {
		const { data, err } = await addTrandsaction(formData)

		if (err) {
			toast.error(err)
		} else {
			toast.success('Transaction added')
			formRef.current?.reset()
		}
	}

	return (
		<>
			<h3>Add transaction</h3>
			<form ref={formRef} action={clientAction}>
				<div className='form-control'>
					<label htmlFor='text'>Text</label>
					<input
						type='text'
						id='text'
						name='text'
						placeholder='Enter text...'
					/>
				</div>
				<div className='form-control'>
					<label htmlFor='amount'>
						Amount <br />
						(negative - expense, positive - income)
					</label>
					<input
						type='number'
						name='amount'
						id='amount'
						placeholder='Enter amount...'
					/>
				</div>
				<button className='btn'>Add transaction</button>
			</form>
		</>
	)
}
