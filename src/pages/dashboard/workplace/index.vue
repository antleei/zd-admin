<template>
    <ElRow>
        <ElButton>普通按钮</ElButton>
        <ElButton type="primary">
            管理员和用户能看到
        </ElButton>
        <ElButton v-permission="['admin']" type="success">
            管理员能看到
        </ElButton>
        <ElButton v-permission="['user']" type="info">
            用户能看到
        </ElButton>
        <ElButton type="warning">
            所有人能看到
        </ElButton>
        <ElButton type="danger">
            Danger
        </ElButton>
    </ElRow>
    <div v-permission="['admin', 'user']" my-3>
        <ElCard>
            <template #header>
                <div flex items-center justify-between>
                    这个是管理员、用户都能看到的卡片
                </div>
            </template>
            <div v-for="o in 4" :key="o" mb-5>
                {{ `List item ${o}` }}
            </div>
        </ElCard>
    </div>
    <div v-permission="['admin']" my-3>
        <ElCard>
            <template #header>
                <div flex="~" items-center justify-between>
                    这个是管理员才能看到的卡片
                </div>
            </template>
            <div v-for="o in 4" :key="o" mb-5>
                {{ `List item ${o}` }}
            </div>
        </ElCard>
    </div>
</template>

