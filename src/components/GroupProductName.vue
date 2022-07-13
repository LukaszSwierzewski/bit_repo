<template>
<h2 class="listing--heading">{{ title }}</h2>

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
.listing--heading {
    align-items: right;
    margin-top: 5rem;
    text-transform: uppercase;
}
</style>