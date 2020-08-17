<template>
        <div class="w-screen md:p-4 sm:p-8 p-8 text-center bg-gray-100 ">
        <div class="max-w-screen-xl mx-auto py-12 sm:px-6 lg:py-16 lg:px-16 md:gap-24 ">
            <h2 class="text-3xl leading-9 font-bold tracking-tight text-main sm:text-4xl sm:leading-10">
                Branding & Logo
            <br>
            <div class="flex justify-center gap-4 mt-6 ">
                <div class="text-sm tracking-normal mt-4 w-20 h-20 rounded-full bg-red-300 shadow-md flex items-center" v-for="n in 3" :key="n">
                    <div class="w-full text-center text-white font-light">#000000</div> 
                </div>
            </div>
            </h2>
            <div class="md:mt-6 mt-8 flex lg:flex-shrink-0 lg:mt-6 justify-evenly">
                <img src="/memp-logo.jpg" class="w-64 shadow-md" alt="">
            </div>
        </div>
        </div>   
</template>
