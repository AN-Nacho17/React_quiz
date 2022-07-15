import React from 'react'
import Swal from 'sweetalert2';

export const QuestionComponent = () => {

    const questions = [

        { text: 'Como se llama el creador de Microsoft?', answers: ['Elon Musk', 'Steve Jobs', 'Mark Zuckerberg', 'Bill Gates'], correct: 'Bill Gates' },

        { text: 'Cual es el area de hardware mas rapida de una computadora?', answers: ['RAM', 'Cache de CPU', 'ALU', 'Disco Mecanico', 'Tarjeta de red'], correct: 'Cache de CPU' },

        { text: 'Que es Java?', answers: ['Un algoritmo', 'Un motor de base de datos', 'Un lenguaje de programacion', 'Un provedor de internet'], correct: 'Un lenguaje de programacion' },

        { text: 'Si deseo armar una computadora cuales componentes son indispensables?', answers: ['Software y Hardware', 'CPU y Place Madre', 'Sistema operativo y software  de aplicacion', 'Teclado y el mouse'], correct: 'CPU y Place Madre' },

        { text: 'Cual es el signifcado de las siglas CAD?', answers: ['Computer-aided design', 'Computer-assited design', 'Computer administration data'], correct: 'Computer-aided design' },

        { text: 'Cual es el codigo que comprende una computadora?', answers: ['Codigo C++', 'Codigo Binario', 'Codigo ASCII'], correct: 'Codigo Binario' }

    ];


}

