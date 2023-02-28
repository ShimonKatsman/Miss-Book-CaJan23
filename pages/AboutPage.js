// בס"ד

export default {
    template: `
        <section class="about-page">
            <h2>About</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis enim rem porro delectus. Quos expedita ipsam repellendus voluptas quas, nam ea eligendi veniam ullam, modi impedit eveniet quia quaerat molestias?</p>

            <RouterLink to="/about/team">Our team</RouterLink> |
            <RouterLink to="/about/services">Our services</RouterLink> |

        </section>
    `,
}

export const AboutTeam = {
    template: `<section>
        <h3>Our team is amazing</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis enim rem porro delectus. Quos expedita ipsam repellendus voluptas quas, nam ea eligendi veniam ullam, modi impedit eveniet quia quaerat molestias?</p>
    </section>`
}

export const AboutServices = {
    template: `<section>
        <h3>Our Services are incredible!</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis enim rem porro delectus. Quos expedita ipsam repellendus voluptas quas, nam ea eligendi veniam ullam, modi impedit eveniet quia quaerat molestias?</p>
    </section>`
}