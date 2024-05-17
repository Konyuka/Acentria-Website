<template>
    <div>
        <Carousel />

        <div class="bg-white">

            <div class="relative isolate">
                <svg class="absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
                    aria-hidden="true">
                    <defs>
                        <pattern id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527" width="200" height="200" x="50%" y="-1"
                            patternUnits="userSpaceOnUse">
                            <path d="M100 200V.5M.5 .5H200" fill="none" />
                        </pattern>
                    </defs>
                    <svg x="50%" y="-1" class="overflow-visible fill-gray-50">
                        <path
                            d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                            stroke-width="0" />
                    </svg>
                    <rect width="100%" height="100%" stroke-width="0"
                        fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)" />
                </svg>
                <div
                    class="mx-auto max-w-[80vw] px-6 py-24 sm:py-32 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-40">
                    <div class="mx-auto max-w-4xl lg:mx-0 lg:flex-auto">
                        <div class="flex">
                            <div
                                class="shadow-3xl hover:scale-90 duration-700 ease-in-out relative flex items-center gap-x-4 rounded-full px-4 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                                <span class="font-semibold text-primary">Compare Insurance Quotes</span>
                                <span class="h-4 w-px bg-gray-900/10" aria-hidden="true"></span>
                                <a href="#" class="flex items-center gap-x-1">
                                    <span class="absolute inset-0" aria-hidden="true"></span>
                                    Acentria Insuarance Quoatations
                                    <svg class="-mr-2 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor"
                                        aria-hidden="true">
                                        <path fill-rule="evenodd"
                                            d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                                            clip-rule="evenodd" />
                                    </svg>
                                </a>
                            </div>
                        </div>

                        <h1 class="mt-10 max-w-lg text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                            Acentria Group <br>
                            Your Partner in Financial Solutions
                        </h1>

                        <p class="mt-6 text-lg leading-8 text-gray-600">

                            Acentria Group is a leading financial services provider with a mission to empower
                            individuals and businesses with innovative solutions to navigate the complex landscape of
                            financial risk management. With years of experience and a team of dedicated experts, we have
                            established ourselves as a trusted partner for clients seeking personalized and effective
                            financial strategies, insurane and reinsurance.
                        </p>

                        <p class="mt-2 text-lg leading-8 text-gray-600">
                            Our services cover a broad spectrum of financial needs, including insurance broking, where
                            we leverage our extensive network and expertise to secure the best coverage at competitive
                            rates for our clients. Our reinsurance broking services offer additional layers of
                            protection, ensuring comprehensive risk management solutions.
                        </p>

                        <p class="mt-2 text-lg leading-8 text-gray-600">
                            In addition to traditional insurance services, we offer actuarial services that provide
                            valuable insights and analysis to support informed decision-making. Our investment services
                            help clients grow and protect their wealth, with tailored investment strategies designed to
                            achieve their long-term financial goals.
                        </p>

                        <p class="mt-2 text-lg leading-8 text-gray-600">
                            Take the first step towards financial security and success. Contact us today to learn more
                            about how Acentria Group can partner with you to achieve your financial goals.
                        </p>

                        <div class="mt-10 flex items-center gap-x-6">
                            <a href="#" class="button-style !px-10">
                                Contact us
                            </a>
                            <a href="#" class="text-md font-semibold leading-6 text-gray-900">Learn more about us<span
                                    aria-hidden="true" class="ml-2">→</span></a>
                        </div>
                    </div>

                    <div class="ml-10 mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow">
                        <svg viewBox="0 0 366 729" role="img" class="mx-auto w-[22.875rem] max-w-full drop-shadow-xl">
                            <title>App screenshot</title>
                            <defs>
                                <clipPath id="2ade4387-9c63-4fc4-b754-10e687a0d332">
                                    <rect width="316" height="684" rx="36" />
                                </clipPath>
                            </defs>
                            <path fill="#4B5563"
                                d="M363.315 64.213C363.315 22.99 341.312 1 300.092 1H66.751C25.53 1 3.528 22.99 3.528 64.213v44.68l-.857.143A2 2 0 0 0 1 111.009v24.611a2 2 0 0 0 1.671 1.973l.95.158a2.26 2.26 0 0 1-.093.236v26.173c.212.1.398.296.541.643l-1.398.233A2 2 0 0 0 1 167.009v47.611a2 2 0 0 0 1.671 1.973l1.368.228c-.139.319-.314.533-.511.653v16.637c.221.104.414.313.56.689l-1.417.236A2 2 0 0 0 1 237.009v47.611a2 2 0 0 0 1.671 1.973l1.347.225c-.135.294-.302.493-.49.607v377.681c0 41.213 22 63.208 63.223 63.208h95.074c.947-.504 2.717-.843 4.745-.843l.141.001h.194l.086-.001 33.704.005c1.849.043 3.442.37 4.323.838h95.074c41.222 0 63.223-21.999 63.223-63.212v-394.63c-.259-.275-.48-.796-.63-1.47l-.011-.133 1.655-.276A2 2 0 0 0 366 266.62v-77.611a2 2 0 0 0-1.671-1.973l-1.712-.285c.148-.839.396-1.491.698-1.811V64.213Z" />
                            <path fill="#343E4E"
                                d="M16 59c0-23.748 19.252-43 43-43h246c23.748 0 43 19.252 43 43v615c0 23.196-18.804 42-42 42H58c-23.196 0-42-18.804-42-42V59Z" />
                            <foreignObject width="316" height="684" transform="translate(24 24)"
                                clip-path="url(#2ade4387-9c63-4fc4-b754-10e687a0d332)">
                                <img src="https://tailwindui.com/img/component-images/mobile-app-screenshot.png"
                                    alt="" />
                            </foreignObject>
                        </svg>
                    </div>
                </div>
            </div>

        </div>

        <div class="bg-white py-20">
            <div class="mx-auto max-w-7xl px-6 lg:px-8">
                <div class="mx-auto max-w-2xl lg:max-w-none">
                    <div class="text-center">
                        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                            Explore Our Impact
                        </h2>
                        <p class="mt-4 text-2xl leading-8 text-gray-600">
                            Unveiling Our Financial Footprint
                        </p>
                    </div>
                    <dl
                        class="mt-10 grid grid-cols-1 gap-10 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4 p-10">
                        <div class="flex flex-col bg-gray-400/5 p-8 shadow-2xl">
                            <dt class="text-sm font-semibold leading-6 text-gray-600">Years of experience</dt>
                            <dd class="order-first text-3xl font-semibold tracking-tight text-primary">10+</dd>
                        </div>
                        <div class="flex flex-col bg-gray-400/5 p-8 shadow-2xl">
                            <dt class="text-sm font-semibold leading-6 text-gray-600">Satisfied clients</dt>
                            <dd class="order-first text-3xl font-semibold tracking-tight text-primary">500+</dd>
                        </div>
                        <div class="flex flex-col bg-gray-400/5 p-8 shadow-2xl">
                            <dt class="text-sm font-semibold leading-6 text-gray-600">Countries of operations</dt>
                            <dd class="order-first text-3xl font-semibold tracking-tight text-primary">5+</dd>
                        </div>
                        <div class="flex flex-col bg-gray-400/5 p-8 shadow-2xl">
                            <dt class="text-sm font-semibold leading-6 text-gray-600">Awards & recognitions</dt>
                            <dd class="order-first text-3xl font-semibold tracking-tight text-primary">7+</dd>
                        </div>
                    </dl>
                </div>
            </div>
        </div>

        <div class="bg-white mt-14">


            <main>

                <div class="isolate overflow-hidden">
                    <div class="flow-root bg-black py-16 sm:pt-32 lg:pb-0">
                        <div class="mx-auto max-w-7xl px-6 lg:px-8">
                            <div class="relative z-10">
                                <h1 class="mx-auto max-w-4xl text-center text-5xl font-bold tracking-tight text-white">
                                    Why work with us ?
                                </h1>
                                <p class="mx-auto mt-4 max-w-2xl text-center text-lg leading-8 text-white">
                                    Discover Excellence, Partner with Confidence, Thrive with Assurance
                                </p>
                                <div class="mt-16 flex justify-center">
                                    <fieldset
                                        class="grid grid-cols-2 gap-x-1 rounded-full bg-white/5 p-1 text-center text-xs font-semibold leading-5 text-white">
                                        <legend class="sr-only">Payment frequency</legend>
                                        <label class="rounded-full px-2.5 py-1">
                                            <input type="radio" name="frequency" value="monthly" class="sr-only">
                                            <span>Acentria</span>
                                        </label>
                                        <label class="rounded-full px-2.5 py-1">
                                            <input type="radio" name="frequency" value="annually" class="sr-only">
                                            <span>Group</span>
                                        </label>
                                    </fieldset>
                                </div>
                            </div>
                            <div
                                class="relative mx-auto mt-10 grid max-w-md grid-cols-1 gap-y-8 lg:mx-0 lg:-mb-14 lg:max-w-none lg:grid-cols-3">
                                <svg viewBox="0 0 1208 1024" aria-hidden="true"
                                    class="absolute -bottom-48 left-1/2 h-[64rem] -translate-x-1/2 translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] lg:-top-48 lg:bottom-auto lg:translate-y-0">
                                    <ellipse cx="604" cy="512" fill="url(#d25c25d4-6d43-4bf9-b9ac-1842a30a4867)"
                                        rx="604" ry="512" />
                                    <defs>
                                        <radialGradient id="d25c25d4-6d43-4bf9-b9ac-1842a30a4867">
                                            <stop stop-color="#ed1c24" />
                                            <stop offset="1" stop-color="#ed1c24" />
                                        </radialGradient>
                                    </defs>
                                </svg>

                                <div class="hidden lg:absolute lg:inset-x-px lg:bottom-0 lg:top-4 lg:block lg:rounded-t-2xl lg:bg-gray-800/80 lg:ring-1 lg:ring-white/10"
                                    aria-hidden="true"></div>

                                <div
                                    class="relative rounded-2xl bg-gray-800/80 ring-1 ring-white/10 lg:bg-transparent lg:pb-14 lg:ring-0">
                                    <div class="p-8 lg:pt-12 xl:p-10 xl:pt-14">
                                        <h2 id="tier-starter" class="text-sm font-semibold leading-6 text-white">Trusted
                                            Guidance
                                        </h2>
                                        <div
                                            class="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between lg:flex-col lg:items-stretch">
                                            <div class="mt-2 flex items-center gap-x-4">
                                                <p class="text-4xl font-bold tracking-tight text-white">
                                                    <i class="far fa-compass"></i>
                                                </p>
                                            </div>
                                            <div aria-describedby="tier-starter"
                                                class="rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 bg-white/10 focus-visible:outline-white">
                                                Your Pathway to Financial Security
                                            </div>
                                        </div>
                                        <div class="mt-8 flow-root sm:mt-10">
                                            <ul role="list"
                                                class="-my-2 divide-y border-t text-sm leading-6 lg:border-t-0 divide-white/5 border-white/5 text-white">
                                                <li class="flex gap-x-3 py-2">
                                                    <svg class="h-6 w-5 flex-none text-primary" viewBox="0 0 20 20"
                                                        fill="currentColor" aria-hidden="true">
                                                        <path fill-rule="evenodd"
                                                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                                            clip-rule="evenodd" />
                                                    </svg>
                                                    Receive expert advice and guidance from a trusted financial partner
                                                    with a deep understanding of the market and a focus on your
                                                    long-term success.
                                                </li>
                                                <li class="flex gap-x-3 py-2">
                                                    <svg class="h-6 w-5 flex-none text-primary" viewBox="0 0 20 20"
                                                        fill="currentColor" aria-hidden="true">
                                                        <path fill-rule="evenodd"
                                                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                                            clip-rule="evenodd" />
                                                    </svg>
                                                    Gain access to innovative investment strategies and solutions
                                                    designed to maximize your returns and secure your financial future.
                                                </li>
                                                <li class="flex gap-x-3 py-2">
                                                    <svg class="h-6 w-5 flex-none text-primary" viewBox="0 0 20 20"
                                                        fill="currentColor" aria-hidden="true">
                                                        <path fill-rule="evenodd"
                                                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                                            clip-rule="evenodd" />
                                                    </svg>
                                                    Count on our dedicated team to provide personalized support and
                                                    tailored solutions to help you achieve your financial goals with
                                                    confidence.
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div class="relative rounded-2xl z-10 bg-white shadow-xl ring-1 ring-gray-900/10">
                                    <div class="p-8 lg:pt-12 xl:p-10 xl:pt-14">
                                        <h2 id="tier-scale" class="text-sm font-semibold leading-6 text-gray-900">
                                            Experience Excellence
                                        </h2>
                                        <div
                                            class="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between lg:flex-col lg:items-stretch">
                                            <div class="mt-2 flex items-center gap-x-4">
                                                <p class="text-4xl font-bold tracking-tight text-gray-900">
                                                    <i class="far fa-award"></i>
                                                </p>

                                            </div>
                                            <div aria-describedby="tier-scale"
                                                class="rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 bg-primary shadow-sm focus-visible:outline-indigo-600">
                                                Your Partner for Unmatched Financial Solutions
                                            </div>
                                        </div>
                                        <div class="mt-8 flow-root sm:mt-10">
                                            <ul role="list"
                                                class="-my-2 divide-y border-t text-sm leading-6 lg:border-t-0 divide-gray-900/5 border-gray-900/5 text-gray-600">
                                                <li class="flex gap-x-3 py-2">
                                                    <svg class="h-6 w-5 flex-none text-primary" viewBox="0 0 20 20"
                                                        fill="currentColor" aria-hidden="true">
                                                        <path fill-rule="evenodd"
                                                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                                            clip-rule="evenodd" />
                                                    </svg>
                                                    Access a comprehensive range of financial services tailored to your
                                                    needs, including insurance broking, reinsurance solutions, and
                                                    actuarial services.
                                                </li>
                                                <li class="flex gap-x-3 py-2">
                                                    <svg class="h-6 w-5 flex-none text-primary" viewBox="0 0 20 20"
                                                        fill="currentColor" aria-hidden="true">
                                                        <path fill-rule="evenodd"
                                                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                                            clip-rule="evenodd" />
                                                    </svg>
                                                    Benefit from our team's extensive expertise and years of experience
                                                    in the financial industry, ensuring top-notch service and
                                                    personalized guidance.
                                                </li>
                                                <li class="flex gap-x-3 py-2">
                                                    <svg class="h-6 w-5 flex-none text-primary" viewBox="0 0 20 20"
                                                        fill="currentColor" aria-hidden="true">
                                                        <path fill-rule="evenodd"
                                                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                                            clip-rule="evenodd" />
                                                    </svg>
                                                    Trust in our commitment to excellence, integrity, and customer
                                                    satisfaction, backed by a proven track record of success.
                                                </li>

                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div
                                    class="relative rounded-2xl bg-gray-800/80 ring-1 ring-white/10 lg:bg-transparent lg:pb-14 lg:ring-0">
                                    <div class="p-8 lg:pt-12 xl:p-10 xl:pt-14">
                                        <h2 id="tier-growth" class="text-sm font-semibold leading-6 text-white">
                                            Innovative Solutions
                                        </h2>
                                        <div
                                            class="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between lg:flex-col lg:items-stretch">
                                            <div class="mt-2 flex items-center gap-x-4">
                                                <p class="text-4xl font-bold tracking-tight text-white">
                                                    <i class="far fa-lightbulb-gear"></i>
                                                </p>
                                            </div>
                                            <div aria-describedby="tier-growth"
                                                class="rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 bg-white/10 focus-visible:outline-white">
                                                Empowering Your Financial Journey
                                            </div>
                                        </div>
                                        <div class="mt-8 flow-root sm:mt-10">
                                            <ul role="list"
                                                class="-my-2 divide-y border-t text-sm leading-6 lg:border-t-0 divide-white/5 border-white/5 text-white">
                                                <li class="flex gap-x-3 py-2">
                                                    <svg class="h-6 w-5 flex-none text-primary" viewBox="0 0 20 20"
                                                        fill="currentColor" aria-hidden="true">
                                                        <path fill-rule="evenodd"
                                                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                                            clip-rule="evenodd" />
                                                    </svg>
                                                    Harness the power of cutting-edge technology solutions to streamline
                                                    processes, enhance efficiency, and drive growth in your financial
                                                    operations.
                                                </li>
                                                <li class="flex gap-x-3 py-2">
                                                    <svg class="h-6 w-5 flex-none text-primary" viewBox="0 0 20 20"
                                                        fill="currentColor" aria-hidden="true">
                                                        <path fill-rule="evenodd"
                                                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                                            clip-rule="evenodd" />
                                                    </svg>
                                                    Explore our suite of technology-driven tools and platforms designed
                                                    to optimize workflow, improve customer experience, and stay ahead of
                                                    the competition.
                                                </li>
                                                <li class="flex gap-x-3 py-2">
                                                    <svg class="h-6 w-5 flex-none text-primary" viewBox="0 0 20 20"
                                                        fill="currentColor" aria-hidden="true">
                                                        <path fill-rule="evenodd"
                                                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                                            clip-rule="evenodd" />
                                                    </svg>
                                                    Partner with us to unlock new opportunities, overcome challenges,
                                                    and transform your financial landscape with innovative solutions
                                                    tailored to your unique needs
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="relative bg-white lg:pt-14">
                        <div class="mx-auto max-w-7xl px-6 py-2">

                        </div>
                    </div>
                </div>

                <div class="bg-white">
                    <div class="mx-auto max-w-[67vw] px-6 py-32 lg:px-8">
                        <div class="mx-auto  divide-y divide-gray-900/10">
                            <h2 class="text-2xl font-bold leading-10 tracking-tight text-gray-900">Frequently asked
                                questions</h2>
                            <dl class="mt-10 space-y-6 divide-y divide-gray-900/10">
                                <div class="pt-6">
                                    <dt>
                                        <!-- Expand/collapse question button -->
                                        <button type="button"
                                            class="flex w-full items-start justify-between text-left text-gray-900"
                                            aria-controls="faq-0" aria-expanded="false">
                                            <span class="text-base font-semibold leading-7">What&#039;s the best thing
                                                about Switzerland?</span>
                                            <span class="ml-6 flex h-7 items-center">
                                                <!--
                  Icon when question is collapsed.

                  Item expanded: "hidden", Item collapsed: ""
                -->
                                                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                                    stroke="currentColor" aria-hidden="true">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="M12 6v12m6-6H6" />
                                                </svg>
                                                <!--
                  Icon when question is expanded.

                  Item expanded: "", Item collapsed: "hidden"
                -->
                                                <svg class="hidden h-6 w-6" fill="none" viewBox="0 0 24 24"
                                                    stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M18 12H6" />
                                                </svg>
                                            </span>
                                        </button>
                                    </dt>
                                    <dd class="mt-2 pr-12" id="faq-0">
                                        <p class="text-base leading-7 text-gray-600">I don&#039;t know, but the flag is
                                            a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                                            cupiditate laboriosam fugiat.</p>
                                    </dd>
                                </div>

                                <!-- More questions... -->
                            </dl>
                        </div>
                    </div>
                </div>



            </main>

        </div>



    </div>
</template>