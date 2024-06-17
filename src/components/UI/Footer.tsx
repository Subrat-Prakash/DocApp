import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h2 className="text-xl font-bold">DocApp</h2>
          <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
        </div>
        <div className="flex space-x-4">
          <a href="/privacy-policy" className="hover:underline">Privacy Policy</a>
          <a href="/terms-of-service" className="hover:underline">Terms of Service</a>
          <a href="/contact" className="hover:underline">Contact Us</a>
        </div>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
            <FaFacebook className="w-6 h-6" />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
            <FaTwitter className="w-6 h-6" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
            <FaInstagram className="w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
