// בס"ד

export default {
    template: `
        <header class="app-header">
            <h1>Books</h1>
            <nav>
                <RouterLink to="/">Home</RouterLink> |
                <RouterLink to="/book">Our books</RouterLink> |
                <RouterLink to="/search">search</RouterLink> |
                <RouterLink to="/about">About</RouterLink>
            </nav>
        </header>
    `,
    methods: {
        // setRoute(route) {
        //     this.$emit('set-route', route)
        // }
    }
}