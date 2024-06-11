// import LoginForm from '@/app/ui/login-form';
import Login from '@/src/app/ui/login';

export default function LoginPage() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-100 relative">
      <div className="hero min-h-screen bg-cover bg-center absolute inset-0" style={{ backgroundImage: "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)" }}>
        <div className="hero-overlay bg-black bg-opacity-75 absolute inset-0"></div>
      </div>
      <div className="relative z-10 p-6 bg-white bg-opacity-90 rounded-lg shadow-2xl max-w-md w-full">
        <Login />
      </div>
    </main>
  );
}
