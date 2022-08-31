<template>
    <ElContainer h-screen main-text>
        <ElHeader w-full h-15 main-bg p0 fixed top-0 left-0 z-100>
            <TheHeader />
        </ElHeader>
        <ElContainer>
            <ElAside app-aside>
                <TheMenu />
            </ElAside>
            <ElMain app-main>
                <div m-3>
                    <RouterView />
                </div>
            </ElMain>
        </ElContainer>
    </ElContainer>
</template>
