type SearchBarProps = {
    onClick: () => void;
    }

const SearchBar: React.FC<SearchBarProps> = ({onClick}) => {
    return (
        <button onClick={onClick} className="text-xl text-med-brown hover:text-pale-brown focus:outline-none underline font-mono ml-4 hover:scale-110 transition-all duration-500 cursor-pointer">
            Search
        </button>
    );
};

export default SearchBar;