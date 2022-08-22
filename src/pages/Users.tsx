import React from "react";
import UserAPI from "../api/UserApi";
import { useDispatch, useSelector } from "react-redux";
import { AddUserAction, DeleteUserAction } from "../redux/actions/userAction";
import UserDto from "../dtos/userDto";

const User = () => {

    const [user, setUser] = React.useState<UserDto[]>([]);
    const [loading, setLoading] = React.useState<boolean>(true);

    const dispatch = useDispatch();

    const userData: UserDto[] = useSelector((state: any) => state.users?.data);

    const filterList = (value: string) => {
        setUser(userData.filter((e: UserDto) => {
            return (e.name.toLowerCase()).includes(value.toLowerCase()) || (e.username.toLowerCase()).includes(value.toLowerCase())
        }));
    }

    const reloadList = async () => {
        dispatch(DeleteUserAction([]));
        setLoading(true);
        let result = await UserAPI.fetchUser();
        const users: UserDto[] = result.data;
        setUser(users);
        dispatch(AddUserAction(users));
        setLoading(false);
    }

    React.useEffect(() => {

        const getUser = async () => {
            let result = await UserAPI.fetchUser();
            const users: UserDto[] = result.data;
            setUser(users);
            dispatch(AddUserAction(users));
            setLoading(false);
        }

        if (userData && userData.length < 1) {
            getUser();

        } else {
            setUser(userData);
            setLoading(false);
        }

    }, [dispatch, userData]);

    if (loading) {
        return (
            <div className="justify-center h-96 items-center flex">
                <div role="status">
                    <svg className="inline mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                    </svg>
                </div>
            </div>
        )
    } else {
        return (
            <div className="flex flex-col">
                <div className="overflow-x-auto">
                    <div className="py-3 pl-2 flex justify-between">
                        <div className="relative max-w-xs ">
                            <label htmlFor="hs-table-search" className="sr-only">
                                Search
                            </label>
                            <input
                                type="text"
                                name="hs-table-search"
                                id="hs-table-search"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Search..."
                                onChange={(e) => { filterList(e.target.value) }}
                            />
                        </div>
                        <div className="relative max-w-xs m-1">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => { reloadList() }}>
                                Reload
                            </button>
                        </div>
                    </div>

                    <div className="p-1.5 w-full inline-block align-middle">
                        <div className="overflow-hidden border rounded-lg">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th
                                            scope="col"
                                            className="flex items-center px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                        >
                                            ID
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                        >
                                            <span className="inline-flex items-center">
                                                Name
                                            </span>
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                        >
                                            <span className="inline-flex items-center">
                                                user name
                                            </span>
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                        >
                                            <span className="inline-flex items-center">
                                                Website
                                            </span>
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                        >
                                            <span className="inline-flex items-center">
                                                Compnay
                                            </span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    {user.map((el: UserDto) => (
                                        <tr key={el.id}>
                                            <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                                {el.id}
                                            </td>
                                            <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                                {el.name}
                                            </td>
                                            <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                                {el.username}
                                            </td>
                                            <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                                <a href={el.website} target="_blank"
                                                    className="underline hover:no-underline
                                                            text-blue-600 hover:text-blue-800 
                                                            visited:text-purple-600" rel="noreferrer">
                                                    {el.website}
                                                </a>
                                            </td>
                                            <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                                {el.company?.name}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }



}

export default User;