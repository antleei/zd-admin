<script setup lang="ts">
const router = useRouter()
</script>

<template>
    <main h-full text="center teal-700 dark:gray-200">
        <div>
            <p text-4xl>
                404
            </p>
        </div>
        <RouterView />
        <div>
            <button
                m-3 text-sm mt-8
                @click="router.back()"
            >
                Go
            </button>
        </div>
    </main>
</template>
