<template>
    <div>
        <div class="bg-gray-100 w-screen" :class="location == 'home' ? '' : 'pt-4'">
            <div class="md:text-center px-12" v-show="location == 'home'">
            <h3 class="text-3xl leading-8 font-bold tracking-tight text-main sm:text-4xl sm:leading-10">
                My Projects
            </h3>
            </div>
        </div>
        <div class="bg-gray-100 w-screen md:grid md:grid-cols-3 md:col-gap-6 md:row-gap-10 py-6 md:px-20 px-12 md:gap-8 gap-4 pb-20">
            <div class="rounded-lg flex items-center text-main mt-8" v-show="location !== 'home'">
                <h1 class="text-4xl font-bold w-full text-center">More Projects <font-awesome-icon :icon="['fas', 'arrow-circle-right']"/></h1>
                <!-- stack -->
            </div>
            <div class="bg-white rounded-lg shadow-md cursor-pointer hover:bg-gray-900 text-main hover:text-white mt-8" v-for="n in returnProjects" :key="n.route" @click="$router.push(n.route)">
                <div class="w-full rounded-lg bg-white">
                    <img :src="n.projectthumbnail" class="rounded-t-lg object-cover h-64 w-full" alt="">             
                </div>
                <div class="px-4 py-2 pb-8 flex justify-between items-center " >
                    <div>
                        <div class="mt-2 text-xl leading-6  font-bold">
                            {{n.projecttitle}}
                        </div>

                        <div class="mt-2 text-xs leading-6 text-gray-600">
                            <span v-for="(stack,i) in n.stackused" :key="stack" class="mr-1">{{stack}} <span v-show="i < n.stackused.length - 1">/</span></span>
                        </div>
                    </div>
                    <div class="">
                        <font-awesome-icon :icon="['fas', 'arrow-circle-right']" class="text-2xl "/>
                    </div>
                </div>
                <!-- stack -->
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:['location','projectID','projects'],
    data(){
        return {

        }
    },
    computed:{
        returnNumber(){
            if(this.location !== 'home'){
                return 2
            } else {
                return 3
            }
        },
        returnProjects(){
            let array = this.projects.map(a=>{
                return {
                    stackused: this.returnStack(a.data.stackused),
                    projecttitle: this.checkFunction(a.data.projecttitle[0].text),
                    projectthumbnail: this.checkFunction(a.data.projectthumbnail.url),
                    route: a.routes
                }
            })

            // console.log(array)
            return array
        }
    },
    methods:{
        returnStack(stack){
            let stacks = []
            stack.forEach(a=>{
                let obj = {...a.stack}
                stacks.push(this.checkFunction(obj[0].text)) 
            })

            return stacks
        },
        checkFunction(data){
            if (data == undefined || data == null){
                return null
            } else {
                return data
            }
        },
    }
}
</script>