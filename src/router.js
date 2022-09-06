
import { createRouter, createWebHashHistory } from "vue-router";


const routes = [
    {
        name: "PersonList",
        path: "/",
        component: () => import("@/components/PersonList.vue")
    },
    {
        name: "AddPerson",
        path: "/add",
        component: () => import("@/components/AddPerson.vue")
    },
    {
        name: "PersonDetail",
        path: "/PersonDetail/:id",
        component: () => import("@/components/PersonDetail.vue")
    },
];


const router = createRouter({
    routes,
    history: createWebHashHistory()
});

export default router;