import Link from 'next/link';

export default function Header() {
  return (
    <div className="navbar relative bg-gradient-to-br from-purple-600 to-blue-500 shadow-xl rounded-lg p-4">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white bg-opacity-90 rounded-box w-52">
            <li><a className="text-gray-800">Item 1</a></li>
            <li>
              <a className="text-gray-800">Parent</a>
              <ul className="p-2">
                <li><a className="text-gray-800">Submenu 1</a></li>
                <li><a className="text-gray-800">Submenu 2</a></li>
              </ul>
            </li>
            <li><a className="text-gray-800">Item 3</a></li>
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl text-white">AIrecruit</a>
      </div>
      {/* <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><a className="text-white">Item 1</a></li>
          <li>
            <details>
              <summary className="text-white">Parent</summary>
              <ul className="p-2 bg-white bg-opacity-90 rounded-box">
                <li><a className="text-gray-800">Submenu 1</a></li>
                <li><a className="text-gray-800">Submenu 2</a></li>
              </ul>
            </details>
          </li>
          <li><a className="text-white">Item 3</a></li>
        </ul>
      </div> */}
      <div className="navbar-end">
        <Link href="/login" className="relative inline-flex items-center justify-center px-5 py-2.5 overflow-hidden font-medium text-white transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-gray-500">
          <span className="absolute top-0 left-0 w-full h-full rounded-full opacity-50 filter blur-sm bg-gradient-to-br from-gray-700 to-gray-900"></span>
          <span className="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded-full opacity-50 from-gray-700 to-gray-900"></span>
          <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded-full shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-gray-700 to-gray-900"></span>
          <span className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded-full bg-gradient-to-br to-gray-700 from-gray-900"></span>
          <span className="relative">Login</span>
        </Link>
      </div>
    </div>
  );
}
