import CreatableSelect from "react-select/creatable";

const SearchableMultiSelect = ({
  options = [],
  value = [],
  onChange,
  placeholder = "Search or create..."
}) => {

  const formattedOptions = options.map((item) => ({
    label: item,
    value: item
  }));

  const formattedValue = value.map((item) => ({
    label: item,
    value: item
  }));

  const handleChange = (selectedOptions) => {
    const values = selectedOptions
      ? selectedOptions.map((item) => item.value)
      : [];

    onChange(values);
  };

  return (
    <CreatableSelect
      isMulti
      options={formattedOptions}
      value={formattedValue}
      onChange={handleChange}
      placeholder={placeholder}
      className="text-sm"
      styles={{
        control: (base) => ({
          ...base,
          borderRadius: "8px",
          borderColor: "#d1d5db",
          padding: "2px"
        })
      }}
    />
  );
};

export default SearchableMultiSelect;