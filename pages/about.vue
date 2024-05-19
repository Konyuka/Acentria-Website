<!-- <script setup>
import { Carousel, Slide } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';
import { ref } from 'vue';

const settings = ref({
    itemsToShow: 1,
    snapAlign: 'center',
},)

const breakpoints = ref({
    700: {
        itemsToShow: 3.5,
        snapAlign: 'center',
    },
    1024: {
        itemsToShow: 4,
        snapAlign: 'start',
    },
},)

const clients = ref([
    {
        name: 'Mpesa Foundation',
        image: '/img/logo.png'
    }
    
])


</script>

<template>

        <Head title="Restaurant Kitchen Equipment Consultants" />

        <div class="bg-white">

            <main class="relative isolate">
                <div class="absolute inset-x-0 top-4 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
                    aria-hidden="true">
                    <div class="aspect-[1108/632] w-[69.25rem] flex-none bg-gradient-to-r from-[#000] to-primary opacity-25"
                        style="clip-path: polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)">
                    </div>
                </div>

                <div class="px-6 lg:px-8">
                    <div class="mx-auto max-w-2xl pt-10 sm:pt-20 text-center">
                        <h2 class="wow animate__rubberBand text-4xl font-bold tracking-tight text-primary sm:text-6xl">
                            Who
                            We
                            Are</h2>
                        
                    </div>
                </div>

                <div class="mx-auto mt-10 sm:mt-20 max-w-7xl px-6 lg:px-8">
                    <div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
                        <div
                            class="grid max-w-xl grid-cols-1 gap-8 text-sm sm:text-base leading-6 sm:leading-10 text-black font-semibold lg:max-w-none lg:grid-cols-1">
                            <div data-wow-duration="1.5s" data-wow-delay="2s" class="wow animate__lightSpeedInLeft">
                                <p> We are a team of passionate professionals who share a common vision: to
                                    revolutionize
                                    the commercial kitchen experience. Our journey began with a collective drive to
                                    address
                                    the challenges faced by clients when setting up their dream culinary spaces. <br>
                                    <br>
                                    Drawing
                                    from our diverse backgrounds in the hospitality industry, we recognized that many
                                    clients, especially first-time purchasers, lacked the knowledge and guidance
                                    required to
                                    navigate the complexities of commercial kitchen design and equipment selection. We
                                    were
                                    determined to make a difference. <br> <br>
                                </p>

                                <p>
                                    Together, we formed Commercial Kitchens Consultants with a singular mission: to
                                    empower
                                    our clients and ensure a seamless journey in creating their ideal commercial
                                    kitchens.
                                    We believe that no client should endure the frustration of unmet timelines or fall
                                    prey
                                    to suppliers who prioritize their own interests. <br> <br>

                                    Our team is committed to providing expert guidance and support throughout every step
                                    of
                                    the process.
                                    From designing innovative kitchen layouts to selecting the perfect equipment from
                                    trusted suppliers, we
                                    leverage our industry expertise and rigorous supplier qualification process to
                                    ensure
                                    that our clients
                                    make informed decisions that align with their needs and budgets.

                                    <br><br>

                                    With a meticulous approach to procurement and project management, we orchestrate the
                                    entire
                                    process, sparing our clients the stress of constant supervision. Our goal is to
                                    deliver
                                    on time and exceed
                                    expectations, leaving our clients with a kitchen that is fully functional,
                                    aesthetically
                                    pleasing, and
                                    optimized for productivity.


                                    <br> <br> Join us on this exciting
                                    journey as we
                                    redefine culinary spaces and elevate the dining experience for your guests.
                                    Together,
                                    let's create exceptional culinary spaces that inspire, captivate, and drive success.

                                    <br><br>

                                    Welcome to Commercial Kitchens Consultants, where we elevate culinary spaces,
                                    together.
                                </p>

                            </div>

                        </div>
                        <dl
                            class="mt-16 grid grid-cols-1 gap-x-8 gap-y-5 sm:mt-20 sm:grid-cols-2 sm:gap-y-16 lg:mt-28 lg:grid-cols-4">
                            <div data-wow-duration="1.5s" data-wow-delay="0.5s"
                                class="wow animate__backInUp flex flex-col-reverse gap-y-3 border-l border-white/20 pl-6">
                                <dt class="text-base leading-7 text-black font-bold">Business was founded</dt>
                                <dd class="text-3xl font-semibold tracking-tight text-primary">2021</dd>
                            </div>
                            <div data-wow-duration="1.5s" data-wow-delay="1s"
                                class="wow animate__backInUp flex flex-col-reverse gap-y-3 border-l border-white/20 pl-6">
                                <dt class="text-base leading-7 text-black font-bold">People on the team</dt>
                                <dd class="text-3xl font-semibold tracking-tight text-primary">7+</dd>
                            </div>

                            <div data-wow-duration="1.5s" data-wow-delay="1.5s"
                                class="wow animate__backInUp flex flex-col-reverse gap-y-3 border-l border-white/20 pl-6">
                                <dt class="text-base leading-7 text-black font-bold">Projects completed</dt>
                                <dd class="text-3xl font-semibold tracking-tight text-primary">20+</dd>
                            </div>
                            <div data-wow-duration="1.5s" data-wow-delay="2s"
                                class="wow animate__backInUp flex flex-col-reverse gap-y-3 border-l border-white/20 pl-6">
                                <dt class="text-base leading-7 text-black font-bold">Happy clients</dt>
                                <dd class="text-3xl font-semibold tracking-tight text-primary">18+</dd>
                            </div>
                        </dl>
                    </div>
                </div>

                <div class="mx-2 rounded-lg mt-16 sm:mt-40 xl:mx-auto xl:max-w-7xl xl:px-8">
                    <img src="/img/logo.png" alt=""
                        class="aspect-[9/9] sm:aspect-[9/4] w-full object-cover xl:rounded-3xl">
                </div>

                <div class="mx-auto mt-16 max-w-7xl px-6 sm:mt-40 lg:px-8">
                    <div class="mx-auto max-w-7xl lg:mx-0 text-center">
                        <h2 class="text-3xl font-bold tracking-tight text-primary sm:text-4xl">Our values</h2>
                        <p
                            class="mt-6 text-md sm:text-lg leading-6 sm:leading-8 text-black font-semibold text-center sm:px-28">
                            At Commercial
                            Kitchens Consultants, our
                            values guide
                            our every action, decision, and interaction. They are the foundation upon which we build
                            trust,
                            deliver excellence, and achieve success for our clients.
                        </p>
                    </div>

                    <dl
                        class="sm:mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-10 text-base leading-7 text-gray-300 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-16">
                        <div class="relative sm:pl-9">
                            <dt class="inline font-semibold text-primary">
                                <i class="fa-sharp fa-light fa-user-chef fa-2x mb-5"></i>
                                Expertise <br>
                            </dt>
                            <dd class="text-sm sm:text-md inline font-semibold">We are committed to staying at the
                                forefront
                                of the commercial
                                kitchen
                                industry, continuously expanding our knowledge and expertise to provide the best
                                solutions
                                for our clients.</dd>
                        </div>
                        <div class="relative sm:pl-9">
                            <dt class="inline font-semibold text-primary">
                                <i class="fa-regular fa-gavel fa-2x mb-5"></i>
                                Integrity <br>
                            </dt>
                            <dd class="text-sm sm:text-md inline font-semibold">
                                We uphold the highest ethical standards, ensuring transparency, honesty, and fairness in
                                all
                                our dealings.
                            </dd>
                        </div>
                        <div class="relative sm:pl-9">
                            <dt class="inline font-semibold text-primary">
                                <i class="fa-sharp fa-solid fa-user-tie fa-2x mb-5"></i>
                                Client-Centric <br>
                            </dt>
                            <dd class="text-sm sm:text-md inline font-semibold">
                                Our clients are at the heart of everything we do. We listen, understand, and prioritize
                                their unique needs to deliver tailored solutions.
                            </dd>
                        </div>
                        <div class="relative sm:pl-9">
                            <dt class="inline font-semibold text-primary">
                                <i class="fa-sharp fa-regular fa-business-time fa-2x mb-5"></i>
                                Reliability <br>
                            </dt>
                            <dd class="text-sm sm:text-md inline font-semibold">We are unwavering in our commitment to
                                meeting deadlines,
                                delivering on
                                promises, and providing dependable services.</dd>
                        </div>
                        <div class="relative sm:pl-9">
                            <dt class="inline font-semibold text-primary">
                                <i class="fa-sharp fa-solid fa-thumbs-up fa-2x mb-5"></i>
                                Quality <br>
                            </dt>
                            <dd class="text-sm sm:text-md inline font-semibold">We hold ourselves to the highest
                                standards
                                of quality, ensuring
                                that every
                                project we undertake reflects our dedication to excellence.</dd>
                        </div>
                        <div class="relative sm:pl-9">
                            <dt class="inline font-semibold text-primary">
                                <i class="fa-solid fa-gears fa-2x mb-5"></i>
                                Innovation <br>
                            </dt>
                            <dd class="text-sm sm:text-md inline font-semibold">We embrace innovation and creativity to
                                find
                                unique solutions
                                that drive
                                efficiency and exceed expectations.</dd>
                        </div>
                    </dl>
                </div>

                <div class="bg-gray-900 py-24 sm:py-32">
                    <div class="mx-auto max-w-7xl px-6 text-center lg:px-8">
                        <div class="mx-auto max-w-2xl">
                            <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">Meet our team</h2>
                            <p class="mt-4 text-lg leading-8 text-gray-400">We’re a dynamic group of individuals who are
                                passionate about what we do.</p>
                        </div>
                        <ul role="list"
                            class="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
                            <li class="rounded-2xl bg-gray-800 px-8 py-10">
                                <img class="mx-auto h-48 w-48 rounded-full md:h-56 md:w-56"
                                    src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
                                    alt="">
                                <h3 class="mt-6 text-base font-semibold leading-7 tracking-tight text-white">Leonard
                                    Krasner</h3>
                                <p class="text-sm leading-6 text-gray-400">Senior Designer</p>
                                <ul role="list" class="mt-6 flex justify-center gap-x-6">
                                    <li>
                                        <a href="#" class="text-gray-400 hover:text-gray-300">
                                            <span class="sr-only">X</span>
                                            <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20"
                                                aria-hidden="true">
                                                <path
                                                    d="M11.4678 8.77491L17.2961 2H15.915L10.8543 7.88256L6.81232 2H2.15039L8.26263 10.8955L2.15039 18H3.53159L8.87581 11.7878L13.1444 18H17.8063L11.4675 8.77491H11.4678ZM9.57608 10.9738L8.95678 10.0881L4.02925 3.03974H6.15068L10.1273 8.72795L10.7466 9.61374L15.9156 17.0075H13.7942L9.57608 10.9742V10.9738Z" />
                                            </svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" class="text-gray-400 hover:text-gray-300">
                                            <span class="sr-only">LinkedIn</span>
                                            <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20"
                                                aria-hidden="true">
                                                <path fill-rule="evenodd"
                                                    d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                                                    clip-rule="evenodd" />
                                            </svg>
                                        </a>
                                    </li>
                                </ul>
                            </li>

                        </ul>
                    </div>
                </div>


                <div class="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
                    <div class="mx-auto max-w-7xl lg:mx-0 text-center mb-10">
                        <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">Our Clients</h2>
                        <p class="mt-6 text-lg leading-8 text-black font-bold">Who we've worked with</p>
                    </div>

                    <div>

                        <Carousel :autoplay="2000" :wrap-around="true" v-bind="settings" :breakpoints="breakpoints">
                            <Slide v-for="(client, index) in clients" :key="index">
                                <li class="mr-5">
                                    <img class="carousel__item aspect-[14/13] w-full rounded-2xl object-cover"
                                        :src="client.image" alt="">
                                    <h3 class="mb-20 mt-6 text-lg font-semibold leading-8 tracking-tight text-white">
                                        {{ client.name }}
                                    </h3>
                                </li>
                            </Slide>
                        </Carousel>
                    </div>

                </div>

            </main>

            <div></div>
        </div>

</template> -->