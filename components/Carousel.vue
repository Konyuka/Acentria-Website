<template>
    <swiper effect="fade" :fadeEffect="{
        crossFade: true,
        duration: 5000,
    }" :pagination="pagination" :modules="modules" class="mySwiper relative">
        <swiper-slide v-for="(slide, index) in slides" :key="index" class="relative">
            <!-- Image -->
            <img :src="slide.imageUrl" class="w-full h-full object-cover" />

            <!-- Overlay -->
            <div class="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>

            <!-- Content -->
            <div
                class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center px-4 sm:px-8 text-white">
                <h2 class="text-3xl sm:text-7xl font-bold mb-4">{{ slide.title }}</h2>
                <p class="text-base sm:text-3xl mb-8 mt-12">{{ slide.description }}</p>
                <button
                    class="z-[51] relative bg-black !hover:bg-primary text-white font-bold py-5 px-10 text-2xl rounded-sm mt-10">
                    Learn More <i class="fas fa-arrow-right text-primary ml-2 text-md"></i>
                </button>
            </div>
        </swiper-slide>
    </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { EffectCards, EffectCoverflow, EffectCreative, EffectCube, EffectFade, EffectFlip } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { EffectScope } from 'vue';

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            pagination: {
                clickable: true,
                renderBullet: function (index, className) {
                    let content = '';
                    switch (index) {
                        case 0:
                            content = 'Reinsurance Broking';
                            break;
                        case 1:
                            content = 'Insurance Broking';
                            break;
                        case 2:
                            content = 'Actuarial Services';
                            break;
                        case 3:
                            content = 'Aviation Insurance';
                            break
                        case 4:
                            content = 'Investment Services';
                            break;
                        case 5:
                            content = 'Tech Services';
                            break;
                        default:
                            content = index + 1;
                            break;
                    }
                    return `
                                <div class="${className} flex items-center justify-center h-full">
                                <span class="text-black font-semibold flex h-full items-center justify-center">${content}</span>
                                </div>
                            `;
                }
            },
            modules: [Pagination, EffectFade, EffectCube, EffectCoverflow, EffectFlip, EffectCards, EffectCreative],
            slides: [
                {
                    imageUrl: 'https://images.unsplash.com/photo-1528819622765-d6bcf132f793?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                    title: 'Strategic Risk Management',
                    description: 'Mitigating Risks, Maximizing Opportunities',
                },
                {
                    imageUrl: 'https://plus.unsplash.com/premium_photo-1682130152050-aa8dad566b15?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                    title: 'Tailored Insurance Solutions',
                    description: 'Protecting Your Assets, Empowering Your Future',
                },
                
                {
                    imageUrl: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                    title: 'Data-Driven Insights',
                    description: 'Unraveling Complexity, Empowering Decision-Making',
                },
                {
                    imageUrl: 'https://images.unsplash.com/photo-1520442027413-7bf6c51517da?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                    title: 'Secure Your Flight Path with Confidence',
                    description: 'Tailored Coverage for Every Ascent',
                },
                {
                    imageUrl: 'https://images.unsplash.com/photo-1618044733300-9472054094ee?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                    title: 'Financial Growth Strategies',
                    description: 'Building prosperity, Securing Futures',
                },
                {
                    imageUrl: 'https://plus.unsplash.com/premium_photo-1681457329880-58db6aa7cc2d?q=80&w=1957&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                    title: 'Innovative Solutions',
                    description: 'Navigating the Digital Frontier with ease',
                },
            ],
        };
    },
};
</script>

<style>
.swiper-wrapper {
    position: relative;
    width: 100%;
    height: 80vh;
    z-index: 1;
    display: flex;
    transition-property: transform;
    transition-timing-function: var(--swiper-wrapper-transition-timing-function, initial);
    box-sizing: content-box;
}

.swiper-pagination-bullet {
    width: var(--swiper-pagination-bullet-width, var(--swiper-pagination-bullet-size, 300px));
    height: var(--swiper-pagination-bullet-height, var(--swiper-pagination-bullet-size, 50px));
    display: inline-block;
    border-radius: var(--swiper-pagination-bullet-border-radius, 0);
    background: var(--swiper-pagination-bullet-inactive-color, #fff);
    opacity: var(--swiper-pagination-bullet-inactive-opacity, 1);
    transition: all 0.3s;
    cursor: pointer;
    align-items: center !important;
    justify-content: center !important;
}

.swiper-pagination-bullet-active {
    background: var(--swiper-pagination-color, #ed1c24);
    opacity: var(--swiper-pagination-bullet-active-opacity, 1);
}
</style>
