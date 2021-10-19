import "./Inicio.css";
import BtnAddRep from "../components/inicio/BtnAddRep";
import Header from "../components/inicio/Header";
import CardReptil from "../components/inicio/CardReptil";
import Modal from "../components/Modal";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import { useModal } from "../hooks/useModal";
import Message from "../components/Message";

const initialForm = {
  nombre: "",
  fase: "",
  sexo: "",
  id: "",
};
const Inicio = () => {
  const [form, setForm] = useState(initialForm);
  const [inputDate, setInputDate] = useState("");
  const [errorInput, setErrorInput] = useState(false);
  const [legend, setLegend] = useState("");
  const [isOpenModal1, openModal1, closeModal1] = useModal(false);
  const [data, setData] = useState([]);
  // const [dataBase, setDataBase] = useState([]);

  const handleChange = e => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
    if (form.nombre.length > 15) {
      setErrorInput(true);
      setLegend("El nombre no debe de tener mas de 15 caracteres");
    } else {
      setErrorInput(false);
      setLegend("");
    }
  };
  const theme = createTheme({
    typography: {
      fontSize: 20,
    },
  });
  const handleReset = () => {
    setForm(initialForm);
    setInputDate("");
  };

  const handleSubmit = e => {
    e.preventDefault();
    form.id = Date.now();
    setData([...data, { ...form, inputDate }]);
    handleReset();
    closeModal1();
  };

  return (
    <div className="inico">
      <Header />
      <div className="inicio__container">
        <BtnAddRep openModal1={openModal1} />
        <div className="cards__container">
          {data.length === 0 ? (
            <Message
              message="No existe ningun ejemplar en la lista."
              action="Haz click en Agregar Ejemplar* para añadir un nuevo control."
            />
          ) : (
            data.map((el, i) => (
              <CardReptil el={el} i={i} key={i + Date.now()} />
            ))
          )}
        </div>
      </div>
      <Modal isOpenModal={isOpenModal1} closeModal={closeModal1}>
        <h3>Agregar ejemplar</h3>
        <form className="modal__inputs" onSubmit={handleSubmit}>
          <ThemeProvider theme={theme}>
            <TextField
              key="Nombre"
              className="modal-name"
              onChange={handleChange}
              error={errorInput}
              label="Nombre"
              name="nombre"
              value={form.nombre}
              helperText={legend}
              margin="dense"
              required
              autoComplete="off"
            />

            <LocalizationProvider
              dateAdapter={AdapterDateFns}
              className="modal-date"
            >
              <DatePicker
                className="modal-date"
                label="Nacimiento"
                name="date"
                value={inputDate}
                onChange={newValue => {
                  setInputDate(newValue);
                }}
                renderInput={params => (
                  <TextField {...params} helperText={null} />
                )}
                required
                // views={["year", "month", "day"]}
                openTo="year"
              />
            </LocalizationProvider>

            <TextField
              key="fase"
              className="modal-name"
              onChange={handleChange}
              label="Fase"
              name="fase"
              value={form.fase}
              margin="dense"
              required
              autoComplete="off"
            />

            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Sexo</InputLabel>
              <Select
                className="modal-type"
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="sexo"
                value={form.sexo}
                label="Sexo"
                onChange={handleChange}
                required
              >
                <MenuItem value="Hembra">Hembra</MenuItem>
                <MenuItem value="Macho">Macho</MenuItem>
              </Select>
            </FormControl>
          </ThemeProvider>
          <button className="modal__submit">Agregar</button>
        </form>
      </Modal>
    </div>
  );
};

export default Inicio;
