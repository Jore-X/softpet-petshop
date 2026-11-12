// ____________________________________________________
// Icons
import {
  arrow_left,
  profile_circle,
  dna,
  phone,
  calendar,
  collar,
  close,
} from "../../assets/icons";
// ____________________________________________________

import { useState } from "react";
import "./PetModal.css";

function PetModal(props) {
  const [newData, setNewData] = useState(
    props.petSelected || {
      id: Date.now(),
      name: "",
      specie: "Cachorro",
      owner: "",
      breed: "",
      phone: "",
      birthDate: "2000-01-01",
    },
  );
  return (
    <>
      <div className="modal-overlay"></div>
      <div
        className={`modal ${props.choice_modal === "toDelete" ? "disable" : ""}`}
      >
        <div className="modalHeader">
          <div className="modalLogo">
            <div className="icon-header-box">
              <img src={props.icon} alt="" />
            </div>
            <h1>{props.title}</h1>
          </div>
          <button
            className="btn-close-modal"
            onClick={() => {
              props.closeModal();
            }}
          >
            <img src={close} alt="" />
          </button>
        </div>
        <div
          className={`modalGrid ${props.choice_modal === "toDelete" ? "disable" : ""}`}
        >
          <div className="itemGrid">
            <label htmlFor="inputName">
              <img src={collar} alt="" />
              <span>Nome</span>
            </label>
            <input
              readOnly={props.choice_modal === "toDelete"}
              name="inputName"
              id="inputName"
              type="text"
              placeholder="Nome"
              value={newData.name}
              onChange={(event) =>
                setNewData({
                  ...newData,
                  ...{ name: event.target.value },
                })
              }
            />
          </div>
          <div className="itemGrid">
            <label htmlFor="selectAnimals">
              <img src={dna} alt="" />
              <span>Especie</span>
            </label>
            <select
              id="selectAnimals"
              value={newData.specie}
              onChange={(event) =>
                setNewData({
                  ...newData,
                  ...{ specie: event.target.value },
                })
              }
            >
              <option value="Cachorro">Cachorro</option>
              <option value="Gato">Gato</option>
              <option value="Ave">Ave</option>
              <option value="Outro">Outro</option>
            </select>
          </div>
          <div className="itemGrid">
            <label htmlFor="inputOwner">
              <img src={profile_circle} alt="" />
              <span>Dono</span>
            </label>
            <input
              readOnly={props.choice_modal === "toDelete"}
              name="inputOwner"
              id="inputOwner"
              type="text"
              placeholder="Nome Sobrenome"
              value={newData.owner}
              onChange={(event) =>
                setNewData({
                  ...newData,
                  ...{ owner: event.target.value },
                })
              }
            />
          </div>
          <div className="itemGrid">
            <label htmlFor="inputBreed">
              <img src={dna} alt="" />
              <span>Raça</span>
            </label>
            <input
              readOnly={props.choice_modal === "toDelete"}
              name="inputBreed"
              id="inputBreed"
              type="text"
              placeholder="Raça"
              value={newData.breed}
              onChange={(event) =>
                setNewData({
                  ...newData,
                  ...{ breed: event.target.value },
                })
              }
            />
          </div>
          <div className="itemGrid">
            <label htmlFor="inputPhone">
              <img src={phone} alt="" />
              <span>Telefone</span>
            </label>
            <input
              readOnly={props.choice_modal === "toDelete"}
              name="inputPhone"
              id="inputPhone"
              type="text"
              placeholder="(00) 0 0000-0000"
              value={newData.phone}
              onChange={(event) =>
                setNewData({
                  ...newData,
                  ...{ phone: event.target.value },
                })
              }
            />
          </div>
          <div className="itemGrid">
            <label htmlFor="inputDate">
              <img src={calendar} alt="" />
              <span>
                Nascimento <span>(Aproximado)</span>
              </span>
            </label>
            <input
              readOnly={props.choice_modal === "toDelete"}
              name="inputDate"
              id="inputDate"
              type="date"
              placeholder="01/01/2000"
              value={newData.birthDate}
              onChange={(event) =>
                setNewData({
                  ...newData,
                  ...{ birthDate: event.target.value },
                })
              }
            />
          </div>
        </div>
        <div className="btnsModal-box">
          <button
            className="cancel"
            onClick={() => {
              props.closeModal();
            }}
          >
            <img src={arrow_left} alt="" />
            <span>Voltar</span>
          </button>
          <button
            className="save"
            onClick={() => {
              switch (props.choice_modal.toLowerCase()) {
                case "toedit":
                  props.editPet(props.petSelected.id, newData);
                  break;
                case "toadd":
                  props.addNewPet(newData);
                  break;
                case "todelete":
                  props.deletePet(props.petSelected.id);
                  break;
                default:
                  alert("Não foi possivel executar");
              }
              // props.editPet(props.petSelected.id, {
              //   name: props.petSelected.name,
              //   specie: props.petSelected.specie,
              // });
            }}
          >
            <img src={props.icon} alt="" />
            {props.choice_modal === "toDelete" ? (
              <span>Remover</span>
            ) : (
              <span>Salvar</span>
            )}
          </button>
        </div>
      </div>
    </>
  );
}

export default PetModal;
