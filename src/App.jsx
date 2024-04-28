import GithubProfileFinder from "./Github";
import { ThemeContext } from "./context/ThemeContext";
import { useContext } from "react";
import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi"; // Import icons for light and dark themes

const App = () => {
  const { theme } = useContext(ThemeContext);
  const { handleThemeChange } = useContext(ThemeContext);

  const backgroundColor = {
    backgroundColor: theme === "light" ? "white" : "black",
    color: theme === "light" ? "black" : "white",
  };
  return (
    
    <main style={backgroundColor}>
      <div>
      <h2 className="text-center text-3xl display:flex">Github Profile Finder</h2>
      
      <button
        onClick={handleThemeChange}
        className="text-black hover:text-blue-500 focus:outline-none "
      >
        
        {theme === "light" ? (
          <HiOutlineMoon className="w-6 h-6" /> // Moon icon for light theme
        ) : (
          <HiOutlineSun className="w-6 h-6" /> // Sun icon for dark theme
        )}
      </button>
      </div>

      <div>
        <GithubProfileFinder />
      </div>
    </main>
  );
};

export default App;
