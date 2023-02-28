// בס"ד

'use strict'

import { utilService } from './util.service.js'
import { storageService } from './async-storage.service.js'

import booksJSON from '../assets/books.json' assert {type: 'json'}


const BOOK_KEY = 'bookDB'
const REVIEW_KEY = 'reviewDB'

// let gBooks = booksJSON
// utilService.saveToStorage(BOOK_KEY, gBooks)

_createBooks()

export const bookService = {
    query,
    get,
    remove,
    save,
    getEmptyBook,
    addReview,
}

function query(filterBy = {}) {
    return storageService.query(BOOK_KEY)
        .then(books => {
            if (filterBy.txt) {
                const regex = new RegExp(filterBy.txt, 'i')
                books = books.filter(book => regex.test(book.title))
            }
            if (filterBy.price) {
                // books = gBooks.filter(book => book.price >= filterBy.price)
            }
            return books
        })
}

function get(bookId) {
    return storageService.get(BOOK_KEY, bookId)
                .then(_setNextPrevBookId)
}

function remove(bookId) {
    return storageService.remove(BOOK_KEY, bookId)
}

function save(book) {
    if (book.id) {
        return storageService.put(BOOK_KEY, book)
    } else {
        return storageService.post(BOOK_KEY, book)
    }
}

function getEmptyBook(title = '', listPrice = {}) {
    return { id: '', title, listPrice }
}

function _createBooks() {
    let books = utilService.loadFromStorage(BOOK_KEY)
    if (!books || !books.length) {
        // books = []
        // books.push(_createBook('audu', 300))
        // books.push(_createBook('fiak', 120))
        // books.push(_createBook('subali', 100))
        // books.push(_createBook('mitsu', 150))
        utilService.saveToStorage(BOOK_KEY, booksJSON)
    }
}

// function _createBook(vendor, maxSpeed = 250) {
//     const book = getEmptyBook(vendor, maxSpeed)
//     book.id = utilService.makeId()
//     return book
// }

function addReview(bookId, review) {
    let rev = { id: bookId, review }

    if (!utilService.loadFromStorage(REVIEW_KEY)) storageService.save(REVIEW_KEY, [rev])

    let revs = utilService.loadFromStorage(REVIEW_KEY)
    revs.push(rev)

    storageService.save(REVIEW_KEY, revs)
}

function _setNextPrevBookId(book) {
    return storageService.query(BOOK_KEY).then((books) => {
        const bookIdx = books.findIndex((currBook) => currBook.id === book.id)
        book.nextBookId = books[bookIdx + 1] ? books[bookIdx + 1].id : books[0].id
        book.prevBookId = books[bookIdx - 1]
            ? books[bookIdx - 1].id
            : books[books.length - 1].id
        return book
    })
}