interface Response {
  token: string;
  user: {
    email: string;
    senha: string;
  };
}

export function useAuth(): Promise<Response> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        token: 'jk12h3j21h3jk212h3jk12h3jkh12j3kh12k123hh21g3f12f3',
        user: {
          email: 'fabio.bobbio@gmail.com',
          senha: '123456'
        },
      });
    }, 2000);
  });
}