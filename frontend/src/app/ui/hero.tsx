export default function Hero() {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)" }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Better AI than Retorio! 😎</h1>
                    <p className="mb-5">This product was built directly with the input of industry experts alongside engineers working at the frontier of AI tools.</p>
                    <button className="btn btn-primary">Learn more →</button>
                </div>
            </div>
        </div>
    );
}
