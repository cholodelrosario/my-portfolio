<template>
    <div>
        <div class="bg-gray-50 md:p-12 sm:p-8 p-8">
        <div class="max-w-screen-xl mx-auto py-12 sm:px-6 lg:py-16 lg:px-16 lg:flex lg:items-center lg:justify-between">
            <h2 class="text-3xl leading-9 font-bold tracking-tight text-main sm:text-4xl sm:leading-10">
                Let's create cool things together!
            <br>
            <span class="text-accent md:text-3xl text-2xl">hello@cholodelrosario.com</span>
            </h2>
            <div class="mt-8 flex lg:flex-shrink-0 lg:mt-0">
            <div class="inline-flex rounded-md shadow">
                <a href="#" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-accent hover:bg-secondary focus:outline-none transition duration-150 ease-in-out">
                Contact Me
                </a>
            </div>
            <div class="ml-3 inline-flex rounded-md shadow">
                <a :href="resumeLink" v-show="resumeLink !== null" target="blank" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-main bg-white hover:text-accent focus:outline-none transition duration-150 ease-in-out">
                <span class="md:block hidden mr-1">Download </span> My Resume
                </a>
            </div>
            </div>
        </div>
        </div>        
    </div>
</template>
<script>
export default {
    data(){
        return {
            resumeLink: null
        }
    },
    created(){
        this.fetch()
    },
    methods:{
        async fetch() {
            let data = null
            await this.$prismic.api.getSingle('homepage').then((document) =>{
                if(document){
                    data = document.data
                }
            })

            this.resumeLink = data == null || data == undefined ? null : data.linkresume.url
            // console.log(this.resumeLink,'homepage')
        }
    }
}
</script>