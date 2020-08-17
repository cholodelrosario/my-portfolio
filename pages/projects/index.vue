<template>
    <div class="container">
        <nuxt-link :to="returnFeatured !== null ? returnFeatured.routes : ''">
        <ProjectHero v-show="returnFeatured !== null" 
            :title="returnFeatured !== null ? $prismic.asText(returnFeatured.projecttitle) : ''" 
            :shortdescription="returnFeatured !== null ? $prismic.asText(returnFeatured.shortdescription) : ''" 
            :stackused="returnFeatured !== null ? returnFeatured.stackused : ''" 
            :heroimage="returnFeatured !== null ? returnFeatured.heroimage.url : ''"
            :sitelink="returnFeatured == null || returnFeatured.sitelink.url == undefined  ? null : returnFeatured.sitelink.url"
            :featured="true"
            :location="'projectpage'"
            :routes="returnFeatured !== null ? returnFeatured.routes : ''"
            :github="returnFeatured !== null ? '' : ''"
            class="cursor-pointer"
        />
        </nuxt-link>
        <h3 class="text-3xl text-center leading-8 font-bold tracking-tight text-main sm:text-4xl sm:leading-10 w-screen mt-4 mb-16">
            More Projects
        </h3>
        <nuxt-link :to="content.routes" v-for="(content,i) in returnProjects" :key="content+i">
                <Content :content="content" class="w-screen cursor-pointer hover:bg-gray-100 hover:shadow-lg" :location="'projectpage'" :routes="content.routes"/>
        </nuxt-link>
        <CallToAction/>
    </div>
</template>
<script>
export default {
    data(){
        return {
            projects: null
        }
    },
    created(){
        this.getProjects()
    },
    computed:{
        returnFeatured(){
            if(this.projects == null) return null
            let feature = null
            this.projects.forEach(a=>{
                let data = {...a.data}
                if(data.featuredproject == true){
                    data.routes = a.routes
                    feature = data
                }
            })
            console.log(feature,'featured')
            return feature
        },
        returnProjects(){
            if(this.projects == null) return null
            let non = []
            let i = 0
            this.projects.forEach(a=>{
                let data = {...a.data}

                if(data.featuredproject !== true){
                    let projectContent = {
                            contentbody: this.checkFunction(data.shortdescription[0].text),
                            contenttitle: this.checkFunction(data.projecttitle[0].text),
                            contentposition: i % 2 !== 0 ? 'left' : 'right',
                            contentimage:this.checkFunction(data.projectthumbnail.url),
                            contentlink: this.checkFunction(data.sitelink.url),
                            contentgallery: [],
                            gallerystart: '',
                            routes: a.routes
                    }
                    non.push(projectContent)
                    i = i + 1
                }
            })
            console.log(non,'non')
            return non
        }
    },
    methods:{
        seeClick(){
            console.log('sad')
        },
        async getProjects(){
            await this.$prismic.api.query(this.$prismic.predicates.at('document.type', 'projects'),
                { pageSize: 3 }
            ).then((response) => {
                response.results.forEach(page=> { page.routes = `/projects/${page.uid}/`} )
                // console.log(response.results,'getProjects')
                this.projects = response.results
            }).catch(err =>{
                console.log(err,'error')
            }) 
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