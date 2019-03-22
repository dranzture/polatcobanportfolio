import axios from 'axios'

export default {
    getUser() {
        return axios.get('http://192.168.1.69:3000/user')
    },
    postUser(user) {
        return axios.post('http://192.168.1.69:3000/user', {
            first_name: user.first_name,
            last_name: user.last_name,
            age: user.age,
            city: user.city,
            state: user.state
        })
    },
    patchUser(user) {
        let payload = [
            {
                propName: "first_name",
                value: user.first_name
            },
            {
                propName: "last_name",
                value: user.last_name
            },
            {
                propName: "age",
                value: user.age
            },
            {
                propName: "city",
                value: user.city
            },
            {
                propName: "state",
                value: user.state
            }
        ];
        return axios.patch('http://192.168.1.69:3000/user/' + user.id, payload);
    },
    deleteUser(id) {
        return axios.delete('http://192.168.1.69:3000/user/' + id);
    },
    getJWT() {
        return axios.get('http://192.168.1.69:3000/token')
    },
    protected_postUser(user, token) {
        return axios.post('http://192.168.1.69:3000/protectedrouteuser', {
            first_name: user.first_name,
            last_name: user.last_name,
            age: user.age,
            city: user.city,
            state: user.state
        }, {
                headers: {
                    "Content-Type": "application/json",
                    "authorization": "Bearer " + token
                }
            });
    },
    protected_patchUser(user, token) {
        let payload = [
            {
                propName: "first_name",
                value: user.first_name
            },
            {
                propName: "last_name",
                value: user.last_name
            },
            {
                propName: "age",
                value: user.age
            },
            {
                propName: "city",
                value: user.city
            },
            {
                propName: "state",
                value: user.state
            }
        ];
        return axios.patch('http://192.168.1.69:3000/protectedrouteuser/' + user.id, payload, {
            headers: {
                "Content-Type": "application/json",
                "authorization": "Bearer " + token
            }
        })
    },
    protected_deleteUser(id, token) {
        return axios.delete('http://192.168.1.69:3000/protectedrouteuser/' + id,
            {
                headers: {
                    "Content-Type": "application/json",
                    "authorization": "Bearer " + token
                }
            })
    }
}