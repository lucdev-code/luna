import { Navbar } from "../components/layout/Navbar"
import { Sidebar } from "../components/layout/Sidebar"
import { ZoneDetails } from "../components/map/ZoneDetails"
import { Map } from "../components/map/MapView"

export function Home() {
    return (
        <>
            <div className="flex h-screen">
                <Sidebar />
                <div className="flex flex-col flex-1">
                    {/* Barra superior a todo el ancho */}
                    <div className="shrink-0 m-1.5">
                        <Navbar />
                    </div>

                    {/* Row: map + ZoneDetails */}
                    <main className="flex flex-1 mt-0.5 mb-0.5 ml-0.5 bg-(--background)">
                        <div className="w-[70%] border-2 ml-0.5 mb-0.5">
                            <Map/>
                        </div>
                        <div className="w-[30%]">
                            <ZoneDetails />
                        </div>
                    </main>
                </div>
            </div>
        </>
    )
}   