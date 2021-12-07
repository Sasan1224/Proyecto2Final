package com.nicolas.bookingrestaurant.data;

import com.nicolas.bookingrestaurant.data.model.LoggedInUser;

import java.io.IOException;

public class LoginDataSource {

    public Result<LoggedInUser> login(String username, String password) {

        try {
            // TODO: handle loggedInUser authentication
            LoggedInUser fakeUser =
                    new LoggedInUser(
                            java.util.UUID.randomUUID().toString(),
                            "Nicolas Martinez");
            if(password.equals("123456"))
                return new Result.Success<>(fakeUser);
            return new Result.Error(new Exception("Credenciales incorrectas"));
        } catch (Exception e) {
            return new Result.Error(new IOException("Error", e));
        }
    }

    public void logout() {
        // TODO: revoke authentication
    }
}