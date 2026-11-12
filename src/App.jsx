import { useState } from "react";
import "./App.css";

// _____________________________________________________
// Components
import Header from "./components/Header/Header";
import PetList from "./components/PetList/PetList";
import PetModal from "./components/PetModal/PetModal";
// _____________________________________________________

// _____________________________________________________
// Icons
// import searchIcon from "./assets/icons/search.svg";
import { searchIcon, add_circle, edit, trash } from "./assets/icons";
// _____________________________________________________

function App() {
  // variavel do valor de pesquisa
  const [search, setSearch] = useState("");

  // array de pets
  const [pets, setPets] = useState([
    {
      id: 1,
      name: "Rex",
      specie: "Cachorro",
      owner: "Carlos Silva",
      breed: "Vira-lata",
      phone: "(11) 99999-1111",
      birthDate: "2022-05-10",
    },
    {
      id: 2,
      name: "Mimi",
      specie: "Gato",
      owner: "Ana Oliveira",
      breed: "Siamês",
      phone: "(21) 98888-2222",
      birthDate: "2023-08-15",
    },
    {
      id: 3,
      name: "Thor",
      specie: "Cachorro",
      owner: "Marcos Souza",
      breed: "Golden Retriever",
      phone: "(31) 97777-3333",
      birthDate: "2021-01-20",
    },
    {
      id: 4,
      name: "Luna",
      specie: "Gato",
      owner: "Julia Costa",
      breed: "Persa",
      phone: "(11) 96666-4444",
      birthDate: "2024-03-05",
    },
    {
      id: 5,
      name: "Mel",
      specie: "Cachorro",
      owner: "Roberto Dias",
      breed: "Poodle",
      phone: "(19) 95555-5555",
      birthDate: "2020-11-12",
    },
    {
      id: 6,
      name: "Fred",
      specie: "Ave",
      owner: "Fernanda Lima",
      breed: "Calopsita",
      phone: "(81) 94444-6666",
      birthDate: "2019-07-25",
    },
    {
      id: 7,
      name: "Pipoca",
      specie: "Outro",
      owner: "Bruno Gomes",
      breed: "Hamster Sírio",
      phone: "(41) 93333-7777",
      birthDate: "2023-12-01",
    },
  ]);

  // const [name, setName] = useState("");
  // const [specie, setSpecie] = useState("Cachorro");

  // _____________________________
  function addNewPet(newData) {
    if (!newData.name.trim()) {
      alert("Digite um nome.");
      return;
    }
    if (!newData.owner.trim()) {
      alert("Digite o Dono.");
      return;
    }

    setPets([...pets, newData]);

    // Para esvaziar os campos após o envio
    // setName("");
    // setSpecie("Cachorro");
    closeModal();
  }
  // _____________________________

  function deletePet(id) {
    setPets(pets.filter((pet) => pet.id !== id));

    closeModal();
  }
  // _____________________________

  // const [newData, setNewData] = useState({ name: "Bob" });

  function editPet(id, newData) {
    setPets(pets.map((pet) => (pet.id === id ? { ...pet, ...newData } : pet)));
    closeModal();
  }
  // _____________________________

  // .filter() percorre o array criando um novo contendo apenas os que atendem as condições
  const petsFiltereds = pets.filter(
    (pet) =>
      pet.name.toLowerCase().includes(search.toLowerCase()) ||
      pet.specie.toLowerCase().includes(search.toLowerCase()) ||
      pet.owner.toLowerCase().includes(search.toLowerCase()),
  );
  // _____________________________

  const [modalType, setmodalType] = useState(null);
  const [petSelected, setPetSelected] = useState();

  function closeModal() {
    setmodalType(null);
  }

  return (
    <main>
      {/* renderiza o Header enviando os dados(props) necessarios */}
      <Header title="Softpet" description="Gerenciamento de pets" />

      <div className="listHeader">
        <div className="searchBox">
          <span>
            <img src={searchIcon} alt="" />
          </span>
          <input
            id="inputSearch"
            type="text"
            placeholder="Busque seu pet..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
        </div>
        <button
          onClick={() => {
            setmodalType("toAdd");
          }}
        >
          <img src={add_circle} alt="" />
          <span>Cadastrar</span>
        </button>
      </div>

      <p className="userSearch">Você esta buscando: {search}</p>

      <PetList
        pets={petsFiltereds}
        deletePet={deletePet}
        modalType={modalType}
        setmodalType={setmodalType}
        setPetSelected={setPetSelected}
      />

      {modalType === "toAdd" && (
        <PetModal
          title="Cadastrar"
          icon={add_circle}
          addNewPet={addNewPet}
          closeModal={closeModal}
          choice_modal="toAdd"
        ></PetModal>
      )}
      {modalType === "toEdit" && (
        <PetModal
          title="Editar"
          icon={edit}
          petSelected={petSelected}
          editPet={editPet}
          closeModal={closeModal}
          choice_modal="toEdit"
        ></PetModal>
      )}
      {modalType === "toDelete" && (
        <PetModal
          title="Remover"
          icon={trash}
          petSelected={petSelected}
          deletePet={deletePet}
          closeModal={closeModal}
          choice_modal="toDelete"
        ></PetModal>
      )}
    </main>
  );
}

export default App;
