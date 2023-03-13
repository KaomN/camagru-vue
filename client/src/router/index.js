import { createWebHistory, createRouter } from "vue-router";

import Login from '@/view/Login/Login.vue'
import Signup from '@/view/Signup/Signup.vue'

const routes = [
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
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;