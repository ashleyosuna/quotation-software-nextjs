export default function NavBar () {
    return (
        <nav className="w-screen h-12 bg-white border-b-2 border-grey-900 grid grid-cols-3 gap-4">
            <div className="col-span-2 space-x-6 ml-4">
                <button className="h-full text-center hover:border-b-2 hover:border-pink-100 focus:border-b-2 focus:border-pink-400">Cotizaciones</button>
                <button className="h-full text-center hover:border-b-2 hover:border-pink-100 focus:border-b-2 focus:border-pink-400">Inventario</button>
            </div>
            <div className="col-span-1 mr-4 grid justify-end">
                <button className="h-full text-center">Perfil</button>
            </div>
        </nav>
    )
}