import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function Register() {
	const [values, setValues] = useState({
		name: '',
		email: '',
		password: '',
	})

	const [balance, setBalance] = useState('')

	const navigate = useNavigate()

	function handleSubmit(e) {
		e.preventDefault()

		axios
			.post('http://localhost:5000/register', { ...values, balance })
			.then((res) => {
				if (res.data.Status === 'Success') {
					navigate('/login')
				} else {
					console.log('Error')
				}
			})
			.then((err) => console.log(err))
	}

	return (
		<section className='flex flex-col items-center md:flex-row md:justify-around md:gap-10 mt-20 bg-[#f9fafb] p-4 md:p-12'>
			<div className='w-[70vw] md:w-[35vw] mb-10 md:mb-20'>
				<div className='text-2xl md:text-3xl mt-20 text-start leading-relaxed mb-4'>
					Register to Access <span className='logo-text text-3xl lg:text-4xl'>JWT</span>Banking's Financial Services
				</div>
				<p className='text-base leading-relaxed'>
					Register to access our range of financial services and products, and get the tools you need to manage your finances and reach your financial
					goals. Open a checking account, apply for a credit card, or start saving for the future - register now.
				</p>
			</div>

			<div className='flex items-center justify-center'>
				<div className='px-8 py-4 text-left bg-white shadow-lg rounded-xl'>
					<h3>Create a New Account</h3>

					<form onSubmit={handleSubmit}>
						<div className='mt-4'>
							<label htmlFor='name' className='block text-sm font-medium text-gray-700 undefined'>
								Name
							</label>
							<div className='flex flex-col items-start'>
								<input
									onChange={(e) => setValues({ ...values, name: e.target.value })}
									type='text'
									name='name'
									className='w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-[#dedede]'
								/>
							</div>
						</div>
						<div className='mt-4'>
							<label htmlFor='email' className='block text-sm font-medium text-gray-700 undefined'>
								Email
							</label>
							<div className='flex flex-col items-start'>
								<input
									onChange={(e) => setValues({ ...values, email: e.target.value })}
									type='email'
									name='email'
									className='w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-[#dedede]'
								/>
							</div>
						</div>
						<div className='mt-4'>
							<label htmlFor='password' className='block text-sm font-medium text-gray-700 undefined'>
								Password
							</label>
							<div className='flex flex-col items-start'>
								<input
									onChange={(e) => setValues({ ...values, password: e.target.value })}
									type='password'
									name='password'
									className='w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-[#dedede]'
								/>
							</div>
							<div className='mt-4'>
								<label htmlFor='password' className='block text-sm font-medium text-gray-700 undefined'>
									Add amount to deposit
								</label>
								<div className='flex flex-col items-start'>
									<input
										onChange={(e) => setBalance(e.target.value)}
										type='text'
										value={balance}
										className='w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-[#dedede]'
									/>
								</div>
							</div>
						</div>

						<div className='flex justify-between items-center mt-6'>
							<Link to='/login' className='text-sm text-gray-600 underline hover:text-gray-900' href='#'>
								Already registered?
							</Link>
							<button type='submit' className='btn dark-btn md:text-sm'>
								Register
							</button>
						</div>
					</form>
				</div>
			</div>
		</section>
	)
}
