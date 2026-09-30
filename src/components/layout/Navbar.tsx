import { Shield, MapPin, User } from "lucide-react"

export const Navbar = () => {
    return (
        <nav className="flex items-center gap-4 px-4 ">
            <div className="shrink-0"><Shield size={25} /></div>
            <div className="flex-1 leading-4">
                <p className="text-[13px] font-bold ">Hola, Thiago Lucero Ortega!</p>
                <p className="text-[10px]">Aqui puedes ver el estado de seguridad de tu ciudad.</p>
            </div>
            <div className="shrink-0 text-[14px]">
                <div className="flex flex-row items-center justify-center">
                    <MapPin size={15} className="mr-1"/>
                    <p>Salamanca, Gto.</p>
                </div>
            </div>
            <div className="shrink-0 text-[14px]"> <User size={25} color="gray"/> </div>
        </nav>
    )
}   