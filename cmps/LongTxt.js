// בס"ד

export default {
    props: ['txt', 'length'],
    template: `
        <p>{{ toggleSummery }}</p>
        <button @click="toggleBtn" >read <span>{{ btnTxt }}</span></button>
`,

    data() {
        return {
            btnTxt: 'more',
        }
    },
    methods: {
        toggleBtn() {
            this.btnTxt = this.btnTxt === 'more' ? 'less' : 'more'
        }
    },
    computed: {
        toggleSummery() {
            let summery = this.txt
            // console.log('in comp')
            if (this.btnTxt === 'more') {
                return summery.split(' ').splice(0, +(this.length) - 1).join(' ')
            }

            return summery
        },
    },
    created() {

    },
    components: {

    },
    emits: [],
}