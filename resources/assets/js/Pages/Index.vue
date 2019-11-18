<template>
    <div>
        <h2>Index</h2>
        <inertia-link href="/about">To About page</inertia-link>
        <strong>{{ $props }}</strong>
        
        <inertia-link href="/" method="post">post</inertia-link>
        <inertia-link href="/" method="delete">delete</inertia-link>
    </div>
</template>

<script>
export default {
    name: 'Index',
    props: ['postCounter', 'shared', 'app', 'user']
}
</script>