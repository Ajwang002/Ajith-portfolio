<template>
    <div class="w-full h-fit-content">
        <section class="grid grid-cols-3">
            <!-- Contact Info Section -->
            <div class="flex flex-col gap-4 items-start">
                <div>CONTACT INFO</div>
                <div v-for="info in contactInfo" :key="info.title" class="w-full flex items-center">
                    <div class="w-4/12">
                        <Unicon :name="info.icon" fill="#64748b" hover-fill="#fff"/>
                    </div>
                    <div class="w-8/12 flex flex-col items-start justify-start">
                        <span>{{ info.title }}</span>
                        <div v-for="detail in info.value" :key="detail">
                            {{ detail }}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script setup lang="ts">

const contactInfo = [
    {title: 'MAIL US', value: ['ajithkumarvak1083@gmail.com'], icon:'envelope-alt'},
    {title: 'CONTACT US', value: ['+916384249009', '+916382831313'], icon:'phone'},
    {title: 'LOCATION', value: ['Salem (DT),Tamil Nadu,', 'India - 636012'], icon:'map-marker'},
]
</script>