import Head from "next/head";
import Link from "next/link";

export default function Layout({ children }) {
    return (
        <>
            <div className="flex flex-col min-h-screen">
                <header className="min-w-screen flex bg-green-300 mb-8 py-4 font-semibold text-center justify-center">
                    <span className="mx-auto my-0 text-2xl">
                        Encantamientos
                    </span>{" "}
                    <div className="mx-auto flex">
                        <Link href="/">
                            <a className="mx-3 hover:bg-green-800 hover:text-white rounded-md p-2">
                                Inicio
                            </a>
                        </Link>
                        <Link href="/artifacts">
                            <a className="mx-3 hover:bg-green-800 hover:text-white rounded-md p-2">
                                Artefactos
                            </a>
                        </Link>
                        <Link href="/curses">
                            <a className="mx-3 hover:bg-green-800 hover:text-white rounded-md p-2">
                                Maldiciones
                            </a>
                        </Link>
                        <Link href="/normals">
                            <a className="mx-3 hover:bg-green-800 hover:text-white rounded-md p-2">
                                Normales
                            </a>
                        </Link>
                        <Link href="/specials">
                            <a className="mx-3 hover:bg-green-800 hover:text-white rounded-md p-2">
                                Especiales
                            </a>
                        </Link>
                        <Link href="/spells">
                            <a className="mx-3 hover:bg-green-800 hover:text-white rounded-md p-2">
                                Hechizos
                            </a>
                        </Link>
                    </div>
                </header>

                <main className="container mx-auto flex-1">{children}</main>

                <footer className="bg-green-300 mt-8 py-4">
                    <div className="container mx-auto flex justify-center">
                        &copy; 2022 Pixuland Network
                    </div>
                </footer>
            </div>
            <Head>
                <title>Pixuland Wiki | Encantamientos</title>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
            </Head>
        </>
    );
}
