const renderZone = document.querySelector('#render-zone');



const data = {
    1: [
        {
            "coll": 9,
            "letter": 'а'
        },
        {
            "coll": 12,
            "letter": 'в'
        },
        {
            "coll": 14,
            "letter": 'т'
        },
        {
            "coll": 15,
            "letter": 'а'
        },
        {
            "coll": 16,
            "letter": 'й'
        },
        {
            "coll": 17,
            "letter": 'л'
        },
        {
            "coll": 18,
            "letter": 'а'
        },
        {
            "coll": 19,
            "letter": 'н'
        },
        {
            "coll": 20,
            "letter": 'д'
        },
    ],
    2: [
        {
            "coll": 9,
            "letter": 'п'
        },
        {
            "coll": 12,
            "letter": 'е'
        },

        {
            "coll": 17,
            "letter": 'у'
        },

        {
            "coll": 20,
            "letter": 'о'
        },
    ],
    3: [
        {
            "coll": 7,
            "letter": 'к'
        },
        {
            "coll": 8,
            "letter": 'у'
        },
        {
            "coll": 9,
            "letter": 'р'
        },
        {
            "coll": 10,
            "letter": 'а'
        },
        {
            "coll": 11,
            "letter": 'н'
        },
        {
            "coll": 12,
            "letter": 'т'
        },
        {
            "coll": 13,
            "letter": 'ы'
        },

        {
            "coll": 17,
            "letter": 'к'
        },

        {
            "coll": 20,
            "letter": 'б'
        },
    ],
    4: [
        {
            "coll": 9,
            "letter": 'е'
        },
        {
            "coll": 12,
            "letter": 'к'
        },

        {
            "coll": 14,
            "letter": 'в'
        },
        {
            "coll": 15,
            "letter": 'а'
        },
        {
            "coll": 16,
            "letter": 'н'
        },
        {
            "coll": 17,
            "letter": 'а'
        },
        {
            "coll": 18,
            "letter": 'т'
        },
        {
            "coll": 19,
            "letter": 'у'
        },
        {
            "coll": 20,
            "letter": 'р'
        },
    ],
    5: [
        {
            "coll": 9,
            "letter": 'л'
        },
        {
            "coll": 10,
            "letter": 'о'
        },
        {
            "coll": 11,
            "letter": 'п'
        },
        {
            "coll": 12,
            "letter": 'а'
        },
        {
            "coll": 13,
            "letter": 'т'
        },
        {
            "coll": 14,
            "letter": 'а'
        },
        {
            "coll": 17,
            "letter": 'ш'
        },
        {
            "coll": 20,
            "letter": 'о'
        },
    ],
    6: [
        {
            "coll": 7,
            "letter": 'е'
        },
        {
            "coll": 8,
            "letter": 'л'
        },
        {
            "coll": 9,
            "letter": 'ь'
        },

        {
            "coll": 14,
            "letter": 'т'
        },

        {
            "coll": 17,
            "letter": 'и'
        },

        {
            "coll": 20,
            "letter": 'д'
        },
    ],
    7: [
        {
            "coll": 1,
            "letter": 'в'
        },
        {
            "coll": 2,
            "letter": 'е'
        },
        {
            "coll": 3,
            "letter": 'н'
        },
        {
            "coll": 4,
            "letter": 'о'
        },
        {
            "coll": 5,
            "letter": 'к'
        },

        {
            "coll": 8,
            "letter": 'а'
        },
        {
            "coll": 10,
            "letter": 'ё'
        },

        {
            "coll": 12,
            "letter": 'д'
        },
        {
            "coll": 13,
            "letter": 'р'
        },
        {
            "coll": 14,
            "letter": 'а'
        },
        {
            "coll": 15,
            "letter": 'к'
        },
        {
            "coll": 16,
            "letter": 'о'
        },

        {
            "coll": 17,
            "letter": 'н'
        },

        {
            "coll": 19,
            "letter": 'д'
        },
        {
            "coll": 20,
            "letter": 'е'
        },
        {
            "coll": 21,
            "letter": 'т'
        },
        {
            "coll": 22,
            "letter": 'с'
        },
        {
            "coll": 23,
            "letter": 'т'
        },
        {
            "coll": 24,
            "letter": 'в'
        },
        {
            "coll": 25,
            "letter": 'о'
        },
    ],
    8: [
        {
            "coll": 1,
            "letter": 'е'
        },
        {
            "coll": 4,
            "letter": 'м'
        },
        {
            "coll": 6,
            "letter": 'н'
        },
        {
            "coll": 7,
            "letter": 'е'
        },
        {
            "coll": 8,
            "letter": 'п'
        },
        {
            "coll": 9,
            "letter": 'а'
        },
        {
            "coll": 10,
            "letter": 'л'
        },
        {
            "coll": 20,
            "letter": 'т'
        },
        {
            "coll": 22,
            "letter": 'н'
        },
        {
            "coll": 25,
            "letter": 'о'
        },
    ],
    9: [
        {
            "coll": 1,
            "letter": 'н'
        },
        {
            "coll": 4,
            "letter": 'е'
        },
        {
            "coll": 8,
            "letter": 'л'
        },
        {
            "coll": 10,
            "letter": 'к'
        },
        {
            "coll": 17,
            "letter": 'ш'
        },

        {
            "coll": 19,
            "letter": 'р'
        },
        {
            "coll": 20,
            "letter": 'е'
        },
        {
            "coll": 21,
            "letter": 'в'
        },
        {
            "coll": 22,
            "letter": 'е'
        },
        {
            "coll": 23,
            "letter": 'й'
        },
        {
            "coll": 24,
            "letter": 'о'
        },
        {
            "coll": 25,
            "letter": 'н'
        },
    ],
    10: [
        {
            "coll": 1,
            "letter": 'г'
        },
        {
            "coll": 2,
            "letter": 'и'
        },
        {
            "coll": 3,
            "letter": 'р'
        },
        {
            "coll": 4,
            "letter": 'л'
        },
        {
            "coll": 5,
            "letter": 'я'
        },
        {
            "coll": 6,
            "letter": 'н'
        },
        {
            "coll": 7,
            "letter": 'д'
        },
        {
            "coll": 8,
            "letter": 'а'
        },
        {
            "coll": 10,
            "letter": 'а'
        },
        {
            "coll": 17,
            "letter": 'у'
        },
        {
            "coll": 20,
            "letter": 'л'
        },
        {
            "coll": 22,
            "letter": 'г'
        },
        {
            "coll": 26,
            "letter": 'и'
        },
    ],
    11: [
        {
            "coll": 1,
            "letter": 'р'
        },
        {
            "coll": 4,
            "letter": 'а'
        },
        {
            "coll": 8,
            "letter": 'н'
        },

        {
            "coll": 17,
            "letter": 'б'
        },
        {
            "coll": 18,
            "letter": 'ы'
        },
        {
            "coll": 19,
            "letter": 'л'
        },
        {
            "coll": 20,
            "letter": 'ь'
        },

        {
            "coll": 22,
            "letter": 'у'
        },
        {
            "coll": 23,
            "letter": 'с'
        },
        {
            "coll": 24,
            "letter": 'т'
        },
        {
            "coll": 25,
            "letter": 'ю'
        },
        {
            "coll": 26,
            "letter": 'г'
        },
    ],
    12: [
        {
            "coll": 1,
            "letter": 'и'
        },
        {
            "coll": 6,
            "letter": 'в'
        },
        {
            "coll": 7,
            "letter": 'е'
        },
        {
            "coll": 8,
            "letter": 'д'
        },
        {
            "coll": 9,
            "letter": 'р'
        },
        {
            "coll": 10,
            "letter": 'о'
        },
        {
            "coll": 17,
            "letter": 'а'
        },
        {
            "coll": 19,
            "letter": 'а'
        },
        {
            "coll": 22,
            "letter": 'р'
        },
        {
            "coll": 26,
            "letter": 'р'
        },
    ],
    13: [
        {
            "coll": 1,
            "letter": 'я'
        },
        {
            "coll": 2,
            "letter": 'к'
        },
        {
            "coll": 3,
            "letter": 'у'
        },
        {
            "coll": 4,
            "letter": 'т'
        },

        {
            "coll": 8,
            "letter": 'и'
        },
        {
            "coll": 10,
            "letter": 'с'
        },
        {
            "coll": 19,
            "letter": 'п'
        },
        {
            "coll": 21,
            "letter": 'т'
        },
        {
            "coll": 22,
            "letter": 'о'
        },
        {
            "coll": 23,
            "letter": 'р'
        },
        {
            "coll": 24,
            "letter": 'т'
        },
        {
            "coll": 26,
            "letter": 'у'
        },
    ],
    14: [
        {
            "coll": 2,
            "letter": 'о'
        },

        {
            "coll": 5,
            "letter": 'к'
        },
        {
            "coll": 6,
            "letter": 'о'
        },
        {
            "coll": 7,
            "letter": 'л'
        },
        {
            "coll": 8,
            "letter": 'я'
        },
        {
            "coll": 9,
            "letter": 'д'
        },
        {
            "coll": 10,
            "letter": 'к'
        },
        {
            "coll": 11,
            "letter": 'и'
        },
        {
            "coll": 13,
            "letter": 'с'
        },
        {
            "coll": 17,
            "letter": 'в'
        },
        {
            "coll": 18,
            "letter": 'и'
        },
        {
            "coll": 19,
            "letter": 'н'
        },
        {
            "coll": 20,
            "letter": 'о'
        },
        {
            "coll": 22,
            "letter": 'ч'
        },

        {
            "coll": 24,
            "letter": 'о'
        },
        {
            "coll": 26,
            "letter": 'ш'
        },
    ],
    15: [
        {
            "coll": 2,
            "letter": 'c'
        },
        {
            "coll": 5,
            "letter": 'р'
        },
        {
            "coll": 10,
            "letter": 'а'
        },
        {
            "coll": 13,
            "letter": 'о'
        },
        {
            "coll": 17,
            "letter": 'а'
        },
        {
            "coll": 19,
            "letter": 'и'
        },

        {
            "coll": 22,
            "letter": 'к'
        },
        {
            "coll": 23,
            "letter": 'у'
        },
        {
            "coll": 24,
            "letter": 'с'
        },
        {
            "coll": 25,
            "letter": 'о'
        },
        {
            "coll": 26,
            "letter": 'к'
        },
    ],
    16: [
        {
            "coll": 1,
            "letter": 'о'
        },
        {
            "coll": 2,
            "letter": 'т'
        },
        {
            "coll": 3,
            "letter": 'к'
        },
        {
            "coll": 4,
            "letter": 'р'
        },
        {
            "coll": 5,
            "letter": 'ы'
        },
        {
            "coll": 6,
            "letter": 'т'
        },
        {
            "coll": 7,
            "letter": 'к'
        },
        {
            "coll": 8,
            "letter": 'а'
        },

        {
            "coll": 10,
            "letter": 'р'
        },

        {
            "coll": 12,
            "letter": 'с'
        },
        {
            "coll": 13,
            "letter": 'н'
        },
        {
            "coll": 14,
            "letter": 'е'
        },
        {
            "coll": 15,
            "letter": 'г'
        },
        {
            "coll": 16,
            "letter": 'о'
        },
        {
            "coll": 17,
            "letter": 'в'
        },
        {
            "coll": 18,
            "letter": 'и'
        },
        {
            "coll": 19,
            "letter": 'к'
        },

        {
            "coll": 21,
            "letter": 'д'
        },

        {
            "coll": 22,
            "letter": 'а'
        },

        {
            "coll": 24,
            "letter": 'т'
        },

        {
            "coll": 26,
            "letter": 'и'
        },
    ],
    17: [
        {
            "coll": 2,
            "letter": 'р'
        },
        {
            "coll": 5,
            "letter": 'л'
        },
        {
            "coll": 7,
            "letter": 'р'
        },
        {
            "coll": 17,
            "letter": 'и'
        },
        {
            "coll": 23,
            "letter": 'п'
        },
        {
            "coll": 25,
            "letter": 'о'
        },
    ],
    18: [
        {
            "coll": 1,
            "letter": 'к'
        },
        {
            "coll": 2,
            "letter": 'о'
        },
        {
            "coll": 3,
            "letter": 'р'
        },
        {
            "coll": 4,
            "letter": 'п'
        },
        {
            "coll": 5,
            "letter": 'о'
        },
        {
            "coll": 6,
            "letter": 'р'
        },
        {
            "coll": 7,
            "letter": 'а'
        },
        {
            "coll": 8,
            "letter": 'т'
        },
        {
            "coll": 9,
            "letter": 'и'
        },
        {
            "coll": 10,
            "letter": 'в'
        },

        {
            "coll": 17,
            "letter": 'л'
        },

        {
            "coll": 18,
            "letter": 'е'
        },

        {
            "coll": 19,
            "letter": 'с'
        },

        {
            "coll": 21,
            "letter": 'з'
        },
        {
            "coll": 22,
            "letter": 'в'
        },
        {
            "coll": 23,
            "letter": 'е'
        },
        {
            "coll": 24,
            "letter": 'з'
        },
        {
            "coll": 25,
            "letter": 'д'
        },
        {
            "coll": 26,
            "letter": 'а'
        },
    ],
    19: [
        {
            "coll": 2,
            "letter": 'м'
        },
        {
            "coll": 5,
            "letter": 'в'
        },
        {
            "coll": 7,
            "letter": 'с'
        },
        {
            "coll": 17,
            "letter": 'о'
        },
        {
            "coll": 20,
            "letter": 'в'
        },
        {
            "coll": 23,
            "letter": 'т'
        },
        {
            "coll": 25,
            "letter": 'а'
        },
    ],
    20: [
        {
            "coll": 1,
            "letter": 'б'
        },
        {
            "coll": 2,
            "letter": 'а'
        },
        {
            "coll": 3,
            "letter": 'ш'
        },
        {
            "coll": 4,
            "letter": 'м'
        },
        {
            "coll": 5,
            "letter": 'а'
        },
        {
            "coll": 6,
            "letter": 'ч'
        },
        {
            "coll": 7,
            "letter": 'о'
        },
        {
            "coll": 8,
            "letter": 'к'
        },

        {
            "coll": 17,
            "letter": 'н'
        },
        {
            "coll": 18,
            "letter": 'е'
        },
        {
            "coll": 19,
            "letter": 'в'
        },
        {
            "coll": 20,
            "letter": 'е'
        },
        {
            "coll": 21,
            "letter": 'с'
        },
        {
            "coll": 22,
            "letter": 'т'
        },
        {
            "coll": 23,
            "letter": 'а'
        },

        {
            "coll": 26,
            "letter": 'с'
        },
    ],
    21: [
        {
            "coll": 1,
            "letter": 'а'
        },
        {
            "coll": 4,
            "letter": 'а'
        },
        {
            "coll": 7,
            "letter": 'т'
        },
        {
            "coll": 10,
            "letter": 'г'
        },
        {
            "coll": 20,
            "letter": 'ч'
        },

        {
            "coll": 23,
            "letter": 'р'
        },
        {
            "coll": 24,
            "letter": 'е'
        },
        {
            "coll": 25,
            "letter": 'п'
        },
        {
            "coll": 26,
            "letter": 'а'
        },
    ],
    22: [
        {
            "coll": 1,
            "letter": 'н'
        },
        {
            "coll": 4,
            "letter": 'м'
        },

        {
            "coll": 7,
            "letter": 'к'
        },

        {
            "coll": 8,
            "letter": 'а'
        },

        {
            "coll": 9,
            "letter": 'б'
        },

        {
            "coll": 10,
            "letter": 'о'
        },

        {
            "coll": 17,
            "letter": 'а'
        },
        {
            "coll": 20,
            "letter": 'е'
        },
        {
            "coll": 23,
            "letter": 'д'
        },

        {
            "coll": 26,
            "letter": 'ж'
        },
    ],
    23: [
        {
            "coll": 1,
            "letter": 'я'
        },
        {
            "coll": 2,
            "letter": 'р'
        },
        {
            "coll": 3,
            "letter": 'м'
        },
        {
            "coll": 4,
            "letter": 'а'
        },
        {
            "coll": 5,
            "letter": 'р'
        },
        {
            "coll": 6,
            "letter": 'к'
        },
        {
            "coll": 7,
            "letter": 'а'
        },
        {
            "coll": 10,
            "letter": 'л'
        },
        {
            "coll": 13,
            "letter": 'ж'
        },
        {
            "coll": 17,
            "letter": 'п'
        },
        {
            "coll": 18,
            "letter": 'ё'
        },
        {
            "coll": 19,
            "letter": 'т'
        },
        {
            "coll": 20,
            "letter": 'р'
        },

        {
            "coll": 22,
            "letter": 'м'
        },
        {
            "coll": 23,
            "letter": 'а'
        },
        {
            "coll": 24,
            "letter": 'с'
        },
        {
            "coll": 25,
            "letter": 'к'
        },
        {
            "coll": 26,
            "letter": 'а'
        },
    ],
    24: [
        {
            "coll": 8,
            "letter": 'к'
        },
        {
            "coll": 9,
            "letter": 'о'
        },
        {
            "coll": 10,
            "letter": 'л'
        },
        {
            "coll": 11,
            "letter": 'о'
        },
        {
            "coll": 12,
            "letter": 'д'
        },
        {
            "coll": 13,
            "letter": 'е'
        },
        {
            "coll": 14,
            "letter": 'ц'
        },
        {
            "coll": 17,
            "letter": 'е'
        },
        {
            "coll": 19,
            "letter": 'е'
        },
    ],
    25: [
        {
            "coll": 8,
            "letter": 'о'
        },
        {
            "coll": 10,
            "letter": 'а'
        },
        {
            "coll": 13,
            "letter": 'л'
        },
        {
            "coll": 15,
            "letter": 'в'
        },
        {
            "coll": 17,
            "letter": 'л'
        },
        {
            "coll": 18,
            "letter": 'е'
        },
        {
            "coll": 19,
            "letter": 'т'
        },
        {
            "coll": 20,
            "letter": 'о'
        },
    ],
    26: [
        {
            "coll": 8,
            "letter": 'с'
        },
        {
            "coll": 9,
            "letter": 'а'
        },
        {
            "coll": 10,
            "letter": 'н'
        },
        {
            "coll": 11,
            "letter": 'и'
        },
        {
            "coll": 13,
            "letter": 'а'
        },
        {
            "coll": 15,
            "letter": 'е'
        },
        {
            "coll": 17,
            "letter": 'ь'
        },
        {
            "coll": 20,
            "letter": 'с'
        },
    ],
    27: [
        {
            "coll": 8,
            "letter": 'т'
        },
        {
            "coll": 10,
            "letter": 'д'
        },
        {
            "coll": 12,
            "letter": 'а'
        },
        {
            "coll": 13,
            "letter": 'н'
        },
        {
            "coll": 14,
            "letter": 'а'
        },
        {
            "coll": 15,
            "letter": 'н'
        },
        {
            "coll": 16,
            "letter": 'а'
        },
        {
            "coll": 17,
            "letter": 'с'
        },
        {
            "coll": 20,
            "letter": 'л'
        },
    ],
    28: [
        {
            "coll": 8,
            "letter": 'ю'
        },
        {
            "coll": 10,
            "letter": 'и'
        },
        {
            "coll": 13,
            "letter": 'и'
        },
        {
            "coll": 15,
            "letter": 'и'
        },
        {
            "coll": 17,
            "letter": 'и'
        },
        {
            "coll": 20,
            "letter": 'и'
        },
    ],
    29: [
        {
            "coll": 7,
            "letter": 'з'
        },
        {
            "coll": 8,
            "letter": 'м'
        },
        {
            "coll": 9,
            "letter": 'е'
        },
        {
            "coll": 10,
            "letter": 'я'
        },
        {
            "coll": 12,
            "letter": 'щ'
        },
        {
            "coll": 13,
            "letter": 'е'
        },
        {
            "coll": 14,
            "letter": 'л'
        },
        {
            "coll": 15,
            "letter": 'к'
        },
        {
            "coll": 16,
            "letter": 'у'
        },
        {
            "coll": 17,
            "letter": 'н'
        },
        {
            "coll": 18,
            "letter": 'ч'
        },
        {
            "coll": 19,
            "letter": 'и'
        },
        {
            "coll": 20,
            "letter": 'к'
        },
    ],
}


const res = Object.entries(data)
    .map((row, rowNum) => {
        let rowText = '';
        for (let index = 1; index <= 26; index++) {
            const isEl = row[1].find(el => el.coll === index);
            if (isEl) {
                rowText += `#item${rowNum + 1}-${index}:valid ~`
                // rowText += `<input class="crossword-board__item" type="text" minlength="1" maxlength="1" pattern="^[${isEl.letter.trim().toLocaleLowerCase()}${isEl.letter.toUpperCase()}]{1}$" required="required" value="" id="item${rowNum + 1}-${index}" />`
            } else {
                // rowText += `<span class="crossword-board__item--blank" id="item${rowNum + 1}-${index}" ></span>`;
            }
        }
        return rowText;

    }).join('')
console.log(res);



