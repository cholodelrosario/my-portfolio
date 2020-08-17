<template>
    <div class="">
        <div class="w-screen justify-between lg:grid lg:grid-cols-2 md:grid md:grid-cols-2 grid" v-if="content.contentposition == 'left'">
            <div class="w-full md:p-32 h-full sm:p-8 p-8">
                <h1 class="text-4xl font-bold" v-show="content.contenttitle !== null">{{content.contenttitle}}</h1>
                <p class="text-base text-gray-600 mt-4"  v-show="content.contentbody !== null">
                    {{content.contentbody}}
                </p>
                <div v-if="location == 'projectpage'" class="flex flex-wrap gap-4">
                <button class="focus:outline-none focus:bg-gray-100 focus:text-gray-600 hover:bg-accent h-12 w-12 bg-main text-white rounded-full mt-4 items-center justify-center" v-show="content.contentlink !== null"><a :href="content.contentlink" target="blank"> <font-awesome-icon :icon="['fas', 'globe']"/> </a></button>
                <button class="focus:outline-none focus:bg-gray-100 focus:text-gray-600 hover:bg-accent px-5 py-3 bg-main text-white rounded-md mt-4" v-show="routes !== ''"><nuxt-link :to="routes"> Go To Project <font-awesome-icon :icon="['fas', 'arrow-circle-right']"/> </nuxt-link></button>
                </div>
                <div class="mt-4 inline-flex rounded-md shadow" v-else>
                    <a v-show="content.contentlink !== null" :href="content.contentlink" target= '_blank' class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-main bg-white hover:bg-accent hover:text-white focus:outline-none transition duration-150 ease-in-out">
                     <font-awesome-icon :icon="['fas', 'external-link-alt']" class="mr-2"/> {{content.contentlink}}
                    </a>
                </div>
            </div>
            <div class="w-full relative">
                <!-- <div class="absolute w-3/4 right-0 mt-8 h-24 opacity-50"></div> -->
                 <img :src="content.contentimage" alt="" class="md:object-contain object-fill py-16 z-10" v-show="content.contentimage !== null">
            </div>

        </div>
        <div class="w-screen justify-between md:grid md:grid-cols-2 grid" v-else-if="content.contentposition == 'right'">

            <div class="w-full relative md:order-first order-last">
                <!-- <div class="absolute w-3/4 left-0 mt-8 h-24 opacity-50"></div> -->
                <img :src="content.contentimage" alt="" class="md:object-contain object-fill py-16 z-10" v-show="content.contentimage !== null">
            </div>
            <div class="w-full md:p-32 h-full sm:p-8 p-8">
                <h1 class="text-4xl font-bold" v-show="content.contenttitle !== null">{{content.contenttitle}}</h1>
                <p class="text-base text-gray-600 mt-4"  v-show="content.contentbody !== null">
                    {{content.contentbody}}
                </p>
                <div v-if="location == 'projectpage'" class="gap-4">
                    <button class="focus:outline-none focus:bg-gray-100 focus:text-gray-600 hover:bg-accent h-12 w-12 bg-main text-white rounded-full mt-4 items-center justify-center" v-show="content.contentlink !== null"><a :href="content.contentlink" target="blank"> <font-awesome-icon :icon="['fas', 'globe']"/> </a></button>
                                    <button class="focus:outline-none focus:bg-gray-100 focus:text-gray-600 hover:bg-accent px-5 py-3 bg-main text-white rounded-md mt-4" v-show="routes !== ''"><nuxt-link :to="routes"> Go To Project <font-awesome-icon :icon="['fas', 'arrow-circle-right']"/> </nuxt-link></button>
                </div>
                <div class="mt-4 inline-flex rounded-md shadow" v-else>
                    <a v-show="content.contentlink !== null" :href="content.contentlink" target= '_blank' class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-main bg-white hover:bg-accent hover:text-white focus:outline-none transition duration-150 ease-in-out">
                     <font-awesome-icon :icon="['fas', 'external-link-alt']" class="mr-2"/> {{content.contentlink}}
                    </a>
                </div>
            </div>
        </div>
        <div v-else>
            <div class="w-screen justify-center items-center md:grid md:grid-cols-2 grid">
                <div class="w-full md:text-center">
                    <h1 class="text-4xl font-bold px-8" v-show="content.contenttitle !== null">{{content.contenttitle}}</h1>
                </div>
                <div class="w-full md:px-32 px-8">
                    <p class="text-base text-gray-600 mt-4"  v-show="content.contentbody !== null">
                        {{content.contentbody}}
                    </p>
                    <div class="mt-4 inline-flex rounded-md shadow">
                        <a v-show="content.contentlink !== null" :href="content.contentlink" target= '_blank'  class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-main bg-white hover:bg-accent hover:text-white focus:outline-none transition duration-150 ease-in-out">
                        <font-awesome-icon :icon="['fas', 'external-link-alt']" class="mr-2"/> {{content.contentlink}}
                        </a>
                    </div>
                </div>
            </div>
            <div class="w-screen relative md:order-first order-last">
                <!-- <div class="absolute w-3/4 left-0 mt-8 h-24 opacity-50"></div> -->
                <img :src="content.contentimage"  alt="" class="w-full md:object-contain object-fill pt-16 pb-24 z-10" v-show="content.contentimage !== null">
            </div>
        </div>
        <!-- gallery -->
        <div v-for="(gal,index) in content.contentgallery" :key="index" v-show="content.contentgallery.length > 0">
            <div class="w-screen justify-between md:grid md:grid-cols-2 grid" v-if="(index + galleryStart) % 2 !== 0">
                <div class="w-full md:p-32 h-full px-8 order-first">
                    <p class="text-base text-gray-600 mt-4" v-show="gal.gallerytext !== null">
                        {{gal.gallerytext}}
                    </p>
                </div>
                <div class="w-full relative">
                    <!-- <div class="absolute w-3/4 right-0 mt-8 h-24 opacity-50"></div> -->
                    <img :src="gal.galleryimage" alt="" class="md:object-contain object-fill py-16 z-10"  v-show="gal.galleryimage  !== null">
                </div>
            </div>
            <div class="w-screen  justify-between md:grid md:grid-cols-2 grid" v-else>
                <div class="w-full relative md:order-first order-last">
                    
                    <img :src="gal.galleryimage" alt="" class="md:object-contain object-fill py-16 z-10" v-show="gal.galleryimage  !== null">
                </div>
                <div class="w-full md:p-32 h-full px-8">
                    <p class="text-base text-gray-600 mt-4" v-show="gal.gallerytext !== null">
                        {{gal.gallerytext}}
                    </p>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
export default {
    props:['content','location','routes'],
    data(){
        return {
            galleryStart: this.content.gallerystart !== null ? this.content.gallerystart : 0,
            gallery: []
        }
    },
    methods:{
        goTo(link){
            window.location.replace(link)
        }
    }
}
</script>
<style scoped>
</style>