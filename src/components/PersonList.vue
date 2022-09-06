<template>
  <div class="d-flex justify-center mt-5">
    <div class="w-50">
      <div class="d-flex justify-end h-10 ">
        <v-btn class="h-5 mb-2" flat color="secondary" @click="$router.push({ name: 'AddPerson' })">
          Add Person
        </v-btn>
      </div>
      <div class="d-flex  ">
        <v-text-field label="Search" v-model="$store.state.search" hide-details="auto" class="">
        </v-text-field>
      </div>
      <v-table>
        <thead>
          <tr>
            <th class="text-left">
              Name Surname
            </th>
            <th class="text-left">
              Phone Number
            </th>
            <th class="text-left">
              Details
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="numbers in filteredList.sort((a, b) => a.name.localeCompare(b.name, 'tr'))" :key="numbers.id">
            <td>{{ numbers.name }}</td>
            <td>{{ numbers.phone }}</td>
            <td><a :href="'/#/PersonDetail/' + numbers.id">Details</a></td>
          </tr>
        </tbody>
      </v-table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PersonList',
  //sayfa yüklendiğinde db.json'daki listenin çekilmesi
  mounted() {
    this.$store.dispatch("getList");
  },
  data() {
    return {

    }
  },
  computed: {
    //search inputu dolu ise filtreler değilse tüm listeyi getirir
    filteredList() {
      if (this.$store.state.search.trim() != '') {
        return this.$store.state.directory.filter((i) => i.name.toLowerCase().includes(this.$store.state.search.trim().toLowerCase()));
      }
      else {
        return this.$store.state.directory;
      }
    }
  }
};
</script>
