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
                <input @input="filter" type="radio" value="true" v-model="filterBy.picked"> true
                <input type="radio" value="false" v-model="filterBy.picked"> false
            </fieldset>

        </section>
    `,
    data() {
        return {
            filterBy: { title: '', price: 0, picked: '', },
        }
    },
    methods: {
        filter() {
            this.$emit('filter', this.filterBy)
        }
    }
}