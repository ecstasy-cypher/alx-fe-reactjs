import { useRecipeStore } from './recipeStore';

const SearchBar = () => {
  const setSearchTerm = useRecipeStore(state => state.setSearchTerm);
  const searchTerm = useRecipeStore(state => state.searchTerm);

  return (
    <input
      type="text"
      placeholder="Search recipes..."
      value={ searchTerm}
      className='w-full py-2 rounded border border-amber-50'
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  );
};

export default SearchBar
