export class ProfileSectionRolesResponse{
    section: string;
    role: {
        name: string
    }
}

export class ProfilePlatformResponse{
    name: string;
    description: string;
    sections: string[]
}

export class PlatformSectionRoleResponse {
    sectionsRoles: ProfileSectionRolesResponse[];
    platform : ProfilePlatformResponse
}

export class UserProfileResponse {
    name: string;
    description: string;
    platformSectionRole: PlatformSectionRoleResponse[]
}

export class UserResponse {
    name: string;
    surname: string;
    username: string;
    mail: string;
    mailIsConfirmed: string;
    createdDate: string;
    blocked: boolean;
    tc: boolean;
    profile: UserProfileResponse;
}