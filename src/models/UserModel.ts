export interface UserModel {
  uuid?: string;
  userName: string;
  userPass: string;
}

export interface UserModelForm {
  userName: string;
  userPass: string;
  confirmPass: string;
}
