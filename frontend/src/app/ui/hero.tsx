export default function Hero() {
    return (
        <main className="flex flex-col items-center justify-center p-6">
            <div className="bg-white bg-opacity-90 rounded-lg shadow-2xl p-8 w-full max-w-2xl text-center">
                <h1 className="mb-5 text-4xl font-bold leading-tight text-gray-900">Better AI than Retorio! 😎</h1>
                <p className="mb-8 text-lg text-gray-700">This product was built directly with the input of industry experts alongside engineers working at the frontier of AI tools.</p>
                <button className="bg-blue-500 text-white font-medium py-2 px-4 rounded-full shadow-md transition duration-300 ease-out hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                    Learn more →
                </button>
            </div>
        </main>
    );
}
