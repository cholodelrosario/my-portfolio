<template>
    <div class="container">
        <ProjectHero v-show="project.projecttitle" 
            :title="$prismic.asText(project.projecttitle)" 
            :shortdescription="$prismic.asText(project.shortdescription)" 
            :stackused="project.stackused" 
            :heroimage="project.heroimage.url"
            :sitelink="project.sitelink.url == undefined ? null : project.sitelink.url"
            :github="''"
        />
        <!-- <ColorThemeLogo class="md:mt-0 mt-12"/>
        
        class for hover and focus click
        class="hover:bg-main hover:text-white cursor-pointer"
         -->
         <br>
        <Content v-for="(content,i) in returnContent" :key="content+i" :content="content"/>
        <ProjectFront :location="'projects'" :projects="projects"/>
        <CallToAction/>
        <!-- {{returnContent}} -->
    </div>
</template>
<script>
export default {
    async asyncData({ $prismic, params, error }) {
        const document = await $prismic.api.getByUID('projects', params.id)

        if (document) {
            // console.log(document,'doc')
            return { project: document.data, uid: document.uid }
        } else {
            error({ statusCode: 404, message: 'Page not found' })
        }
    },
    data(){
        return {
            projects: []
        }
    },
    created(){
        this.getProjects()
    },
    computed:{

        returnContent(){
            let body = this.project.body
            let content = body.filter(a=>{return a.slice_type == 'content'})



            let contents = []
            content.forEach(a=>{
                let gallery = this.checkGallery(a.items)

                let object = {
                    contentbody: this.checkFunction(a.primary.contentbody[0].text),
                    contenttitle: this.checkFunction(a.primary.contenttitle[0].text),
                    contentposition: this.checkFunction(a.primary.contentposition[0].text),
                    contentimage: this.checkFunction(a.primary.contentimage.url),
                    contentlink: this.checkFunction(a.primary.contentlink.url),
                    contentgallery: gallery,
                    gallerystart: this.checkFunction(a.primary.gallerystart),
                }
                contents.push(object)
            })


            // console.log(contents)
            return contents
        }
    },
    methods:{
        getProjects(){
            this.$prismic.api.query(this.$prismic.predicates.at('document.type', 'projects'),
                { pageSize: 3 }
            ).then((response) => {
                response.results.forEach(page=> { page.routes = `/projects/${page.uid}/`} )
                // console.log(response.results,'getProjects')
                this.projects = response.results.filter(a=>{
                    return a.uid !== this.uid
                })
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
        checkGallery(items){
            let object = []
            if(items.length > 0){
                items.forEach(a=>{
                        let obj = {
                            gallerytext: this.checkFunction(a.gallerytext[0].text),
                            galleryimage: this.checkFunction(a.galleryimage.url),
                        }
                        object.push(obj)
                })
                return object
            } else {
                return []
            }
            
        }
    }

}
</script>