<template>
  <div class="wrapper">
    <div class="form-box login">
      <h2>Novo Projecto</h2>
      <br />
      <br />
      <form action="#">
        <div class="input-box">
          <input type="text" required />
          <label for="#" class="label">Nome do Projecto</label>
        </div>
        <div class="input-box">
          <input type="text" required />
          <label for="#" class="label">Responsavel</label>
        </div>
        <div class="input-box">
          <input type="number" required />
          <label for="#" class="label">Orçamento</label>
        </div>
        <div class="input-box">
          <input type="date" required />
          <label for="#">Data de Inicio</label>
        </div>
        <div class="input-box">
          <input type="date" required />
          <label for="#">Data do fim</label>
        </div>
        <div class="input-box">
          <input type="text" required />
          <label for="#" class="label">Cliente</label>
        </div>
        <br />
        <div class="input-box">
          <input type="text" required />
          <label for="#" class="label">Descrição</label>
        </div>

        <div class="botao">
          <input type="submit" class="btn" value="enviar" />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cadastro",
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins";
}
body {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #fff;
}

.wrapper {
  top: 50px;
  position: relative;
  width: 750px;
  height: 450px;
  background: transparent;
  border: 10px solid #3e3838;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  margin: 0 auto; /* Centraliza horizontalmente */
}

.wrapper .form-box {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.form-box h2 {
    bottom: 10px;
  font-size: 32px;
  color: #3e3838;
  text-align: center;
}
form {
  display: grid;
  bottom: 10px;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  width: 80%;

}
.form-box .input-box {
  position: relative;
  width: 100%;
  height: 30px;
  margin-bottom: 15px
}
.input-box input {
  width: 100%;
  height: 100%;
  background: transparent;
  border: none;
  outline: none;
  border-bottom: 2px solid #3e3838;
}
.input-box input:focus,
.input-box input:valid {
  border-bottom: 2px solid #0ef;
}
.input-box .label {
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  font-size: 16px;
  color: #3e3838;
  pointer-events: none;
  transition: 0.5s;
}
.input-box input:focus ~ label,
.input-box input:valid ~ label {
  top: -2px;
  color: #0ef;
}
.btn {
  position: relative;
  width: 100%;
  height: 45px;
  background: #3e3838;
  border: 2px solid #3e3838;
  outline: none;
  border-radius: 40px;
  cursor: pointer;
  font-size: 16px;
  color: #fff;
  font-weight: 600;
  box-shadow: 10px #1c3942;
}
.btn:hover {
  background: linear-gradient(-45deg, #3e3838, #1c3942);
}
.form-box .botao {
  grid-column: 1 / -1; /* Ocupa todas as colunas disponíveis */
}
.botao .btn {
  width: 100%; /* O botão ocupa toda a largura da área da grade */
}
</style>