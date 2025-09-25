export const DefaultSorting = () => {
  return (
    <div className="flex items-center justify-between">
      <select className="outline-none border border-gray-200 px-4 py-1">
        <option value="DEFAULT">Default Sorting</option>
        <option value="LOW_TO_HIGH">Low To High</option>
        <option value="HIGH_TO_LOW">High To Low</option>
      </select>
      <p className="text-xs md:text-base">Showing 1 to 6 result</p>
    </div>
  );
};
