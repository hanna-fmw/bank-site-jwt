import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Login() {
	const [values, setValues] = useState({
		email: '',
		password: '',
	})

	const navigate = useNavigate()

	axios.defaults.withCredentials = true

	function handleSubmit(e) {
		e.preventDefault()
		axios
			.post('http://localhost:5000/login', values)
			.then((res) => {
				localStorage.setItem('token', res.data.token)
				navigate('/balance')
			})
			.then((err) => console.log(err))
	}

	return (
		<section className='flex flex-col items-center md:flex-row md:justify-around md:gap-10 mt-20 bg-[#f9fafb] p-6 md:p-12'>
			<div className='w-[70vw] md:w-[35vw] mb-10 md:mb-20'>
				<div className='text-2xl md:text-3xl mt-20 text-start leading-relaxed mb-4'>
					At <span className='logo-text text-3xl md:text-4xl'>JWT</span>Banking, Your Safety is our Top Priority
				</div>
				<p className='text-[1rem] leading-relaxed'>
					Enter your login details to access your account. If you have not yet registered, click on the "Create an account" link to create an account.
					For security reasons, we recommend that you do not share your login information with anyone. If you have any questions or concerns, please
					contact our customer support team for assistance.
				</p>
			</div>

			<div className='flex items-center justify-center'>
				<div className='px-8 py-6 mt-4 text-left bg-white shadow-lg rounded-xl'>
					<h3>Log in to Your Account</h3>

					<form onSubmit={handleSubmit}>
						<div className='mt-4'>
							<div>
								<label htmlFor='email' className='block text-sm'>
									Email
								</label>
								<input
									onChange={(e) => setValues({ ...values, email: e.target.value })}
									type='email'
									className='w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-[#dedede]'
								/>
							</div>
							<div className='mt-4'>
								<label htmlFor='password' className='block text-sm'>
									Password
								</label>
								<input
									onChange={(e) => setValues({ ...values, password: e.target.value })}
									type='password'
									className='w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-[#dedede]'
								/>
							</div>
							<div className='flex justify-between items-center mt-10'>
								<Link to='/register' className='text-sm text-[#1d2027] underline hover:font-semibold'>
									Create an account
								</Link>
								<button className='btn dark-btn md:text-sm'>Log in</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</section>
	)
}

export default Login
