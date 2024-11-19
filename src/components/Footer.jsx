const Footer = () => {
  return (
    <footer className="w-full bg-[#c9c9c9] dark:bg-gray-900 text-gray-800 dark:text-gray-200 py-4 flex justify-center">
      <p className="text-md font-medium">
        &copy; {new Date().getFullYear()} Omar Faruque. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
