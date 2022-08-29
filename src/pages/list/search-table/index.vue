<script lang="ts" setup>
// import { ElTable } from 'element-plus'
import type { TableColumnCtx } from 'element-plus/es/components/table/src/table-column/defaults'

interface User {
    date: string
    name: string
    address: string
    tag: string
}

const formatter = (row: User, column: TableColumnCtx<User>) => {
    return row.address
}
const filterTag = (value: string, row: User) => {
    return row.tag === value
}

const tableData: User[] = [
    {
        date: '2016-05-03',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
        tag: 'Home',
    },
    {
        date: '2016-05-02',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
        tag: 'Office',
    },
    {
        date: '2016-05-04',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
        tag: 'Home',
    },
    {
        date: '2016-05-01',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
        tag: 'Office',
    },
]
</script>

<template>
    <div p-3>
        <div mb-3>
            <el-button>
                reset date filter
            </el-button>
            <el-button>
                reset all filters
            </el-button>
        </div>

        <ElTable row-key="date" :data="tableData" style="width: 100%">
            <el-table-column
                prop="date"
                label="Date"
                sortable
                width="180"
                column-key="date"
                :filters="[
                    { text: '2016-05-01', value: '2016-05-01' },
                    { text: '2016-05-02', value: '2016-05-02' },
                    { text: '2016-05-03', value: '2016-05-03' },
                    { text: '2016-05-04', value: '2016-05-04' },
                ]"
            />
            <el-table-column prop="name" label="Name" width="180" />
            <el-table-column prop="address" label="Address" :formatter="formatter" />

            <el-table-column
                prop="tag"
                label="Tag"
                width="100"
                :filters="[
                    { text: 'Home', value: 'Home' },
                    { text: 'Office', value: 'Office' },
                ]"
                :filter-method="filterTag"
                filter-placement="bottom-end"
            >
                <template #default="scope">
                    <el-tag
                        :type="scope.row.tag === 'Home' ? '' : 'success'"
                        disable-transitions
                    >
                        {{ scope.row.tag }}
                    </el-tag>
                </template>
            </el-table-column>
        </ElTable>
    </div>
</template>
