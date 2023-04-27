import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi'
import { GrFormClose } from 'react-icons/gr'

function Navbar() {
	const [isNavOpen, setIsNavOpen] = useState(false)

	function handleLogOut() {
		localStorage.clear()
		window.location.href = '/'
	}

	const location = useLocation()

	return (
		<nav className='bg-white lg:h-[52px] mt-8 mb-[75px] px-10'>
			<div className='max-w-7xl mx-auto sm:px-6 lg:px-8'>
				<div className='flex items-center justify-between p-2'>
					<div className='flex items-center sm:text-sm lg:text-xl'>
						<div className='w-4 h-4 rounded-full bg-gradient-to-r from-[#8ADD52] to-[#6ED854] animate-spin mr-3 shadow-md'></div>
						<span className='logo-text-nav'>JWT</span>
						<span>Banking</span>
					</div>
					<div>
						<section className='MOBILE-MENU flex md:hidden lg:hidden'>
							<div className='HAMBURGER-ICON space-y-2' onClick={() => setIsNavOpen((prev) => !prev)}>
								<GiHamburgerMenu style={{ width: '22px', height: '22px' }} />
							</div>
						</section>
						<section className='DESKTOP-MENU hidden space-x-8 font-medium md:flex md:items-center md:justify-between md:w-[50vw] lg:flex lg:items-center lg:justify-between lg:w-[50vw]'>
							<div className='navlinks flex gap-14 items-center justify-center leading-5'>
								<Link to='/services' activeClassName='border' className='focus:border-b-2'>
									Services & Support
								</Link>
								<Link to='/' activeClassName='border' className='focus:border-b-2'>
									About&nbsp;Us
								</Link>
							</div>

							{location.pathname === '/balance' ? (
								<button onClick={handleLogOut} className='btn dark-btn text-sm'>
									Log&nbsp;out
								</button>
							) : (
								<div className='flex items-center justify-center gap-3'>
									<Link to='/login'>
										<button className='btn light-btn focus:outline-none md:text-sm'>Log&nbsp;in</button>
									</Link>
									<Link to='/register'>
										<button className='btn dark-btn md:text-sm'>Register</button>
									</Link>
								</div>
							)}
						</section>
					</div>
				</div>
				<div className='md:hidden'>
					<div className={isNavOpen ? 'showMenuNav' : 'hideMenuNav'}>
						<div className='absolute top-0 right-4' onClick={() => setIsNavOpen(false)}>
							<GrFormClose />
						</div>
						<div className='flex flex-col pr-6'>
							<Link to='/' className='my-2' onClick={() => setIsNavOpen(false)}>
								About&nbsp;Us
							</Link>
							<Link to='/services' className='my-2' onClick={() => setIsNavOpen(false)}>
								Services
							</Link>
							<Link to='/login' className='my-2' onClick={() => setIsNavOpen(false)}>
								Log&nbsp;in
							</Link>
							<Link to='/register' className='my-2' onClick={() => setIsNavOpen(false)}>
								Register
							</Link>
						</div>
					</div>
				</div>
			</div>
			<style>{`
        .hideMenuNav {
          display: none;
        }
        .showMenuNav {
          display: block;
		  font-family: "Poppins";
          position: absolute;
		  border-radius: 4px;
		  font-size: 14px;
		  
          top: 10px;
          right: 0;
          padding: 15px;
          background: white;
          box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
        }
        .showMenuNav > div {
          margin: 0.5rem 0;
        }
        
      `}</style>
		</nav>
	)
}

export default Navbar
