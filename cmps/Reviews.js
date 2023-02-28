// בס"ד

import { utilService } from '../services/util.service.js'

export default {
    props: ['reviews'],
    template: `
        <ul>
            <li v-for="review in reviews">
                <!-- <pre>{{review}}</pre> -->
             <p>{{ review.review.txt }}</p>
             <p>{{ review.review.rate }}</p>
             <p>{{ review.review.readAt }}</p>
             <button @click="deleteRev(review)">X</button>
            </li>
        </ul>
    `,
    data() {
        return {
        }
    },
    methods: {
        deleteRev(rev) {
            let revsDB = utilService.loadFromStorage('reviewDB')

            let idx = revsDB.findIndex(item => item.review.readAt === rev.review.readAt)

            revsDB.splice(idx, 1)

            utilService.saveToStorage('reviewDB')
        }
    },
    computed: {
    },
    created() {
        // console.log('this.review', this.review)
    },
    components: {
    },
    emits: [],
}