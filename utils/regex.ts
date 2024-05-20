export const phoneNumberRegExp = /^\+?[0-9]+\s?[0-9\s.()-]{8,}$/,
  numberRegExp = /^[0-9]+$/,
  letterRegExp = /^[A-Za-z]+$/,
  emailRegExp =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  passwordRegExp =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&()])[A-Za-z\d@$!%*?&()]{8,}$/,
  phoneNumberRegExp2 = /^0\d{10}$/,
  dateRegExp = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z$/,
  coordinateRegExp = /^(-?\d+(\.\d+)?)$/;
