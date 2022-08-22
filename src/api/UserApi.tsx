import AxiosAPI from './Axios';

let UserAPI = {

    fetchUser: async () => {

        try {
            let response = await AxiosAPI.get('/users', {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (response && response.data) return { status: true, msg: "User found", data: response.data };
            else return { status: false, msg: "Something went wrong while fetching user", data: [] };

        } catch (err) {
            return { status: false, msg: "Something went wrong while fetching user", data: [] };
        }

    }

}

export default UserAPI;