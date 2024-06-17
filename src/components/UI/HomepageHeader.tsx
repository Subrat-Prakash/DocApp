import Link from 'next/link';

const HomepageHeader = () => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">
          <Link href="/">
            DocApp
          </Link>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:underline">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/OurServices" className="hover:underline">
                Services
              </Link>
            </li>
            <li>
              <Link href="/appointment" className="hover:underline">
                Appointments
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/login" className="hover:underline">
                Signin
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default HomepageHeader;

