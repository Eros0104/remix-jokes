const Header = (): JSX.Element => {
  return (
    <header>
    <nav className="bg-white border-gray-200 px-5 lg:px-6 py-4 dark:bg-purple-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <a className="flex items-center">
              <span className="logo-medium text-white text-4xl">J🤪KES</span>
            </a>
        </div>
    </nav>
</header>
  );
}

export default Header;