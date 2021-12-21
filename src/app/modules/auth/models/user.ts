export interface User {
  token: string;
  refreshToken: string;
  tokenExpiration: string;
  id: string;
  userName: string;
  firstName: string;
  lastName: string;
  email: string;
  totalContacts: number;
  totalFavorite: number;
  phoneNumber: string;
}
