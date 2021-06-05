<template>
    <div class="av-orders">
        <h1>
            Your orders
        </h1>

        <table class="orders-table">
            <thead>
                <td> id </td>
                <td> date </td>
                <td> comment </td>
                <td> status </td>
                <td> paid </td>
            </thead>

            <tbody v-if="getOrders != -1 && getOrders.length > 0">
                <tr
                    v-for="(order) in getOrders"
                    :key="order._id"
                >
                    <td> {{ order._id }} </td>
                    <td> {{ moment(order.date).format('DD.MM.YYYY') }} </td>
                    <td> {{ order.comment }} </td>
                    <td> {{ order.status }} </td>
                    <td> {{ order.paid }} </td>
                </tr>
            </tbody>

            <tbody v-else>
                <tr class='empty' >
                    <td colspan="5">
                        {{
                            getOrders != -1 ? "It seems empty here ..." : "Fetching orders..."
                        }}
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import { mapActions, mapGetters } from "vuex"

    export default {
        methods: mapActions([ "fetchOrders" ]),

        computed: mapGetters([ "getOrders" ]),

        async mounted(){
            await this.fetchOrders();
        },

        updated(){
            console.log(this.getOrders);
        }
    }
</script>

<style scoped>
    .av-orders {
        width: calc(100% - 256px);
        padding: 3.5rem 128px;
        display: flex;
        flex-direction: column;
    }

    h1 {
        font-family: Montserrat;
    }

    table {
        width: 100%;
        border-collapse: separate;
        border-spacing: 0 0.5rem;
    }

    thead {
        font-family: Montserrat;
        text-transform: uppercase;
    }

    thead > td {
        padding: 0.25rem;
    }

    tr {
        font-family: Montserrat;
    }

    tr.empty {
        width: 100%;
        text-align: center;
    }

    tr.empty > td {
        padding: 0.5rem;
        background: whitesmoke;
    }
</style>