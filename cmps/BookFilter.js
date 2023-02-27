// בס"ד

export default {
    template: `
        <section class="book-filter">
            <fieldset>
            <legend>Book title</legend>
                <input v-model="filterBy.title" @input="filter" 
                placeholder="Search" type="text"/>
            </fieldset> 

            <fieldset>
                <legend>Book on sale</legend>
                <input type="radio" :value="true" v-model="filterBy.picked" @change="filter"> true
                <input type="radio" :value="false" v-model="filterBy.picked" @change="filter"> false
            </fieldset>

        </section>
    `,
    data() {
        return {
            filterBy: { title: '', price: 0, picked: true, },
        }
    },
    methods: {
        filter() {
            console.log('this.filterBy',this.filterBy)
            this.$emit('filter', this.filterBy)
        }
    }
}