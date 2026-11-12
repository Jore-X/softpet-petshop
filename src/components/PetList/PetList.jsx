import "./PetList.css";

// ____________________________________________________
// Icons
import {
  cat_img,
  dog_img,
  footprint_img,
  arrowDown,
  profile_circle,
  dna,
  phone,
  calendar,
  collar,
  trash,
  edit,
} from "../../assets/icons";
import { useState } from "react";
// ____________________________________________________
function animalImg(animal) {
  // animal = animal.toLowerCase();
  switch (animal.toLowerCase()) {
    case "cachorro":
      return <img src={dog_img} alt="Icone de Cara de Cachorro" />;
    case "gato":
      return (
        <img className="cat-img" src={cat_img} alt="Icone de Cara de gato" />
      );
    default:
      return <img src={footprint_img} alt="Icone de pata de animal" />;
  }
}
function PetList(props) {
  const [liState, setLiState] = useState(null);

  function openPetOverlay(id) {
    if (liState === id) {
      setLiState(null);
    } else {
      setLiState(id);
    }
  }

  function pressDown(id, event) {
    if (event.key === "Enter" || event.key === " ") {
      // event.preventDefault();
      openPetOverlay(id);
    }
  }

  return (
    <ul className="petList-grid">
      {/* .map() percorre o array criando um novo com o 
        resultado de alguma alteração */}
      {props.pets.map((pet) => (
        <li
          // tabIndex={props.modalType !== null ? -1 : 0} //permite focar com o tab
          // role="button"
          key={pet.id}
          // onKeyDown={(event) => pressDown(pet.id, event)}
          className={`${liState === pet.id ? "active" : ""}`}
        >
          <div className="imgList-box">{animalImg(pet.specie)}</div>
          <div className="listNames-box">
            <div className="petName-box">
              <img src={collar} alt="" />
              <span>{pet.name}</span>
            </div>
            <div className="ownerName-box">
              <img src={profile_circle} alt="" />

              <span>{pet.owner}</span>
            </div>
          </div>
          <button
            className="openOverlay-btn"
            aria-label="Mostrar Detalhes do Pet"
            tabIndex={props.modalType === null ? 0 : -1}
            onClick={() => {
              openPetOverlay(pet.id);
            }}
          >
            <img className="arrowDown" src={arrowDown} alt="Seta para baixo" />
          </button>
          <div className="petData-overlay">
            <div className="info-item">
              <img src={dna} alt="" />
              <span>Raça: {pet.breed}</span>
            </div>
            <div className="info-item">
              <img src={phone} alt="" />
              <span>Telefone: {pet.phone}</span>
            </div>
            <div className="info-item">
              <img src={calendar} alt="" />
              <span>Data: {pet.birthDate}</span>
            </div>
            <div className="btnsList-box">
              <button
                tabIndex={
                  liState === pet.id && props.modalType === null ? 0 : -1
                }
                // tabIndex={liState !== null && props.modalType === null ? 0 : -1}
                className="btnEdit"
                onClick={() => {
                  props.setmodalType("toEdit");
                  props.setPetSelected(pet);
                }}
              >
                <img src={edit} alt="" />
                <span>Editar</span>
              </button>
              <button
                tabIndex={
                  liState === pet.id && props.modalType === null ? 0 : -1
                }
                // tabIndex={liState !== null && props.modalType === null ? 0 : -1}
                className="btnRemove"
                onClick={() => {
                  props.setmodalType("toDelete");
                  props.setPetSelected(pet);
                  // props.deletePet(pet.id);
                }}
              >
                <img src={trash} alt="" />
                <span> Remover</span>
              </button>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default PetList;
