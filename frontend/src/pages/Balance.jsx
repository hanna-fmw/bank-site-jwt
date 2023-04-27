import { useState } from 'react'
import Tilt from 'react-parallax-tilt'
import axios from 'axios'
import shield from '../assets/shield.png'
import profile from '../assets/profile.png'
import phone from '../assets/phone.png'
import stores from '../assets/stores.png'
import { FaArrowRight } from 'react-icons/fa'

function Balance() {
	const [balance, setBalance] = useState('')

	function handleCheckBalance() {
		const token = localStorage.getItem('token')
		axios
			.get('http://localhost:5000/balance', {
				headers: {
					Authorization: 'Bearer ' + token,
				},
			})
			.then((res) => {
				setBalance(res.data.balance)
			})
			.catch((error) => {
				console.log(error)
			})
	}

	return (
		<section className='mb-20 md:mt-28 lg:mt-40'>
			<div className='flex flex-col md:flex-row ml-20 lg:flex-row lg:justify-around gap-20'>
				<div className='w-[50vw] md:w-[30vw]'>
					<div>
						<h1 className='text-2xl font-extrabold mb-4 md:text-xl lg:text-4xl md:text-start md:space-x-10 md:leading-relaxed md:mb-5'>
							Save Time and Money with <span className='logo-text text-2xl md:text-4xl'>JWT</span>
						</h1>
						<p className='text-sm md:text-[1rem] leading-relaxed'>
							With JWTBanking, keeping track of your money has never been easier. Get quick access to your account balance, view recent transactions
							and stay in control of your money at all times.
						</p>
					</div>
				</div>

				<div className='text-[12px]'>
					Click and <span>TILT</span>
					<Tilt
						tiltMaxAngleX={25}
						tiltMaxAngleY={25}
						glareEnable={true}
						glareMaxOpacity={0.7}
						glareColor='white'
						glarePosition='bottom'
						glareBorderRadius='20px'>
						<div className='flex flex-col px-8 py-2 w-[300px] h-[180px] md:w-[380px] md:h-[240px] mt-4 md:mb-18 mr-20 md:px-12 md:py-4 rounded-2xl bg-gradient-to-r from-[#B7E661] via-[#A1E262] to-[#69D974] shadow-xl relative'>
							<span className='logo-text text-xs text-white font-bold absolute top-4 left-4'>JWT</span>
							<h3 className='text-base md:text-2xl mt-8 md:mb-6'>Monitor your balance</h3>
							<div className='mb-10'>
								<div>
									<button className='balance-btn text-[10px] p-2 rounded-md bg-white md:text-[12px] font-bold mb-4' onClick={handleCheckBalance}>
										Check Balance
									</button>
								</div>
								<div>
									<p className='balance-result text-xs md:text-base'>
										Current balance:
										<br />
										{balance}
									</p>
								</div>
							</div>
						</div>
					</Tilt>
				</div>
			</div>

			<div className='flex justify-center gap-10 mb-28 mt-20 px-6 py-6 md:mt-24 md:mb-32 bg-[#f9fafb] md:justify-around'>
				<img src={phone} className='w-[225px] h-[413px] md:w-[300px] md:h-[550px] mt-[2rem]' />

				<div className='flex flex-col items-start mt-32'>
					<h2 className='text-3xl md:text-4xl'>Download our App</h2>
					<div className='text-sm md:w-[30vw] md:mb-6'>
						<p>Stay on top of your finances no matter where you are. Download JWTBanking App today.</p>
					</div>
					<div className='mt-10'>
						<img src={stores} alt='Google Play and App Store' className='w-[250px] h-[37.5px] md:w-[300px] md:h-[45px] lg:w-[400px] lg:h-[60px]' />
					</div>
				</div>
			</div>

			<div className='md:mb-32'>
				<div className='bgTexture w-[90vw] h-[14.5rem] rounded shadow-xl relative md:h-[50vh] flex md:flex-col'>
					<div className='flex absolute top-4 left-8 md:top-10 md:left-12 md:ml-20 md:flex-row md:gap-10'>
						<img src={shield} className='w-[8rem] h-[8rem] md:w-[10rem] md:h-[10rem]' alt='shield icon' />

						<div className='flex flex-col mt-2 md:mt-5 shield-icon '>
							<h4 className='shield-icon text-xs md:text-sm font-bold md:leading-7 md:text-[16px] text-white mb-1'>
								Fast and Secure Cashless Payments
							</h4>
							<div className='text-[10px] md:text-[12px] max-w-[14rem] md:leading-4 text-white'>
								Pay with JWTBanking App online or in stores, our payment technology keeps your transactions safe.
							</div>
						</div>
					</div>

					<div className='flex absolute top-28 left-8 md:top-48 md:left-12 md:ml-20 md:flex-row md:gap-10 '>
						<img src={profile} className='w-[8rem] h-[8rem] md:w-[10rem] md:h-[10rem]' alt='profile icon' />

						<div className='flex flex-col mt-2 md:mt-5 profile-icon'>
							<h4 className='shield-icon text-xs md:text-sm font-bold md:leading-7 md:text-[16px] text-white mb-1'>Full Control Over Your Account</h4>
							<div className='text-[10px] md:text-[12px] max-w-[14rem] md:leading-4 text-white'>
								Customize your account settings, lock your card if it's lost, and reorder a new one with a tap of a button.
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Balance
