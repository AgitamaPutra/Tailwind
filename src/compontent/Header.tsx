

function Header () {
    return (
        <div className="Header fixed w-full  bg-white z-20 top-0">
            <div className="header-container h-24 w-11/12 my-0 mx-auto">
                <div className="header-navigation p-7 flex justify-between w-full">
                    <div className="header-navigation-wrapper text-xl  flex items-center">
                        <a href="#" className="flex items-center">
                            <i className="fa-solid fa-arrow-left text-3xl pr-5 "></i>
                            <a className="pr-10">Semua Template</a>
                        </a>
                        <a href="#">
                        <i className="fa-solid fa-laptop text-3xl pr-5  text-gray-500"/>
                        </a>
                        <a href="#">
                            <i className="fa-solid fa-tablet-screen-button text-3xl pr-5  text-gray-500"/>
                        </a>
                        <a href="#">
                            <i className="fa-solid fa-mobile-screen-button text-2xl pr-5  text-gray-500"/>
                        </a>
                    </div>
                    <div className="header-button flex items-center text-lg">
                    <i className="fa-solid fa-circle-check"></i>
                    <p className="px-3">Coba gratis. tanpa perlu kartu kredit.</p>
                    <button className="bg-violet-700 p-2 rounded-full w-40 text-white text-sm hover:bg-violet-900"> BUAT WEBSITE</button>
                    </div>
                </div>
            </div>
            <div className="bg-white w-full items-center text-center border-t-2">
                <div className="items-center grid-cols-3 text-center h-34 ">
                <img src="https://assets.zyrosite.com/dovilelxpfw/DOVILE-AzGGg46eg0iqZQB6.svg" alt="" className="py-8 w-[125px] mx-auto " />
                <div className="text-xl pb-5 text-[#454545]">
                <a href="" className="px-5 underline hover:underline">HOME</a>
                <a href="" className="px-5  hover:underline">SERVICE</a>
                <a href="" className="px-5  hover:underline">ABOUT ME</a>
                <a href="" className="px-5  hover:underline">CONTACT</a>
                <a href="" className="px-5  hover:underline">BLOG</a>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Header