type ThemeProps = {
    theme: string | undefined,
    handleThemeSwitch: () => void
}

interface IUser {
    username: string;
    password: string;
    email: string;
    profilePicture?: string;
    isActive?: boolean;
    friendList?: Array<string>;
    workSpaces?: Array<string>;
    roles?: Array<string>;
    createdAt?: Date;
}

