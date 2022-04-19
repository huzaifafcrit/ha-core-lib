export class LoggedInUser {
  name: string;
  email: string;
  profilePicUrl: string;
  canEditProfile: boolean;
  isPortalAdmin: boolean;
  isApplicationAdmin: boolean;

  constructor(
    name: string,
    email: string,
    profilePicUrl: string,
    canEditProfile: boolean,
    isPortalAdmin: boolean,
    isApplicationAdmin: boolean
  ) {
    this.name = name;
    this.email = email;
    this.profilePicUrl = profilePicUrl;
    this.canEditProfile = canEditProfile;
    this.isPortalAdmin = isPortalAdmin;
    this.isApplicationAdmin = isApplicationAdmin;
  }
}
