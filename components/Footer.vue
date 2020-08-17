<template>
    <div class="text-main">
        
        <div class="h-24 border-t-2 border-gray-100 md:grid md:grid-cols-2 grid md:justify-center py-4">
            <!-- icons -->
            <div class="md:px-12 px-8 flex items-center">
                <font-awesome-icon :icon="['fas', 'copyright']"/> <h1 class="ml-2">2020 Cholo Miguel Del Rosario.</h1>
            </div>
            <div class="flex items-center md:justify-end gap-4 md:px-12 px-8">
                <a v-for="link in links" :key="link.icon" rel="noopener noreferrer"  class="cursor-pointer" target="_blank" :href="link.to">
                    <font-awesome-icon :icon="['fab', `${link.icon}`]"/>
                </a>
            </div>

        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            links: [
                {to: 'http://www.facebook.com', icon: 'facebook'},
                {to: 'http://www.linkedin.com', icon: 'linkedin'},
                {to: 'http://www.github.com', icon: 'github'},
            ]
        }
    },
    methods:{
        goTo(link){
            window.location.replace(link)
        }
    }
}
</script>