interface UserDto {
    id: number;
    name: string;
    username: string;
    website: string;
    company: { name: string };
}

export default UserDto;