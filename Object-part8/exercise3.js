/*
    Create an object literal called personAccount. It has firstName, lastName, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is a set of incomes and its description.
*/
const personAccount = {
    firstName: 'Teddy',
    lastName: 'Ferdian',
    incomes: '1999999',
    expense: '200000',
    totalIncome: 3000000,
    totalExponse: 200000,
    accountInfo: 'user',
    addExpense: [
        'Job',
        'Freelance'
    ],
    accountBalance: () => {
        let hasil = `${parseInt(this.incomes) - parseInt(this.expense)}`
        return hasil
    }
}