export const fakeRegister = (user) => {
  const userIsValid = () => {
    return (
      user.firstName.toLowerCase() === "test" &&
      user.lastName.toLowerCase() === "test" &&
      user.email.toLowerCase() === "test@test.com" &&
      user.password.toLowerCase() === "test1234"
    );
  };

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      userIsValid()
        ? resolve({ code: 200, user })
        : reject({ code: 401, message: "Your credentials are invalid" });
    }, 1000);
  });
};
