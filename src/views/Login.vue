<template>
  <div class="login-wrapper">
    <form @submit.prevent="login">
      <h3>Please Login</h3>
      <input placeholder="Email" type="email" name="email" required/>
      <input placeholder="Password" type="password" name="password" required/>
      <button>Login</button>
    </form>
  </div>
</template>

<script>
export default {
  // methods: {
  //       login: (e) => {
  //     e.preventDefault();
  //     let username = e.target.username;
  //     let password = e.target.password;
  //     console.log(e);

  //     let login = () => {
  //       let data = {
  //         username: username.value,
  //         password: password.value,
  //       };
  //       axios
  //         .post("/login", data)
  //         .then((response) => {
  //           console.log(response);
  //           router.push("/admin/upload");
  //           (username.value = ""), (password.value = "");
  //         })
  //         .catch((errors) => {
  //           console.log(errors);
  //           alert("Username or Password is incorrect.");
  //         });
  //     };
  //     login();
  //   },
  // }
};
</script>

<style>
.login-wrapper {
  width: 100%;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-wrapper> form > h3{
    font-size: 1.5rem;
    font-family: Roboto Slab;
}

.login-wrapper > form {
  height: 100%;
  width: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 1px solid #000000;
  padding: 0px 60px;
  border-radius: 10px;
}
.login-wrapper > form > input {
  width: 100%;
  margin: 20px;
  border-bottom: 1px solid #000;
}
.login-wrapper > form > button {
  width: 100%;
  margin-top: 20px;
  background: rgb(122, 0, 0);
  color: white;
  padding: 10px 0;
  border-radius: 10px;
  transition: 0.1s;
  cursor: pointer;
}

input,
button {
  font-size: 1.25rem;
    font-family: Roboto Slab;
}
</style>