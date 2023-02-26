// בס"ד

'use strict'

import { utilService } from './util.service.js'
import { storageService } from './async-storage.service.js'

const BOOK_KEY = 'bookDB'

_createBooks()

export const bookService = {
    query,
    get,
    remove,
    save,
    getEmptyBook,
}

function query(filterBy = {}) {
    return storageService.query(BOOK_KEY)
        .then(books => {
            if (filterBy.txt) {
                const regex = new RegExp(filterBy.txt, 'i')
                books = books.filter(book => regex.test(book.vendor))
            }
            if (filterBy.minSpeed) {
                books = books.filter(book => book.maxSpeed >= filterBy.minSpeed)
            }
            return books
        })
}

function get(bookId) {
    return storageService.get(BOOK_KEY, bookId)
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

function getEmptyBook(vendor = '', maxSpeed = 0) {
    return { id: '', vendor, maxSpeed }
}

function _createBooks() {
    let books = utilService.loadFromStorage(BOOK_KEY)
    if (!books || !books.length) {
        books = []
        books.push(_createBook('audu', 300))
        books.push(_createBook('fiak', 120))
        books.push(_createBook('subali', 100))
        books.push(_createBook('mitsu', 150))
        utilService.saveToStorage(BOOK_KEY, books)
    }
}

function _createBook(vendor, maxSpeed = 250) {
    const book = getEmptyBook(vendor, maxSpeed)
    book.id = utilService.makeId()
    return book
}