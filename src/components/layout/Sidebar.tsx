export const Sidebar = () => {
    return (
        <>
            <nav className="flex flex-col gap-3 bg-gray-800 px-5 py-2.5 w-[15%] h-screen justify-center">
                <span className="text-white font-bold pb-[20%] text-center">Luna</span>
                <ul className="flex flex-col gap-3 h-[70%]">
                    <li><a href="#" className="text-white hover:text-gray-300">Inicio</a></li>
                    <li><a href="#" className="text-white hover:text-gray-300">Acerca de</a></li>
                    <li><a href="#" className="text-white hover:text-gray-300">Contacto</a></li>
                </ul>
                <ul className="flex pt-[10%] justify-center">
                    <li><a href="" className="text-white hover:text-gray-300">Log out</a></li>
                </ul>
            </nav>
        </>
    )
}