

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-12">
      <div className="max-w-1440 mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
        <p>&copy; {new Date().getFullYear()} TicketMaster. All rights reserved.</p>
        <div className="space-x-4">
          <a href="#" className="hover:text-blue-400">Privacy Policy</a>
          <a href="#" className="hover:text-blue-400">Terms</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
