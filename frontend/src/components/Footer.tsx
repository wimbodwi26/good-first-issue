export default function Footer() {
  return (
    <footer className="bg-white text-center text-sm text-gray-400 py-4">
      <p>
        Built by{" "}
        <a
          href="https://www.mrigank.me"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          Mrigank
        </a>{" "}
        •{" "}
        <a
          href="https://github.com/Mrigankkh/good-first-issue"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          GitHub Repo
        </a>
      </p>
      <p className="mt-1">
        This project is{" "}
        <span className="text-green-600 font-medium">open source</span>. Contributions are welcome!
      </p>
    </footer>
  );
}
