<template>
    <div class="conteudo">
    <Dados />
  </div>
  <div class="conteiner">
    
    <div class="navigation">
      <ul>
        <li>
          <a href="#">
            <span class="icon">
              <ion-icon name="people-outline"></ion-icon>
            </span>
            <span class="title">IMOVEIS</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span class="icon"><ion-icon name="home-outline"></ion-icon> </span>
            <span class="title">Home</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span class="icon"
              ><ion-icon name="chatbubble-outline"></ion-icon>
            </span>
            <span class="title">Mensagem</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span class="icon">
              <ion-icon name="person-add-outline"></ion-icon>
            </span>
            <span class="title">Cadastrar User</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span class="icon">
              <ion-icon name="add-circle-outline"></ion-icon>
            </span>
            <span class="title">Publicar Projecto</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span class="icon">
              <ion-icon name="duplicate-outline"></ion-icon>
            </span>
            <span class="title">Ver Projectos</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span class="icon">
              <ion-icon name="chatbubble-outline"></ion-icon>
            </span>
            <span class="title">sair</span>
          </a>
        </li>
      </ul>
      <div class="toggle"></div>
    </div>
   </div>
  
</template>
<script>
import Dados from "../components/Dados.vue";
export default {
  name: "Menu",
  components: {
    Dados,
  },

  mounted() {
    let navigation = document.querySelector(".navigation");
    let toggle = document.querySelector(".toggle");
    toggle.onclick = function () {
      navigation.classList.toggle("active");
    };
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Arial, Helvetica, sans-serif;
}
body {
  min-height: 100vh;
  background: #fff;
  display: flex;
  flex-direction: row;
}
.conteiner {
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
}
.conteudo {
  order: 2;
  width: 100vw;
  height: 100vh;
  display: flex;
  padding: 100px;
}

.navigation {
  order: 1;
  position: fixed;
  inset: 20px;
  background: linear-gradient(-45deg, #3e3838, #1c3942);
  width: 80px;
  border-left: 10px solid #3e3838;
  border-radius: 50px;
  overflow: hidden;
  box-shadow: 15px 15px 25px rgba(0, 0, 0, 0.05);
  transition: 0.6s;
}

.navigation.active {
  width: 300px;
  border-radius: 20px;
}
.toggle {
  position: absolute;
  bottom: 15px;
  right: 15px;
  width: 50px;
  height: 50px;
  background: #fff;
  border-radius: 50%;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}
ol, ul {
    padding-left: 0rem;
}
.toggle::before {
  content: "";
  position: absolute;
  width: 26px;
  height: 3px;
  border-radius: 3px;
  background: #3e3838;
  transform: translateY(-5px);
  transition: 1s;
}

.toggle::after {
  content: "";
  position: absolute;
  width: 26px;
  height: 3px;
  border-radius: 3px;
  background: #3e3838;
  transform: translateY(5px);
  transition: 1s;
}

.navigation.active .toggle::before {
  transform: translateY(0px) rotate(-405deg);
}
.navigation.active .toggle::after {
  transform: translateY(0px) rotate(225deg);
}

.navigation ul {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}

.navigation ul li {
  position: relative;
  list-style: none;
  width: 100%;
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
}
.navigation ul li:hover {
  background: #fff;
}
.navigation ul li:nth-child(1) {
  top: 20px;
  margin-bottom: 40px;
  background: none;
}
.navigation ul li:not(:first-child):hover::before {
  content: "";
  position: absolute;
  top: -20px;
  right: 0;
  width: 20px;
  height: 20px;
  background: transparent;
  border-bottom-right-radius: 20px;
  box-shadow: 7.5px 7.5px 0 7.5px #fff;
}

.navigation ul li:not(:first-child):hover::after {
  content: "";
  position: absolute;
  bottom: -20px;
  right: 0;
  width: 20px;
  height: 20px;
  background: transparent;
  border-top-right-radius: 20px;
  box-shadow: 7.5px -7.5px 0 7.5px #fff;
}
.navigation ul li a {
  position: relative;
  display: block;
  width: 100%;
  display: flex;
  text-decoration: none;
  color: #fff;
}
.navigation ul li:hover:not(:first-child) a {
  color: #3e3838;
}

.navigation ul li a .icon {
  position: relative;
  display: block;
  min-width: 60px;
  height: 60px;
  line-height: 70px;
  text-align: center;
}
.navigation ul li a .icon ion-icon {
  font-size: 1.75em;
}
.navigation ul li a .title {
  position: relative;
  display: block;
  padding: 0 10px;
  height: 60px;
  line-height: 60px;
  text-align: start;
  white-space: nowrap;
}
</style>