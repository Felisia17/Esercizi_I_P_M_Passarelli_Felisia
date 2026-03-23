//prima funzione


let student = {
    name: 'Felisia',
    surname: 'Passarelli',
    course: 'Specializzazione ReactJS'
};

let nameList = ['Felisia', 'Andrea', 'Zena'];

function firstFunction(student, nameList){
        return {
            ...student,
            contatti: nameList
        };
}

export let result = firstFunction(student, nameList);

//seconda funzione 

export let students = {
    name: 'Felisia',
    surname: 'Passarelli',
    course: 'Specializzazione ReactJS',
    contacts: ['Felisia', 'Andrea', 'Zena']
};


export let showContacts = ({contacts})=> `Questi sono i miei contatti ${contacts.join(',')}`;