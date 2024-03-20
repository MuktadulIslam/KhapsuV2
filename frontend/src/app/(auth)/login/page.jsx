"use client"
import Link from "next/link";

export default function Page() {
    const loginByMobile = () => {
        const emailLogin = document.getElementById("email-login");
        const mobileLogin = document.getElementById("mobile-login");
        emailLogin.classList.remove('translate-x-0', 'opacity-100')
        emailLogin.classList.add('opacity-0', '-translate-x-16', 'sm:-translate-x-32')
        mobileLogin.classList.remove('opacity-0', 'translate-x-16', 'sm:translate-x-32')
        mobileLogin.classList.add('translate-x-0', 'opacity-100')

        const emailButton = document.getElementById("email-button");
        const mobileButton = document.getElementById("mobile-button");
        emailButton.classList.remove('bg-indigo-600', 'text-sm')
        emailButton.classList.add('bg-gray-50', 'text-black');
        mobileButton.classList.remove('bg-gray-50', 'text-black');
        mobileButton.classList.add('bg-indigo-600', 'text-sm');
    }

    const loginByEmail = () => {
        const emailLogin = document.getElementById("email-login");
        const mobileLogin = document.getElementById("mobile-login");
        emailLogin.classList.add('translate-x-0', 'opacity-100')
        emailLogin.classList.remove('opacity-0', '-translate-x-16', 'sm:-translate-x-32')
        mobileLogin.classList.add('opacity-0', 'translate-x-16', 'sm:translate-x-32')
        mobileLogin.classList.remove('translate-x-0', 'opacity-100')

        const emailButton = document.getElementById("email-button");
        const mobileButton = document.getElementById("mobile-button");
        emailButton.classList.add('bg-indigo-600', 'text-sm')
        emailButton.classList.remove('bg-gray-50', 'text-black');
        mobileButton.classList.add('bg-gray-50', 'text-black');
        mobileButton.classList.remove('bg-indigo-600', 'text-sm')
    }

    return (<>
        <div className="w-full flex justify-center items-center h-mobile-100dhv md:h-md-mobile-100dhv xl:h-xl-mobile-100dhv 2xl:h-2xl-mobile-100dhv">
            <div className="flex min-h-full flex-col justify-center w-[22rem]  sm:w-[30rem]">
                <div className="w-full max-w-sm">
                    <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
                </div>
                <div className="w-full h-8 grid grid-cols-2 gap-5 justify-between items-center mt-5 font-semibold text-sm text-white">
                    <button id="email-button" onClick={loginByEmail} className="border bg-indigo-600 text-sm w-full h-full flex justify-center items-center rounded-lg transition-all duration-700">By Email</button>
                    <button id="mobile-button" onClick={loginByMobile} className="border bg-gray-50 text-black w-full h-full flex justify-center items-center rounded-lg transition-all duration-700">By Mobile Number</button>
                </div>
                <div className="h-0.5 w-full bg-slate-600 mt-3"></div>

                <div className="mt-10 sm:mx-auto w-full overflow-hidden">
                    <div className="flex flex-row relative w-full h-56">
                        <form id="email-login" className="space-y-2 h-full w-full translate-x-0 opacity-100 transition-all duration-700">
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                                <div className="mt-2">
                                    <input id="email" name="email" type="email" autoComplete="email" required className="px-2 block w-full rounded-md border py-1.5 text-gray-900 shadow-sm" />
                                </div>
                            </div>

                            <div>
                                <div className="flex items-center justify-between">
                                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                                    <div className="text-sm">
                                        <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-400">Forgot password?</a>
                                    </div>
                                </div>
                                <div className="mt-2">
                                    <input id="password" name="password" type="password" autoComplete="current-password" required className="px-2 block w-full rounded-md border py-1.5 text-gray-900 shadow-sm" />
                                </div>
                            </div>

                            <div>
                                <button type="submit" className="flex w-full mt-8 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
                            </div>
                        </form>

                        <form id='mobile-login' className="space-y-2 absolute h-full w-full opacity-0 translate-x-16 sm:translate-x-32 transition-all duration-700">
                            <div>
                                <label htmlFor="mobile" className="block text-sm font-medium leading-6 text-gray-900">Mobile Number</label>
                                <div className="mt-2">
                                    <input id="mobile" name="mobile" type="text" required className="px-2 block w-full rounded-md border py-1.5 text-gray-900 shadow-sm" />
                                </div>
                            </div>

                            <div>
                                <div className="flex items-center justify-between">
                                    <label htmlFor="password2" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                                    <div className="text-sm">
                                        <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-400">Forgot password?</a>
                                    </div>
                                </div>
                                <div className="mt-2">
                                    <input id="password2" name="password2" type="password" autoComplete="current-password" required className="px-2 block w-full rounded-md border py-1.5 text-gray-900 shadow-sm" />
                                </div>
                            </div>

                            <div>
                                <button type="submit" className="flex w-full mt-8 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
                            </div>
                        </form>
                    </div>

                    <p className="mt-10 text-center text-sm text-gray-500">
                        Not a member?
                        <Link href="/registration" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"> Sign up to get discount..</Link>
                    </p>
                </div>
            </div>
        </div>
    </>)
}