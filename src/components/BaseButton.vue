<template>
<button class="button">{{ title }}</button>

</template>

<script>
export default {
    props: {
        title: {
            required: true,
            type: String
        }
    }
}

</script>
<style scoped>
.button {
    width: 100%;
    background: #4f4f4f;
    border: none;
    color: white;
    transition: 0.2s;
    cursor: pointer;
    padding: 0.5rem;
    font-weight: 700;
    font-size: 1.2rem;
}
.button:hover {
    background: #000;
}
</style>