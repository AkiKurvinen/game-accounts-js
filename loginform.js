function toggleLogin() {
    const login_elem = document.querySelector("#login_btn button")
    let isloggedin = Boolean(login_elem.getAttribute("loggedin") == "true")
    login_elem.parentNode.innerHTML = loginbutton(!isloggedin)
}
function loginbutton(isLoggedin = false) {
    if (isLoggedin) {
        return `<button class="account_box" loggedin=true onClick="toggleLogin()">
        <div class="avatar_icon"></div>
        <span>Test User</span>
        </button>`
    }
    return `<button class="account_box" loggedin=false onClick="toggleLogin()">
    <div class="login_icon"></div>
    <span>Login</span></button>`
}