// בס"ד

const { createApp } = Vue

import { router } from './routes.js'

import AppHeader from './cmps/AppHeader.js'
import AppFooter from './cmps/AppFooter.js'

import UserMessage from './cmps/UserMessage.js'


const options = {
    template: `
        <section class="container">
            <AppHeader/>
             <!-- @setRoute="route = $event"/> -->
            <main class="router-view">
                <RouterView />
            </main>

            <AppFooter />

            <UserMessage />
        </section>
    `,
    data() {
        return {
            // route: 'HomePage',
        }
    },
    components: {
        AppHeader,
        AppFooter,
        UserMessage,
    }
}
const app = createApp(options)
app.use(router)
app.mount('#app')
