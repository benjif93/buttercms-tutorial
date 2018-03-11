<template>
    <div>
        <h1>{{ page_title }}</h1>
        <div v-for="(page,index) in pages" :key="page.slug + '_' + index">
            <router-link :to="'/customers/' + page.slug">
                <div>
                    <img :src="page.fields.customer_logo" alt="">
                    <h2>{{ page.fields.headline }}</h2>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
    // Import ButterCMS
    import { butter } from '@/buttercms.js'
    export default {
        name: 'customers-home',
        data() {
            return {
                page_title: 'Customers',
                // Create array to hold the pages from ButterCMS API
                pages: []
            }
        },
        methods: {
            // Get List of Customer Pages
            getPages() {
                butter.page.list('customer_case_study')
                    .then((res) => {
                        console.log(res.data.data) // Check results in the console
                        this.pages = res.data.data
                    })
            }
        },
        created() {
            // Fire on page creation
            this.getPages()
        }
    }
</script>