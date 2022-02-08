interface IUser {
  username: string;
  password: string;
}

const login = (user: IUser): boolean => {
  user.password
  return true;
};

const user = {
  username: 'jstamos',
  password: '1234',
  moreStuff: 'otherThings'
};

login(user);
