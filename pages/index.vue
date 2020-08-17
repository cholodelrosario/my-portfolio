<template>
  <div class="container">
    <div class="w-screen justify-between md:grid md:grid-cols-2 grid">
      <div class="w-full md:p-24 sm:p-8 p-8">
        <h1 class="md:text-6xl sm:text-5xl text-5xl font-bold text-main">Hi! 
          <span :class="hoverEffect == true ? 'text-secondary' : 'text-accent'">I'm Cholo</span>
        </h1>
        <h2 class="font-thin md:text-4xl sm:text-2xl text-2xl">
          Web Developer & UI/UX Designer
        </h2>
        <p class="mt-2 text-base leading-6 text-gray-700">
            Creating the best looking web applications with good user experience.
        </p>
        <button @mouseover="hoverEffect = true" @mouseleave="hoverEffect = false" class="focus:outline-none focus:bg-gray-100 focus:text-gray-700 hover:bg-secondary px-5 py-3 bg-accent text-white rounded-md mt-4">See My Projects</button>
          <!-- <div class="md:ml-3 mt-3 inline-flex rounded-md shadow">
              <a href="#" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-main bg-white hover:text-accent focus:outline-none transition duration-150 ease-in-out">
              Know More About Me
              </a>
          </div> -->
      </div>
      <div class="w-full">
          <img class="object-cover" src="/hero.png" alt="">
      </div>


    </div>
    <!-- <div class="w-screen h-120 bg-accent m-0">
        <h2 class="font-bold text-white p-16 md:text-3xl sm:text-2xl text-xl">
          Portfolio
        </h2>      
    </div> -->
    <Stack/>
    <ProjectFront :location="'home'" :projects="projects"/>
    <CallToAction/>
  </div>
</template>

<script>

export default {
  data(){
    return{
      hoverEffect: false,
      projects: []
    }
  },
  computed:{
    showProjects(){
    }
  },
  created(){
    this.getProjects()
  },
  methods:{
    getProjects(){
      this.$prismic.api.query(this.$prismic.predicates.at('document.type', 'projects'),
        { pageSize: 3 }
      ).then((response) => {
        response.results.forEach(page=> { page.routes = `/projects/${page.uid}/`})
        this.projects = response.results
      }).catch(err =>{
        console.log(err,'error')
      }) 
    }
  }
}
</script>

