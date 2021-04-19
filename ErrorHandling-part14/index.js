// Example 
// try {
//     let firstName = 'Teddy'
//     let fullName = `${firstName} ${lastName}`
// } catch (error) {
//     console.error('TERJADI ERROR')
//     console.log('Eror Message', error.message)
//     console.log('Error Name', error.name)
// } finally {
//     console.log('In any Case Will be executed')
// }



const throwExampleFun = () => {
    let userInput = prompt('Masukan nomor anda')
    let message
    try {
        if (userInput == '') {
            throw 'User tidak memasukan apa-apa'
        }
        if (isNaN(userInput)) {
            throw 'Bukan Nomor'
        }
        userInput = Number(userInput)
        switch (true) {
            case userInput < 10:
                throw 'Anda memasukan nomor di bawah 10'
            case userInput > 10 && 10 < 20:
                throw 'Anda memasukan nomor di atas 10 dan di bawah 20'
            default:
                throw 'Terimakasih'
        }
    } catch (err) {
        console.log(err)
    } finally {
        console.log('Opsi lain akan segera di eksekusi')
    }
}

throwExampleFun()