import Login from '@/src/app/ui/login';

export default function LoginPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-6 bg-white">
      <div className="bg-white bg-opacity-90 rounded-lg shadow-2xl p-8 w-full max-w-md text-center">
        <Login />
      </div>
    </main>
  );
}
