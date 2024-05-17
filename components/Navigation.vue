<script setup>
import { computed, ref } from 'vue'


// const currentRoute = computed(() => {
//     const pathName = window.location.pathname;
//     return pathName;
// })
const openMobileMenu = ref(false);
const currentRoute = ref(null)



</script>

<template>

    <div class="flex mx-auto max-w-8xl px-8 justify-between bg-black">

        <div class="h-full justify-center content-center items-center my-auto mt-2">
            <div class="flex justify-between my-2 gap-10">
                <a href="tel:+254717269050"
                    class="text-white tranform transition hover:scale-90 duration-700 ease-in-out text-md wow animate__zoomInDown tracking-widest"
                    data-wow-duration="2.5s">
                    <i class="fas fa-envelope-dot text-primary fa-xl mr-2"></i>
                    info@acentriagroup.com
                </a>
                <a href="tel:+254717269050"
                    class="text-white tranform transition hover:scale-90 duration-700 ease-in-out text-md wow animate__zoomInDown tracking-widest"
                    data-wow-duration="2s">
                    <i class="fas fa-phone-volume text-primary fa-xl mr-2"></i>

                    +254 705 200 222 or +254 731 200 999
                </a>
                <a target="_blank"
                    href="https://www.google.com/maps/place/Westpark+Towers/@-1.2644631,36.8045408,17z/data=!3m1!4b1!4m16!1m9!4m8!1m0!1m6!1m2!1s0x182f176afe68fe1b:0xf590c6d95ac4594f!2sParklands+Rd,+Nairobi!2m2!1d36.8071157!2d-1.2644685!3m5!1s0x182f176afe68fe1b:0xf590c6d95ac4594f!8m2!3d-1.2644685!4d36.8071157!16s%2Fg%2F11fjfmcspn?entry=ttu"
                    class="text-white tranform transition hover:scale-90 duration-700 ease-in-out text-md wow animate__zoomInDown tracking-widest"
                    data-wow-duration="2s">
                    <i class="fas fa-map-location-dot text-primary fa-xl mr-2"></i>

                    9th Floor, West park Towers, Westlands, Nairobi
                </a>



            </div>
        </div>

        <div class="flex space-x-6 md:order-2">

            <div class="flex gap-12 my-2 ">
                <a href="https://www.instagram.com/commercialkitchensconsultants/" target="_blank">
                    <i class="fab fa-linkedin  icon-style force_white"></i>
                </a>
                <a href="https://www.instagram.com/commercialkitchensconsultants/" target="_blank">
                    <i class="fab fa-google icon-style force_white"></i>
                </a>
                <a href="https://www.instagram.com/commercialkitchensconsultants/" target="_blank">
                    <i class="fab fa-facebook icon-style force_white"></i>
                </a>
                <a href="https://www.instagram.com/commercialkitchensconsultants/" target="_blank">
                    <i class="fab fa-instagram icon-style force_white"></i>
                </a>
                <a href="https://www.instagram.com/commercialkitchensconsultants/" target="_blank">
                    <i class="fab fa-tiktok icon-style force_white"></i>
                </a>
                <a href="https://www.instagram.com/commercialkitchensconsultants/" target="_blank">
                    <i class="fab fa-youtube icon-style force_white"></i>
                </a>
            </div>
        </div>
    </div>


    <header class="bg-white shadow-2xl lg:static lg:overflow-y-visible">

        <div class="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">

            <div class="relative flex justify-between xl:grid xl:grid-cols-12">

                <div class="flex md:absolute md:inset-y-0 md:left-0 lg:static xl:col-span-3">
                    <div class="flex flex-shrink-0 items-center">
                        <a href="#">
                            <img class="h-28 w-auto" src="/img/logo.png" alt="Your Company">
                        </a>
                    </div>
                </div>


                <div class="ml-10 min-w-0 flex md:px-8 lg:px-0 xl:col-span-7">
                    <div class="flex items-center px-6 py-4 md:mx-auto md:max-w-3xl lg:mx-0 lg:max-w-none xl:px-0">

                        <nav class="relative flex w-full items-center justify-between bg-white py-2 shadow-dark-mild dark:bg-neutral-700 lg:flex-wrap lg:justify-start"
                            data-twe-navbar-ref>
                            <div class="px-6">

                                <div class="!visible hidden flex-grow basis-[100%] items-center lg:!flex lg:basis-auto"
                                    id="navbarSupportedContent2" data-twe-collapse-item>

                                    <ul class="me-auto flex flex-row gap-14" data-twe-navbar-nav-ref>



                                        <li data-twe-nav-item-ref>
                                            <NuxtLink
                                                class="text-center border-r-4 border-black border-spacing-8 group text-2xl tracking-widest hover:scale-110 duration-700 ease-in-out block py-2 pe-2 text-black transition hover:text-primary hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-10"
                                                href="#!">
                                                <i class="fas fa-home text-primary group-hover:text-black"></i>
                                                <br>
                                                Home
                                            </NuxtLink>
                                        </li>
                                        <li data-twe-nav-item-ref>
                                            <NuxtLink
                                                class="text-center border-r-4 border-black group text-2xl tracking-widest hover:scale-110 duration-700 ease-in-out block py-2 pe-2 text-black transition hover:text-primary hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-10"
                                                href="#!">
                                                <i class="fas fa-user-tie-hair text-primary group-hover:text-black"></i>
                                                <br>
                                                About
                                            </NuxtLink>
                                        </li>
                                        <li data-twe-nav-item-ref>
                                            <NuxtLink
                                                class="text-center border-r-4 border-black group text-2xl tracking-widest hover:scale-110 duration-700 ease-in-out block py-2 pe-2 text-black transition hover:text-primary hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-10"
                                                href="#!">
                                                <i class="fas fa-address-book text-primary group-hover:text-black"></i>
                                                <br>
                                                Contact
                                            </NuxtLink>
                                        </li>
                                        <li data-twe-nav-item-ref>
                                            <NuxtLink
                                                class="text-center group text-2xl tracking-widest hover:scale-110 duration-700 ease-in-out block py-2 pe-2 text-black transition hover:text-primary hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-10"
                                                href="#!">
                                                <i class="fas fa-newspaper text-primary group-hover:text-black"></i>
                                                <br>
                                                Blogs
                                            </NuxtLink>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </nav>

                    </div>
                </div>

                <div class="flex items-center md:absolute md:inset-y-0 md:right-0 lg:hidden">
                    <!-- Mobile menu button -->
                    <button type="button"
                        class="relative -mx-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                        aria-expanded="false">
                        <span class="absolute -inset-0.5"></span>
                        <span class="sr-only">Open menu</span>

                        <svg class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>

                        <svg class="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>


                <div class="hidden lg:flex lg:items-center lg:justify-end xl:col-span-2 w-full">
                    <a href="#" class="button-style">
                        Get a Quote
                    </a>
                </div>

            </div>

        </div>

        <!-- Mobile menu, show/hide based on menu state. -->
        <nav class="lg:hidden" aria-label="Global">
            <div class="mx-auto max-w-3xl space-y-1 px-2 pb-3 pt-2 sm:px-4">
                <!-- Current: "bg-gray-100 text-gray-900", Default: "hover:bg-gray-50" -->
                <a href="#" aria-current="page"
                    class="bg-gray-100 text-gray-900 block rounded-md py-2 px-3 text-base font-medium">Dashboard</a>
                <a href="#" class="hover:bg-gray-50 block rounded-md py-2 px-3 text-base font-medium">Calendar</a>
                <a href="#" class="hover:bg-gray-50 block rounded-md py-2 px-3 text-base font-medium">Teams</a>
                <a href="#" class="hover:bg-gray-50 block rounded-md py-2 px-3 text-base font-medium">Directory</a>
            </div>
            <div class="border-t border-gray-200 pb-3 pt-4">
                <div class="mx-auto flex max-w-3xl items-center px-4 sm:px-6">
                    <div class="flex-shrink-0">
                        <img class="h-10 w-10 rounded-full"
                            src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt="">
                    </div>
                    <div class="ml-3">
                        <div class="text-base font-medium text-gray-800">Chelsea Hagon</div>
                        <div class="text-sm font-medium text-gray-500">chelsea.hagon@example.com</div>
                    </div>
                    <button type="button"
                        class="relative ml-auto flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                        <span class="absolute -inset-1.5"></span>
                        <span class="sr-only">View notifications</span>
                        <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                            aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                        </svg>
                    </button>
                </div>
                <div class="mx-auto mt-3 max-w-3xl space-y-1 px-2 sm:px-4">
                    <a href="#"
                        class="block rounded-md px-3 py-2 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900">Your
                        Profile</a>
                    <a href="#"
                        class="block rounded-md px-3 py-2 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900">Settings</a>
                    <a href="#"
                        class="block rounded-md px-3 py-2 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900">Sign
                        out</a>
                </div>
            </div>
        </nav>
    </header>


</template>

<style scoped>
.force_white {
    color: white !important;
}

.force_white:hover {
    color: #ed1c24 !important;
}
</style>