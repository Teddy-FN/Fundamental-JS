// INI Ceritanya berada di sekolah nah si murid harus memasukan nilai mereka

const inputNomorKeGuru = () => {
    let newArr = []
    let userInput = prompt('tolong masukan nama anda')
    let message
    try {
        if (userInput == '') {
            alert('Masukan nama anda dong,Nak!!')
        } else if (Number(userInput)) {
            alert('Yang anda masukan angka wahai anak dajjal')
        } else if (userInput == null) {
            alert('Anda belum memasukan apa-apa')
        } else {
            alert(`Selamat pagi ${userInput}`)
        }
    } catch (err) {
        console.log('Terdapat eror yaitu', err.name)
        console.log('Error Message', err.message)
    } finally {
        console.log('Opsi lain akan segera di jalankan')
    }
}
inputNomorKeGuru()