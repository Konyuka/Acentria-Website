<template>
    <div>

        <div class="relative isolate bg-white px-6 py-24 sm:py lg:px-8">
            <svg class="absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
                aria-hidden="true">
                <defs>
                    <pattern id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527" width="200" height="200" x="50%" y="-64"
                        patternUnits="userSpaceOnUse">
                        <path d="M100 200V.5M.5 .5H200" fill="none" />
                    </pattern>
                </defs>
                <svg x="50%" y="-64" class="overflow-visible fill-gray-50">
                    <path
                        d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M299.5 800h201v201h-201Z"
                        stroke-width="0" />
                </svg>
                <rect width="100%" height="100%" stroke-width="0" fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)" />
            </svg>
            <div class="mx-auto max-w-xl lg:max-w-6xl">
                <h2 class="text-4xl font-bold tracking-tight text-gray-900">Let’s talk about your project</h2>
                <p class="mt-2 text-lg leading-8 text-gray-600">We help companies and individuals build out their brand
                    guidelines.</p>
                <div class="mt-16 flex flex-col gap-16 sm:gap-y-20 lg:flex-row">
                    <form action="#" method="POST" class="lg:flex-auto">
                        <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                            <div>
                                <label for="first-name"
                                    class="block text-sm font-semibold leading-6 text-gray-900">First name</label>
                                <div class="mt-2.5">
                                    <input type="text" name="first-name" id="first-name" autocomplete="given-name"
                                        class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6">
                                </div>
                            </div>
                            <div>
                                <label for="last-name" class="block text-sm font-semibold leading-6 text-gray-900">Last
                                    name</label>
                                <div class="mt-2.5">
                                    <input type="text" name="last-name" id="last-name" autocomplete="family-name"
                                        class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6">
                                </div>
                            </div>
                            <div>
                                <label for="budget" class="block text-sm font-semibold leading-6 text-gray-900">Phone
                                    NUmber</label>
                                <div class="mt-2.5">
                                    <input id="budget" name="budget" type="number"
                                        class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6">
                                </div>
                            </div>
                            <div>
                                <label for="website" class="block text-sm font-semibold leading-6 text-gray-900">Email
                                    Address</label>
                                <div class="mt-2.5">
                                    <input type="email" name="website" id="website"
                                        class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6">
                                </div>
                            </div>
                            <div class="sm:col-span-2">
                                <label for="message"
                                    class="block text-sm font-semibold leading-6 text-gray-900">Message</label>
                                <div class="mt-2.5">
                                    <textarea id="message" name="message" rows="4"
                                        class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"></textarea>
                                </div>
                            </div>
                        </div>
                        <div class="mt-10">
                            <button type="submit" class="button-style">
                                Let’s
                                talk
                            </button>
                        </div>
                        <p class="mt-4 text-sm leading-6 text-gray-500">By submitting this form, I agree to the <a
                                href="#" class="font-semibold text-primary">privacy&nbsp;policy</a>.</p>
                    </form>
                    <div class="lg:mt-6 lg:w-80 lg:flex-none">
                        <img class="h-12 w-auto" src="https://tailwindui.com/img/logos/workcation-logo-primary.svg"
                            alt="">
                        <figure class="mt-10">
                            <blockquote class="text-lg font-semibold leading-8 text-gray-900">
                                <p>“Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas
                                    culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.”
                                </p>
                            </blockquote>
                            <figcaption class="mt-10 flex gap-x-6">
                                <img src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=96&h=96&q=80"
                                    alt="" class="h-12 w-12 flex-none rounded-full bg-gray-50">
                                <div>
                                    <div class="text-base font-semibold text-gray-900">Brenna Goyette</div>
                                    <div class="text-sm leading-6 text-gray-600">CEO of Workcation</div>
                                </div>
                            </figcaption>
                        </figure>
                    </div>
                </div>
            </div>
        </div>

        <div class="bg-white py-24 sm:py-32">
            <div class="mx-auto max-w-7xl px-6 lg:px-8">
                <div class="mx-auto max-w-2xl space-y-16 divide-y divide-gray-100 lg:mx-0 lg:max-w-none">
                    <div class="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
                        <div>
                            <h2 class="text-3xl font-bold tracking-tight text-gray-900">Get in touch</h2>
                            <p class="mt-4 leading-7 text-gray-600">Quam nunc nunc eu sed. Sed rhoncus quis ultricies ac
                                pellentesque.</p>
                        </div>
                        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
                            <div class="rounded-2xl bg-gray-50 p-10">
                                <h3 class="text-base font-semibold leading-7 text-gray-900">Collaborate</h3>
                                <dl class="mt-3 space-y-1 text-sm leading-6 text-gray-600">
                                    <div>
                                        <dt class="sr-only">Email</dt>
                                        <dd><a class="font-semibold text-primary"
                                                href="mailto:collaborate@example.com">collaborate@example.com</a></dd>
                                    </div>
                                    <div class="mt-1">
                                        <dt class="sr-only">Phone number</dt>
                                        <dd>+1 (555) 905-2345</dd>
                                    </div>
                                </dl>
                            </div>
                            <div class="rounded-2xl bg-gray-50 p-10">
                                <h3 class="text-base font-semibold leading-7 text-gray-900">Press</h3>
                                <dl class="mt-3 space-y-1 text-sm leading-6 text-gray-600">
                                    <div>
                                        <dt class="sr-only">Email</dt>
                                        <dd><a class="font-semibold text-primary"
                                                href="mailto:press@example.com">press@example.com</a></dd>
                                    </div>
                                    <div class="mt-1">
                                        <dt class="sr-only">Phone number</dt>
                                        <dd>+1 (555) 905-3456</dd>
                                    </div>
                                </dl>
                            </div>
                            <div class="rounded-2xl bg-gray-50 p-10">
                                <h3 class="text-base font-semibold leading-7 text-gray-900">Join our team</h3>
                                <dl class="mt-3 space-y-1 text-sm leading-6 text-gray-600">
                                    <div>
                                        <dt class="sr-only">Email</dt>
                                        <dd><a class="font-semibold text-primary"
                                                href="mailto:careers@example.com">careers@example.com</a></dd>
                                    </div>
                                    <div class="mt-1">
                                        <dt class="sr-only">Phone number</dt>
                                        <dd>+1 (555) 905-4567</dd>
                                    </div>
                                </dl>
                            </div>
                            <div class="rounded-2xl bg-gray-50 p-10">
                                <h3 class="text-base font-semibold leading-7 text-gray-900">Say hello</h3>
                                <dl class="mt-3 space-y-1 text-sm leading-6 text-gray-600">
                                    <div>
                                        <dt class="sr-only">Email</dt>
                                        <dd><a class="font-semibold text-primary"
                                                href="mailto:hello@example.com">hello@example.com</a></dd>
                                    </div>
                                    <div class="mt-1">
                                        <dt class="sr-only">Phone number</dt>
                                        <dd>+1 (555) 905-5678</dd>
                                    </div>
                                </dl>
                            </div>
                        </div>
                    </div>
                    <div class="grid grid-cols-1 gap-x-8 gap-y-10 pt-16 lg:grid-cols-3">
                        <div>
                            <h2 class="text-3xl font-bold tracking-tight text-gray-900">Locations</h2>
                            <p class="mt-4 leading-7 text-gray-600">Consequat sunt cillum cillum elit sint. Qui occaecat
                                nisi in ipsum commodo.</p>
                        </div>
                        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
                            <div class="rounded-2xl bg-gray-50 p-10">
                                <h3 class="text-base font-semibold leading-7 text-gray-900">Los Angeles</h3>
                                <address class="mt-3 space-y-1 text-sm not-italic leading-6 text-gray-600">
                                    <p>4556 Brendan Ferry</p>
                                    <p>Los Angeles, CA 90210</p>
                                </address>
                            </div>
                            <div class="rounded-2xl bg-gray-50 p-10">
                                <h3 class="text-base font-semibold leading-7 text-gray-900">New York</h3>
                                <address class="mt-3 space-y-1 text-sm not-italic leading-6 text-gray-600">
                                    <p>886 Walter Street</p>
                                    <p>New York, NY 12345</p>
                                </address>
                            </div>
                            <div class="rounded-2xl bg-gray-50 p-10">
                                <h3 class="text-base font-semibold leading-7 text-gray-900">Toronto</h3>
                                <address class="mt-3 space-y-1 text-sm not-italic leading-6 text-gray-600">
                                    <p>7363 Cynthia Pass</p>
                                    <p>Toronto, ON N3Y 4H8</p>
                                </address>
                            </div>
                            <div class="rounded-2xl bg-gray-50 p-10">
                                <h3 class="text-base font-semibold leading-7 text-gray-900">Chicago</h3>
                                <address class="mt-3 space-y-1 text-sm not-italic leading-6 text-gray-600">
                                    <p>726 Mavis Island</p>
                                    <p>Chicago, IL 60601</p>
                                </address>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        



    </div>
</template>