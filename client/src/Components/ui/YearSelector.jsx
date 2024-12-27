const YearSelector = ({ year, setYear }) => {
  const getClassNames = (selectedYear) => {
    let classNames =
      "hover:bg-hover-gray px-4 py-2 rounded-full cursor-default ";
    classNames +=
      year === selectedYear
        ? "text-2xl text-[#0DCB4A] "
        : "text-lg text-gray-500 ";
    return classNames;
  };

  return (
    <div className="flex items-center justify-center space-x-2 ">
      <div onClick={() => setYear(24)} className={getClassNames(24)}>
        2024-25
      </div>
      <div onClick={() => setYear(25)} className={getClassNames(25)}>
        2025-26
      </div>
    </div>
  );
};

export default YearSelector;
