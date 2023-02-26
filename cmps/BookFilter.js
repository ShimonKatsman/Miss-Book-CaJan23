// בס"ד

export default {
    template: `
        <section class="book-filter">
            <input 
                v-model="filterBy.vendor"
                @input="filter" 
                placeholder="Search"
                type="text" />
        </section>
    `,
    data() {
        return {
            filterBy: { vendor: '', maxSpeed: 0 },
        }
    },
    methods: {
        filter(){
            this.$emit('filter', this.filterBy)
        }
    }
}