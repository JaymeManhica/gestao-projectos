<template>
  <div class="container">
    <div class="forms-container">
      <div class="signin-signup">
        <form action="" class="sign-in-form">
          <h2 class="title">Login</h2>
          <div class="input-field">
            <ion-icon name="person-circle-outline"></ion-icon>
            <input type="text" placeholder="Username">
          </div>
          <div class="input-field">
            <ion-icon name="lock-closed-outline"></ion-icon>
            <input type="password" placeholder="senha">
          </div>
          <input type="submit" value="Login" class="btn solid" @click.prevent="login">
          <p class="social-text" > Ou contacte-nos nas redes sociais</p>
          <div class="social-media">
            <!--fb-->
            <a href="#" class="social-icon">
              <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" ><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"/></svg>
            </a>
            <a href="#" class="social-icon">
              <!--twitter-->
              <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/></svg>
            </a>
            <a href="#" class="social-icon">
              <!--google-->
              <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 488 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"/></svg>
            </a>
          </div>
        </form>
        <form action="" class="sign-up-form">
          <h2 class="title">Registar</h2>
          <div class="input-field">
            
            <input type="text" placeholder="Username">
          </div>
          <div class="input-field">
            
            <input type="text" placeholder="Email">
          </div>
          <div class="input-field">
          
            <input type="password" placeholder="senha">
          </div>
          <div class="input-field">
          
          <input type="password" placeholder="Confirmar Senha">
        </div>
          <input type="submit" value="Registar" class="btn solid">
          <p class="social-text" > Ou contacte-nos nas redes sociais</p>
          <div class="social-media">
            <!--fb-->
            <a href="#" class="social-icon">
              <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" ><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"/></svg>
            </a>
            <a href="#" class="social-icon">
              <!--twitter-->
              <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/></svg>
            </a>
            <a href="#" class="social-icon">
              <!--google-->
              <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 488 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"/></svg>
            </a>
          </div>
        </form>
      </div>
    </div>

    <div class="panels-container">
      <div class="panel left-panel">
          <div class="content">
            <h3>Gestao de Projectos</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus voluptates quam optio magnam ipsam praesentium, eligendi impedit esse eveniet neque doloribus distinctio cumque ex officiis nulla fugiat minus deserunt accusamus.</p>
            <button class="btn transparent" id="sign-up-btn">Sign up</button>
          </div>
          <img src="../assets/img/undraw_maker_launch_re_rq81.svg" class="image"  alt="">
      </div>

      <div class="panel right-panel">
          <div class="content">
            <h3>Gestao de Projectos</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus voluptates quam optio magnam ipsam praesentium, eligendi impedit esse eveniet neque doloribus distinctio cumque ex officiis nulla fugiat minus deserunt accusamus.</p>
            <button class="btn transparent" id="sign-in-btn">Sign up</button>
          </div>
          <img src="../assets/img/undraw_add_user_re_5oib.svg" class="image" alt="">
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    name: 'Login',
    mounted() {
      const signInBtn = document.querySelector("#sign-in-btn");
      const signupBtn = document.querySelector("#sign-up-btn");
      const container = document.querySelector(".container")
      // pegando dados do html

      signupBtn.addEventListener('click', () =>{
        container.classList.add("sign-up-mode");
      })
      signInBtn.addEventListener('click', () =>{
        container.classList.remove("sign-up-mode");
      })
    },
    
  methods: {
    login() {
      
        this.$router.push({name:'menu'})
        this.setPerfil('Usuário');
        
    },
  }
}
</script>


<style>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600;1,700&display=swap');


  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body, input{
    font-family: 'Poppins', sans-serif;
    height: 100%;
    width: 100%;
  }
  icon{
    font-size: xx-large;
  }
.container{
  position: relative;
  width: 100%;
  min-height: 100vh;
  background-color: #fff;
  overflow: hidden;
}
.container:before{
  content: '';
  position: absolute;
  width: 2000px;
  height: 2000px;
  border-radius: 50%;
  background: linear-gradient(-45deg, #3E3838, #1c3942);
  top: -10%;
  right: 48%;
  transform: translateY(-50%);
  z-index: 6;
  transition: 1.8s ease-in-out ;

}

.forms-container{
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;

}

.signin-signup{
  position: absolute;
  top: 50%;
  left: 75%;
  transform: translate(-50%, -50%);
  display: grid;
  grid-template-columns: 1fr;
  width: 50%;
  z-index: 5;
  transition: 1s 0.7s ease-in-out;
  
}

form{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0 5rem;
  overflow: hidden;
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  transition: 0.2s 0.7s ease-in-out;

} 

form.sign-in-form{
  z-index: 2;
}

form.sign-up-form{
  z-index: 1;
  opacity: 0;
}
.title{
  font-size: 2.2rem;
  color: #444;
  margin-bottom: 10px;
}

.input-field{
  max-width: 380px;
  width: 100%;
  height: 55px;
  background-color: #f0f0f0;
  margin: 10px 0;
  border-radius: 55px;
  display: grid;
  grid-template-columns: 15% 85%;
  padding: 0 .4rem;
}

.input-field svg {
  font-size: 1.1rem;
  color: #acacac;
  line-height: 55px;
  text-align: center;
}
.input-field input{
  background: none;
  outline: none;
  line-height: 1;
  font-size: 1.1rem;
  border: none;
  color: #333;
}
.input-field input::placeholder{
  color: #aaa;
  font-weight: 500;
}

.btn{
  width: 150px;
  height: 49px;
  border-radius: 49px;
  border: none;
  outline: none;
  cursor: pointer;
  background-color: #333;
  color: #fff;
  text-transform: uppercase;
  font-weight: 600;
  margin: 10px 0;
  transition: .5s;

}

.btn:hover{
  background-color: #5e5959;
}

.social-text{
  padding: .7rem 0;
  font-size: 1rem;
}
.social-media{
  display: flex;
  justify-content: center;
}


.social-icon{
  height: 46px;
  width: 46px;
  border: 1px solid #333;
  margin: 0 0.45rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  font-size: 1.1rem;
  border-radius: 50%;
  transition: 0.5s;
}

.social-icon:hover{
  color: #4481eb;
  border-color: #4481eb;
  height: 50px;
  width: 50px;
}

.panels-container{
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: grid;
  grid-template-columns: repeat(2,1fr);
}

.panel{
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-around;
  text-align: center;
  z-index: 7;
  
}

.panel .content{
  color: #fff;
  transition: .9s .6s ease-in-out;
}

.panel h3{
  font-weight: 600;
  line-height: 1;
  font-size: 1.5rem;
}

.panel p{
  font-size: 0.95rem;
  padding: 0.7rem 0;

}

.btn.transparent{
  margin: 0;
  background: none;
  border: 2px solid #fff;
  width: 130px;
  height: 41px;
  font-weight: 600;
  font-size: 0.8rem;
}

.left-panel{
  pointer-events: all;
  padding: 3rem 17% 2rem 12%;
}

.right-panel{
  pointer-events: none;
  padding: 3rem 17% 2rem 12%;
}

.image{
  width: 100%;
  transition: 1.1s .4s ease-in-out;
}

.right-panel .content, .right-panel .image{
  transform: translateX(800px);
}

/**animação */
.container.sign-up-mode:before{
  transform: translate(100%, -50%);
  right: 52%;
}

.container.sign-up-mode .left-panel .image,
.container.sign-up-mode .left-panel .content{
  transform: translateX(-800px);
}

.container.sign-up-mode .right-panel .content,
.container.sign-up-mode .right-panel .image{
  transform: translateX(0px);
}

.container.sign-up-mode .left-panel{
  pointer-events: none;
}

.container.sign-up-mode .right-panel{
  pointer-events: all;
}

.container.sign-up-mode .signin-signup{
  left: 25%;
}
.container.sign-up-mode form.sign-in-form{
  z-index: 1;
  opacity: 0;
}

.container.sign-up-mode form.sign-up-form{
  z-index: 2;
  opacity: 1;
}



</style>


