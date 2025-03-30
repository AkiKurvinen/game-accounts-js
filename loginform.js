function loginbutton(isLoggedin = false) {
    if (isLoggedin) {
        return `<button class="account_box"><img src="img/avatars/user_avatar-01.jpg" alt="Account"><span>Test User</span></button>`
    }
    return `<button class="account_box"><img src="img/account.svg" alt="Account"><span>Login</span></button>`
}