const SearchBar = ({
  type = "text",
  className = "",
  onChange = () => {},
  value = "",
  placeholder = "",
  icon = "",
}) => {
  return (
    <div className={`search-bar ${className}`}>
        {icon}
      <input type={type} onChange={onChange} value={value} placeholder={placeholder} />
    </div>
  );
};

export default SearchBar;
