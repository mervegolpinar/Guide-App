<template>
  <v-container class="container d-flex align-center justify-center">
    <div class="w-50">
      <v-form ref="form">
        <v-text-field v-model="itemObje.name" label="Name Surname" required></v-text-field>
        <p v-if="!nameIsValid" class="error-message">The name field is required</p>
        <v-text-field v-model.number="itemObje.phone" label="Phone" required></v-text-field>
        <p v-if="!phoneIsValid" class="error-message">The phone number field is required</p>
      </v-form>
      <v-btn @click="CreatedPerson" class=" text-align-right mb-3" flat color="secondary">
        Add
      </v-btn>
      <v-btn @click="back" class=" text-align-right mb-3 ml-4" flat color="secondary">
        Cancel
      </v-btn>
    </div>
  </v-container>
</template>
  
<script>
export default {
  name: 'AddPerson',
  data: () => ({
    //form modeli olarak itemObje oluşturuldu
    itemObje: {
      id: null,
      name: null,
      phone: null
    },
  }),
  //input name ve input phone validasyon kontrolü
  computed: {
    nameIsValid() {
      return this.itemObje.name != "" && this.itemObje.name != null && typeof this.itemObje.name == 'string'
    },
    phoneIsValid() {
      return this.itemObje.phone != "" && this.itemObje.phone != null && this.itemObje.phone.toString().length == 10 && typeof this.itemObje.phone == 'number'
    },
    formIsValid() {
      return this.phoneIsValid && this.nameIsValid
    }
  },
  methods: {
    //validasyon kontrol şartıyla input datalarının database'e gönderilmesi
    CreatedPerson() {

      if (this.formIsValid == true && this.nameIsValid) {
        this.$axios.post("http://localhost:3000/myDirectory", this.itemObje);
        this.$store.dispatch("getList");
        this.itemObje = { id: null, name: '', phone: '' }
        this.$store.state.snackbar = true;
        this.$router.push("/");
      }
    },
    // back fonksiyonu ile PersonList sayfasına geçiş
    back() {
      this.$router.push({ name: "PersonList" })
    },
  }
}
</script>

<style>
p {
  color: rgb(112, 192, 201);
}

.container {
  height: 100vh;
}
</style>
  