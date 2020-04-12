export default {
    props: ['liveuser'],

    template: `
                <tr>
                <td>{{ liveuser.id }}</td>
                <td>{{ liveuser.fname }}</td>
                <td>{{ liveuser.uname }}</td>
                <td>{{ liveuser.email }}</td>
                <td><i class="mt-0 ml-2 fas fa-trash-alt"></i> <a href="#" v-on:click="deleteUser(liveuser.id)">Delete</a></td>
                </tr>
                `,
    methods: {
        deleteUser(user) {

            let url = `./admin/index.php?id=${user}`;

            fetch(url)
                .then(res => res.json())
                .then(data => {
                    if (data.result == true) {
                        alert('User successfully deleted.');
                    } else {
                        alert(`Failed to delete user: ${data.result}`);
                    }
                })
                .catch((error) => console.error(error))

        }
    }
}
