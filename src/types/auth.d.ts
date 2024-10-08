export interface UserInfo {
   id: number;
   username: string;
   email: string;
   firstName: string;
   lastName: string;
   gender: string;
   image: string;
   token: string;
}

export interface SignIn {
   username: string | FormDataEntryValue;
   password: string | FormDataEntryValue;
   expiresInMins: number;
}