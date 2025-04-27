export const getToken = () => {
    return localStorage.getItem('accessToken');
  };
  
  export const isAuthenticated = () => {
    const token = getToken();
    console.log("isAuthenticated " + token)
    return !!token;
  };
  
  export const login = (token: string) => {
    localStorage.setItem('accessToken', token);
  };
  
  export const logout = () => {
    localStorage.removeItem('accessToken');
  };  