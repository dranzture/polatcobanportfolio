import axios from 'axios'
const url = "https://polatcoban-portfolio-backend.herokuapp.com/";

export default {
    getUser() {
        return axios.get(url + 'user')
    },
    postUser(user) {
        return axios.post(url + 'user', {
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
        return axios.patch(url + 'user/' + user.id, payload);
    },
    deleteUser(id) {
        return axios.delete(url + 'user/' + id);
    },
    getJWT() {
        return axios.get(url + 'token')
    },
    protected_postUser(user, token) {
        return axios.post(url + 'protectedrouteuser', {
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
        return axios.patch(url + 'protectedrouteuser/' + user.id, payload, {
            headers: {
                "Content-Type": "application/json",
                "authorization": "Bearer " + token
            }
        })
    },
    protected_deleteUser(id, token) {
        return axios.delete(url + 'protectedrouteuser/' + id,
            {
                headers: {
                    "Content-Type": "application/json",
                    "authorization": "Bearer " + token
                }
            })
    }
}