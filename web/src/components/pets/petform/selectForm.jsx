const SelectForm = ({ text, name, options, handleOnChange, value }) => {
  return (
    <div className="form-floating select-form">
      <select
        className="form-select"
        name={name}
        id={name}
        onChange={handleOnChange}
        value={value || ""}
        aria-label="Floating label select example"
      >
        {options.map((option) => {
          <option value={option} key={option}>
            {option}
          </option>;
        })}
      </select>
      <label htmlFor="floatingSelect">Selecione uma opção</label>
    </div>
  );
};

export default SelectForm;
