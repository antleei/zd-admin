<template>
    <ElContainer h-screen main-text>
        <ElHeader w-full h-15 main-bg p0 fixed top-0 left-0 z-100>
            <TheHeader />
        </ElHeader>
        <ElContainer>
            <ElAside w-55 h-full main-bg fixed left-0 top-0 pt-15>
                <Menu />
            </ElAside>
            <ElMain pt-15 pl-55 bg="gray-100 dark:dark-800">
                <RouterView />
            </ElMain>
        </ElContainer>
    </ElContainer>
</template>
