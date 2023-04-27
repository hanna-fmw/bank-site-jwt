import React from 'react'
import laptop from '../assets/laptop.png'

function About() {
	return (
		<section>
			<div className='w-[100vw] flex justify-between bg-[#f9fafb] pt-12 pb-12 pl-12 pr-0 md:pl-4'>
				<div className='w-[80vw] md:w-[30vw] md:ml-24'>
					<div className='text-2xl md:text-3xl md:mt-10 lg:text-4xl md:text-start leading-relaxed mb-5 text-[#1d2027]'>
						Simplify banking with <span className='logo-text text-2xl md:text-4xl'>JWT</span>Banking
					</div>
					<p className='text-[1rem] leading-relaxed'>
						Ensure secure transactions and savings with a platform for simple and streamlined payment processes, and effortlessly send and receive
						funds with peace of mind.
					</p>
				</div>

				<img src={laptop} className='md:w-1/2 hidden md:block lg:block' />
			</div>
		</section>
	)
}

export default About
