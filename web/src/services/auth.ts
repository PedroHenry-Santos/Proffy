interface Response{
  token: string;
  user: {
    name: string;
    email: string;
  };
}

export function singIn (): Promise<Response> {
  return new Promise( resolve => {
    setTimeout(() => {
      resolve({
        token: 'sdas2dsad0asd0ad0a23da2d0asd20asdad0asdasdasdasdsd1asdasd2asd1as2d1',
        user: {
          name: 'Pedro',
          email: 'pedrohenry.viana@gmail.com',
        },
      });
    }, 2000);
  });
}