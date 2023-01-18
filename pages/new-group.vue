<template>
    <div class="flex flex-col items-center justify-between gap-4">
        <ul class="steps">
            <li class="step" :class="{ 'step-primary': form.step >= 1 }">Area</li>
            <li class="step" :class="{ 'step-primary': form.step >= 2 }">Sport</li>
            <li class="step" :class="{ 'step-primary': form.step >= 3 }">Name</li>
            <li class="step" :class="{ 'step-primary': form.step >= 4 }">Detail</li>
            <li class="step" :class="{ 'step-primary': form.step >= 5 }">Summary</li>
        </ul>

        <form @submit.prevent="submit" class="w-full px-7" id="new-group-form">
            <div v-if="form.step === 1">
                <input type="text" placeholder="Town or area" v-model="form.group.area"
                    class="w-full max-w-xs input input-bordered input-primary" />
            </div>
            <div v-else-if="form.step === 2">
                <select class="w-full max-w-xs select select-primary" v-model="form.group.sport">
                    <option disabled selected value="">What sport does this group play?</option>
                    <option value="badminton">Badminton</option>
                    <option value="football">Football</option>
                    <option value="basketball">Basketball</option>
                    <option value="volleyball">Volleyball</option>
                </select>
            </div>
            <div v-else-if="form.step === 3">
                <input type="text" placeholder="Name of the group" v-model="form.group.name"
                    class="w-full max-w-xs input input-bordered input-primary" />
            </div>
            <div v-else-if="form.step === 4">
                <textarea class="w-full textarea textarea-primary" placeholder="Group description and rules"
                    v-model="form.group.description"></textarea>
            </div>
            <div v-else>
                <p class="flex flex-row justify-between">
                    <span>Group name:</span>
                    <span class="uppercase">{{ form.group.name }}</span>
                </p>
                <p class="flex flex-row justify-between">
                    <span>Sport:</span>
                    <span class="uppercase">{{ form.group.sport }}</span>
                </p>
                <p class="flex flex-row justify-between">
                    <span>Location:</span>
                    <span>{{ form.group.area }}</span>
                </p>
                <p class="flex flex-row justify-between">
                    <span>Description:</span>
                    <span class="text-right">{{ form.group.description }}</span>
                </p>
            </div>
        </form>

        <div class="flex flex-row gap-5">
            <button class="btn btn-secondary" @click="move(-1)">Back</button>
            <button class="btn btn-primary" @click="move(1)" v-if="form.step <= 4">Next</button>
            <button class="btn btn-primary" v-else type="submit" form="new-group-form">Create</button>
        </div>
    </div>
</template>

<script lang="ts" setup>
const form = reactive<{ step: number, group: Group }>({
    step: 1,
    group: {
        id: 0,
        name: "",
        sport: "",
        area: "",
        description: "",
        image: ""
    }
})

function move(step: number) {
    form.step = Math.min(5, Math.max(1, form.step + step))
}

function submit() {
    const groups = useGroups()
    groups.value.push({ ...form.group, id: groups.value.length + 1 })
    navigateTo("/")
}
</script>