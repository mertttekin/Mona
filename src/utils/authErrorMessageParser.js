export default function(errorCode){
    switch (errorCode) {
        case "auth/invalid-email":
            return "Geçersiz E-Posta Adresi";

        case "auth/user-not-found":
            return "Kullanıcı Bulunamadı";

        case "auth/weak-password":
            return "Zayıf Şifre / Boş Şifre";
        
        case "auth/email-already-in-use":
            return "Bu E-mail Kullanılmaktadır";

        case "auth/wrong-password":
            return "Bu Parola Geçersiz";
        
    
        default:
            return errorCode;
    }
}