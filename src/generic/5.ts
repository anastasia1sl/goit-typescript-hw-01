export enum UserRole {
  admin = "admin",
  editor = "editor",
  guest = "guest",
}

type UserRoleDescription = Record<UserRole, string>;

const roleDescription: UserRoleDescription = {
  [UserRole.admin]: "admin user",
  [UserRole.editor]: "editor user",
  [UserRole.guest]: "guest user",
};
