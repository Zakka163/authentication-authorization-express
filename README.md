# Authentication and Authorization Middleware Template

Template untuk middleware otentikasi dan otorisasi menggunakan Node.js dan Express. Template ini dirancang untuk mempercepat dalam membangun aplikasi yang memerlukan lapisan keamanan dasar.

- Otentikasi menggunakan JSON Web Tokens (JWT)
- Middleware untuk memeriksa token otentikasi
- Middleware untuk otorisasi berdasarkan peran pengguna

## Instalasi / Penggunaan


Tambahkan configurasi pada file `config.js`:

```javascript
module.exports = {
    jwtSecret: process.env.JWT_SECRET ,
    jwtExpiration: process.env.JWT_EXP ? process.env.JWT_EXP : '24h'
} 
```

Pastikan telah mengimpor Function yang dibutuhkan sebelum menggunakannya.    

- Mengenerate token JWT (setelah berhasil divalidasi oleh sistem),menggunakan function createTokenJWT dengan contoh kode sebagai berikut:
```javascript
let token = createTokenJWT({ payload: { \* diisi data payload  *\}});
```




- Memasang middleware authentication sebelum logic controller pada endpoint, contoh kode sebagai berikut: 
```javascript
app.get('/', authenticationMiddleware, (req, res) => {
    res.send('ok')
});
```

- Memasang middleware authorization setelah middleware authentication atau sebelum logic controller pada endpoint, dan masukkan role yang dapat mengakses endpoint tersebut, contoh kode sebagai beriku:
```javascript
app.get('/', authenticationMiddleware, authorizationnMiddleware('admin', 'superadmin','\* diisi role  *\''), (req, res) => {
    res.send('ok')
});
``` 

Anda dapat menyesuaikan dan menambahkan informasi tambahan sesuai kebutuhan proyek Anda.
