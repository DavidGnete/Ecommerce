import Link from "next/link"

export default function Navigation() {
    return (
        <nav className="bg-blue-600 text-white p-4">
            <div className="container mx-auto">
                <div className="flex space-x-6">
                    <Link  href="/dashboard" className="hover: text-blue-200 transition-colors">Inicio</Link>
                    <Link href="/about" className="hover: text-blue-200 transition-colors">Acerca de</Link>
                    <Link href="/inventory" className="hover: text-blue-200 transition-colors">Inventario</Link>
                </div>

            </div>
        </nav>
    )
} 