// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCXqd76-zyuGaoiSlPRTRyOFOexFNSEvzU",
    authDomain: "tiktok-make-a-thone.firebaseapp.com",
    projectId: "tiktok-make-a-thone",
    storageBucket: "tiktok-make-a-thone.appspot.com",
    messagingSenderId: "115792141686",
    appId: "1:115792141686:web:769093b032edc8fe3fae57",
    measurementId: "G-HWK7WPT42N"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// 문의사항 제출 처리
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Firestore에 데이터 저장
    db.collection('문의').doc(name + '_' + message).set({
        name: name,
        email: email,
        message: message
    }).then(() => {
        alert('문의사항이 성공적으로 제출되었습니다.');
        contactForm.reset();
        // 제출 후 Home 페이지로 이동
        window.location.href = 'Home.html';
    }).catch((error) => {
        console.error('Error submitting contact form: ', error);
        alert('문의사항 제출 중 오류가 발생했습니다.');
    });
});
