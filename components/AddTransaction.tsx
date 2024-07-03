'use client'
import addTrandsaction from '@/app/actions/addTransaction'
import { toast } from 'react-toastify'

export default function AddTransaction() {
	const clientAction = async (formData: FormData) => {
		const { data, err } = await addTrandsaction(formData)

		if (err) {
			toast.error(err)
		} else {
			console.log(data)
		}
	}

	return (
		<>
			<h3>Add transaction</h3>
			<form action={clientAction}>
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
