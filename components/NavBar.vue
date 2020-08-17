<template>
    <div>
        <div class="relative bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6">
            <div class="flex justify-between items-center border-b-2 border-gray-100 md:px-4 px-2 py-6 md:justify-start md:space-x-10">
            <div class="lg:w-0 lg:flex-1">
                <a class="flex" @click="$router.push('/')">
                <img class="h-8 w-auto sm:h-10" src="/logo-1-resized.png"/>
                </a>
            </div>
            <div class="-mr-2 -my-2 md:hidden">
                <button @click="openMobileNav = true" type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-600 transition duration-150 ease-in-out">
                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                </button>
            </div>
            <nav class="hidden md:flex space-x-10">
                <h1 class="text-main"></h1>
            </nav>
            <div class="hidden md:flex items-center justify-end space-x-8 md:flex-1 lg:w-0">
                <nuxt-link to="/" class="whitespace-no-wrap text-base leading-6 font-medium text-main hover:bg-accent hover:text-white px-4 py-2 rounded-md focus:outline-none focus:text-white focus:bg-secondary">
                Home
                </nuxt-link>
                <nuxt-link to="/projects" class="whitespace-no-wrap text-base leading-6 font-medium text-main hover:bg-accent hover:text-white px-4 py-2 rounded-md focus:outline-none focus:text-white focus:bg-secondary">
                About Me
                </nuxt-link>
                <nuxt-link to="/projects" class="whitespace-no-wrap text-base leading-6 font-medium text-main hover:bg-accent hover:text-white px-4 py-2 rounded-md focus:outline-none focus:text-white focus:bg-secondary">
                Projects
                </nuxt-link>
                <nuxt-link to="/" class="whitespace-no-wrap text-base leading-6 font-medium text-main hover:bg-accent hover:text-white px-4 py-2 rounded-md focus:outline-none focus:text-white focus:bg-secondary">
                Contact Me
                </nuxt-link>
            </div>
            </div>
        </div>

        <!--
            Mobile menu, show/hide based on mobile menu state.

            Entering: "duration-200 ease-out"
            From: "opacity-0 scale-95"
            To: "opacity-100 scale-100"
            Leaving: "duration-100 ease-in"
            From: "opacity-100 scale-100"
            To: "opacity-0 scale-95"
        -->
        <div class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden" v-show="openMobileNav">
            <div class="rounded-lg shadow-lg">
            <div class="rounded-lg shadow-xs bg-white divide-y-2 divide-gray-50">
                <div class="pt-5 pb-6 px-5 space-y-6">
                <div class="flex items-center justify-between">
                    <div>
                    <img class="h-8 w-auto" src="/logo-1-resized.png" >
                    </div>
                    <div class="-mr-2">
                    <button @click="openMobileNav = false" type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-600 transition duration-150 ease-in-out">
                        <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    </div>
                </div>
                <div>
                    <nav class="grid row-gap-8">
                        <nuxt-link to="/" @click="openMobileNav = false" class="whitespace-no-wrap text-base leading-6 font-medium text-main hover:bg-gray-200 hover:text-main px-4 py-2 rounded-md focus:outline-none focus:text-white focus:bg-secondary">
                        About Me
                        </nuxt-link>
                    </nav>
                </div>
                <div>
                    <nav class="grid row-gap-8">
                        <nuxt-link to="/projects" @click="openMobileNav = false" class="whitespace-no-wrap text-base leading-6 font-medium text-main hover:bg-gray-200 hover:text-main px-4 py-2 rounded-md focus:outline-none focus:text-white focus:bg-secondary">
                        Projects
                        </nuxt-link>
                    </nav>
                </div>
                <div>
                    <nav class="grid row-gap-8">
                        <nuxt-link to="/" class="whitespace-no-wrap text-base leading-6 font-medium text-main hover:bg-gray-200 hover:text-main px-4 py-2 rounded-md focus:outline-none focus:text-white focus:bg-secondary">
                        Contact Me
                        </nuxt-link>
                    </nav>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>
</template>
<script>
import Logo from "./Logo"
export default {
    components:{
        Logo
    },
    data(){
        return {
            openMobileNav: false,
        }
    }
}
</script>