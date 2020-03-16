export default {
    props: ['liveuser'],

    template: `
                <tr>
                <td>{{ liveuser.uname }}</td>
                <td><i class="mt-0 ml-2 fas fa-trash-alt"></i> <a href="#" v-on:click="deleteUser()">Delete</a></td>
                </tr>
                `
}