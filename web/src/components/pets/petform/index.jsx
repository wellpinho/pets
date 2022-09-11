import React, { useState } from "react";
import Input from "../../form";
import SelectForm from "./selectForm";

const Petform = ({ handlSubmit, petData, btnText }) => {
  const [pet, setPet] = useState(petData || {});
  const [preview, setPreview] = useState([]);
  const colors = ["Branco", "Cinza", "Caramelo", "Preto", "Mesclado"];

  function onFileChange(e) {
    setPreview(Array.from(e.target.files));
    setPet({ ...pet, images: [...e.targe.files] });
  }
  function handleChange(e) {
    setPet({ ...pet, [e.target.name]: [e.targe.value] });
  }
  function handleColor(e) {
    setPet({ ...pet, color: e.targe.options[e.target.selectedIndex].text });
  }

  function handleSubmit(e) {
    e.preventDefault();
    handleSubmit(pet);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        {preview.length
          ? preview.map((image, index) => (
              <img
                src={URL.createObjectURL(image)}
                alt={pet.name}
                key={`${pet.name}+${index}`}
              />
            ))
          : pet.images &&
            pet.images.map((image, index) => (
              <img
                src={`${process.env.REACT_APP_API}/images/pets/${image}`}
                alt={pet.name}
                key={`${pet.name}+${index}`}
              />
            ))}
      </div>
      <Input
        text="Imagens do pet"
        type="file"
        name="images"
        handlOnChange={onFileChange}
        multiple={true}
      />
      <Input
        text="Nome do pet"
        type="text"
        placeholder="Nome do pet"
        handlOnChange={handleChange}
        value={pet.name || ""}
      />
      <Input
        text="Idade do pet"
        type="text"
        placeholder="Idade do pet"
        handlOnChange={handleChange}
        value={pet.age || ""}
      />
      <Input
        text="Peso do pet"
        type="number"
        placeholder="Peso do pet"
        handlOnChange={handleChange}
        value={pet.weight || ""}
      />
      <SelectForm
        name="color"
        text="Selecione a cor"
        options={colors}
        handleOnChange={handleColor}
        value={pet.color || ""}
      />
      <div className="d-grid gap-2 col-6">
        <button className="btn-custom" type="submit">
          Cadastrar pet
        </button>
      </div>
    </form>
  );
};

export default Petform;
