<template>
    <div class="my-auto mx-auto ">
        <div>
            <v-btn @click="back" class=" text-align-right mb-3" flat color="secondary">
                Contact list
            </v-btn>
        </div>
        <v-card width="400">
            <v-card-item>
                <v-card-title>{{ filtereddetail.name }}</v-card-title>
            </v-card-item>

            <v-card-text>
                {{ filtereddetail.phone }}
            </v-card-text>
        </v-card>
    </div>
</template>

<script>
export default {
    name: 'PersonDetail',
    data() {
        return {
        }
    },
    //sayfa yüklendiğinde db.json'daki listenin çekilmesi (detay sayfasındayken
    //sayfa yenilendiğinde state deki datanın silinmesinden dolayı yeniden liste çekildi)
    mounted() {
        this.$store.dispatch("getList");
    },
    computed: {
        //detayı gösterilmesi istenen datanın gelen id ile alınması
        filtereddetail() {
            const dataid = this.$route.params.id;
            return this.$store.state.directory.filter((i) => i.id == dataid)[0] || { name: "", phone: "" };
        }
    },
    methods: {
        //back fonksiyonu ile PersonList sayfasına geçişin gerçekleştirilmesi
        back() {
            this.$router.push({ name: "PersonList" })
        }
    }
};
</script>
  