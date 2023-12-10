window.onload = function() {
    var currentUser = sessionStorage.getItem('currentUser');

    if (currentUser) { // 로그인 상태 O
        document.getElementById('loginLink').textContent = '로그아웃';
        document.getElementById('loginLink').href = '#';
        document.getElementById('loginLink').onclick = function() {
            sessionStorage.removeItem('currentUser'); // 세션에서 사용자 제거
            window.location.reload();
        };
    } else { // 로그인 상태 X
        document.getElementById('loginLink').textContent = '로그인';
        document.getElementById('loginLink').href = 'login.html';
        document.getElementById('loginLink').onclick = null;
    }
};