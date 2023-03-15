import { createWebHistory, createRouter } from "vue-router";

import Main from '@/view/Main.vue'
import NotFound from '@/view/NotFound.vue'
import Signup from '@/view/Signup.vue'
import Login from '@/view/Login.vue'

const routes = [
	{
		path: "/",
		name: "Main",
		component: Main,
	},
	{
		path: "/login",
		name: "Login",
		component: Login,
	},
	{
		path: "/signup",
		name: "Signup",
		component: Signup,
	},
	{
		path: "/:pathMatch(.*)",
		name: "404",
		component: NotFound,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;