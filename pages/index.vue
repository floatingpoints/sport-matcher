<template>
    <div class="flex flex-col gap-3 mx-5 mb-3">
        <div class="flex flex-col gap-2">
            <div class="font-bold">My groups</div>
            <div class="grid grid-cols-2 gap-2">
                <div v-for="group in groups" :key="group.id" class="shadow-xl card bg-base-content">
                    <figure><img :src="group.image" :alt="group.name" /></figure>
                    <div class="-m-4 card-body">
                        <NuxtLink>
                            <h2 class="card-title text-primary">{{ group.name }}</h2>
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex">
            <NuxtLink to="/new-group" class="flex-1 btn btn-primary">Start a new group</NuxtLink>
        </div>
    </div>
</template>

<script lang="ts" setup>
const groups = useGroups()
</script>
