import { createWebHistory, createRouter } from "vue-router";

import Main from '@/view/Main.vue'
import NotFound from '@/view/NotFound.vue'
import Signup from '@/view/Signup/Signup.vue'

const routes = [
	{
		path: "/",
		name: "Main",
		component: Main,
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