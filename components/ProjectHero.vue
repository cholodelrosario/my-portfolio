<template>
    <div class="container">
       <div class="w-screen md:h-screen lg:h-screen justify-between md:grid md:grid-cols-2 lg:grid lg:grid-cols-2" >
        <div class="w-full md:p-24 sm:p-8 p-8">
            <span class="bg-accent text-white px-2 tracking-widest" v-show="featured">FEATURED PROJECT</span>
            <div v-show="featured"><br></div>
            <h1 class="md:text-5xl sm:text-5xl text-5xl font-bold text-main leading-tight mb-4">
            {{title}}
            </h1>
            <p class="my-4 text-base leading-6 text-gray-600">
                {{shortdescription}}
            </p>
            <h2 class="font-thin text-sm flex flex-wrap items-center gap-4">
                <div class="p-2 gap-2 rounded-lg border-gray-200 border-2" v-for="stack in stackused" :key="returnStack(stack)">{{returnStack(stack)}}</div>
            </h2>
            <div class="flex flex-wrap items-center gap-4"> 
                <button class="focus:outline-none focus:bg-gray-100 focus:text-gray-600 hover:bg-accent h-12 w-12 bg-main text-white rounded-full mt-4 items-center justify-center" v-show="sitelink !== null"><a :href="sitelink" target="blank"> <font-awesome-icon :icon="['fas', 'globe']"/> </a></button>
                <button class="focus:outline-none focus:bg-gray-100 focus:text-gray-600 hover:bg-accent h-12 w-12 bg-main text-white rounded-full mt-4 items-center justify-center" v-show="github !== '' && github !== undefined"><a :href="github" target="blank"> <font-awesome-icon :icon="['fab', 'github']"/> </a></button>
                <button v-if="location == 'projectpage'" class="focus:outline-none focus:bg-gray-100 focus:text-gray-600 hover:bg-accent px-5 py-3 bg-main text-white rounded-md mt-4" v-show="routes !== ''"><nuxt-link :to="routes"> Go To Project <font-awesome-icon :icon="['fas', 'arrow-circle-right']"/> </nuxt-link></button>
            </div>
        </div>
        <div class="w-full">
            <img class="object-cover" :src="heroimage" alt="">
        </div>
        </div>     
    </div>
</template>
<script>
export default {
    props: ['title','shortdescription','stackused','heroimage','sitelink','featured','location','routes','github'],
    data(){
        return {
            stack: ['Vue JS','Quasar Framework','Firebase']
        }
    },
    methods:{
        returnStack(stack){
            let obj = {...stack.stack}
            // console.log(this.heroimage,'hero image')
            return obj[0].text
        },
        goTo(link){
            window.location.replace(link)
        }
    }
}
</script>