import React from 'react'
import phoneScreen from '../assets/phoneScreen.png'
import creditCards from '../assets/creditCards.png'

function Services() {
	return (
		<section className='mb-20 md:px-10'>
			<div className='flex flex-col items-center md:flex-row md:gap-40 md:justify-center md:mt-32'>
				<div className='flex flex-col items-start'>
					<h2>Service Offerings</h2>
					<div className='w-[80vw] md:w-[30vw]'>
						<p>
							We offer the following services to our valued customers:
							<ul className='list-disc mt-3'>
								<li>Checking and savings accounts with competitive interest rates.</li>
								<li>Personal and business loans tailored to your needs.</li>
								<li>Credit cards with great rewards and benefits.</li>
								<li>Investment options to help you grow your wealth.</li>
								<li>Online and mobile banking for easy and convenient access to your account.</li>
							</ul>
						</p>
					</div>
				</div>
				<img src={creditCards} className='w-[16rem] h-[16rem] mt-[3.125rem] md:w-[20rem] md:h-[21rem] md:mt-[3.125rem]' />
			</div>

			<div className='flex md:gap-40 justify-center mt-22'>
				<img src={phoneScreen} style={{ width: '20.8rem', height: '21.2rem', marginTop: '3.125rem' }} className='hidden md:block' />
				<div className='flex flex-col items-start mt-32'>
					<h2>Customer Support</h2>
					<div className='w-[80vw] md:w-[30vw]'>
						<p>
							Our customer support team is available 24/7 to assist you with any banking-related questions or concerns you may have. Please feel free
							to contact us via phone at 1-800-123-4567, or email at <span className='border-b border-b-gray-500'>customerservice@jwtbank.com</span>.
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Services
